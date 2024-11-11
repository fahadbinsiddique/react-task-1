import React from 'react'
import "./banner.css" 
import img from "../../assets/img/carousel-1.jpg"

const Banner = () => {
  return (
    <section>
        <div className='banner'>
            <h4>TRANSPORT & LOGISTICS SOLUTION</h4>
            <h1>#1 Place For Your <span> Logistics</span><br />
            Solution</h1>
            
            <p>
            Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.
            </p> 
            <button className='read'>Read More</button>
            <button className='free'>Free Quote</button>
            

        </div>
    </section>
  )
}

export default Banner
