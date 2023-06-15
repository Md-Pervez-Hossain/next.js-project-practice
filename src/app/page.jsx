import Image from "next/image";
import image from "../../public/hero.png";
import Button from "@/Components/Button/Button";

export default function Home() {
  return (
    <div className="grid grid-cols-2 gap-24 items-center">
      <div>
        <h2>
          <h2 className="text-4xl font-bold mb-5">
            Better Design For Your Design Carrier
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nihil
            est eaque soluta quod accusantium quidem voluptatem ipsa. Sequi
            debitis quod animi natus labore odit earum veritatis obcaecati nemo
            consectetur?
          </p>
          <Button url="about" text="Learn More"></Button>
        </h2>
      </div>
      <div>
        <Image src={image} alt="iamge" />
      </div>
    </div>
  );
}
