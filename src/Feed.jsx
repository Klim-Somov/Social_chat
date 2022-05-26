import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import SendIcon from "@mui/icons-material/Send";
import InputOption from "./InputOption";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import EventIcon from "@mui/icons-material/Event";
import FeedIcon from "@mui/icons-material/Feed";
import Post from "./Post";
import { db } from "./firebase";
import { onValue, ref, serverTimestamp, set } from "firebase/database";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  const postRef = ref(db, "posts");
  const getpostRefById = (id) => ref(db, `posts/${id}`);

  const sendPost = (e) => {
    e.preventDefault();
    const newPost = {
      name: "Klim Somov",
      description: "this a test",
      message: input,
      photoUrl: "",
      timestamp: serverTimestamp(),
      id: Date.now(),
    };
    setInput("");
    set(getpostRefById(newPost.id), newPost);
  };
 useEffect(  () => {
    const unsubscribe = () => {
       onValue(postRef, (snapshot) => {
      setPosts(Object.values(snapshot.val() || {}));
      });
    };
    return unsubscribe;
  }, []);

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
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

      {/* <Post
        name="Klim Somov"
        description="This is the test post"
        msg="message"
        photoUrl="https://avatars.mds.yandex.net/get-zen_doc/1606228/pub_5fa8c7143a59d85105d49b4c_5fa8d9563a59d85105e63258/scale_1200"
      /> */}
     
     
        {posts.map((post) => (
         
            <Post key={post.id} name={post.name} msg={post.message} />
         
        ))}
      </div>
   
  );
}

export default Feed;
