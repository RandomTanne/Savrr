import { useState } from "react";
import YoutubeVideoComponent from "../components/YoutubeVideoComponent";
import { DndContext } from "@dnd-kit/core";

export default function IndexPage() {
    const [youtubeVideos, setYoutubeVideos] = useState([{url: "https://www.youtube.com/watch?v=3N5MlZg_Cdg", position: {x: 0, y: 0}}, {url: "https://www.youtube.com/watch?v=YiRMs5ZhcH4", position: {x: 0, y: 0}}]);

    function onDragEnd(e) {
        const youtubeVideoIndex = e.active.id - 1;
        const youtubeVideo = youtubeVideos[youtubeVideoIndex]
        const newXPos = youtubeVideo.position.x + (Math.round(e.delta.x/320)*320);
        const newYPos = youtubeVideo.position.y + (Math.round(e.delta.y/200)*200);
        setYoutubeVideos(
            youtubeVideos.map((youtubeVideo, i) => {
                return youtubeVideoIndex == i ? {...youtubeVideo, position: {x: newXPos, y: newYPos}} : youtubeVideo;
            })
        )
    }

    return (
        <DndContext id="context" onDragEnd={onDragEnd}>
            {youtubeVideos.map((youtubeVideo, i) => {
                return <YoutubeVideoComponent video={youtubeVideo} id={i + 1} key={i}></YoutubeVideoComponent>
            })}
        </DndContext>
    )
}