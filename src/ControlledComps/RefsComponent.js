import { useRef } from "react";
const RefsComponent = () => {
    let ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    alert('You clicked ' + ref.current + ' times!');
  }
    return ( 
        <button onClick={handleClick}>
      Click me!
    </button>
     );
}
 
export default RefsComponent;