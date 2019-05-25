import React from "react";
import styled from "styled-components";

const Button = styled.button`
  font-weight: bold;
  color: #ffffff;
  background-color: #ff4136;
  border-radius: 4px;
  padding: 10px;
  margin-right: 15px;
  margin-left: auto;
`;

const Input = styled.input`
  margin-left: 5px;
  width: 50%;
  padding: 5px;
`;

const Row = styled.div`
  color: #001f3f;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 80%;
`;

const Search = ({ query, handleQuery, className, children }) => (
  <Row className={className}>
    {children}
    <Input type="text" value={query} onChange={handleQuery} />
    <Button
      onClick={() => {
        // pass an object to satisfy event.target.value
        handleQuery({ target: { value: "" } });
      }}
    >
      Clear
    </Button>
  </Row>
);

export { Search };
export default Search;
