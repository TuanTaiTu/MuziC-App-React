import React from "react";
import './MuzicPage.css'
import { useState, useEffect } from "react";
import axios from 'axios';

// Import Bootstrap
import ListGroup from 'react-bootstrap/ListGroup';
import { BsPlay  } from "react-icons/bs";


function CardItem(props){
  return(
    <div className='card'>
    <img className='image'
    src = {props.imageUrl}
    alt = {props.alt}
    />
    <h2 className='name'>
        {props.name}
    </h2>
    </div>
  )
}

function MuzicPage() {

  const [data, setData] = useState([]);

    useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(response => setData(response.data))
      .catch(error => console.error(error));
      console.log(data)
  }, []);

  return (
    <>
      <div className="wrap1">
      <h1 className="header">Artist</h1>
      <div div className="content">
        {/* Card 1 */}
        <CardItem
        imageUrl='https://upload.wikimedia.org/wikipedia/commons/1/1a/Faker_2020_interview.jpg'
        alt="Faker"
        name="Faker"
        />
        {/* Card 2 */}
        <CardItem
        imageUrl='Chovy.png'
        alt="Chovy"
        name="Chovy"
        />
        {/* Card 3 */}
        <CardItem
        imageUrl='Jcole.jpg'
        alt="J Cole"
        name="J Cole"
        />
        {/* Card 4 */}
        <CardItem
        imageUrl='robe1.jpg'
        alt="Robber"
        name="Robber"
        /> 
        
      </div>
      <h1 className="header">Playlist</h1>
      <div className="content">
        <ListGroup className="listgroup1">
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
      
    </>
  );
}



export default MuzicPage;