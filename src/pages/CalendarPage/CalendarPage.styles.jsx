import styled from "styled-components";

export const Calendar = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  min-height: 100vh;

  & .sidebar {
    height: 100%;
    background-color: #18181B;
    padding: 16px;
  }
  & .sidebar nav {
    display: grid;
    grid-template-columns: repeat(2, auto);
    justify-content: space-between;
  }
`;

export const MenuIcons = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  column-gap: 8px;
  justify-content: start;

  & div {
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }
  & .red {
    background-color: #ED6B60;
    border: 1px solid #D05147;
  }
  & .yellow {
    background-color: #F5C250;
    border: 1px solid #D6A343;
  }

  & .green {
    background-color: #62C656;
    border: 1px solid #52A842;
  }
`

