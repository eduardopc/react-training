import React, { Fragment, useEffect, useState } from "react";

import { Header } from "./components/Header";
import { AddPost } from "./components/AddPost";

const externalArray = ["post1", "post2", "post3"];

export function App() {
  //   const [post, setPost] = useState(externalArray);

  function handleAddPost() {
    console.log(externalArray);
    setTimeout(() => {
      //   setPost((prevState) => [...prevState, `post${post.length + 1}`]);
      externalArray.push(`post${externalArray.length + 1}`);
    }, 2000);
  }

  //   useEffect(() => {
  //     console.log("rerender");

  //     return () => console.log("unmount");
  //   }, [post]);

  return (
    <>
      <Header title={`${externalArray.length}`}>
        <AddPost handleAddPost={handleAddPost} />
      </Header>

      {externalArray.map((post, index) => (
        <Fragment key={index}>
          <h1>{post}</h1>
          <br />
        </Fragment>
      ))}
    </>
  );
}
