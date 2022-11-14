function Example_useState_Basic() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={increment}>Click me</button>
        </div>
    )
    function increment() {
        setCount(count + 1)
    }
}

function Example_useEffect_Basic() {
    const [size, setSize] = useState(window.innerWidth)
    useEffect(() => {
        function myResizeListener() {
            setSize(window.innerWidth)
        }
        window.addEventListener("resize", myResizeListener)
        return () => {
            // This function is called when the component is unmounted
            // Event handler cleanup without this you will have a memory leak
            window.removeEventListener("resize", myResizeListener)
        }
    }, [])
    // ^^ Note the empty array, this is a dependency array
    // An empty array is used to run the effect only once - after initial render
    // If you pass in a value, the effect will run when that value changes
    // If you pass in multiple values, the effect will run when any of those values change
    // If you don't pass in a value, the effect will run on every render
    return (
        <div>
            <p>Window is {size}px wide</p>
        </div>
    )
}

function useWindowWidth() {
    const [size, setSize] = useState(window.innerWidth)
    useEffect(() => {
        function myResizeListener() {
            setSize(window.innerWidth)
        }
        window.addEventListener("resize", myResizeListener)
        return () => {
            window.removeEventListener("resize", myResizeListener)
        }
    }, [])
    return size
}

function CustomHook() {
    // Now we can use the effect in multiple components
    const size = useWindowWidth()
    return (
        <div>
            <p>Window is {size}px wide</p>
        </div>
    )
}

