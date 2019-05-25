import React from "react";
import styled from "styled-components";

const Label = styled.span`
  color: #aaaaaa;
`;

const List = ({ list }) => (
  <ul>
    {list.map(item => (
      <li key={item.id}>
        <Label>{item.name}</Label>
      </li>
    ))}
  </ul>
);

export { List };
export default List;
