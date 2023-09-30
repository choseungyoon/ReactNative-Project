import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween"
import isSameOrAfter from "dayjs/plugin/isSameOrAfter"
import isSameOrBefore from "dayjs/plugin/isSameOrBefore"

dayjs.extend(isBetween)
dayjs.extend(isSameOrBefore)
dayjs.extend(isSameOrAfter)

export const runPracticeDayjs = () => {

    console.log("=== Practice Dayjs===");

    const now = dayjs("2023-09-30 13:52:34")
    console.log("now :" , now)

    console.log("2. set munute = hh",
    dayjs(now).set("minute",5).format("YYYY.MM.DD hh:mm:ss a A"))
    
    console.log("3. set hour",
    dayjs(now).set("hour",10).format("YYYY.MM.DD HH:mm:ss"))

    console.log("4. get year",dayjs(now).get("year"))
    console.log("5. get month",dayjs(now).get("month"))
    console.log("6. get date",dayjs(now).get("date"))
    console.log("7. get day",dayjs(now).get("day"))

}