import { Chapter } from "@/src/types";
import { einfuehrungChapter } from './einfuehrung';
import { entscheidungChapter } from "./entscheidung";
import { verhoerRalfKoenigChapter } from "./verhoer-ralf-koenig";

export const chapters: Chapter[] = [
  einfuehrungChapter,
  entscheidungChapter,
  verhoerRalfKoenigChapter,
];