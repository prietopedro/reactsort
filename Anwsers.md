Virtual DOM vs real DOM, what is diffing algorithm and reconciliation, why does React use virtual DOM
Virtual DOM is a lightweight copy of real DOM.
Diffing algorithm is used by react to compare the current version of the Virtual DOM with the new updated version that is made when a rerender is triggered.
Reconciliation is used after diffing, and it is responsible for painting the actual DOM. Only the parts that differ from the reconcialiation algorithm will be repainted


React lifecycle methods, 3 stages, how and why do we use them
Mounting: (When the component mounts for the same time)
    constructor() initialize state, bind functions, inherit methods from React.Component class
    render() will create the React element in the virtual dom
    componentDidMount() for handling side effects after component is mounted on the screen

Updating: (When a rerender is triggered)
    shouldComponentUpdate() method we can use to tell react if we should rerender this components based on the state and props changed
    render() will create the React element in the virtual dom
    componentDidUpdate() for handling side effects after component is updated on the screen 

Unmounting: (When component is about to be deleted)
    componentWillUnmount() method used to remove any side effects before component unmounts such as event listeners, or canceling HTTP requests

The purpose of using the key attribute when we use map in JSX
    React uses key attribute in list to see which list elements were changed, added, or deleted, it needs to be unique, or it might lead to some visual bugs when sorting, and filtering

Ways of triggering component update
    State change
    forceUpdate method
    parent rerender

What is HOC and higher order function?
    HOC is short for High Order Component, is a function that returns a wrapper component with logic and state that can be reused across other components
    High order function is a function that takes another function as its argument to make it more reusable, example: Array.prototype.map & Array.prototype.forEach

What/why custom hooks?
    Custom hooks are used to reuse state and logic just like HOC. Difference is that custom hooks can only be used in functional components. We can also use custom hooks, to split the code better, removing a lot of the logic from the component itself and extracting it to the hook

What is the “children” props?
    children prop is an array of react elements that are children of that component 

what/why React.memo, useMemo, useCallback
    React.memo is used to tell React to only rerender a functional component if the props have changed, this is useful because since a parent component will trigger a rerender of all of its children, some of this children might not need to be rerendered if the props passed down havent changed
    useMemo is a React hook that takes a function that returns any value and a dependency array. The callback function will only run when the variables in the dependency array changes. This is useful because if we have some heavy computation, such as a big for loop, we do not want
    it to be executed everytime the component is rerendered. As long as the dependecies stay the same, it will not rerun the callback again
    useCallback is similar to react memo but for functions, everytime a component is rerendered we do not want to recreate the function and change the function reference. This is useful because sometimes we need to use a function as a dependecy in other hooks, so if the function reference changes, the other hook will also run even though the function is still the same.