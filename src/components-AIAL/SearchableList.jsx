import React from "react";
import styled from "styled-components";
import { List, Search } from "./";

const StyledHr = styled.hr`
  margin-right: 15%;
`;

const StyledSearch = styled(Search)`
  margin-left: 20px;
`;

const Footer = styled.footer`
  margin-top: 20px;
  color: #001f3f;
  font-size: 10px;
  font-style: italic;
`;

const byQuery = query => item =>
  !query || item.name.toLowerCase().includes(query.toLowerCase());

const SearchableList = ({ className, list }) => {
  const [query, setQuery] = React.useState("");

  const handleQuery = event => {
    setQuery(event.target.value);
  };

  const filteredList = list.filter(byQuery(query));

  return (
    <div className={className}>
      <StyledSearch query={query} handleQuery={handleQuery}>
        Search List:
      </StyledSearch>
      <StyledHr />
      <List list={filteredList} />
      <Footer>
        Archive in a List example - see{" "}
        <a href="https://www.robinwieruch.de/react-lift-state/" target="_blank" rel="noopener noreferrer">
          React Lift State
        </a>{" "}
        for more detail...
      </Footer>
    </div>
  );
};

export { SearchableList };
export default SearchableList;
