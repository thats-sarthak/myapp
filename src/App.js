import './App.css';
import { useState, useEffect } from 'react';
import CardSection from './components/CardSection';
import Navbar from './components/Navbar';

function App() {

  const [uniqueVisitor, setUniqueVisitor] = useState(0);
  const [payloadTime, setPayloadTime] = useState(0);

  useEffect( () => {
      const fetchData = async () => {
          try {
      
         setTimeout (async ()  =>{   
          const response = await fetch('https://socket-io-server-mc3e.onrender.com/api/v1/getUniqueVisitors');
              const data = await response.json();
              const uniqueVisitors = await data.response.filter(item => item.uniqueVisitor);
              const uniqueVisitorCount = uniqueVisitors.length;
              
              setUniqueVisitor(uniqueVisitorCount);
          },0.11 );
      } catch (error) {
          console.log(error);
      }
  };
      fetchData();
  }, []);



  useEffect( () => {
    const fetchData = async () => {
        try {
    
        const response = await fetch('https://socket-io-server-mc3e.onrender.com/api/v1/getUniqueVisitors');
            const data = await response.json();
            const ptime =  data.response
            const pageLoadTime = ptime?.map(f => f?.metaData?.pageLoadTime)?.length
            setPayloadTime(pageLoadTime);
    
    } catch (error) {
        console.log(error);
    }
};
    fetchData();
}, []);



  return (
    <div className="App">
    <Navbar/>
    <CardSection uniqueVisitor = {uniqueVisitor} payloadTime = {payloadTime}/>
  
    </div>
  );
}

export default App;
