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
import { getDocs, collection } from "firebase/firestore";

function Feed() {
  const [posts, setposts] = useState([]);
  // const userCollectionRef = collection(db, "posts")
  
 useEffect(() => {
  const getPosts = async () => {
    const data = await getDocs(collection(db, "posts"));
    setposts(data.docs.map((doc) => ({ 
      id: doc.id,
      data: doc.data()
    })))
  }
  getPosts()
 
 }, [])
 
console.log(posts)
  const sendPost = (e) => {
    e.preventDefault();
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" />
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

      <Post
        name="Klim Somov"
        description="This is the test post"
        msg="message"
        photoUrl="https://avatars.mds.yandex.net/get-zen_doc/1606228/pub_5fa8c7143a59d85105d49b4c_5fa8d9563a59d85105e63258/scale_1200"
      />
    </div>
  );
}

export default Feed;
