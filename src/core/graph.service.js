import * as axios from 'axios';

export function getChart() {
    return new Promise((resolve, reject) => {
        axios.get('./data.csv').then(response => {
            // todo use lib !
            const hsChart = response.data.split('\n').map(s => s.split(','));
            hsChart.shift();
            const date = hsChart.map(line => line[0]);
            const credit = hsChart.map(line => +line[1]);
            const debit = hsChart.map(line => +line[2]);
            const balance = hsChart.map(line => +line[3]);
            resolve({date,
                credit,
                debit,
                balance});
        }).catch(err => console.log(err));
    });
}