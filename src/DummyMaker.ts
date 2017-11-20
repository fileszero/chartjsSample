import * as df from "date-fns";
import * as Chart from "chart.js";
import { ChartData, ChartDataSets } from "chart.js";

import * as mustache from "mustache";
import * as fs from "fs";

function MakeTimeSeriesData() {
    let cur_time = new Date("2017/11/10 9:00");
    const end_of_time = df.addHours(cur_time, 6);

    const time_serise_data: ChartData = {};
    let val1 = 1000;
    let val2 = 0;
    const values1: ChartDataSets = { yAxisID: "first-y-axis", fill: false, lineTension: 0, borderWidth: 1, borderColor: "black" };
    const values2: ChartDataSets = { yAxisID: "second-y-axis", fill: false, lineTension: 0 };
    values1.data = new Array<number>();
    values2.data = new Array<number>();

    time_serise_data.labels = [];
    time_serise_data.datasets = [values1, values2];

    while (cur_time < end_of_time) {
        val1 += (Math.random() - 0.5) * 10;
        val2 += (Math.random() - 0.5) / 100;

        time_serise_data.labels.push(df.format(cur_time, "HH:mm:ss"));
        values1.data.push(val1);
        values2.data.push(val2);
        cur_time = df.addSeconds(cur_time, 60 * 10);
    }
    return time_serise_data;
}



fs.readFile("./views/chart2.mst", { encoding: "utf-8" }, (err, buf) => {
    if (err) throw err;
    const response = mustache.to_html(buf, { data: JSON.stringify(MakeTimeSeriesData()) });
    console.log(response);
});
