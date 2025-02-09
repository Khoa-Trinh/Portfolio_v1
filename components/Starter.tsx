import Image from "next/image";
import { Button } from "./ui/button";
import Arrow from "@/public/icons-svg/arrow-narrow-right.svg";
import InfinityScroll from "./InfinityScroll";

export default function Starter() {
  return (
    <div className="mx-[5.5rem] relative">
      <div className="headings">I'm Kelvin Trinh</div>
      <div className="descriptions mt-[-1.25rem]">A full-stack developer</div>

      <Button
        variant={"outline"}
        className="titles border-primary border-[0.25rem] bg-transparent hover:bg-primary text-primary hover:text-background mt-[1rem] h-[3.65rem] rounded-[0.75rem]"
      >
        Explore me now!
        <div className="w-6 h-6 relative">
          <Image src={Arrow} alt="Arrow" fill />
        </div>
      </Button>

      <InfinityScroll />
    </div>
  );
}
