import { ChatOutlined, SendOutlined, ShareOutlined, ThumbUpAltOutlined } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React  from "react";
import InputOption from "./InputOption";
import "./Post.css";
function Post({ name, description, msg, photoUrl }) {




  return <div className="post">
    <div className="post__header">
      <Avatar src="photoUrl"/>
      <div className="post__info">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </div>
    <div className="post__body">
      <p>{msg}</p>
    </div>
    <div className="post__btns">
      <InputOption text="Like" Icon={ThumbUpAltOutlined} color="gray" />
      <InputOption text="Comment" Icon={ChatOutlined} color="gray" />
      <InputOption text="Share" Icon={ShareOutlined} color="gray" />
      <InputOption text="Send" Icon={SendOutlined} color="gray" />
    </div>
  </div>;
}

export default Post;
