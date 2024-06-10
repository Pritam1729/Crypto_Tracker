import { getCoinPrices } from "./getCoinPrices"
import { setChartData } from "./settingChart";

export const getTwoPrice = async (coin1, coin2, days, pricetype,setChartDate) => {
    const prices1 = await getCoinPrices(coin1,days,pricetype);
    const prices2 = await getCoinPrices(coin2,days,pricetype);

    if(prices1 && prices2) {
        setChartData(setChartDate,prices1,prices2);
    }
}