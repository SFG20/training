import { setFromEvent } from "lib/setFromEvent"
import { useState } from "react"

const { Button, DialogTitle, DialogContent, TextField } = require("@mui/material")
const { OkCancel, useDialog } = require("lib/useDialog")

window.DashboardRoute.register("/dashboard/training/dialogs", <Dialogs />)

export function Dialogs() {
    const myExampleDialog = useDialog(<ExampleDialog />)
    return (
        <Button variant="contained" color="primary" onClick={showDialog}>
            Show Dialog
        </Button>
    )

    async function showDialog() {
        const returnedValue = await myExampleDialog()
        if (returnedValue) {
            console.log(returnedValue)
        }
    }
}

function ExampleDialog() {
    // This has to be set to enable the Ok button
    const [value, setValue] = useState()
    return (
        <>
            <DialogTitle>This is an example Dialog</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    variant="outlined"
                    label="Type something to enable the Ok button"
                    fullWidth
                    value={value}
                    onChange={setFromEvent(setValue)}
                />
            </DialogContent>
            <OkCancel value={value} />
        </>
    )
}
