
import{ BrowserRouter ,Route,Routes} from 'react-router-dom';
import './App.css';
import Newregister from './Component/Assets/Fpage/Newregister';
import HomePage from './Component/Assets/Fpage/HomePage';
import Register from './Component/Assets/Fpage/Register';
import Goalpage from './Component/Assets/Fpage/Goalpage';

import Nave from './Component/Assets/Fpage/Nave';

import Profile from './Component/Assets/Fpage/Profile';
import History from './Component/Assets/Fpage/History';
import { useState } from 'react';
import Suggestor from './Component/Assets/Fpage/Suggestor';
import About from './Component/Assets/Fpage/About';
import FAQPage from './Component/Assets/Fpage/FAQPage';
import FeedbackForm from './Component/Assets/Fpage/FeedbackForm';



function App() {
  const handleMaxLitreChange = (e) => {
      
  };
  
  return (
    <div className="App">
    
    
  
  <BrowserRouter>
  

    <Routes>
    <Route path='/' element={<HomePage/>}></Route>
    <Route path='/login' element={<Newregister/>}></Route>
    <Route path='/log' element={<Register/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/goal' element={ <Goalpage />}></Route>
    <Route path='/suggestor' element={<Suggestor/>}></Route>
    <Route path='/faq' element={<FAQPage/>}></Route>
    <Route path='/history' element={<History/>}></Route>
    <Route path='/feedback' element={<FeedbackForm/>}></Route>

    </Routes>
    <Nave/>
  
    </BrowserRouter>
  
    </div>
  );
}

export default App;
