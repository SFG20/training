/* This file contains a list of some of common JavaScript features used in the codebase and a brief explanation of how they work. */

// Example 1
export function Example1_SpreadOperator() {
    const a = -1
    const b = -2
    const existingArray = [0, 1, 2, 3]
    const newArray = [a, b, ...existingArray]
    console.log(newArray) // [-1, -2, 0, 1, 2, 3]
}

// Example 2
export function Example2_ArrayDestructuring() {
    const [a, b] = ["Andy", "James"]
    console.log(b) // James
    const [e, f, g = "George", h = "Ringo"] = ["Andy", "James"]
    console.log(g) // George
    const [i, j, k = "George", l = "Ringo"] = ["Andy", "James", null, undefined]
    console.log(k, l) // null undefined
    const [m, n, o = "George", p = "Ringo"] = ["Andy", "James", null, ""]
    console.log(p) // ""
    const [c, d, ...rest] = ["Andy", "James", "John", "Paul", "George", "Ringo"]
    console.log(rest) // ["John", "Paul", "George", "Ringo"]
}

// Example 3
export function Example3_DefensiveProgramming() {
    // Optional chaining ? and the nullish coalescing operator ?? (fallback to this value if null or undefined)
    const value = root?.dashboard?.menu?.schedules ?? []
    console.log(value) // []
}

export function Example3_Destructuring(props = { value: "42" }) {
    // Default value and default value with rename or object property
    const { label = "Question", value: answer } = props
    console.log({ label, answer }) // { label: "Question", answer: "42" }
}

export function Example4_switch() {
    function getValue(test) {
        switch (test) {
            case 0:
                return "Zero"
            case 1:
                return "One"
            default:
                return "Default"
        }
    }
    console.log(getValue()) // Default
}

export function Example5_ternary() {
    function getValue(test) {
        return test === 0 ? "Zero" : test === 1 ? "One" : "Default"
    }
    console.log(getValue()) // Default
}

export function Example6_Sets_Maps() {
    let value = [...new Set(["M", "i", "s", "s", "i", "s", "s", "i", "p", "p", "i"])]
    console.log(value) // ["M", "i", "s", "p"]
    let value2 = [...new Map([["M", 1], ["i", 2], ["s", 3], ["s", 4], ["i", 5], ["s", 6], ["s", 7], ["i", 8], ["p", 9], ["p", 10], ["i", 11]])]
    console.log(value2) // [["M", 1], ["i", 2], ["s", 3], ["p", 9]]
}

export function Example7_Generators() {
    function* getValues() {
        yield "ValueA"
        yield "ValueB"
        yield "ValueC"
    }
    const values = getValues()
    const { value } = values.next()
    console.log(value) // ValueA
}

export function Example8_LogicalAnd() {
    // Conditional Rendering example you may see this used throughout the codebase
    const value = true && "Value"
    console.log(value) // Value
    //It works because in JavaScript, true && expression always evaluates to expression, and false && expression always evaluates to false.
    //Therefore, if the condition is true, the element right after && will appear in the output. If it is false, React will ignore and skip it.
}

export function Example9_LogicalOr() {
    const value = false || "Value"
    console.log(value) // Value
    //It works because in JavaScript, true || expression always evaluates to true, and false || expression always evaluates to expression.
    //Therefore, if the condition is false, the element right after || will appear in the output. If it is true, React will ignore and skip it.
}

export function Example10_LogicalNot() {
    const value = !true
    console.log(value) // false
}

export function Example11_DoubleBang() {
    const value = !!true
    console.log(value) // true

    // As well as the logical usage above, it can be used to convert a value to a boolean
    // You may see this in the codebase
    const value2 = !!0
    console.log(value2) // false

    const value3 = !!undefined
    console.log(value3) // false

    const value4 = !!{} // careful with this one!
    console.log(value4) // true

    const value5 = !!""
    console.log(value5) // false

    const value6 = !!null
    console.log(value6) // false
}

export function Example12_ArrayForEach() {
    const array = [0, 1, 2, 3, 4, 5]
    array.forEach((item) => console.log(item))
    // 0
    // 1
    // 2
    // 3
    // 4
    // 5
}

export function Example13_ArrayMap() {
    const array = [0, 1, 2, 3, 4, 5]
    const newArray = array.map((item) => item * 2)
    console.log(newArray) // [0, 2, 4, 6, 8, 10]
}

export function Example14_ArrayReduce() {
    const array = [0, 1, 2, 3, 4, 5]
    const newArray = array.reduce((acc, item) => acc + item, 0)
    console.log(newArray) // 15
}

export function Example15_ArrayFilter() {
    // Conditionlly filter an array
    const array = [0, 1, 2, 3, 4, 5]
    const newArray = array.filter((item) => item % 2 === 0)
    console.log(newArray) // [0, 2, 4]

    // Filter out falsy values
    const array2 = [0, 1, 2, 3, 4, 5, undefined, null, false, 0, "", NaN]
    const newArray2 = array2.filter(Boolean) // removes all falsy values
    console.log(newArray2) // [1, 2, 3, 4, 5]
}

export function Example16_ArrayFind() {
    const array = [0, 1, 2, 3, 4, 5]
    const item = array.find((item) => item === 3)
    console.log(item) // 3
}

export function Example17_ArrayIncludes() {
    const array = [0, 1, 2, 3, 4, 5]
    const item = array.includes(3)
    console.log(item) // true
}

export function Example18_ArrayIndexOf() {
    const array = [0, 1, 2, 3, 4, 5]
    const item = array.indexOf(3)
    console.log(item) // 3
}

export function Example19_ArrayJoin() {
    // Make an array into a string, a comma is the default separator
    const array = [0, 1, 2, 3, 4, 5]
    const joinedArray = array.join()
    console.log(joinedArray) // 0,1,2,3,4,5
    const joinedArrayDash = array.join("-")
    console.log(joinedArrayDash) // 0-1-2-3-4-5
}

export function Example20_ArrayReverse() {
    const array = [0, 1, 2, 3, 4, 5]
    const reversedArray = array.reverse()
    console.log(reversedArray) // [5, 4, 3, 2, 1, 0]
}

export function Example21_ArraySort() {
    const array = [0, 1, 2, 3, 4, 5]
    const sortedArray = array.sort()
    console.log(sortedArray) // [0, 1, 2, 3, 4, 5]
    // Note: sort() sorts values as strings. If numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
    // Because of this, the sort() method will produce an incorrect result when sorting numbers.
    // You can fix this by providing a "compare function"
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#Description
    const sortedArray2 = array.sort((a, b) => a - b)
    console.log(sortedArray2) // [0, 1, 2, 3, 4, 5]
}

export function Example22_ArraySplice() {
    // The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
    const array = [0, 1, 2, 3, 4, 5]
    const newArray = array.splice(2, 1)
    console.log(newArray) // [2]
    console.log(array) // [0, 1, 3, 4, 5]
}

export function Example23_ArraySlice() {
    const array = [0, 1, 2, 3, 4, 5]
    const newArray = array.slice(2, 4)
    console.log(newArray) // [2, 3]
}

export function Example24_ArrayFlattening() {
    const array = [0, 1, 2, [3, 4, 5]]
    // Maybe lodash or Sugar equivalents in the codebase 'flatten([0, 1, 2, [3, 4, 5]])'
    // this is illustrative of the function you need to use to flatten an array
    const newArray = array.flat()
    console.log(newArray) // [0, 1, 2, 3, 4, 5]
}

export function Example25_ArrayConcat() {
    const array = [0, 1, 2, 3, 4, 5]
    const newArray = array.concat([6, 7, 8])
    console.log(newArray) // [0, 1, 2, 3, 4, 5, 6, 7, 8]
}

export function Example26_ForOfArrayIterate() {
    const array = [0, 1, 2, 3, 4, 5]
    for (const item of array) {
        console.log(item) // 0, 1, 2, 3, 4, 5
    }
}

export function Example27_ForInObjectIterate() {
    const object = {
        a: 1,
        b: 2,
        c: 3,
    }
    for (const { key, value } in object) {
        console.log(key) // a, b, c
        console.log(value) // 1, 2, 3
    }
}

export function Example28_ObjectKeys() {
    const object = {
        a: 1,
        b: 2,
        c: 3,
    }
    const keys = Object.keys(object)
    console.log(keys) // ["a", "b", "c"]
}

export function Example29_ObjectValues() {
    const object = {
        a: 1,
        b: 2,
        c: 3,
    }
    const values = Object.values(object)
    console.log(values) // [1, 2, 3]
}

export function Example30_ObjectEntries() {
    const object = {
        a: 1,
        b: 2,
        c: 3,
    }
    const entries = Object.entries(object)
    console.log(entries) // [["a", 1], ["b", 2], ["c", 3]]
}

export function Example31_ObjectAssign() {
    const object1 = {
        a: 1,
        b: 2,
        c: 3,
    }
    const object2 = {
        d: 4,
        e: 5,
        f: 6,
    }
    const object3 = Object.assign(object1, object2)
    console.log(object3) // {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6}
}

export function Example32_ObjectFromEntries() {
    const entries = [
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]
    const object = Object.fromEntries(entries)
    console.log(object) // {a: 1, b: 2, c: 3}
}

export function Example33_StringSplit() {
    const string = "a,b,c,d,e,f"
    const array = string.split(",")
    console.log(array) // ["a", "b", "c", "d", "e", "f"]
}

export function Example34_StringTrim() {
    const string = " a,b,c,d,e,f "
    const trimmedString = string.trim()
    console.log(trimmedString) // "a,b,c,d,e,f"
}

export function Example35_StringReplace() {
    const string = "a,b,c,d,e,f"
    const replacedString = string.replace(",", "-")
    console.log(replacedString) // "a-b,c,d,e,f"
}

export function Example36_StringInterpolation() {
    const string = "a,b,c,d,e,f"
    const interpolatedString = `The string is ${string}`
    console.log(interpolatedString) // "The string is a,b,c,d,e,f"
}
