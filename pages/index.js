import { useState } from "react";
import YoutubeVideoComponent from "../components/YoutubeVideoComponent";
import { DndContext } from "@dnd-kit/core";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import HeaderComponent from "../components/HeaderComponent";

export default function IndexPage() {
    const [youtubeVideos, setYoutubeVideos] = useState([{url: "https://www.youtube.com/watch?v=3N5MlZg_Cdg", position: {x: 0, y: 0}}, {url: "https://www.youtube.com/watch?v=YiRMs5ZhcH4", position: {x: 0, y: 0}}]);

    function onDragEnd(e) {
        const youtubeVideoIndex = e.active.id - 1;
        const youtubeVideo = youtubeVideos[youtubeVideoIndex]
        const occupiedPositions = youtubeVideos.map(youtubeVideo => youtubeVideo.position)
        const newXPos = youtubeVideo.position.x + (Math.round(e.delta.x/340)*340);
        const newYPos = youtubeVideo.position.y + (Math.round(e.delta.y/230)*230);
        const positionFree = !occupiedPositions.map(occupiedPosition => occupiedPosition.x == newXPos && occupiedPosition.y == newYPos).includes(true);
        if(positionFree && newXPos >= 0 && newYPos >= 0) {
            setYoutubeVideos(
                youtubeVideos.map((youtubeVideo, i) => {
                    return youtubeVideoIndex == i ? {...youtubeVideo, position: {x: newXPos, y: newYPos}} : youtubeVideo;
                })
            )
        }
    }

    return (
        <>
            <HeaderComponent></HeaderComponent>
            <DndContext id="context" onDragEnd={onDragEnd}>
                {youtubeVideos.map((youtubeVideo, i) => {
                    return <YoutubeVideoComponent video={youtubeVideo} id={i + 1} key={i}></YoutubeVideoComponent>
                })}
            </DndContext>
            <PlusCircleIcon className="size-16 fixed bottom-0 right-0 text-secondary"></PlusCircleIcon>
        </>
    )
}