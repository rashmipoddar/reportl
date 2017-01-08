import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';
import regression from 'regression';
import { connect } from 'react-redux';
import { getChartData } from '../actions/index';

const classes = ['American Literature', 'Pre-Algebra', 'Biology 1', 'Biology 2', 'Spanish']

class RenderScatterPlotChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentName: 'Alvin Ardsley',
      currentClass: 'Spanish',
    };
  }

  componentWillMount() {
    this.props.getChartData();
  }

  updateData(selectedClass) {
    this.setState({
      currentClass: selectedClass,
    });
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
        <h2>Grades for {this.state.currentName} in {this.state.currentClass}</h2>
        <div>{classes.map(classItem => (
          <button onClick={() => { this.updateData(classItem); }}>
            {classItem}
          </button>
          ))}</div>
        <ReactHighcharts config={config} />
      </div>
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
