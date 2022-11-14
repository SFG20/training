import React, { useState, useEffect } from "react"

window.DashboardRoute.register("/dashboard/training/timers", <Timers />)

// An example of a portable hook and just the part of the DOM updating that needs to
function useTimer(interval = 1000) {
    const [time, setTime] = useState(new Date())
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date())
        }, interval)
        return () => clearInterval(timer)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return [time, setTime]
}

function Timer({ interval }) {
    const [time] = useTimer(interval)
    return <h1>{JSON.stringify(time, null, 2)}</h1>
}

function Timers() {
    return (
        <>
            <Timer />
            <Timer interval={2000} />
            <Timer interval={3000} />
        </>
    )
}
