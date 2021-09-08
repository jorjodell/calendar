import dayjs from "dayjs";
import isToday from "dayjs/plugin/isToday"
dayjs.extend(isToday)

export function getWeekDays() {
  const weekDays = [];
  for (let i = 0; i < 7; i++) {
    weekDays.push(dayjs().day(i));
  }
  return weekDays;
}

export function getTimes() {
  const times = [];
  const startDate = dayjs().hour(7).minute(0).second(0)
  for (let i = 0; i <= 24; i++) {
    times.push(startDate.add(i, 'hour'));
  }

  return times;
}