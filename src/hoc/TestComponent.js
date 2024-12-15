import withAuth from "./withAuth";

function TestComponent() {
  return <p>Hello World</p>;
}

export default withAuth(TestComponent);