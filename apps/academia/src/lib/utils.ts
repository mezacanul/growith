import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function toTitleCase(str: string) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function getYoutubeEmbedURL(videoURL: string) {
  const embedPrefix = "https://www.youtube.com/embed/";
  const watchURL = new URL(videoURL);
  
  const videoID = watchURL.searchParams.get("v");
  if (!videoID) {
    const shortURL = new URL(videoURL);
    
    const videoID = shortURL.pathname.split("/").pop();
    if (!videoID) {
      return null;
    }
    return `${embedPrefix}${videoID}`;
  }
  return `${embedPrefix}${videoID}`;
}
