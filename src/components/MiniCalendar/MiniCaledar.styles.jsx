import styled from "styled-components";

export const Container = styled.div`
  margin-top: 16px;

  & .header {
    display: grid;
    grid-template-columns: repeat(2, auto);
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }

  & h2 {
    font-weight: 500;
    font-size: 30px;
    color: white;
  }
  & h2 span {
    color: #EF4444;
    font-weight: normal;
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-auto-rows: 30px;
  align-items: center;
  justify-items: center;
  color: white;

  & .weekday {
    text-transform: uppercase;
    color: #71717A;
    font-size: 10px;
    font-weight: bold;
  }
`