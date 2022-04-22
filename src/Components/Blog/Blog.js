import React from "react";
import "./Blog.css";
import BlogData from "../../common/data/BlogData";
import BlogCards from "./BlogCards";
import Sidevar from './Sidevar';
const Blog = () => {
  return (
    <div>
      <section id="page-title">
        <div className="container clearfix">
          <h1>Blog</h1>
          <span>Our Latest News in Timeline Layout</span>
        </div>
      </section>

      {/*=================Content===========================  */}
      <section id="content">
        <div className="content-wrap">
          <div className="container clearfix">
            <div className="row gutter-40 col-mb-80">

              {/* =================Post Content============================  */}
              <div className="postcontent col-lg-9 order-lg-last">
                
                <div id="posts" className="post-timeline">

                    {
                    BlogData.map((B)=>(
                    <BlogCards blogData={B}/>   
                    ))
                    }

                </div>
              </div>

              {/* -- Sidebar ============================================= --*/}
           
              <div className="sidebar col-lg-3">
                <Sidevar/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
