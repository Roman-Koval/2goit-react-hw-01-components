import styled from "@emotion/styled";

export const FriendListWrap = styled.ul`
  width: 450px;
  display: block;
  justify-content: center;
  border: 0.5px solid rgb(169, 169, 169);
  background-color: rgb(206, 206, 206);
`;

export const Item = styled.li`
  background-color: #f8f1d7;
  list-style-type: none;
  width: 200px;
  margin: 10px;
  padding: 20px;
  display: flex;
  align-items: center;
`;

export const OnLineStatus = styled.span`
  display: flex;
  width: 10px;
  height: 10px;
  background-color: ${(props) => {
    return props.isOnline ? "green" : "red";
  }};
`;
