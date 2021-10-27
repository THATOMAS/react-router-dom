import React, { useState } from "react";
import List from "./List";
import data from "./data";
import "./index.css";

function App() {

  return <>
    <main>

      <section className="container">
        <h3>Birthdays today</h3>
        <List />
        <button onClick={() => console.log("You clicked me")}>CLEAR ALL</button>
      </section>

    </main>

  </>
}

export default App;
