import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "../blog/blog";
import { BASE_URL } from "../../services/helper";
const Homepage = () => {
  const [blogs, setBlogs] = useState([]);
  //get blogs
  const getAllBlogs = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/api/blog/all-blog`);
      if (data?.success) {
        setBlogs(data?.blogs);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllBlogs();
  }, []);
  return (
    <div>
      {blogs &&
        blogs.map((blog) => (
          <BlogCard
            id={blog?._id}
            author={blog?.author}
            title={blog?.title}
            description={blog?.description}
            time={blog.createdAt}
          />
        ))}
    </div>
  );
};

export default Homepage;
