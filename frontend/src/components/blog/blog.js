import "./blog.css"

import React from 'react'

const Blog = () => {
  return (
    <div className="blog__container">
      <h2 className="blog__header__title">Blog</h2>
      <div className="blog__section">
        <div className="blog__header__section">
          <div className="blog__title">Blog Title</div>
          <div className="divider"></div>
          <div className="blog__writer-name test">Binaya Khadka</div>
          <div className="blog__date test">Jun 25, 2023</div>
        </div>
        <div className="blog__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quam velit sint iusto tenetur neque aliquam, magnam ratione culpa fugit atque distinctio veritatis molestiae! Unde aliquid blanditiis temporibus quis neque.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit vero aliquam veniam facere libero nihil assumenda earum itaque, vitae dolore explicabo atque tenetur exercitationem nam, quidem ipsam eum ipsum quasi.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet deleniti consequuntur libero rem, facere blanditiis aliquam laborum voluptas magnam itaque! Enim deserunt facilis voluptate similique rerum eligendi exercitationem nam in.
        </div>

      </div>
    </div>
  )
}

export default Blog