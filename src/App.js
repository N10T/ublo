import { useCallback, useState } from "react";

//Style
import "./App.scss";

//Components
import Bubble from "./components/Bubble";
import Can from "./components/Can";
import SVG from "./components/SVG";
import Tea from "./components/Tea";

const palette = {
  tea: ["#FE8261", "#9A5B46", "#9DBEA2"],
  bubble: ["#8F3939", "#FFCE9F", "#3A3B59"],
  can: ["#FF728A", "#FFEF72", "#7280FF"],
};

function App() {
  const colors = {
    tea: useState({ color: palette.tea[0], index: 0 }),
    bubble: useState({ color: palette.bubble[0], index: 0 }),
    can: useState({ color: palette.can[0], index: 0 }),
  };
  const [tea] = colors.tea;
  const [bubble] = colors.bubble;
  const [can] = colors.can;
  const [size, setSize] = useState(50);
  const [tube, setTube] = useState(false);
  const [title, setName] = useState("Thé matcha");
  const [smile, setSmile] = useState(false);
  const [titleClass, setTitleClass] = useState("font-family-0");

  const handleClick = useCallback((e) => {
    e.preventDefault();
    colors[e.target.name][1]((oldValue) => {
      const name = e.target.name;
      const index = (oldValue.index + 1) % 3;
      const newColor = palette[name][index];
      return { color: newColor, index };
    });
  }, []);

  return (
    <div id="App">
      <section id="displayer">
        <SVG
          bubble={bubble.color}
          can={can.color}
          isSmile={smile}
          isTube={tube}
          size={size}
          tea={tea.color}
        />
        <h1 className={"displayer__title " + titleClass}>{title}</h1>
      </section>
      <aside id="sidebar">
        <h1 className="sidebar__title">Bubble tea generator</h1>
        <div className="sidebar_inputs-container">

            <label className="label sidebar__input-wrapper">
              nom
              <input
                type="text"
                className="input"
                onChange={(e) => {
                  setTitleClass(`font-family-${Math.floor(Math.random() * 5)}`);
                  setName(e.target.value);
                }}
                name="Name"
                value={title}
                placeholder="Tea"
              />
            </label>


            <label className="label sidebar__input-wrapper">
              gobelet
              <input
                name="can"
                type="color"
                className="input"
                onClick={handleClick}
                onChange={()=>{}}
                value={can.color}
              />
            </label>


            <label className="label sidebar__input-wrapper">
              tea
              <input
                name="tea"
                type="color"
                className="input"
                onClick={handleClick}
                value={tea.color}
                onChange={()=>{}} //color input can not be read only and react warn without onChangeHandler...
              />
            </label>


            <label className="label sidebar__input-wrapper">
              tapioca
              <input
                name="bubble"
                type="color"
                className="input"
                onClick={handleClick}
                value={bubble.color}
                onChange={()=>{}}
              />
            </label>


          <label className="label sidebar__input-wrapper">
            taille
            <input
              name="size"
              type="range"
              className="input"
              max="70"
              min="10"
              onChange={(e) => setSize(e.target.value)}
              value={size}
            />
          </label>

          <label className="label sidebar__input-wrapper">
            paille
            <input
            name="tube"
              type="checkbox"
              className="input"
              onChange={(e) => setTube(e.target.checked)}
              checked={tube}
            />
          </label>

          <label className="label sidebar__input-wrapper">
            sourire
            <input
              name="smile"
              type="checkbox"
              className="input"
              onChange={(e) => setSmile(e.target.checked)}
              checked={smile}
            />
          </label>
        </div>
      </aside>
      <div id="bottombar">
        <div className="bottombar__Box">
          <Tea tea={tea.color} />
        </div>
        <div className="bottombar__Box">
          <Can can={can.color} />
        </div>
        <div className="bottombar__Box">
          <Bubble bubble={bubble.color} />
        </div>
      </div>
    </div>
  );
}

export default App;
