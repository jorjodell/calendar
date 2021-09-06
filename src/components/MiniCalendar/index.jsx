import { useState } from "react";
import dayjs from "dayjs";
import * as S from "./MiniCaledar.styles";


function getCalendarDays(d) {
  const days = [];
  const startOfWeekDate = d.date(1).day(0).date();
  const firstDayOfMonth = d.date(1).day();

  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push({
      value: startOfWeekDate + i,
      key: 'a' + i,
    });
  }

  for (let i = 1; i <= d.daysInMonth(); i++) {
    days.push({value: i, key: 'b' + i });
  }
  return days;
}

function MiniCalendar() {
  const [currentDate, setCurrentDate] = useState(dayjs())
  const weekDays = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  const days = getCalendarDays(currentDate);

  return (
    <S.Container>
      <div className="header">  
        <h2>
          {currentDate.format("MMMM")} <span>{currentDate.format("YYYY")}</span>
        </h2>
        <div className="actions">
          <button onClick={() => setCurrentDate(currentDate.month(currentDate.month() - 1))}>&lt;</button>
          <button onClick={() => setCurrentDate(currentDate.month(currentDate.month() + 1))}>&gt;</button>
        </div>
      </div>
      <S.Grid>
        {weekDays.map((d) => (
          <div className="weekday" key={d}>
            {d}
          </div>
        ))}
        {days.map((d) => (
          <div key={d.key}>{d.value}</div>
        ))}
      </S.Grid>
    </S.Container>
  );
}

export default MiniCalendar;
