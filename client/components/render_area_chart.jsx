import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';
import Highcharts from 'highcharts';
import { connect } from 'react-redux';

require('highcharts/modules/treemap')(Highcharts);

const colorValues = ['#3E454C', '#2185C5', '#AADEFD', '#FFEFD1', '#FF7F66'];

class RenderAreaChart extends Component {

  render() {
    const areaData = [];
    const tempObject = {};
    const filteredData = this.props.gradeData.filter(gradeItem =>
      (gradeItem.classes.name === this.props.selectedClassGraph));

    filteredData.forEach((item) => {
      if (!tempObject[item.module.moduleName]) {
        tempObject[item.module.moduleName] = [
          {
            id: item.module.id,
            name: item.module.moduleName,
            color: colorValues[item.module.id],
          },
          {
            name: `${item.module.moduleName} ${item.gradeableobjects.objectName}`,
            parent: item.module.id,
            value: item.grade,
          },
        ];
      } else if (tempObject[item.module.moduleName].length < 5) {
        tempObject[item.module.moduleName].push(
          {
            name: `${item.module.moduleName} ${item.gradeableobjects.objectName}`,
            parent: item.module.id,
            value: item.grade,
          });
      }
    });

    Object.keys(tempObject).forEach((item) => {
      tempObject[item].forEach((itemArray) => {
        areaData.push(itemArray);
      });
    });

    const config = {
      series: [{
        type: 'treemap',
        layoutAlgorithm: 'sliceAndDice',
        alternateStartingDirection: true,
        levels: [{
          level: 1,
          layoutAlgorithm: 'sliceAndDice',
          dataLabels: {
            enabled: true,
            align: 'left',
            verticalAlign: 'top',
            style: {
              fontSize: '15px',
              fontWeight: 'bold',
            },
          },
        }],
        colorByPoint: true,
        data: areaData,
      }],
      title: 'Grade Breakdown',
    };

    return (
      <div>
        <h3>Contribution to Class Score by Assignments, Exams and Quizzes</h3>
        <ReactHighcharts config={config} />
      </div>
    );
  }
}

RenderAreaChart.propTypes = {
  selectedClassGraph: React.PropTypes.string,
  gradeData: React.PropTypes.arrayOf(React.PropTypes.object),
};

function mapStateToProps(state) {
  return {
    gradeData: state.gradeData,
    selectedClassGraph: state.selectedClassGraph,
    selectedUserGraph: state.selectedUserGraph,
  };
}

export default connect(mapStateToProps)(RenderAreaChart);
