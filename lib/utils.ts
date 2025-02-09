import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function debounce(func: any) {
  var timer: any;
  return function (event: any) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(
      () => {
        func();
      },
      500,
      event
    );
  };
}
