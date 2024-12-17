## useReducer Hook

The useReducer Hook is an alternative to the useState hook and is generally more preferred over the useState hook when you have complex state-building logic or when the next state value depends upon its previous value or when the components are needed to be optimized.

The useReducer hook takes three arguments including reducer, initial state, and the function to load the initial state lazily.

Syntax:

const [state, dispatch] = useReducer(reducer, initialArgs, init);