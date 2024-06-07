import { convertDate } from "./convertDate";

export const setChartData = (setChartDate,prices) => {
    setChartDate(
        {
            labels: prices.map((item) => convertDate(item[0])),
            datasets: [
                {
                    data: prices.map((item) => item[1]),
                    borderColor: "#3a80e9",
                    backgroundColor: "transparent",
                    borderWidth: 1,
                    fill: true,
                    tension: 0.25,
                    backgroundColor: "rgba(58, 128, 233, 0.1)",
                    borderColor: "#3a80e9",
                    pointRadius: 0,
                },
            ],
        }
    );
}