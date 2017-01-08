import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';
import regression from 'regression';
import { connect } from 'react-redux';
import { getChartData } from '../actions/index';

class RenderScatterPlotChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentName: 'Alvin Ardsley',
      currentClass: 'Biology 1',
    };
  }

  componentWillMount() {
    this.props.getChartData();
  }

  render() {
    const regressionData = [];

    this.props.gradeData.forEach((item) => {
      if (item.users.fullName === this.state.currentName &&
          item.classes.name === this.state.currentClass) {
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
        align: 'left',
        verticalAlign: 'top',
        x: 100,
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
      <ReactHighcharts config={config} />
    );
  }
}

RenderScatterPlotChart.propTypes = {
  getChartData: React.PropTypes.func,
  gradeData: React.PropTypes.arrayOf(React.PropTypes.object),
};

function mapStateToProps(state) {
  return { gradeData: state.gradeData };
}

export default connect(mapStateToProps, { getChartData })(RenderScatterPlotChart);
