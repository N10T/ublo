import SVG from "./components/SVG";
import Can from "./components/Can";
import Tea from "./components/Tea";
import Bubble from "./components/Bubble";
import "./App.scss";
import { useCallback, useState, useRef, useEffect } from "react";

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

  const titleRef = useRef(null)
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
      <div id="displayer" className="box">
        <SVG
          bubble={bubble.color}
          can={can.color}
          isSmile={smile}
          isTube={tube}
          size={size}
          tea={tea.color}
        />
        <h1 className="name" ref={titleRef}>{title}</h1>
      </div>
      <div id="sidebar" className="box">
        <h1 className="sidebar__title">Bubble tea generator</h1>
        <div className="sidebar_inputs-container">
          <div className="sidebar__input-wrapper">
            <label className="label">nom</label>
            <input
              type="text"
              className="input"
              onChange={(e) => {
                titleRef.current.style.fontFamily =`var(--font-family-${Math.floor(Math.random()*5)})`
                setName(e.target.value)}}
              name="Name"
              value={title}
              placeholder="Tea"
            />
          </div>
          <div className="sidebar__input-wrapper">
            <label className="label">gobelet</label>
            <input
              type="color"
              className="input"
              onClick={handleClick}
              name="can"
              value={can.color}
              readOnly
            />
          </div>
          <div className="sidebar__input-wrapper">
            <label className="label">tea</label>
            <input
              type="color"
              className="input"
              onClick={handleClick}
              name="tea"
              value={tea.color}
              readOnly
            />
          </div>
          <div className="sidebar__input-wrapper">
            <label className="label">tapioca</label>
            <input
              type="color"
              className="input"
              onClick={handleClick}
              name="bubble"
              value={bubble.color}
              readOnly
            />
          </div>
          <div className="sidebar__input-wrapper">
            <label className="label">taille</label>
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
            <label className="label">paille</label>
            <input
              type="checkbox"
              className="input"
              onChange={(e) => setTube(e.target.checked)}
              name="tube"
              checked={tube}
            />
          </div>
          <div className="sidebar__input-wrapper">
            <label className="label">sourire</label>
            <input
              type="checkbox"
              className="input"
              onChange={(e) => setSmile(e.target.checked)}
              name="smile"
              checked={smile}
            />
          </div>
        </div>
      </div>
      <div id="bottombar" className="box">
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
