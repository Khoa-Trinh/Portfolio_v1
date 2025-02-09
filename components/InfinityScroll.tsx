"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { supportedLogos } from "@/constants";
import { cn, debounce } from "@/lib/utils";
import Image from "next/image";

export default function InfinityScroll() {
  const listRef = useRef<HTMLUListElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (!listRef.current) return;

    const setupInfiniteScroll = () => {
      if (!listRef.current) return;
      const ul = listRef.current;
      const items = [...ul.children] as HTMLElement[];

      const itemWidth = items.reduce((sum, item) => sum + item.offsetWidth, 0);

      while (ul.children.length > items.length) {
        ul.removeChild(ul.lastChild as HTMLElement);
      }

      const listClone = items.map(
        (item) => item.cloneNode(true) as HTMLElement
      );
      listClone.forEach((node) => ul.appendChild(node));

      if (tweenRef.current) {
        tweenRef.current.kill();
      }

      tweenRef.current = gsap.to(ul, {
        x: -itemWidth,
        duration: 10,
        ease: "linear",
        repeat: -1,
      });
    };

    setupInfiniteScroll();

    const handleResize = debounce(() => {
      setupInfiniteScroll();
    });

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      tweenRef.current?.kill();
    };
  }, []);

  return (
    <div className="overflow-hidden w-full h-[3.125rem] relative mt-[18.5rem]">
      <ul ref={listRef} className="flex items-center space-x-[2rem] h-full">
        {supportedLogos.map(({ logo, aspect }, i) => (
          <li key={i} className={cn("h-full relative", aspect)}>
            <Image src={logo} alt="logo" className="h-full w-auto" />
          </li>
        ))}
      </ul>
      <div className="absolute h-full w-[1.5rem] bg-gradient-to-r from-white to-transparent top-0 left-0"></div>
      <div className="absolute h-full w-[1.5rem] bg-gradient-to-l from-white to-transparent top-0 right-0"></div>
    </div>
  );
}

// aspect-[17/5]
// aspect-[399/50]
// aspect-[121/25]
// aspect-[51/10]
// aspect-[109/25]
//aspect-[112/25]
