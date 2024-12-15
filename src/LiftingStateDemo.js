import { useState } from "react";
import ListCount from "./lifitingstate/ListCount";
import ListShow from "./lifitingstate/ListShow";
import AddToList from "./lifitingstate/AddToList";
const LiftingStateDemo = () => {
    const [list, setList] = useState([]);
    return (
      <div className="App">
        <h1>Lifting State Up Demo</h1>
        <ListCount list={list}/>
        <ListShow list={list}/>
        <AddToList setList={setList}/>
        
      </div>
    );
}
 
export default LiftingStateDemo;