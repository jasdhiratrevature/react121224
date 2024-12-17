import { useContext } from "react";
import AxiosGetDemo from "./AxiosGetDemo";
import ControlledComponents from "./ControlledComps/ControlledComponents";
import RefsComponent from "./ControlledComps/RefsComponent";
import UnControlledComponents from "./ControlledComps/UnControlledComponents";
import TextComponent from "./hoc-b/TextComponent";
import TestComponent from "./hoc/TestComponent";
import ListKeysDemo from "./ListKeysDemo";
import MyContext from "./contextDemo/MyContext";

const Home = () => {
    const theValue=useContext(MyContext)
    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <p>Welcome to my site...</p>   
            <h2>{theValue}</h2>
            <TextComponent/>
            <hr/>
            <ControlledComponents/>
            <hr/>
            <UnControlledComponents/>
            <hr/>
            <RefsComponent/>
        </div>
       
     );
}
 
export default Home;