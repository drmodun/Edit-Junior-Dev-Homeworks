import { useState } from 'react';
import Form from './components/Form';
import { useEffect } from 'react';
import Display from './components/Display';
function App() {
  //i do not see any reason to use useEffect, useRef or useContext here
  const [data, setData] = useState(undefined);
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (data){
    setShow(true);
    }
  }, [data]);


  const changeData = (data) => {
    setData(data);
  }
  return (
    <div className="App">
      <Form  changeData={changeData}/>
      {show && <Display {...data}/>
      } 
    </div>
  );
}

export default App;
