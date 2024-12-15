import AxiosGetDemo from "./AxiosGetDemo";
import TestComponent from "./hoc/TestComponent";
import ListKeysDemo from "./ListKeysDemo";

const Home = () => {
    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <p>Welcome to my site...</p>   
            <TestComponent/>     
        </div>
       
     );
}
 
export default Home;