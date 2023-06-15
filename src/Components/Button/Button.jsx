import Link from "next/link";
import React from "react";

const Button = ({ text, url }) => {
  return (
    <div>
      <Link href={url}>
        <button className="text-white bg-blue-400 px-6 py-3 mt-5 rounded-md">
          {text}
        </button>
      </Link>
    </div>
  );
};

export default Button;
