import MiniCalendar from '../../components/MiniCalendar';
import MainCalendar from '../../components/MainCalendar';
import * as S from './CalendarPage.styles';

function Calendar() {
  return (
    <S.Calendar>
      <div className="sidebar">
        <nav>
          <S.MenuIcons>
            <div className="red" />
            <div className="yellow" />
            <div className="green" />
          </S.MenuIcons>
          <button>+</button>
        </nav>
        <MiniCalendar />
      </div>
      <MainCalendar />
    </S.Calendar>
  )
}

export default Calendar