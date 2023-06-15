import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="text-center  py-8">
      <h2>@2023, Md Pervez , All right Reserve</h2>
      <div className="flex items-center justify-center">
        <div className="flex items-center gap-5 mt-5">
          <Image
            src="/1.png"
            className=""
            alt="facebook icon"
            width={15}
            height={15}
          />
          <Image
            src="/2.png"
            className=""
            alt="facebook icon"
            width={15}
            height={15}
          />
          <Image
            src="/3.png"
            className=""
            alt="facebook icon"
            width={15}
            height={15}
          />
          <Image
            src="/4.png"
            className=""
            alt="facebook icon"
            width={15}
            height={15}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
