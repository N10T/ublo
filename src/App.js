import logo from "./logo.svg";
import SVG from "./components/SVG";
import "./App.scss";
import { useRef, useState } from "react";

function App() {
  const ref = {
    bubble: useRef(null),
    background: useRef(null),
    tea: useRef(null),
    border: useRef(null),
    smile: useRef(null),
  };
  const [bubble, setBubble] = useState(initialState)
  const [background, setBackground] = useState(initialState)
  const [tea, setTea] = useState(initialState)
  const [border, setBorder] = useState(initialState)
  const [smile, setSmile] = useState(initialState)
  const handleInput = (e) => {
    if (e.target.type !== "checkbox") {
      console.log(e.target.value);
    } else {
      console.log(e.target.value);
    }
  };
  // const [state, setstate] = useState(initialState);
  return (
    <div id="App">
      <div id="displayer" className="box">
        <SVG allRef={ref} />
      </div>
      <div id="sidebar" className="box">
        <h1 className="sidebar__title">Bubble tea generator</h1>
        <div className="sidebar_inputs-container">
          <div className="sidebar__input-wrapper">
            <label htmlFor="" className="label">
              nom
            </label>
            <input type="text" className="input" onChange={handleInput}  name="name"/>
          </div>
          <div className="sidebar__input-wrapper">
            <label htmlFor="" className="label">
              gobelet
            </label>
            <input type="color" className="input" onChange={handleInput}  name="border"/>
          </div>
          <div className="sidebar__input-wrapper">
            <label htmlFor="" className="label">
              tea
            </label>
            <input type="color" className="input" onChange={handleInput}  name="tea"/>
          </div>
          <div className="sidebar__input-wrapper">
            <label htmlFor="" className="label">
              tapioca
            </label>
            <input type="color" className="input" onChange={handleInput}  name="bubble"/>
          </div>
          <div className="sidebar__input-wrapper">
            <label htmlFor="" className="label">
              taille
            </label>
            <input type="range" className="input" onChange={handleInput} name="size" />
          </div>
          <div className="sidebar__input-wrapper">
            <label htmlFor="" className="label">
              paille
            </label>
            <input type="checkbox" className="input" onChange={handleInput}  name="smile"/>
          </div>
          <div className="sidebar__input-wrapper">
            <label htmlFor="" className="label">
              sourire
            </label>
            <input type="checkbox" className="input" onChange={handleInput} name="name" />
          </div>
        </div>
      </div>
      <div id="bottombar" className="box">
        <div className="Box"></div>
        <div className="Box"></div>
        <div className="Box"></div>
      </div>
    </div>
  );
}

export default App;
