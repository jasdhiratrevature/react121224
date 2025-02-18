## Controlled Components
In React, Controlled Components are those in which form’s data is handled by the component’s state. It takes its current value through props and makes changes through callbacks like onClick, onChange, etc. A parent component manages its own state and passes the new values as props to the controlled component.

## Uncontrolled Components
Uncontrolled Components are the components that do not rely on the React state and are handled by the DOM (Document Object Model). So in order to access any value that has been entered we take the help of refs.

For instance, if we want to add a file as an input, this cannot be controlled as this depends on the browser so this is an example of an uncontrolled input.

##  Difference between Controlled and Uncontrolled Components