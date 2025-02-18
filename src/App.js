import AxiosGetDemo from './AxiosGetDemo';
import MyContext from './contextDemo/MyContext';
import Home from './Home';
import LiftingStateDemo from './LiftingStateDemo';
import ListKeysDemo from './ListKeysDemo';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';


function App() {
const sharedValue='This is shared value';
  return (
    <MyContext.Provider value={sharedValue}>
    <Router>
      <div className='App'>
        <Navbar/>
        <div>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path='/comments' element={<ListKeysDemo/>}/>
            <Route path='/posts' element={<AxiosGetDemo/>}/>
            <Route path='/lyft' element={<LiftingStateDemo/>}/>

          </Routes>
        </div>
      </div>
    </Router>
    </MyContext.Provider>
    // <div className="App">
    //   <Navbar/>
    //    <div className="content">
    //       <Home/>
      
    //   </div>
    // </div>

  );
}

export default App;
