import React, { Fragment, useEffect, useLayoutEffect, useState } from "react";

import { Header } from "./components/Header";
import { AddPost } from "./components/AddPost";
import Posts from "./components/Posts";

const initialArray = [
  {
    id: 1,
    title: "Post1",
    description: "Description Post1",
    likes: 20,
  },
  {
    id: 2,
    title: "Post2",
    description: "Description Post2",
    likes: 30,
  },
  {
    id: 3,
    title: "Post3",
    description: "Description Post3",
    likes: 5,
  },
  {
    id: 4,
    title: "Post4",
    description: "Description Post4",
    likes: 40,
  },
];

export function App() {
  const [posts, setPosts] = useState(initialArray);
  const [showPosts, setShowPosts] = useState(true);
  const [disabledButton, setDisabledButton] = useState(false);

  useEffect(() => {
    console.log("render");

    return () => console.log("unmount");
  }, [posts]);

  // useLayoutEffect(() => {
  //   for (let index = 0; index <= 15000; index++) {
  //     console.debug(index);
  //     if (index === 15000) {
  //       setShowPosts(true);
  //       console.debug("Mount component useLayoutEffect");
  //     }
  //   }
  // }, []);

  function handleAddPost() {
    setDisabledButton(true);
    setTimeout(() => {
      setPosts((prevState) => [
        ...prevState,
        {
          id: `${prevState.length + 1}`,
          title: `Post${prevState.length + 1}`,
          description: `Description Post${prevState.length + 1}`,
          likes: 20,
        },
      ]);
      setDisabledButton(false);
    }, 2000);
  }

  function handleRemovePost(postId) {
    setPosts((prevState) => prevState.filter((post) => post.id !== postId));
  }

  return (
    <>
      <Header buttonTitle={"Alterar Tema"} headingContent={"Novo valor pro h1"}>
        <AddPost handleAddPost={handleAddPost} disabled={disabledButton} />
      </Header>

      {showPosts &&
        posts.map((post, index) => (
          <React.Fragment key={index}>
            <Posts post={post} onRemove={handleRemovePost} />
            <br />
          </React.Fragment>
        ))}
    </>
  );
}
