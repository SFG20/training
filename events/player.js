import React, { useEffect, useRef } from "react"
import { VideoPlayerEvents } from "./index"

export const playerEvents = [
    "abort",
    "canplay",
    "canplaythrough",
    "durationchange",
    "emptied",
    "ended",
    "error",
    "loadeddata",
    "loadedmetadata",
    "loadstart",
    "pause",
    "play",
    "playing",
    "progress",
    "ratechange",
    "resize",
    "seeked",
    "seeking",
    "stalled",
    "suspend",
    "timeupdate",
    "volumechange",
    "waiting",
]

export function VideoPlayer() {
    const video = useRef()

    useEffect(() => {
        function handleEvent(e) {
            VideoPlayerEvents.raise(e.type)
        }
        const videoElement = video.current
        playerEvents.forEach((event) => videoElement.addEventListener(event, handleEvent))
        return () => {
            playerEvents.forEach((event) => videoElement.removeEventListener(event, handleEvent))
        }
    }, [])

    VideoPlayerEvents.useEvent((event) => {
        if (event === "play") {
            video.current.play()
        } else if (event === "pause") {
            video.current.pause()
        }
    })
    return (
        <div>
            <video ref={video} src="https://media.w3.org/2010/05/sintel/trailer.mp4" controls>
                <track kind="captions" srcLang="en" src="https://media.w3.org/2010/05/sintel/trailer.en.vtt" default />
            </video>
        </div>
    )
}
