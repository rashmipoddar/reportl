import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';
import Highcharts from 'highcharts';
import { connect } from 'react-redux';
import { getChartData } from '../actions/index';

class RenderPieChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentName: 'Alvin Ardsley',
    };
  }

  componentWillMount() {
    this.props.getChartData();
  }

  updateData(selectedName) {
    this.setState({
      currentName: selectedName,
    });
  }

  render() {
    const temporaryObject = {};
    const userSelection = [];
    const filteredArray = [];
    const pieChartData = [];

    this.props.gradeData.forEach((item) => {
      if (userSelection.indexOf(item.users.fullName) === -1) {
        userSelection.push(item.users.fullName);
      }

      if (item.users.fullName === this.state.currentName) {
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
        {userSelection.map(userName => (
          <button onClick={() => { this.updateData({ userName }); }}>{ userName }</button>
        ))}
        <ReactHighcharts config={config} />
      </div>
    );
  }
}

RenderPieChart.propTypes = {
  getChartData: React.PropTypes.func,
  gradeData: React.PropTypes.arrayOf(React.PropTypes.object),
};

function mapStateToProps(state) {
  return { gradeData: state.gradeData };
}

export default connect(mapStateToProps, { getChartData })(RenderPieChart);
