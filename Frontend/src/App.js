
import React, {useState} from 'react';
import From from './components/Form';
import Info from './components/Info';
import Logo from './components/Logo';
import Status from './components/Status';

function App() {
  const [status , setStatus] = useState(true)
  return (
    <div className="App">
        <Logo />
        {
          status ? <>
             <Info />
            <From setStatus={setStatus} />
          </>:
          <Status />
        }
       
    </div>
  );
}

export default App;
