import styled from "@emotion/styled";

export const Container = styled.div`
  width: 300px;
  height: 300px;
  background-color: #bec0c4;
  display: flex;
  flex-direction: column;
  padding: 25px;
  justify-content: center;
  align-items: center;
  margin: 20px auto 50px;
`;

export const Image = styled.img`
  width: 50%;
  margin-bottom: 30px;
`;

export const Description = styled.div`
  background-color: white;
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 60%;
  margin-bottom: 20px;
`;

export const DescriptionItems = styled.div`
  margin: 0px;
  line-height: 1.4;
`;

export const DescriptionItemsName = styled.div`
  font-size: 25px;
  font-weight: 700;
`;

export const Stats = styled.ul`
  margin: 0;
  display: flex;
  padding: 0;
  justify-content: center;
`;
export const StatsItem = styled.li`
  margin: 0;
  display: flex;
  style-type: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 70px;
  border-radius: 4px;
  border: 1px solid #696969;
  background-color: #e6e6fa;
`;

export const StatsItemName = styled.span`
  font-weight: 700;
`;
