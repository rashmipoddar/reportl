import React from 'react';
import ReactHighcharts from 'react-highcharts';
import regression from 'regression';
import { connect } from 'react-redux';

const RenderScatterPlotChart = () => {
  const regressionData = [];

  this.props.gradeData.forEach((item) => {
    if (item.users.fullName === this.props.selectedUserGraph &&
        item.classes.name === this.props.selectedClassGraph) {
      regressionData.push([item.gradeableobjects.id, item.grade]);
    }
  });

  const regressionLine = regression('linear', regressionData);

  const config = {
    title: 'Grades Regression',
    series: [
      {
        type: 'line',
        name: 'Trend',
        data: [regressionLine.points[0], regressionLine.points[regressionLine.points.length - 1]],
      },
      {
        type: 'scatter',
        name: 'Grade Data',
        data: regressionData,
      },
    ],
    xAxis: {
      title: {
        enabled: true,
        text: 'Day',
      },
      startOnTick: true,
      endOnTick: true,
      showLastLabel: true,
    },
    yAxis: [{
      title: 'Grade',
    }],
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'top',
      x: -100,
      y: 70,
      floating: true,
      backgroundColor: '#FFFFFF',
      borderWidth: 1,
    },
    plotOptions: {
      series: {
        borderWidth: 2,
        dataLabels: {
          enabled: true,
          format: '{point.y:.1f}%',
        },
      },
    },
  };

  return (
    <div>
      <h3>Grading Trends for {this.props.selectedUserGraph} in
         {this.props.selectedClassGraph}</h3>
      <ReactHighcharts config={config} />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    gradeData: state.gradeData,
    selectedClassGraph: state.selectedClassGraph,
    selectedUserGraph: state.selectedUserGraph,
  };
}

export default connect(mapStateToProps)(RenderScatterPlotChart);
