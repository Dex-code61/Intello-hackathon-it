import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatText = (text: string | null, size: number) => {
  if (!text) return "";
  if (text.length > size) {
    return text.substring(0, size) + "...";
  }
  return text;
};
