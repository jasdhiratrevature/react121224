## React Context
React Context provides us a way to pass data down through the component tree to where we need it without having to manually pass props at every single level.
It acts as a global storage space for all your components in your project.

## How is React Context Different from Prop Threading
In prop threading, data is passed down from the parent component to the child component. If a child of that component needs the same prop, it is passed down until the required component gets the data.

While simple, it can become complex when traversing deeply nested structures, and this results in prop drilling.

## What is Prop Drilling?
Prop drilling refers to a situation where this threading of props becomes complicated due to the need to pass them through multiple layers of components.

As the data is passed down through many layers, each intermediate component needs to receive and pass the data, even if it doesn't use the data itself.

## How to use React Context API
- Step #1 - Create a Context
- Step #2 - Wrap your App with Context Provider
- Step #3 - Consume the Context in Components

## The three Important Parts of the React Context API

## Provider
This is a component that is used to wrap components in order to access to the context's value. This is where you pass the values that you want to share throughout the component tree using the value prop.

## Context
This acts as the storage where the data is stored. It comes with two parts:

- `createContext()` — This creates the global object and creates the context.
- `useContext()` — This consumes the information made available by the provider.

## Consumer
The Consumer component is used to consume the shared data within a component. It allows components to subscribe to the context changes and access the shared value. We might not see the consumer per say but it will use the information rendered by the provider.

It must always be nested inside the Provider because the Provider will render first to pass data to the components consuming the data. 