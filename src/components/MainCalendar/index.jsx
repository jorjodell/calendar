import * as S from "./MainCalendar.styles";
import { getTimes, getWeekDays } from './utils'

const eventData = {
  id: 1, 
  title: "All-Team Kickoff",
  datetime: 1631329888560,
  duration: 1000 * 60 * 60 * 2,
}

function MainCalendar() {
  const times = getTimes();

  const weekDays = getWeekDays();
  return (
    <S.Container>
      <div className="header">
        <div className="navigation">
          <button>&lt;</button>
          <button>Today</button>
          <button>&gt;</button>
        </div>
        <div className="view">
          <label className="viewOption">
            <input type="radio" name="viewOption" />
            <div className="viewOptionBtn">Day</div>
          </label>
          <label className="viewOption">
            <input type="radio" name="viewOption" defaultChecked={true} />
            <div className="viewOptionBtn">Week</div>
          </label>
          <label className="viewOption">
            <input type="radio" name="viewOption" />
            <div className="viewOptionBtn">Month</div>
          </label>
          <label className="viewOption">
            <input type="radio" name="viewOption" />
            <div className="viewOptionBtn">Year</div>
          </label>
        </div>
        <div className="search">
          <img src="" alt="" />
          <input type="search" placeholder="Search" />
        </div>
      </div>
      <div className="calendar">
        <S.Column>
          {times.map((time) => (
            <p key={time.format("D h A")}>{time.format("h A")}</p>
          ))}
        </S.Column>
        <S.Grid>
          <div className="weekDays">
            {weekDays.map((d) => (
              <div key={d.format("ddd")}>
                {d.format("ddd")} {d.format("D")}
              </div>
            ))}
          </div>
          <S.Event {...eventData}>All-Team Kickoff</S.Event>
        </S.Grid>
        <S.Column>
          {times.map((time) => (
            <p key={time.format("D h A")}>{time.format("h A")}</p>
          ))}
        </S.Column>
        <S.Lines>
          {weekDays.map((d, i) => (
            <S.Column key={i} isToday={d.isToday()} isHoliday={i === 0 || i === 6} className="inner">
              {times.map((time) => (
                <div key={time.format("D h A")} className="line" />
              ))}
            </S.Column>
          ))}
        </S.Lines>
      </div>
    </S.Container>
  );
}

export default MainCalendar;
