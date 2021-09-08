import styled from "styled-components";
import dayjs from "dayjs";
import { getTimes, getWeekDays } from './utils';

function setColumnColor({ isToday, isHoliday }) {
  if(isToday) {
    return "#EFF6FF"
  }
  if(isHoliday) {
    return "#FAFAFA"
  }
  return ""
}


export const Container = styled.div`
  padding: 16px;

  & .header {
    display: grid;
    grid-template-columns: repeat(3, auto);
    justify-content: space-between;
    margin-bottom: 16px;
  }

  & .view {
    display: grid;
    grid-template-columns: repeat(4, auto);
    column-gap: 4px;
  }
  & .viewOption {
    cursor: pointer;
  }

  & .viewOptionBtn {
    padding: 0 16px;
    height: 28px;
    display: grid;
    justify-items: center;
    align-items: center;
    border-radius: 8px;
    font-weight: 500;
    font-size: 14px;
    color: #71717A;
  }
  & .view input {
    position: absolute;
    width: 0;
    height: 0;
    overflow: hidden;
    clip: rect(0 0 0 0);
    opacity: 0;
  }

  & .view input:checked + .viewOptionBtn {
    color: white;
    background: #DC2626;
  }

  & .calendar {
    display: grid;
    grid-template-columns: 48px 1fr 48px;
    grid-template-rows: repeat(24, 64px);
  }
`

export const Lines = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-area: 1 / 2 / -1 / -2;
`

export const Column = styled.div`
  display: grid;
  grid-template-rows: repeat(24, 64px);
  grid-row: 1 / -1;
  background-color: ${setColumnColor};

  &.inner {
    border-right: 1px solid #E0E0E0;
  }
  &.inner:last-child {
    border-right: none
  }

  & .line {
    height: 100%;
    width: 100%;
    border-bottom: 1px solid #E0E0E0;
  }
`;

const week = getWeekDays()
const getTemplateColumn = () => week.map((d) => `[${d.format('ddd')}] 1fr`).join(' ')

const times = getTimes()
const getTemplateRows = () => times.map((d) => `[l-${d.format('HH')}] 64px`).join(' ')

export const Grid = styled.div`
  display: grid;
  grid-template-columns: ${getTemplateColumn};
  grid-template-rows: ${getTemplateRows};
  grid-area: 1 / 2 / -1 / -2;
  z-index: 2;

  & .weekDays {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-column: 1 / -1;
    grid-row-start: 1 / span 1;
  }
`

export const Event = styled.div`
  background: rgba(14, 165, 233, 0.1);
  border-radius: 4px;
  border-left: 3px solid #0EA5E9;
  padding: 6px;
  grid-column-start: ${({ datetime }) => dayjs(datetime).format("ddd")};
  grid-column-end: span 1;
  grid-row-start: l-${({ datetime }) => dayjs(datetime).format("HH")};
  grid-row-end: span ${({ duration }) => Math.floor(duration / (1000 * 60 * 60))};
`
