import React, { useEffect } from "react";
import Carousel from "./Carousel";
import defaultSlides from "./defaultSlides";

const Home = () => {

    const strings = [
        "Welcome to the Big Room",
        "The Big Room is a place to relax and enjoy the outdoors",
        "Dobbs Room",
        "Control is key",
        "Feet are for walking",
        "Turf is for playing",
        "Smells are for smelling",
        "Hello friends",
        "I am a big room",
        "It's a big room",
        "Let's go big",
        "Nice to meet you",
        "Incredible",
        "Sweet",
        "You are a big room",
        "We are a big room",
        "C'mon...",
        "Please take a seat",
        "Enjoy your stay",
        "How are you",
        "Haha, yeah...",
    ]

    const getRandomString = () => {
        const randomIndex = Math.floor(Math.random() * strings.length);
        return strings[randomIndex];
    }

    // gets image from the image api   
    const getImage = async () => {
        const response = await fetch("https://picsum.photos/v2/list");
        const data = await response.json();
        console.log(data);
        return data;
    }


    useEffect(() => {
        setInterval(() => {
            document.title = getRandomString();
        }, 3000);
    })


  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      {/* <Carousel slides={defaultSlides}/> */}
        <div>
            
        </div>
        <div>

        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            padding: 50,
          }}
        >
          <img
            src="https://big-records.s3.us-west-2.amazonaws.com/matt.jpeg"
            alt="Matt"
            style={{ width: 189, height: "auto", margin: 20 }}
          />
          <img
            src="https://big-records.s3.us-west-2.amazonaws.com/Webp.net-resizeimage+(1).jpg"
            alt="My Buddy Brian"
            style={{ width: 224, height: "auto", margin: 20 }}
          />
        </div>
    </div>
  );
};

export default Home;
