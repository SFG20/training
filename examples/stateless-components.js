import React, { useState } from "react"

// File uses function expressions
// Can just as easily use: export function Basic() { return <div>Basic Component</div> }
// Usage: <Basic />
export function Basic() {
    return <p>Basic Component</p>
}

// Usage: <BasicWithProps message="Hello World!" /> - destructure properties to make life easier
export function BasicWithProps({ message }) {
    return <p>{message}</p>
}

// Usage: <BasicWithDOMAttrs /> Some attributes require camelCase
// https://reactjs.org/docs/dom-elements.html
export function BasicWithDOMAttrs({ readOnly = false, tabIndex = 0, type = "search" }) {
    return (
        <input
            className="my-class"
            data-testid="my-input"
            id="my-input"
            onKeyDown={() => {}}
            readOnly={readOnly}
            tabIndex={tabIndex}
            type={type}
        />
    )
}

// Usage: <BasicWithEventHandler /> note the events are camelCase onClick, onChange, onKeyDown
// https://reactjs.org/docs/handling-events.html
export function BasicWithEventHandler() {
    return (
        <>
            <button type="button" onClick={clickMe}>
                Click Me
            </button>
        </>
    )
    function clickMe() {
        // eslint-disable-next-line no-alert
        alert("Clicked")
    }
}

// Usage: <BasicWithEventSentToParent handleClick={(e) => alert("Child component clicked")} />
export function BasicWithEventSentToParent({ handleClick }) {
    return (
        <>
            <button type="button" onClick={handleClick}>
                Click Me
            </button>
        </>
    )
}

// Usage: <BasicWithValuePassedToParent handleClick={(message) => alert(message)} />
export function BasicWithValuePassedToParent({ handleClick }) {
    return (
        <>
            <button type="button" onClick={() => handleClick("clicked!")}>
                Click Me
            </button>
        </>
    )
}

// A containing component
// Usage:
//	<BasicWithChildren heading="My Children">
//		<p>I'm a child of the Component</p>
//	</BasicWithChildren>
// children is a special property that is passed to the component
export function BasicWithChildren({ children, heading = "Wrapper Component" }) {
    // Create a wrapper component to apply common styles to children, or to add a wrapper element
    return (
        <div className="my-styles">
            <h3>{heading}</h3>
            <p>{children}</p>
        </div>
    )
}

// Usage: <BasicWithState />
// State should be things that effect the rendering of the component or it's children
// Changing state will trigger a re-render of the component - See React dev tools
export function BasicWithState() {
    const [message, setMessage] = useState("Hello World")
    return (
        <>
            <h3>{message}</h3>
            <button type="button" onClick={updateMessage}>
                Update Message
            </button>
        </>
    )

    function updateMessage() {
        setMessage("Goodbye World")
    }
}

//Compose a component from other components
export function BasicWithComposition() {
    return (
        <>
            <Basic />
            <Basic />
        </>
    )
}

export function BasicWithCompositionAndProps() {
    return (
        <>
            <BasicWithProps message="Hello World" />
            <BasicWithProps message="Goodbye World" />
        </>
    )
}
