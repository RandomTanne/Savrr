import { useState } from "react";
import YoutubeVideoComponent from "../components/YoutubeVideoComponent";
import { DndContext } from "@dnd-kit/core";

export default function IndexPage() {
    const [youtubeVideos, setYoutubeVideos] = useState([{url: "https://www.youtube.com/watch?v=3N5MlZg_Cdg", position: {x: 0, y: 0}}, {url: "https://www.youtube.com/watch?v=YiRMs5ZhcH4", position: {x: 0, y: 0}}]);

    function onDragEnd(e) {
        const youtubeVideo = youtubeVideos[e.active.id - 1];
        youtubeVideo.position.x += e.delta.x;
        youtubeVideo.position.y += e.delta.y;
    }

    return (
        <DndContext id="context" onDragEnd={onDragEnd}>
            {youtubeVideos.map((youtubeVideo, i) => {
                return <YoutubeVideoComponent video={youtubeVideo} id={i + 1} key={i}></YoutubeVideoComponent>
            })}
        </DndContext>
    )
}