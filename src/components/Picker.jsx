import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import { useState } from "react";
import characters from "../characters.json";

export default function Picker({ setCharacter }) {
  const [anchorEl, setAnchorEl] = useState(null);

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
        <ImageList
          sx={{
            width: window.innerWidth < 600 ? 300 : 500,
            height: 450,
          }}
          cols={window.innerWidth < 600 ? 3 : 4}
          rowHeight={120}
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
      </Popover>
    </div>
  );
}
