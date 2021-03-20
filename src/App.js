import SVG from "./components/SVG";
import "./App.scss";
import { useMemo, useState } from "react";

function App() {
  const [bubble, setBubble] = useState("#8F3939");
  const [background, setBackground] = useState("#FE8261");
  const [tube, setTube] = useState(false);
  const [tea, setTea] = useState("#FE8261");
  const [border, setBorder] = useState("#FE8261");
  const [smile, setSmile] = useState(false);
  const [size, setSize] = useState(50);
  const [name, setName] = useState("Tea");

  const color = useCallback(
    () => ({
      tea: ["#FE8261", "#9A5B46", "#9DBEA2"],
      bubble: ["#8F3939", "#FFCE9F", "#3A3B59"],
      smile: ["#FF728A", "#FFEF72", "#7280FF"],
    }),
    []
  );

  return (
    <div id="App">
      <div id="displayer" className="box">
        <SVG
          bubble={bubble}
          size={size}
          background={background}
          tea={tea}
          isTube={tube}
          border={border}
          isSmile={smile}
        />
        <h1 className="name">{name}</h1>
      </div>
      <div id="sidebar" className="box">
        <h1 className="sidebar__title">Bubble tea generator</h1>
        <div className="sidebar_inputs-container">
          <div className="sidebar__input-wrapper">
            <label htmlFor="" className="label">
              nom
            </label>
            <input
              type="text"
              className="input"
              onChange={(e) => setName(e.target.value)}
              name="Name"
              value={name}
              placeholder="Tea"
            />
          </div>
          <div className="sidebar__input-wrapper">
            <label htmlFor="" className="label">
              gobelet
            </label>
            <input
              type="color"
              className="input"
              onChange={(e) => setBorder(e.target.value)}
              name="border"
              value={border}
            />
          </div>
          <div className="sidebar__input-wrapper">
            <label htmlFor="" className="label">
              tea
            </label>
            <input
              type="color"
              className="input"
              onChange={(e) => setTea(e.target.value)}
              name="tea"
              value={tea}
            />
          </div>
          <div className="sidebar__input-wrapper">
            <label htmlFor="" className="label">
              tapioca
            </label>
            <input
              type="color"
              className="input"
              onChange={(e) => setBubble(e.target.value)}
              name="bubble"
              value={bubble}
            />
          </div>
          <div className="sidebar__input-wrapper">
            <label htmlFor="" className="label">
              taille
            </label>
            <input
              type="range"
              className="input"
              max="100"
              min="30"
              onChange={(e) => setSize(e.target.value)}
              name="size"
              value={size}
            />
          </div>
          <div className="sidebar__input-wrapper">
            <label htmlFor="" className="label">
              paille
            </label>
            <input
              type="checkbox"
              className="input"
              onChange={(e) => setTube(e.target.checked)}
              name="smile"
              checked={tube}
            />
          </div>
          <div className="sidebar__input-wrapper">
            <label htmlFor="" className="label">
              sourire
            </label>
            <input
              type="checkbox"
              className="input"
              onChange={(e) => setSmile(e.target.checked)}
              name="name"
              checked={smile}
            />
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
