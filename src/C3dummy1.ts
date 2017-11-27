import * as df from "date-fns";
import * as Chart from "chart.js";
import { ChartData, ChartDataSets } from "chart.js";

import * as fs from "fs";
import * as c3 from "c3";

function MakeTimeSeriesData() {
    const data_num = 5;
    const val = new Array<number>(data_num);
    const chartConf: c3.ChartConfiguration = { data: {} };
    chartConf.data.x = "X";
    chartConf.data.xFormat = "%Y-%m-%d %H:%M:%S";

    chartConf.data.columns = [
        ["X"]
    ];

    for (let i = 0; i < data_num; i++) {
        chartConf.data.columns.push(["Data" + (i + 1)]);
        val[i] = i;
    }
    chartConf.axis = {
        x: {
            type: "timeseries",
            tick: {
                format: "%H:%M:%S"
            }
        }
    };
    chartConf.zoom = {
        enabled: true
    };


    let cur_time = new Date("2017/11/10 9:00");
    const end_of_time = df.addHours(cur_time, 6);

    while (cur_time < end_of_time) {

        chartConf.data.columns[0].push(df.format(cur_time, "YYYY-M-D H:m:s"));

        for (let i = 0; i < data_num; i++) {
            val[i] += (Math.random() - 0.5) * (Math.pow(10, i));
            chartConf.data.columns[i + 1].push(val[i]);
        }

        cur_time = df.addSeconds(cur_time, 10 * 60);
    }
    return chartConf;
}
const data = MakeTimeSeriesData();
console.log(JSON.stringify(data));
