import './App.css';
import {useEffect, useState} from 'react'
import Tours from './componants/Tours';



function App() {

  // api url 
  const apiUrl = "https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts"

  const [tours, setTour] = useState([])

  // fetch function
  
  async function fetchdata() {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setTour(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchdata();
  }, []);
  
  return (
    <>
      <div>
          <Tours  tours = {tours}></Tours>
      </div>
    </>
  );
}

export default App;
