import "./App.css";
import Canvas from "./components/Canvas";
import { useState, useEffect } from "react";
import characters from "./characters.json";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Picker from "./components/Picker";

function App() {
  const [character, setCharacter] = useState(49);
  const [text, setText] = useState(characters[character].defaultText.text);
  const [position, setPosition] = useState({
    x: characters[character].defaultText.x,
    y: characters[character].defaultText.y,
  });
  const [fontSize, setFontSize] = useState(characters[character].defaultText.s);
  const [rotate, setRotate] = useState(characters[character].defaultText.r);
  const [loaded, setLoaded] = useState(false);
  const img = new Image();

  useEffect(() => {
    setText(characters[character].defaultText.text);
    setPosition({
      x: characters[character].defaultText.x,
      y: characters[character].defaultText.y,
    });
    setRotate(characters[character].defaultText.r);
    setFontSize(characters[character].defaultText.s);
    setLoaded(false);
  }, [character]);

  img.src = "/img/" + characters[character].img;

  img.onload = () => {
    setLoaded(true);
  };

  const draw = (ctx) => {
    ctx.canvas.width = 296;
    ctx.canvas.height = 256;

    if (loaded && document.fonts.check("12px YurukaStd")) {
      ctx.drawImage(img, 0, 0, 296, 256);
      ctx.font = `${fontSize}px YurukaStd`;
      ctx.lineWidth = 9;
      ctx.save();

      ctx.translate(position.x, position.y);
      ctx.rotate(rotate / 10);
      ctx.textAlign = "center";
      ctx.strokeStyle = "white";
      ctx.strokeText(text, 0, 0);
      ctx.fillStyle = characters[character].color;
      ctx.fillText(text, 0, 0);
      ctx.restore();
    }
  };

  const download = () => {
    const canvas = document.getElementsByTagName("canvas")[0];
    const link = document.createElement("a");
    link.download = `${characters[character].name}_st.ayaka.one.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div className="App">
      <div className="container">
        <div className="vertical">
          <div className="canvas">
            <Canvas draw={draw} />
          </div>
          <Slider
            value={256 - position.y}
            onChange={(e, v) => setPosition({ ...position, y: 256 - v })}
            min={0}
            max={256}
            step={1}
            orientation="vertical"
            track={false}
            color="secondary"
          />
        </div>
        <div className="horizontal">
          <Slider
            value={position.x}
            onChange={(e, v) => setPosition({ ...position, x: v })}
            min={0}
            max={296}
            step={1}
            track={false}
            color="secondary"
          />
          <div className="settings">
            <div>
              <label>Rotate: </label>
              <Slider
                value={rotate}
                onChange={(e, v) => setRotate(v)}
                min={-10}
                max={10}
                step={1}
                track={false}
                color="secondary"
              />
            </div>
            <div>
              <label>
                <nobr>Font size: </nobr>
              </label>
              <Slider
                value={fontSize}
                onChange={(e, v) => setFontSize(v)}
                min={10}
                max={100}
                step={1}
                track={false}
                color="secondary"
              />
            </div>
          </div>
          <div className="text">
            <TextField
              label="Text"
              size="small"
              color="secondary"
              value={text}
              fullWidth
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className="picker">
            <Picker setCharacter={setCharacter} />
            <Button color="secondary" onClick={download}>
              download
            </Button>
          </div>
        </div>
        <div className="footer">
          <a href="https://github.com/theoriginalayaka/sekai-stickers">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
