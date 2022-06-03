import styled from "styled-components";

export const EmployeeStyled = styled.li`
  width: 100%;
  border: 1px solid #000000;
  padding: 15px;
  list-style: none;
  gap: 5px;

  .shortInfos {
    display: flex;
    justify-content: space-between;

    .personal_code, .phone_number {
      width: 50%;
      text-align: start;
      padding: 0;
      margin: 0;
    }
  }
`;

export const ListEmployeesStyled = styled.ul`
  width: 100%;
  padding: 5px;
  gap: 10px;
  display: flex;
  flex-direction: column;
`;