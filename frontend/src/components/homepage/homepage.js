import React from 'react'
import { Header } from "../header/header"
import "./homepage.css"
import Footer from '../footer/footer'
import { Link, useParams } from 'react-router-dom'

const Homepage = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div className='main__page'>
      <Header />
      <div className="sectionInner">
        <div className="blog-content">
          <div className="blog-title">Blog Title</div>
          <div className="blog-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque qui ipsam ipsum nam quam porro repellendus aliquid dolor cum aliquam eligendi adipisci, officia quaerat sapiente, esse tempore? Commodi, repudiandae ducimus?
            <br></br><Link to="/blog" className="textAlert">See More</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Homepage