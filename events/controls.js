import { Button } from "@mui/material"
import { useState } from "react"
import { VideoPlayerEvents } from "."

export function VideoPlayerControls() {
    const [paused, setPaused] = useState(true)

    VideoPlayerEvents.useEvent((event) => {
        if (event === "pause") {
            setPaused(true)
        } else if (event === "play" || event === "playing") {
            setPaused(false)
        }
    })

    return (
        <Button type="button" onClick={togglePause}>
            {paused ? "Play" : "Pause"}
        </Button>
    )

    function togglePause() {
        setPaused(!paused)
        VideoPlayerEvents.raise(paused ? "play" : "pause")
    }
}
