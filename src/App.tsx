import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { Button, AccountCard } from "@parallel-fi/components";

function App() {
  return (
    <div className="App">
      <AccountCard
        title={""}
        balance={0}
        accounts={[]}
        handleSend={() => {}}
        handleTransfer={() => {}}
      />
      <Button>Parallel Button</Button>
    </div>
  );
}

export default App;
