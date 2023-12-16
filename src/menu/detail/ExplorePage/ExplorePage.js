import ListGroup from 'react-bootstrap/ListGroup';
import './ExplorePage.css'
import axios from 'axios';
import { useState, useEffect } from "react";

import { BsPlay  } from "react-icons/bs";


const ExplorePage = () => {

  const [data, setData] = useState([]);

    useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(response => setData(response.data))
      .catch(error => console.error(error));
      console.log(data)
  }, []);

  return (
      <div className='wrap2'>
        <h1>Explore</h1>
        <div>
          <ListGroup className="listgroup">
            {data.products && data.products.map(
              item => (
              <ListGroup.Item action variant='success' key={item.id}>
                {item.id}. {item.title} 
                <BsPlay style={{height:'30px', width:'30px', float:'inline-end', marginRight: '30px'}} />
              </ListGroup.Item>
              )
              )};
        </ListGroup>
        </div>
      </div>
  );
}

export default ExplorePage;