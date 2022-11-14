const { useQuery, gql } = require("@apollo/client")
const { TextField } = require("@mui/material")
const { setFromEvent } = require("lib/setFromEvent")
const { useState } = require("react")

window.DashboardRoute.register("/dashboard/training/graphql", <GraphQLExample />)

function GetSchedules({ searchTerm, skip, take }) {
    const { data } = useQuery(
        gql`
            query getThings($searchTerm: String, $skip: Int, $take: Int) {
                training_schedules(searchTerm: $searchTerm, skip: $skip, take: $take) {
                    title
                    id
                    _id
                }
            }
        `,
        {
            variables: { searchTerm, skip, take },
        }
    )
    // Make a list of things that you can click to see more detail
    return <>Hi{JSON.stringify(data)}</>
}

function GraphQLExample() {
    const [searchTerm, setSearchTerm] = useState("")
    return (
        <>
            <TextField value={searchTerm} onChange={setFromEvent(setSearchTerm)} />
            {searchTerm}
            {searchTerm.length > 3 && <GetSchedules searchTerm={searchTerm} />}
        </>
    )
}
