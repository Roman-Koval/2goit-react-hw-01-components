import styled from "@emotion/styled";

export const Statistic = styled.div`
  width: 500px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 0.5px solid rgb(169, 169, 169);
  background-color: rgb(206, 206, 206);
`;

export const StatisticTitle = styled.h2`
  font-size: 26px;
  font-weight: 500;
  color: red;
  padding: 20px 0px 10px 0px;
  margin: 0px;
  text-align: center;
  text-transform: uppercase;
`;

export const StatisticList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  padding: 40px;
  justify-content: space-around;
  background-color: rgb(231, 231, 231);
`;

export const StatisticItem = styled.li`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  padding: 30px;
  background-color: #cf0ec8;
  border-radius: 4px;
  border: 1px solid #696969;
`;

export const LabelName = styled.span`
  font-weight: 700;
`;
