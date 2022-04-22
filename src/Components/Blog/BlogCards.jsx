import React from 'react';

const BlogCards = (props) => {
    const {timeline, imag, titel, peragraf, comment, redMor}=props.blogData;
    return (
        <div>
            
            <div class="entry">
                    <div class="entry-timeline">
                      <span>{timeline}</span>
                      <div class="timeline-divider"></div>
                    </div>
                    <div class="entry-image">
                      <a href="images/blog/full/17.jpg" data-lightbox="image">
                        <img src={imag} alt="Standard Post with Image" />
                      </a>
                    </div>
                    <div class="entry-title">
                      <h2>
                        <a href="blog-single.html">
                          {titel}
                        </a>
                      </h2>
                    </div>

                    <div class="entry-content">
                      <p>
                       {peragraf}
                      </p>

                      <div class="entry-meta">
                        <ul>
                          <li>
                            <a href="blog-single.html#comments">
                              <i class="icon-comments"></i> {comment}
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="icon-camera-retro"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <a href="/blogDetails" class="more-link">
                       {redMor}
                      </a>

                      {/* <Link as={Link} to="/blogDetails" class="more-link">Read More</Link> */}
                    </div>
                  </div>
        </div>
    );
};

export default BlogCards;