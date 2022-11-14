import { TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { setFromEvent } from "lib/setFromEvent"
import { useState } from "react"

window.DashboardRoute.register("/dashboard/training/forms", <ExampleForms />)

function ExampleControlledTextField({ initialValue = "Hello World" }) {
    const [value, setValue] = useState(initialValue)
    return (
        <Box display="flex" flexDirection="column" p={2}>
            <TextField
                autoFocus
                variant="outlined"
                label="Type something"
                fullWidth
                value={value}
                onChange={setFromEvent(setValue)} // Equivalent of ((e) => setName(e.target.value))
            />
            <Typography variant="body1" color="textSecondary">
                {value}
            </Typography>
        </Box>
    )
}

function ExampleForms() {
    return (
        <div>
            <ExampleControlledTextField />
        </div>
    )
}
