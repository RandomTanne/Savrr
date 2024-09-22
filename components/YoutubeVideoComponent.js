import Link from "next/link";
import { useEffect, useState } from "react";
import {useDraggable} from '@dnd-kit/core';

export default function YoutubeVideoComponent({video, id}) {
    const [url, setUrl] = useState("https://img.youtube.com");
    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: id
    });

    const [style, setStyle] = useState({transform: `translate3d(${video.position.x}px, ${video.position.y}px, 0)`});

    useEffect(() => {
        setStyle(transform ? {
            transform: `translate3d(${video.position.x + transform.x}px, ${video.position.y + transform.y}px, 0)`,
        } : {transform: `translate3d(${video.position.x}px, ${video.position.y}px, 0)`})
    }, [transform])

    useState(() => {
        const videoId = new URL(video.url).searchParams.get("v");
        setUrl(`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`)
    }, [])
    return (
        <div ref={setNodeRef} style={style}>
            <Link href={video.url} target="_blank">
                <img src={url} width={300}/>
            </Link>
            <div {...listeners} {...attributes}>Test hehe</div>
        </div>
    )
}