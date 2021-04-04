import React from 'react';
import Header from './components/Header'
import Leftbar from './components/Leftbar'
import Rightbar from './components/Rightbar'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import SearchPage from './components/SearchPage'



import './App.css';

function App() {
  return (
    <div className="App">
              
              <Router>

              <Header/>

                <Switch>

                <Route path='/search/:userInput'>
                
                <div className='section-two'>
                      <Leftbar/>
                      <SearchPage/>
                      </div>
                  </Route>
              

                  <Route path='/'>
                     <div className='section-two'>
                     <Leftbar/>
                      <Rightbar/>
                      
                      </div>
                  </Route>

            

                  
                  
                </Switch>
              </Router>
        

        {/* <Header/>
        
        <div className='section-two'>
           <Leftbar/>
           <Rightbar/>
        </div> */}
    </div>
  );
}

export default App;
