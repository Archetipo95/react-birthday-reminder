import React, { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [people, setPeople] = useState(data);

  if (people.length === 0) {
    return (
      <main>
        <section className="container">
          <h3>{people.length} Birtdays Today</h3>
          <button onClick={() => setPeople(data)}>Refresh</button>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section className="container">
        <h3>{people.length} Birtdays Today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  );
}

export default App;
