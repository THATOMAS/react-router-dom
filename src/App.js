import React, { useState } from "react";
import List from "./List";
import data from "./data";
import "./index.css";

function App() {
  const [people, setPeople] = useState(data)

  return <>
    <main>


      <section className="container">
        <h3> {people.length} Birthdays today</h3>
        <List people={people} className="people" />
        <button onClick={() => setPeople([])} > CLEAR ALL</button>
      </section>

    </main>

  </>
}

export default App;
