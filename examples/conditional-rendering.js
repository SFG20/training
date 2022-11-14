export function Example_conditional_rendering() {
    const [show, setShow] = useState(false)
    return (
        <div>
            <button onClick={toggleVisible}>Toggle</button>
            {show ? <p>Visible1</p> : <p>Hidden</p>}
            {show && <p>Visible2</p>}
        </div>
    )
    function toggleVisible() {
        setShow((previousValue) => !previousValue)
    }
}

export function Example_conditional_rendering2() {
    const [show, setShow] = useState(false)
    return (
        <div>
            <button onClick={toggleVisible}>Toggle</button>
            {show ? <p>Visible</p> : <p>Hidden</p>}
        </div>
    )
    function toggleVisible() {
        setShow((previousValue) => !previousValue)
    }
}

export function ExampleAsyncConditionalRender() {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    useEffect(() => {
        setLoading(true)
        fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then((response) => response.json())
            .then((json) => {
                setData(json)
                setLoading(false)
            })
            .catch((error) => {
                setError(error)
                setLoading(false)
            })
    }, [])
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>
    if (!data) return <p>Not loaded</p>
    return (
        <div>
            <p>Data loaded</p>
            <p>{data}</p>
        </div>
    )
}
