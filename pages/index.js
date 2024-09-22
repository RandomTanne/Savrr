import { useState } from "react";
import YoutubeVideoComponent from "../components/YoutubeVideoComponent";
import { DndContext } from "@dnd-kit/core";

export default function IndexPage() {
    const [youtubeVideos, setYoutubeVideos] = useState([{url: "https://www.youtube.com/watch?v=3N5MlZg_Cdg", position: {x: 0, y: 0}}, {url: "https://www.youtube.com/watch?v=YiRMs5ZhcH4", position: {x: 0, y: 0}}]);

    function onDragEnd(e) {
        const youtubeVideo = youtubeVideos[e.active.id - 1];
        const delta_x = e.delta.x;
        const delta_y = e.delta.y;
        youtubeVideo.position.x += (Math.floor(delta_x/350)*350);
        youtubeVideo.position.y += (Math.floor(delta_y/250)*250);
    }

    return (
        <DndContext id="context" onDragEnd={onDragEnd}>
            {youtubeVideos.map((youtubeVideo, i) => {
                return <YoutubeVideoComponent video={youtubeVideo} id={i + 1} key={i}></YoutubeVideoComponent>
            })}
        </DndContext>
    )
}