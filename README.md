# Building a React Form

A few things we should consider;

1. How an appliction handles state and why we use it
2. How render lifecycle works within a React application
3. How promises work, and why we use them
4. Working with JSON

```
{
    "results": [ { "gender": "male" } ]
}
```

# State

What is state?

Is temporary, which means it is not permanent. State represents the current values stored within an application (or component).

# Naming conventions

Standardized practise for naming our components / functions / variables

In React, for all React hooks there is a naming convention - all hooks begin with the word "use".

# Concepts you should be aware of

- hoisting
- `this`

# destructuring array

`const [counter, setCounter] = useState(0);`


# LIFECYCLES AND STATE/PROPS

When the data for a component changes, that component must be re-rendered

When you update the state, you are also re-rendering the component

When the props change, you are also re-rendering the component

# Why does fetch use a Promise?

- Because the request takes time (how long it takes for our computer to get a response from the server)
- Non-blocking, parallel, asynchronous

# async / await

- With `await` we convert our asynchronous operation into a synchronous
- With `async` we force the function to return a promise

# Event loop

- function 1
- function 2
- promises

# Promises

3 states of a promise

- Pending
- Rejected
- Resolved

# Difference between JSON and JavaScript object

- JSON keys are contained within double quotes
- JSON is very strict

# What is an expression in programming / maths?

An expression resolves to a value