import * as df from "date-fns";
import * as Chart from "chart.js";
import { ChartData, ChartDataSets } from "chart.js";

function MakeTimeSeriesData() {
    let cur_time = new Date("2017/11/10 9:00");
    const end_of_time = df.addMinutes(cur_time, 6);

    const time_serise_data: ChartData = {};
    let val1 = 1000;
    let val2 = 0;
    const values1: ChartDataSets = {};
    const values2: ChartDataSets = {};
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
        cur_time = df.addSeconds(cur_time, 10);
    }
    console.log(JSON.stringify(time_serise_data));
}

MakeTimeSeriesData();