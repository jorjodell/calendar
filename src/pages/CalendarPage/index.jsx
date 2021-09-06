import MiniCalendar from '../../components/MiniCalendar';
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
    </S.Calendar>
  )
}

export default Calendar