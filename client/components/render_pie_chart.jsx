import React from 'react';
import ReactHighcharts from 'react-highcharts';
import Highcharts from 'highcharts';
import { connect } from 'react-redux';

const RenderPieChart = () => {
  const temporaryObject = {};
  const filteredArray = [];
  const pieChartData = [];

  this.props.gradeData.forEach((item) => {
    if (item.users.fullName === this.props.selectedUserGraph &&
        item.classes.name === this.props.selectedClassGraph) {
      filteredArray.push(item);
    }
  });

  filteredArray.forEach((item) => {
    if (!temporaryObject[item.module.moduleName]) {
      temporaryObject[item.module.moduleName] = {
        gradeableobjects: [item.grade],
      };
    } else {
      temporaryObject[item.module.moduleName].gradeableobjects.push(item.grade);
    }
  });

  Object.keys(temporaryObject).forEach((module) => {
    pieChartData.push({
      name: module,
      y: Math.round(temporaryObject[module].gradeableobjects.reduce((a, b) =>
        a + b
      , 0) / temporaryObject[module].gradeableobjects.length),
    });
  });

  const config = {
    title: 'Grades by Module',
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie',
    },
    tooltip: {
      pointFormat: 'Average Grade: {point.y}',
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>',
          style: {
            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
          },
        },
      },
    },
    series: [{
      name: 'Grades by User By Module',
      colorByPoint: true,
      data: pieChartData,
    }],
  };

  return (
    <div>
      <h3>Average Module Grades for {this.props.selectedUserGraph}
         in {this.props.selectedClassGraph}</h3>
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

export default connect(mapStateToProps)(RenderPieChart);
