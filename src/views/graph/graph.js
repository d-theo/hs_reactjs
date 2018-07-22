import React, { Component } from 'react';
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import {getChart} from "../../core/graph.service";

let options = {
    title: {
        text: '/Graph'
    },
    xAxis: {
        categories: ["12/30/16","10/28/16", "10/29/16", "12/28/16"]
    },
    series: [
        {
            name: 'credit',
            data: [137855, 3000, 3000, 125955]
        },
        {
            name: 'debit',
            data: [109248, 170, 392, 103493]
        },
        {
            name: 'balance',
            data: [109248, 170, 392, 103493]
        }
    ]
};

class Graph extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chart: options
        };
        getChart().then(({date, credit, debit, balance}) => {
            options.xAxis.categories = date;
            options.series[0].data = credit;
            options.series[1].data = debit;
            options.series[2].data = balance;
            this.setState({chart: options});
        });
    }
    render() {
        return (
            <HighchartsReact
                highcharts={Highcharts}
                options={this.state.chart}
            />
        );
    }
}

export default Graph;
