import React from "react";
import styled from "styled-components";

// NOTE:  styled to match the other implementation...
const Row = styled.li`
  color: #aaaaaa;
  display: flex;
  flex-direction: row;
  height: 23px;
`;

const Container = styled.ul`
  padding-inline-start: 20px;
`

const List = ({ className, list }) => (
  <Container className={className}>
    {list.map(item => (
      <Row key={item.id}>
        {item.name}
      </Row>
    ))}
  </Container>
);

export { List };
export default List;
