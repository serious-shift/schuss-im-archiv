"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useVisitedChapters } from "@/src/lib/useVisitedChapters";

type ConditionalNavigationProps = {
  checkChapterId: string | string[];
  targetChapterId_ifTrue: string;
  targetChapterId_ifFalse: string;
};

export function ConditionalNavigation({
  checkChapterId,
  targetChapterId_ifTrue,
  targetChapterId_ifFalse,
}: ConditionalNavigationProps) {
  const router = useRouter();
  const { visitedChapters } = useVisitedChapters();

  useEffect(() => {
    if (visitedChapters.length > 0) {
      const idsToCheck = Array.isArray(checkChapterId) ? checkChapterId : [checkChapterId];
      const hasVisitedAny = idsToCheck.some(id => visitedChapters.includes(id));

      if (hasVisitedAny) {
        router.replace(`/chapter/${targetChapterId_ifTrue}`);
      } else {
        router.replace(`/chapter/${targetChapterId_ifFalse}`);
      }
    }
  }, [visitedChapters, checkChapterId, targetChapterId_ifTrue, targetChapterId_ifFalse, router]);

  // Render nothing or a loading indicator
  return null;
}