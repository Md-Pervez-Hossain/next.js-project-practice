import Image from "next/image";
import Link from "next/link";
import React from "react";

const DisplayPost = ({ post }) => {
  const { id, thumbnailUrl, title, url } = post;
  return (
    <div>
      <div>
        <Image alt="image" src={url} width={300} height={300}></Image>
        <Link href={`/post/${id}`}>Details</Link>
      </div>
    </div>
  );
};

export default DisplayPost;
