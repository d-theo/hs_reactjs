import * as axios from "axios/index";

let data = '';

export function getPrimeNumber(nth) {
    return new Promise((resolve, reject) => {
        if (data === '') {
            axios.get('./prime.txt').then(response => {
                data = response.data;
                if (Number.isInteger(+nth) && nth >= 0 && nth <= 10000000) {
                    console.log(response.data.split('\n')[nth]);
                    resolve(response.data.split('\n')[nth]);
                } else {
                    reject("malformated_input");
                }

            }).catch(err => console.log(err));
        } else {
            if (Number.isInteger(+nth) && nth >= 0 && nth <= 10000000) {
                console.log(data.split('\n')[nth]);
                resolve(data.split('\n')[nth]);
            } else {
                reject("malformated_input");
            }
        }
    });
}