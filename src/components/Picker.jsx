import {
  ImageList,
  ImageListItem,
  Popover,
  Button,
  TextField,
} from "@mui/material";
import { useState, useEffect } from "react";
import default_characters from "../characters.json";

export default function Picker({ setCharacter }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [search, setSearch] = useState("");
  const [characters, setCharacters] = useState(default_characters);

  useEffect(() => {
    setCharacters(
      default_characters.filter((char) => {
        const s = search.toLowerCase();
        return (
          s === char.id ||
          char.name.toLowerCase().includes(s) ||
          char.character.toLowerCase().includes(s)
        );
      })
    );
  }, [search]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "picker" : undefined;

  return (
    <div>
      <Button
        aria-describedby={id}
        variant="contained"
        color="secondary"
        onClick={handleClick}
      >
        Pick character
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <div className="picker-search">
          <TextField
            label="Search"
            size="small"
            color="secondary"
            value={search}
            multiline={true}
            fullWidth
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="image-grid-wrapper">
          <ImageList
            sx={{
              width: window.innerWidth < 600 ? 300 : 500,
              height: 450,
              overflow: "visible",
            }}
            cols={window.innerWidth < 600 ? 3 : 4}
            rowHeight={140}
            className="image-grid"
          >
            {characters.map((c, index) => (
              <ImageListItem
                key={index}
                onClick={() => {
                  handleClose();
                  setCharacter(index);
                }}
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    opacity: 0.5,
                  },
                  "&:active": {
                    opacity: 0.8,
                  },
                }}
              >
                <img
                  src={`/img/${c.img}`}
                  srcSet={`/img/${c.img}`}
                  alt={c.name}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      </Popover>
    </div>
  );
}
