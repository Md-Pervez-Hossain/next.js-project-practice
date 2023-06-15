import Image from "next/image";
import React from "react";
import contact from "../../../public/contact.png";
import Button from "@/Components/Button/Button";

const Contact = () => {
  return (
    <div className="grid md:grid-cols-2 gap-24 my-16 items-center">
      <div>
        <Image alt="image" src={contact} height={500} width={500} />
      </div>
      <div>
        <h2 className="text-4xl font-bold mb-8">Let's Contact With US</h2>
        <form>
          <input
            type="text"
            placeholder="Enter Your Name"
            required
            className="border-2 mb-8 border-gray-400 rounded-md px-6 py-3 w-full"
          ></input>
          <input
            type="email"
            required
            placeholder="Enter Your Email"
            className="border-2 mb-8 border-gray-400 rounded-md px-6 py-3 w-full"
          ></input>
          <textarea
            required
            placeholder="Message"
            className="border-2  border-gray-400 rounded-md px-6 py-3 w-full"
          ></textarea>
          <Button url="" text="send"></Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
