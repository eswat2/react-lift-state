import React from "react";
import ReactDOM from "react-dom";
import Chance from "chance";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOn, faSyncAlt } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";
import { SearchableList as ArchiveInAList } from "./components-AIAL";
import { SearchableList as SearchInAList } from "./components-SIAL";

const MIN_ID = 0
const MAX_ID = 400

const MIN_COUNT = 15
const MAX_COUNT = 40

const chance = Chance();

const AwesomeIcon = styled(FontAwesomeIcon)`
  margin-left: 10px;
`;

const Header = styled.h3`
  color: #001f3f;
`

const Label = styled.span`
  margin-left: 10px;
  font-size: 12px;
  font-weight: regular;
  font-style: italic;
  color: #aaaaaa;
`

const refreshData = (count) => {
  const ids = chance.unique(chance.integer, count, { min: MIN_ID, max: MAX_ID });
  const data = ids.map(id => {
    return { id: id, name: chance.company() };
  });
  return data;
};

const defaultList = refreshData(MIN_COUNT)

// NOTE:  add toggle to be able to switch between the 2 styles
function App() {
  const [archive, setArchive] = React.useState(false);
  const [list, setList] = React.useState(defaultList);
  const handleToggle = () => {
    setArchive(!archive);
  };
  const handleRefresh = () => {
    const count = chance.integer({ min: MIN_COUNT, max: MAX_COUNT })
    const data = refreshData(count);
    setList(data);
  };
  let SearchableList = archive ? ArchiveInAList : SearchInAList;
  return (
    <div className="App">
      <Header>
        React Lift State{" "}
        <AwesomeIcon
          color={archive ? "#2ECC40" : "#001f3f"}
          icon={faToggleOn}
          rotation={archive ? undefined : 180}
          size="lg"
          onClick={handleToggle}
          title="Toggle Implementation"
        />
        <AwesomeIcon 
          icon={faSyncAlt} 
          onClick={handleRefresh} 
          title="Refresh Data"
        />
        <Label>{list.length} items</Label>
      </Header>
      <SearchableList list={list} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
