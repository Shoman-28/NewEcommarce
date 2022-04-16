import React from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';
import standard17 from '../../image/blog/standard/17.jpg';
import standard10 from '../../image/blog/standard/10.jpg';
import standard20 from '../../image/blog/standard/20.jpg';
import standard21 from '../../image/blog/standard/21.jpg';

import small2 from '../../image/blog/small/2.jpg';
import small3 from '../../image/blog/small/3.jpg';
import small61 from '../../image/blog/small/6-1.jpg';
import small62 from '../../image/blog/small/6-2.jpg';
import small12 from '../../image/blog/small/12.jpg';
import small121 from '../../image/blog/small/12-1.jpg';
import small13 from '../../image/blog/small/13.jpg';
import small18 from '../../image/blog/small/18.jpg';
import small19 from '../../image/blog/small/19.jpg';

import smalls1  from '../../image/magazine/small/1.jpg';
import smalls2  from '../../image/magazine/small/2.jpg';
import smalls3  from '../../image/magazine/small/3.jpg';

import avater from "../../image/icons/avatar.jpg";

import portfolio from "../../image/portfolio/4/3.jpg";

const Blog = () => {
    return (
        <div>
            <section id="page-title">

<div class="container clearfix">
    <h1>Blog</h1>
    <span>Our Latest News in Timeline Layout</span>
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item active" aria-current="page">Blog</li>
    </ol>
</div>

</section>
 {/* #page-title end  */}

{/* 
==================Content===========================  */}
<section id="content">
<div class="content-wrap">
    <div class="container clearfix">

        <div class="row gutter-40 col-mb-80">
           
            {/* =================Post Content============================  */}
            <div class="postcontent col-lg-9 order-lg-last">

                 
                {/* =====================Posts========================  */}
                <div id="posts" class="post-timeline">

                    <div class="entry">
                        <div class="entry-timeline">
                            10<span>Feb</span>
                            <div class="timeline-divider"></div>
                        </div>
                        <div class="entry-image">
                            <a href="images/blog/full/17.jpg" data-lightbox="image"><img src={standard17} alt="Standard Post with Image"/></a>
                        </div>
                        <div class="entry-title">
                            <h2><a href="blog-single.html">This is a Standard post with a Preview Image</a></h2>
                        </div>
                        <div class="entry-meta">
                            <ul>
                                <li><a href="#"><i class="icon-user"></i> admin</a></li>
                                <li><i class="icon-folder-open"></i> <a href="#">General</a>, <a href="#">Media</a></li>
                                <li><a href="blog-single.html#comments"><i class="icon-comments"></i> 13 Comments</a></li>
                                <li><a href="#"><i class="icon-camera-retro"></i></a></li>
                            </ul>
                        </div>
                        <div class="entry-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, asperiores quod est tenetur in. Eligendi, deserunt, blanditiis est quisquam doloribus voluptate id aperiam ea ipsum magni aut perspiciatis rem voluptatibus officia eos rerum deleniti quae nihil facilis repellat atque vitae voluptatem libero at eveniet veritatis ab facere.</p>
                            <a href='/blogDetails' class="more-link">Read More</a>
                            {/* <Link as={Link} to="/blogDetails" class="more-link">Read More</Link> */}
                        </div>
                    </div>

                   <div class="entry">
                        <div class="entry-timeline">
                            16<span>Feb</span>
                            <div class="timeline-divider"></div>
                        </div>
                        <div class="entry-image">
                            <iframe src="https://player.vimeo.com/video/87701971" width="500" height="281" allow="autoplay; fullscreen" allowfullscreen></iframe>
                        </div>
                        <div class="entry-title">
                            <h2><a href="blog-single-full.html">This is a Standard post with an Embedded Video</a></h2>
                        </div>
                        <div class="entry-meta">
                            <ul>
                                <li><a href="#"><i class="icon-user"></i> admin</a></li>
                                <li><i class="icon-folder-open"></i> <a href="#">Videos</a>, <a href="#">News</a></li>
                                <li><a href="blog-single-full.html#comments"><i class="icon-comments"></i> 19 Comments</a></li>
                                <li><a href="#"><i class="icon-film"></i></a></li>
                            </ul>
                        </div>
                        <div class="entry-content">
                            <p>Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse beatae hic perferendis velit deserunt soluta iste repellendus officia in neque veniam debitis placeat quo unde reprehenderit eum facilis vitae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, reprehenderit!</p>
                            <Link as={Link} to="/blogDetails" class="more-link">Read More</Link>
                        </div>
                    </div>

                    <div class="entry">
                        <div class="entry-timeline">
                            24<span>Feb</span>
                            <div class="timeline-divider"></div>
                        </div>
                        <div class="entry-image">
                            <div class="fslider" data-arrows="false" data-lightbox="gallery">
                                <div class="flexslider">
                                    <div class="slider-wrap">
                                        <div class="slide"><a href="images/blog/full/10.jpg" data-lightbox="gallery-item"><img src={standard10} alt="Standard Post with Gallery"/></a></div>
                                        <div class="slide"><a href="images/blog/full/20.jpg" data-lightbox="gallery-item"><img src={standard20} alt="Standard Post with Gallery"/></a></div>
                                        <div class="slide"><a href="images/blog/full/21.jpg" data-lightbox="gallery-item"><img src={standard21} alt="Standard Post with Gallery"/></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="entry-title">
                            <h2><a href="blog-single-small.html">This is a Standard post with a Slider Gallery</a></h2>
                        </div>
                        <div class="entry-meta">
                            <ul>
                                <li><a href="#"><i class="icon-user"></i> admin</a></li>
                                <li><i class="icon-folder-open"></i> <a href="#">Gallery</a>, <a href="#">Media</a></li>
                                <li><a href="blog-single-small.html#comments"><i class="icon-comments"></i> 21 Comments</a></li>
                                <li><a href="#"><i class="icon-picture"></i></a></li>
                            </ul>
                        </div>
                        <div class="entry-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, voluptatem, dolorem animi nisi autem blanditiis enim culpa reiciendis et explicabo tenetur voluptate rerum molestiae eaque possimus exercitationem eligendi fuga. Maiores, sunt eveniet doloremque porro hic exercitationem distinctio sequi adipisci. Nulla, fuga perferendis voluptatum beatae voluptate architecto laboriosam provident deserunt. Saepe!</p>
                            <Link as={Link} to="/blogDetails" class="more-link">Read More</Link>
                        </div>
                    </div>

                    <div class="entry">
                        <div class="entry-timeline">
                            3<span>Mar</span>
                            <div class="timeline-divider"></div>
                        </div>
                        <div class="entry-image">
                            <blockquote>
                                <p>"When you are courting a nice girl an hour seems like a second. When you sit on a red-hot cinder a second seems like an hour. That's relativity."</p>
                                <footer>Albert Einstein</footer>
                            </blockquote>
                        </div>
                        <div class="entry-meta">
                            <ul>
                                <li><a href="#"><i class="icon-user"></i> admin</a></li>
                                <li><i class="icon-folder-open"></i> <a href="#">Quotes</a>, <a href="#">People</a></li>
                                <li><a href="blog-single.html#comments"><i class="icon-comments"></i> 23 Comments</a></li>
                                <li><a href="#"><i class="icon-quote-left"></i></a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="entry">
                        <div class="entry-timeline">
                            9<span>Mar</span>
                            <div class="timeline-divider"></div>
                        </div>
                        <div class="entry-image clearfix">
                            <div class="portfolio-single-image masonry-thumbs grid-container grid-6" data-big="3" data-lightbox="gallery">
                                <a class="grid-item" href="images/blog/full/2.jpg" data-lightbox="gallery-item"><img src={small2} alt="Image"/></a>
                                <a class="grid-item" href="images/blog/full/3.jpg" data-lightbox="gallery-item"><img src={small3} alt="Image"/></a>
                                <a class="grid-item" href="images/blog/full/6-1.jpg" data-lightbox="gallery-item"><img src={small61} alt="Image"/></a>
                                <a class="grid-item" href="images/blog/full/6-2.jpg" data-lightbox="gallery-item"><img src={small62} alt="Image"/></a>
                                <a class="grid-item" href="images/blog/full/12.jpg" data-lightbox="gallery-item"><img src={small12} alt="Image"/></a>
                                <a class="grid-item" href="images/blog/full/12-1.jpg" data-lightbox="gallery-item"><img src={small121} alt="Image"/></a>
                                <a class="grid-item" href="images/blog/full/13.jpg" data-lightbox="gallery-item"><img src={small13} alt="Image"/></a>
                                <a class="grid-item" href="images/blog/full/18.jpg" data-lightbox="gallery-item"><img src={small18} alt="Image"/></a>
                                <a class="grid-item" href="images/blog/full/19.jpg" data-lightbox="gallery-item"><img src={small19} alt="Image"/></a>
                            </div>
                        </div>
                        <div class="entry-title">
                            <h2><a href="blog-single-thumbs.html">This is a Standard post with Masonry Thumbs Gallery</a></h2>
                        </div>
                        <div class="entry-meta">
                            <ul>
                                <li><a href="#"><i class="icon-user"></i> admin</a></li>
                                <li><i class="icon-folder-open"></i> <a href="#">Gallery</a>, <a href="#">Media</a></li>
                                <li><a href="blog-single-thumbs.html#comments"><i class="icon-comments"></i> 21 Comments</a></li>
                                <li><a href="#"><i class="icon-picture"></i></a></li>
                            </ul>
                        </div>
                        <div class="entry-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, voluptatem, dolorem animi nisi autem blanditiis enim culpa reiciendis et explicabo tenetur voluptate rerum molestiae eaque possimus exercitationem eligendi fuga. Maiores, sunt eveniet doloremque porro hic exercitationem distinctio sequi adipisci. Nulla, fuga perferendis voluptatum beatae voluptate architecto laboriosam provident deserunt. Saepe!</p>
                            <Link as={Link} to="/blogDetails" class="more-link">Read More</Link>
                        </div>
                    </div>

                    <div class="entry">
                        <div class="entry-timeline">
                            17<span>Mar</span>
                            <div class="timeline-divider"></div>
                        </div>
                        <div class="entry-image">
                            <a href="https://themeforest.net/" class="entry-link" target="_blank">
                                Themeforest.net
                                <span>- https://themeforest.net</span>
                            </a>
                        </div>
                        <div class="entry-meta">
                            <ul>
                                <li><a href="#"><i class="icon-user"></i> admin</a></li>
                                <li><i class="icon-folder-open"></i> <a href="#">Links</a>, <a href="#">Suggestions</a></li>
                                <li><a href="blog-single.html#comments"><i class="icon-comments"></i> 26 Comments</a></li>
                                <li><a href="#"><i class="icon-link"></i></a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="entry">
                        <div class="entry-timeline">
                            21<span>Mar</span>
                            <div class="timeline-divider"></div>
                        </div>
                        <div class="entry-image">
                            <div class="card">
                                <div class="card-body">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, fuga optio voluptatibus saepe tenetur aliquam debitis eos accusantium! Vitae, hic, atque aliquid repellendus accusantium laudantium minus eaque quibusdam ratione sapiente.
                                </div>
                            </div>
                        </div>
                        <div class="entry-meta">
                            <ul>
                                <li><a href="#"><i class="icon-user"></i> admin</a></li>
                                <li><i class="icon-folder-open"></i> <a href="#">Status</a>, <a href="#">News</a></li>
                                <li><a href="blog-single.html#comments"><i class="icon-comments"></i> 11 Comments</a></li>
                                <li><a href="#"><i class="icon-align-justify2"></i></a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="entry">
                        <div class="entry-timeline">
                            23<span>Apr</span>
                            <div class="timeline-divider"></div>
                        </div>
                        <div class="entry-image clearfix">
                            <iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/301161123&amp;auto_play=false&amp;hide_related=true&amp;visual=true"></iframe>
                        </div>
                        <div class="entry-title">
                            <h2><a href="blog-single.html">This is an Embedded Audio Post</a></h2>
                        </div>
                        <div class="entry-meta">
                            <ul>
                                <li><a href="#"><i class="icon-user"></i> admin</a></li>
                                <li><i class="icon-folder-open"></i> <a href="#">Audio</a>, <a href="#">General</a></li>
                                <li><a href="blog-single.html#comments"><i class="icon-comments"></i> 16 Comments</a></li>
                                <li><a href="#"><i class="icon-music2"></i></a></li>
                            </ul>
                        </div>
                        <div class="entry-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, voluptatem, dolorem animi nisi autem blanditiis enim culpa reiciendis et explicabo tenetur voluptate rerum molestiae eaque possimus exercitationem eligendi fuga. Maiores, sunt eveniet doloremque porro hic exercitationem distinctio sequi adipisci. Nulla, fuga perferendis voluptatum beatae voluptate architecto laboriosam provident deserunt. Saepe!</p>
                            <Link as={Link} to="/blogDetails" class="more-link">Read More</Link>
                        </div>
                    </div>

                </div>
                {/* -- #posts end -- */}

            </div>
            {/* -- .postcontent end -- */}

            {/* -- Sidebar
            ============================================= --*/}
            <div class="sidebar col-lg-3">
                <div class="sidebar-widgets-wrap">

                    <div class="widget widget-twitter-feed clearfix">

                        <h4>Twitter Feed</h4>
                        <ul class="iconlist twitter-feed" data-username="envato" data-count="2">
                            <li></li>
                        </ul>

                        <a href="#" class="btn btn-secondary btn-sm float-end">Follow Us on Twitter</a>

                    </div>

                    <div class="widget clearfix">

                        <h4>Flickr Photostream</h4>
                        <div id="flickr-widget" class="flickr-feed masonry-thumbs grid-container" data-id="613394@N22" data-count="16" data-type="group" data-lightbox="gallery"></div>

                    </div>

                    <div class="widget clearfix">

                        <div class="tabs mb-0 clearfix" id="sidebar-tabs">

                            <ul class="tab-nav clearfix">
                                <li><a href="#tabs-1">Popular</a></li>
                                <li><a href="#tabs-2">Recent</a></li>
                                <li><a href="#tabs-3"><i class="icon-comments-alt me-0"></i></a></li>
                            </ul>

                            <div class="tab-container">

                                <div class="tab-content clearfix" id="tabs-1">
                                    <div class="posts-sm row col-mb-30" id="popular-post-list-sidebar">
                                        <div class="entry col-12">
                                            <div class="grid-inner row g-0">
                                                <div class="col-auto">
                                                    <div class="entry-image">
                                                        <a href="#"><img class="rounded-circle" src={smalls3} alt="Image"/></a>
                                                    </div>
                                                </div>
                                                <div class="col ps-3">
                                                    <div class="entry-title">
                                                        <h4><a href="#">Lorem ipsum dolor sit amet, consectetur</a></h4>
                                                    </div>
                                                    <div class="entry-meta">
                                                        <ul>
                                                            <li><i class="icon-comments-alt"></i> 35 Comments</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="entry col-12">
                                            <div class="grid-inner row g-0">
                                                <div class="col-auto">
                                                    <div class="entry-image">
                                                        <a href="#"><img class="rounded-circle" src={smalls2} alt="Image"/></a>
                                                    </div>
                                                </div>
                                                <div class="col ps-3">
                                                    <div class="entry-title">
                                                        <h4><a href="#">Elit Assumenda vel amet dolorum quasi</a></h4>
                                                    </div>
                                                    <div class="entry-meta">
                                                        <ul>
                                                            <li><i class="icon-comments-alt"></i> 24 Comments</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="entry col-12">
                                            <div class="grid-inner row g-0">
                                                <div class="col-auto">
                                                    <div class="entry-image">
                                                        <a href="#"><img class="rounded-circle" src={smalls1} alt="Image"/></a>
                                                    </div>
                                                </div>
                                                <div class="col ps-3">
                                                    <div class="entry-title">
                                                        <h4><a href="#">Debitis nihil placeat, illum est nisi</a></h4>
                                                    </div>
                                                    <div class="entry-meta">
                                                        <ul>
                                                            <li><i class="icon-comments-alt"></i> 19 Comments</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-content clearfix" id="tabs-2">
                                    <div class="posts-sm row col-mb-30" id="recent-post-list-sidebar">
                                        <div class="entry col-12">
                                            <div class="grid-inner row g-0">
                                                <div class="col-auto">
                                                    <div class="entry-image">
                                                        <a href="#"><img class="rounded-circle" src={smalls1} alt="Image"/></a>
                                                    </div>
                                                </div>
                                                <div class="col ps-3">
                                                    <div class="entry-title">
                                                        <h4><a href="#">Lorem ipsum dolor sit amet, consectetur</a></h4>
                                                    </div>
                                                    <div class="entry-meta">
                                                        <ul>
                                                            <li>10th July 2021</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="entry col-12">
                                            <div class="grid-inner row g-0">
                                                <div class="col-auto">
                                                    <div class="entry-image">
                                                        <a href="#"><img class="rounded-circle" src={smalls2} alt="Image"/></a>
                                                    </div>
                                                </div>
                                                <div class="col ps-3">
                                                    <div class="entry-title">
                                                        <h4><a href="#">Elit Assumenda vel amet dolorum quasi</a></h4>
                                                    </div>
                                                    <div class="entry-meta">
                                                        <ul>
                                                            <li>10th July 2021</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="entry col-12">
                                            <div class="grid-inner row g-0">
                                                <div class="col-auto">
                                                    <div class="entry-image">
                                                        <a href="#"><img class="rounded-circle" src={smalls3} alt="Image"/></a>
                                                    </div>
                                                </div>
                                                <div class="col ps-3">
                                                    <div class="entry-title">
                                                        <h4><a href="#">Debitis nihil placeat, illum est nisi</a></h4>
                                                    </div>
                                                    <div class="entry-meta">
                                                        <ul>
                                                            <li>10th July 2021</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-content clearfix" id="tabs-3">
                                    <div class="posts-sm row col-mb-30" id="recent-comments-list-sidebar">
                                        <div class="entry col-12">
                                            <div class="grid-inner row g-0">
                                                <div class="col-auto">
                                                    <div class="entry-image">
                                                        <a href="#"><img class="rounded-circle" src="images/icons/avatar.jpg" alt="User Avatar"/></a>
                                                    </div>
                                                </div>
                                                <div class="col ps-3">
                                                    <strong>John Doe:</strong> Veritatis recusandae sunt repellat distinctio...
                                                </div>
                                            </div>
                                        </div>

                                        <div class="entry col-12">
                                            <div class="grid-inner row g-0">
                                                <div class="col-auto">
                                                    <div class="entry-image">
                                                        <a href="#"><img class="rounded-circle" src={avater} alt="User Avatar"/></a>
                                                    </div>
                                                </div>
                                                <div class="col ps-3">
                                                    <strong>Mary Jane:</strong> Possimus libero, earum officia architecto maiores....
                                                </div>
                                            </div>
                                        </div>

                                        <div class="entry col-12">
                                            <div class="grid-inner row g-0">
                                                <div class="col-auto">
                                                    <div class="entry-image">
                                                        <a href="#"><img class="rounded-circle" src={avater} alt="User Avatar"/></a>
                                                    </div>
                                                </div>
                                                <div class="col ps-3">
                                                    <strong>Site Admin:</strong> Deleniti magni labore laboriosam odio...
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                    <div class="widget clearfix">

                        <h4>Portfolio Carousel</h4>
                        <div id="oc-portfolio-sidebar" class="owl-carousel carousel-widget" data-items="1" data-margin="10" data-loop="true" data-nav="false" data-autoplay="5000">

                            <div class="oc-item">
                                <div class="portfolio-item">
                                    <div class="portfolio-image">
                                        <a href="#">
                                            <img src={portfolio} alt="Mac Sunglasses"/>
                                        </a>
                                        <div class="bg-overlay">
                                            <div class="bg-overlay-content dark" data-hover-animate="fadeIn" data-hover-speed="350">
                                                <a href="https://vimeo.com/89396394" class="overlay-trigger-icon bg-light text-dark" data-hover-animate="zoomIn" data-hover-speed="350" data-lightbox="iframe"><i class="icon-line-play"></i></a>
                                            </div>
                                            <div class="bg-overlay-bg dark" data-hover-animate="fadeIn" data-hover-speed="350"></div>
                                        </div>
                                    </div>
                                    <div class="portfolio-desc text-center pb-0">
                                        <h3><a href="portfolio-single-video.html">Mac Sunglasses</a></h3>
                                        <span><a href="#">Graphics</a>, <a href="#">UI Elements</a></span>
                                    </div>
                                </div>
                            </div>

                            <div class="oc-item">
                                <div class="portfolio-item">
                                    <div class="portfolio-image">
                                        <a href="portfolio-single.html">
                                            <img src={portfolio} alt="Open Imagination"/>
                                        </a>
                                        <div class="bg-overlay">
                                            <div class="bg-overlay-content dark" data-hover-animate="fadeIn" data-hover-speed="350">
                                                <a href="images/blog/full/1.jpg" class="overlay-trigger-icon bg-light text-dark" data-hover-animate="zoomIn" data-hover-speed="350" data-lightbox="image"><i class="icon-line-plus"></i></a>
                                            </div>
                                            <div class="bg-overlay-bg dark" data-hover-animate="fadeIn" data-hover-speed="350"></div>
                                        </div>
                                    </div>
                                    <div class="portfolio-desc text-center pb-0">
                                        <h3><a href="portfolio-single.html">Open Imagination</a></h3>
                                        <span><a href="#">Media</a>, <a href="#">Icons</a></span>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div class="widget clearfix">

                        <h4>Tag Cloud</h4>
                        <div class="tagcloud">
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

            </div>
        </div>

    </div>
</div>
</section>

        </div>
    );
};

export default Blog;