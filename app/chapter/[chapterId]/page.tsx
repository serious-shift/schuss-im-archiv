import { chapters } from "@/src/content/chapters";
import { notFound } from "next/navigation";
import ChapterClient from "@/src/components/ChapterClient";

type ChapterPageProps = {
    params: {
        chapterId: string;
    }
}

export default async function ChapterPage({ params }: ChapterPageProps) {
    const { chapterId } = await params;

    // find chapter on server side
    const chapterData = chapters.find((c) => c.id == chapterId);

    if (!chapterData) {
        return notFound();
    }

    // get chapter client component
    return <ChapterClient chapterData={chapterData} />;
}