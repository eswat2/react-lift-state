import React from "react";
import ReactDOM from "react-dom";
import Chance from "chance";
import faker from "faker";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOn, faSyncAlt } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";
import { SearchableList as ArchiveInAList } from "./components-AIAL";
import { SearchableList as SearchInAList } from "./components-SIAL";

const chance = Chance();

const AwesomeIcon = styled(FontAwesomeIcon)`
  margin-left: 10px;
`;

const Label = styled.span`
  margin-left: 10px;
  font-size: 12px;
  font-weight: regular;
  font-style: italic;
  color: #aaaaaa;
`

const refreshData = () => {
  const count = chance.integer({ min: 20, max: 40 })
  const ids = chance.unique(chance.integer, count, { min: 0, max: 100 });
  const data = ids.map(id => {
    return { id: id, name: faker.company.companyName() };
  });
  return data;
};

// NOTE:  add toggle to be able to switch between the 2 styles
function App() {
  const [archive, setArchive] = React.useState(false);
  const [list, setList] = React.useState(refreshData());
  const handleToggle = () => {
    setArchive(!archive);
  };
  const handleRefresh = () => {
    const data = refreshData();
    setList(data);
  };
  let SearchableList = archive ? ArchiveInAList : SearchInAList;
  return (
    <div className="App">
      <h3>
        React Lift State Up & Down{" "}
        <AwesomeIcon
          color={archive ? "#2ECC40" : "#111111"}
          icon={faToggleOn}
          rotation={archive ? 0 : 180}
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
      </h3>
      <SearchableList list={list} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
