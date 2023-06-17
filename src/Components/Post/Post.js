"use client";

import Link from "next/link";
import React from "react";
import DisplayPost from "./DisplayPost";

const getPost = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/photos?_limit=10"
  );
  return res.json();
};

const Post = async () => {
  const post = await getPost();
  console.log(post);
  return (
    <div className="grid grid-cols-4 gap-16 my-16">
      {post.map((post) => (
        <DisplayPost key={post.id} post={post}></DisplayPost>
      ))}
    </div>
  );
};

export default Post;
