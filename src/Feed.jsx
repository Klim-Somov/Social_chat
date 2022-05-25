import React from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import InputOption from "./InputOption";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import EventIcon from "@mui/icons-material/Event";
import FeedIcon from "@mui/icons-material/Feed";
function Feed() {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" />
            <button type="submit">
              <SendIcon />
            </button>
          </form>
        </div>
        <div className="feed__inputOption">
          <InputOption color="#70b5f9" Icon={PhotoLibraryIcon} text="photo" />
          <InputOption color="#e7a33E" Icon={VideoLibraryIcon} text="video" />
          <InputOption color="c0cbcd" Icon={EventIcon} text="Event" />
          <InputOption color="7fc15e" Icon={FeedIcon} text="Wright article" />
        </div>
      </div>

      
    </div>
  );
  
}

export default Feed;
