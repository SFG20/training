const { Box } = require("@mui/system")
const { Bound, useBoundContext } = require("lib/binding/Bound")
const { BoundTextField } = require("lib/binding/bound-components")

window.DashboardRoute.register("/dashboard/training/bound", <BoundComponents />)

function AnyRandomComponent(props) {
    console.log({ props })
    const tt = useBoundContext()
    console.log()
    return (
        <Box p={2}>
            {JSON.stringify({ tt })}
            <BoundTextField field="name" />
        </Box>
    )
}
function BoundComponents() {
    return (
        <Bound>
            <AnyRandomComponent />
        </Bound>
    )
}
