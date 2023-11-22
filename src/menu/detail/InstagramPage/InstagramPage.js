import React, { useState } from "react";
import './Instagram.css'


function CardItem(props){
  let [like, setLike] = useState(0)
  return(
    <div className='card'>
    <img className='image'
    src = {props.imageUrl}
    alt = {props.alt}
    />
    <h2 className='name'>
        {props.name}
    </h2>
    <h6 className='description'>
      {props.description}
      </h6>
    <div
    className='booking'
    >{props.book}</div>
    <h5>Luot thich: {like}</h5>
    <button
    onClick={() => setLike(like + 1)}
    >{props.likeButton}</button>
    <button
    onClick={() => setLike(like - 1)}
    >{props.disLikeButton}</button>
    </div>
  )
    
}


export function Instagram() {
  return (
    <div>
    <CardItem
    imageUrl='https://upload.wikimedia.org/wikipedia/commons/1/1a/Faker_2020_interview.jpg'
    alt="Faker"
    name="Faker"
    description="Faker! What's was that?"
    // book={
    //   <BrowserRouter>
    //     <BookingFaker />
    //     <Faker/>
    //   </BrowserRouter>
    // }
    likeButton='Like'
    disLikeButton='Dislike'
    />
    <CardItem
    imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Yi2yyIXB99hVDtpWdIx6lKtpEQUW2ph1eQ&usqp=CAU'
    alt="Inuyasha! What's was that?"
    name="Inuyasha"
    description="Omae wa mou shindeiru"
    // book={
    //   <BrowserRouter>
    //     <BookingInuyasha />
    //     <Inuyasha/>
    //   </BrowserRouter>
    // }
    likeButton='Like'
    disLikeButton='Dislike'
    />
    <CardItem
    imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc46fW1cwudNMilLXXZzKhIQ-e_IF8A46_3g&usqp=CAU'
    alt="Yasuo! What's was that?"
    name="Yasuo"
    description="Death is like a wind, Always by my side!"
    book="Let Him Fight!"
    likeButton='Like'
    disLikeButton='Dislike'
    />
    <CardItem
    imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRsgLI0wpCNSMPUJBSkJ1XjqK2rMPc-vxLg-LBXttNJE-BsvHrSXdqnIxNVF-gEkk9uzI&usqp=CAU'
    alt="Robe! What's was that?"
    name="Hu$tlang Robber"
    description="E cu! Robber toi' ne` may`"
    book="Let Him Fire!"
    likeButton='Like'
    disLikeButton='Dislike'
    />
    <CardItem
    imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUWbG8WTnAAibI_w6c710rX7d4Ox0mRDA5eA&usqp=CAU'
    alt="Gumayusi! What's was that?"
    name="Gumayusi"
    description="Trust me bro! I can fight 5!"
    book="Let Him Shot!"
    likeButton='Like'
    disLikeButton='Dislike'
    />
    </div>
  );
}

