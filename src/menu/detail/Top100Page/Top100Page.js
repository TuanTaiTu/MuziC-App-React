import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Top100Page.css';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { CardGroup, CardImg } from 'react-bootstrap';

// import { Weavy, WyChat } from "@weavy/uikit-web";


function Top100Page() {
  
  

  const [data, setData] = useState([]);

    useEffect(() => {
    axios.get('https://dummyjson.com/products/')
      .then(response => setData(response.data))
      .catch(error => console.error(error));
      console.log('data: ',data)
  }, []);

  return (
    <div className='wrap3'>
      <h1>Top 100</h1>
      
        {data.products && data.products.map(
          item => (
            <CardGroup>
              <CardImg className='pro-card' src={item.images}></CardImg>
            </CardGroup>
            // <i style={{color:'white'}}>{item.title}</i>, <br/>
          )
        )};
      
    </div>
  );
}

export default Top100Page;