import Link from "next/link";
import { useState } from "react";

export default function YoutubeVideoComponent({videoUrl}) {
    const [url, setUrl] = useState("https://img.youtube.com");
    useState(() => {
        const videoId = new URL(videoUrl).searchParams.get("v");
        setUrl(`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`)
    }, [])
    return (
        <div>
            <Link href={videoUrl} target="_blank">
                <img src={url} width={300}/>
            </Link>
        </div>
    )
}