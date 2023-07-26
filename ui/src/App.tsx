import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Counter from './component/Counter';

const App0 = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: ui</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Tailwind</div>
  </div>
);

const App = () => (
  <div className="mt-10 mx-auto max-w-6xl">
    <h1 className="font-bold">
      Ui Components
    </h1>
    
    <section className="border-1 rounded-sm">
      <h3 className="font-medium">
        Counter
      </h3>
      <Counter />
    </section>
  </div>
)
ReactDOM.render(<App />, document.getElementById("app"));
