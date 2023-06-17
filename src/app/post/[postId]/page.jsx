"use client";

import Image from "next/image";
import React from "react";

const page = async ({ params }) => {
  const id = params.postId;
  const getSinglePost = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/photos/${id}`
    );
    return res.json();
  };
  const post = await getSinglePost();
  console.log(post);
  const { title, url } = post;
  return (
    <div>
      <h2>Dynamic Post : {id}</h2>
      <p>{title}</p>
      <Image src={url} alt="image" width={300} height={300}></Image>
    </div>
  );
};

export default page;
