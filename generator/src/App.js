
//aisha mashrah
//mar/ 14 /2023


// Peer Reviewed by Harrison Busby
// This project is good. The main thing that is really good is that the fetch is populating when the button is pressed and that the right text is changing as well. Besides a couple of styling issues it works good.

//Another thing to mention is that when you initially press the button and the fetch populates, the button moves over to the right because of styling errors. Also, the fetch doesnt populate on load of the page but other than that its good.

// Good job Aisha!


import logo from './logo.svg';
import './App.css';
import GetAdvice from './services/dataservices';
import Home from './component/Homecomponent';
function App() {
  return (
  
  <div className='App-header'>
      <div> 
        <Home></Home>
        </div>
  
</div>
  );
}

export default App;
