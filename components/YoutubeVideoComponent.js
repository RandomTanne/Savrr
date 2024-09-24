import Link from "next/link";
import { useEffect, useState } from "react";
import {useDraggable} from '@dnd-kit/core';
import { Bars3Icon } from "@heroicons/react/24/outline";

export default function YoutubeVideoComponent({video, id}) {
    const [url, setUrl] = useState("https://img.youtube.com");
    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: id
    });

    const [style, setStyle] = useState({transform: `translate3d(${video.position.x}px, ${video.position.y}px, 0)`, position: 'absolute'});

    useEffect(() => {
        setStyle(transform ? {
            transform: `translate3d(${video.position.x + transform.x}px, ${video.position.y + transform.y}px, 0)`, position: 'absolute',
        } : {transform: `translate3d(${video.position.x}px, ${video.position.y}px, 0)`, position: 'absolute'})
    }, [transform])

    useState(() => {
        const videoId = new URL(video.url).searchParams.get("v");
        setUrl(`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`)
    }, [])
    return (
        <div ref={setNodeRef} style={style} className="p-3 rounded bg-gradient-to-b from-amber-300 via-amber-500 to-amber-300">
            <Link href={video.url} target="_blank">
                <img src={url} width={300}/>
            </Link>
            <div>Test hehe</div>
            <Bars3Icon className="size-7 absolute bottom-1 right-1 bg-yellow-200 p-1 rounded-full" {...listeners} {...attributes}></Bars3Icon>
        </div>
    )
}