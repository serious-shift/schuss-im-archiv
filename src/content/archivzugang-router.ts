import { Chapter } from "@/src/types";
import { ConditionalNavigation } from "@/src/components/game/ConditionalNavigation";

export const ArchivzugangRouterChapter: Chapter = {
  id: "archivzugang-router",
  title: "Analyse wird vorbereitet...",
  scenes: [
    {
      id: "archivzugang-router-scene",
      title: "Router Analyse",
      content: [
        {
          type: "custom",
          component: ConditionalNavigation,
          props: {
            checkChapterId: ["lenas-anliegen", "befragung-lena-bergmann"],
            targetChapterId_ifTrue: "verheor-lena-bergmann",
            targetChapterId_ifFalse: "archivzugang-entscheidung",
          },
        },
      ],
    },
  ],
};