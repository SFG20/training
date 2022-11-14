import { createEvent } from "library/local-events"
import { VideoPlayerControls } from "./controls"
import { VideoPlayerLog } from "./log"
import { VideoPlayer } from "./player"

export const VideoPlayerEvents = createEvent("VideoPlayerEvents") // Our context specific event bus

window.DashboardRoute.register("/dashboard/training/videoplayer", <EventsExample />)

function EventsExample() {
    return (
        <>
            <VideoPlayer />
            <VideoPlayerControls />
            <VideoPlayerLog />
        </>
    )
}

VideoPlayerEvents.handle((e) => {
    //You can raise and listen to events from anywhere in the app we're completely decoupled you can similarly 'raise' events too
    //so based on some async event or event from the server

    console.log(`I have nothing to do with the video player but I'm listening too ${e}`)
})
