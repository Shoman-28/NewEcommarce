import React from 'react';

import SideCard from './SideCard';
import { sidevar } from './../../common/data/BlogData';

const Sidevar = () => {

   
   
  
    return (
        <div className="sidebar-widgets-wrap">

                  <div className="widget clearfix">
                    <div className="tabs mb-0 clearfix" id="sidebar-tabs">
                      <ul className="tab-nav clearfix">
                        <li>
                          <a href="#tabs-1">Popular</a>
                        </li>
                        <li>
                          <a href="#tabs-2">Recent</a>
                        </li>
                        <li>
                          <a href="#tabs-3">
                            <i className="icon-comments-alt me-0"></i>
                          </a>
                        </li>
                      </ul>

                      <div className="tab-container">
                        <div className="tab-content clearfix" id="tabs-1">
                          <div
                            className="posts-sm row col-mb-30"
                            id="popular-post-list-sidebar"
                          >
                            {
                                sidevar.map((s)=>(
                                    <SideCard sidvarData={s}/>
                                    ))
                            }  
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="widget clearfix">
                    <h4>Tag Cloud</h4>
                    <div className="tagcloud">
                      <a href="#">general</a>
                      <a href="#">videos</a>
                      <a href="#">music</a>
                      <a href="#">media</a>
                      <a href="#">photography</a>
                      <a href="#">parallax</a>
                      <a href="#">ecommerce</a>
                      <a href="#">terms</a>
                      <a href="#">coupons</a>
                      <a href="#">modern</a>
                    </div>
                  </div>
                </div>
    );
};

export default Sidevar;