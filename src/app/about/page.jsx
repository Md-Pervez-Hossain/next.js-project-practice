import React from "react";
import img from "../../../public/apps.jpg";
import Image from "next/image";
import Button from "@/Components/Button/Button";
const About = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-24 items-center ">
        <div>
          <Image alt="" src={img} height={500} />
        </div>
        <div>
          {" "}
          <h2 className=" mb-5 text-3xl font-bold">Who We Are ?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            repellat velit, suscipit et corporis ipsam veritatis incidunt
            reiciendis? Mollitia ipsa odit maiores saepe modi vitae rem ea
            quisquam explicabo veritatis.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            repellat velit, suscipit et corporis ipsam veritatis incidunt
            reiciendis? Mollitia ipsa odit maiores saepe modi vitae rem ea
            quisquam explicabo veritatis.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            repellat velit, suscipit et corporis ipsam veritatis incidunt
            reiciendis? Mollitia ipsa odit maiores saepe modi vitae rem ea
            quisquam explicabo veritatis.
          </p>
        </div>
      </div>
      <div>
        <div>
          <h2 className="mb-5 mt-10 text-3xl font-bold">How Does We Work ?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            repellat velit, suscipit et corporis ipsam veritatis incidunt
            reiciendis? Mollitia ipsa odit maiores saepe modi vitae rem ea
            quisquam explicabo veritatis.Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Doloremque repellat velit, suscipit et corporis
            ipsam veritatis incidunt reiciendis? Mollitia ipsa odit maiores
            saepe modi vitae rem ea quisquam explicabo veritatis.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            repellat velit, suscipit et corporis ipsam veritatis incidunt
            reiciendis? Mollitia ipsa odit maiores saepe modi vitae rem ea
            quisquam explicabo veritatis.Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Doloremque repellat velit, suscipit et corporis
            ipsam veritatis incidunt reiciendis? Mollitia ipsa odit maiores
            saepe modi vitae rem ea quisquam explicabo veritatis.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            repellat velit, suscipit et corporis ipsam veritatis incidunt
            reiciendis? Mollitia ipsa odit maiores saepe modi vitae rem ea
            quisquam explicabo veritatis.
          </p>
          <Button url="contact" text="contact"></Button>
        </div>
      </div>
    </div>
  );
};

export default About;
