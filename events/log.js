import React, { useEffect, useState } from "react"
import { VideoPlayerEvents } from "./index"
import LRU from "lru-cache"
import { useRefresh } from "lib/useRefresh"
import { Button } from "@mui/material"

const PLAYER_HISTORY_LENGTH = 10

const options = {
    max: PLAYER_HISTORY_LENGTH,
}

const cache = new LRU(options)

export function VideoPlayerLog() {
    const refresh = useRefresh()
    const [logs, toggleLogs] = useState(0)

    useEffect(() => {
        cache.reset()
        refresh()
        //eslint-disable-next-line
    }, [logs])

    VideoPlayerEvents.useEvent((event) => {
        cache.set(`[${Date.now()}]:${event}`)
        refresh()
    })

    return (
        <div>
            <h1>Player Events</h1>
            {cache.keys().map((event, i) => (
                <div key={i}>{event}</div>
            ))}
            <Button type="button" onClick={() => toggleLogs(Date.now())}>
                Clear
            </Button>
        </div>
    )
}
