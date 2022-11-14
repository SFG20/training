import { Button } from "@mui/material"
import uuidv4 from "minimals-template/components/utils/uuidv4"
import { useState } from "react"

window.DashboardRoute.register("/dashboard/training/arrays", <ExampleArrayRenderingWithMap />)

function ExampleArrayRenderingWithMap() {
    const [items, setItems] = useState([
        { id: 1, value: "foo" },
        { id: 2, value: "bar" },
        { id: 3, value: "baz" },
    ])

    return (
        <div>
            <ul>
                {items.map(({ id, value }) => (
                    <li key={id}>{value}</li>
                ))}
            </ul>
            <Button onClick={addItem}>Add item</Button>
        </div>
    )

    function addItem() {
        setItems([...items, { id: items.length + 1, value: uuidv4() }])
    }
}
