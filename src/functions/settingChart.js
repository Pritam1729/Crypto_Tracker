import { convertDate } from "./convertDate";

export const setChartData = (setChartDate,prices1,prices2) => {
    if(prices2) {
        setChartDate(
            {
                labels: prices1.map((item) => convertDate(item[0])),
                datasets: [
                    {
                        label:"crypto1",
                        data: prices1.map((item) => item[1]),
                        borderColor: "##3a80e9",
                        backgroundColor: "transparent",
                        borderWidth: 3,
                        fill: false,
                        tension: 0.25,
                        borderColor: "#3a80e9",
                        pointRadius: 0,
                        yAxisID: "crypto1",
                    },
                    {
                        label: "crypto2",
                        data: prices2.map((item) => item[1]),
                        borderColor: "#61c96f",
                        backgroundColor: "transparent",
                        borderWidth: 3,
                        fill: false,
                        tension: 0.25,
                        borderColor: "#61c96f",
                        pointRadius: 0,
                        yAxisID: "crypto2",
                    },
                ],
            }
        );
    }
    else {
        setChartDate(
            {
                labels: prices1.map((item) => convertDate(item[0])),
                datasets: [
                    {
                        data: prices1.map((item) => item[1]),
                        borderColor: "#3a80e9",
                        backgroundColor: "transparent",
                        borderWidth: 3,
                        fill: true,
                        tension: 0.25,
                        backgroundColor: "rgba(58, 128, 233, 0.1)",
                        borderColor: "#3a80e9",
                        pointRadius: 0,
                        yAxisID:"crypto1"
                    },
                ],
            }
        );
    }
}