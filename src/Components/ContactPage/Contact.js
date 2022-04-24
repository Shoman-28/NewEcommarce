import React from 'react';
import './Contact.css';
import {
    faMapMarkedAlt,
    faPhone,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSkype, faTwitter } from '@fortawesome/free-brands-svg-icons';
const Contact = () => {
    return (
		<section id="content">
			<div className="content-wrap">
				<div className="container clearfix">

					<div className="row align-items-stretch col-mb-50 mb-0">
						{/* -- Contact Form
						============================================= -- */}
						<div className="col-lg-6">

							<div className="fancy-title title-border">
								<h3>Send us an Email</h3>
							</div>

							<div className="form-widget">

								<div className="form-result"></div>

								<form className="mb-0" id="template-contactform" name="template-contactform" method="post">

									<div className="form-process">
										<div className="css3-spinner">
											<div className="css3-spinner-scaler"></div>
										</div>
									</div>

									<div className="row">
										<div className="col-md-4 form-group">
											<label for="template-contactform-name">Name <small>*</small></label>
											<input type="text" id="template-contactform-name" name="template-contactform-name" className="sm-form-control required" />
										</div>

										<div className="col-md-4 form-group">
											<label for="template-contactform-email">Email <small>*</small></label>
											<input type="email" id="template-contactform-email" name="template-contactform-email" className="required email sm-form-control" />
										</div>

										<div className="col-md-4 form-group">
											<label for="template-contactform-phone">Phone</label>
											<input type="text" id="template-contactform-phone" name="template-contactform-phone" className="sm-form-control" />
										</div>

										<div className="w-100"></div>

										<div className="col-md-8 form-group">
											<label for="template-contactform-subject">Subject <small>*</small></label>
											
											<input type="text" id="template-contactform-subject"   className="required sm-form-control" />
										</div>

										<div className="col-md-4 form-group">
											<label for="template-contactform-service">Services</label>
											<select id="template-contactform-service" name="template-contactform-service" className="sm-form-control">
												<option value="">-- Select One --</option>
												<option value="Wordpress">Wordpress</option>
												<option value="PHP / MySQL">PHP / MySQL</option>
												<option value="HTML5 / CSS3">HTML5 / CSS3</option>
												<option value="Graphic Design">Graphic Design</option>
											</select>
										</div>

										<div className="w-100"></div>

										<div className="col-12 form-group">
											<label for="template-contactform-message">Message <small>*</small></label>
											<textarea className="required sm-form-control" id="template-contactform-message" name="template-contactform-message" rows="6" cols="30"></textarea>
										</div>

										<div className="col-12 form-group d-none">
											<input type="text" id="template-contactform-botcheck" name="template-contactform-botcheck" className="sm-form-control" />
										</div>

										<div className="col-12 form-group">
											<button name="submit" type="submit" id="submit-button" tabindex="5" value="Submit" className="button button-3d m-0">Submit Comment</button>
										</div>
									</div>

									<input type="hidden" name="prefix" value="template-contactform-"/>

								</form>
							</div>

						</div>
                        {/* <!-- Contact Form End --> */}

						{/*-- Google Map
						 ============================================= -- */}
						<div className="col-lg-6 min-vh-50">
							<div className="gmap h-100" data-latitude="-37.813629" data-longitude="144.963058" data-markers='[{latitude:-37.813629, longitude:144.963058, html: "<div className=\"p-2\" style=\"width: 300px;\"><h4 className=\"mb-2\">Hi! We are <span>Envato!</span></h4><p className=\"mb-0\" style=\"font-size:1rem;\">Our mission is to help people to <strong>earn</strong> and to <strong>learn</strong> online. We operate <strong>marketplaces</strong> where hundreds of thousands of people buy and sell digital goods every day.</p></div>", icon:{ image: "images/icons/map-icon-red.png", iconsize: [32, 39], iconanchor: [32,39] } }]'></div>
						</div>
                        {/* <!-- Google Map End --> */}
					</div>

					{/* -- Contact Info
					============================================= -- */}
					<div className="row col-mb-50">
						<div className="col-sm-6 col-lg-3">
							<div className="feature-box fbox-center fbox-bg fbox-plain">
								<div className="fbox-icon">
									<a href="#" id='contactIcon'><FontAwesomeIcon classNameName="card-star-icon" icon={faMapMarkedAlt} /></a>
								</div>
								<div className="fbox-content">
									<h3>Our Headquarters<span className="subtitle">Dhaka, Bangladesh</span></h3>
								</div>
							</div>
						</div>

						<div className="col-sm-6 col-lg-3">
							<div className="feature-box fbox-center fbox-bg fbox-plain">
								<div className="fbox-icon">
									<a href="#" id='contactIcon'><FontAwesomeIcon classNameName="card-star-icon" icon={faPhone} /></a>
								</div>
								<div className="fbox-content">
									<h3>Speak to Us<span className="subtitle">(+880) 1636-130825</span></h3>
								</div>
							</div>
						</div>

						<div className="col-sm-6 col-lg-3">
							<div className="feature-box fbox-center fbox-bg fbox-plain">
								<div className="fbox-icon">
									<a href="#" id='contactIcon'>
                                    <FontAwesomeIcon classNameName="card-star-icon" icon={faSkype} />
                                        
                                    
                                    </a>
								</div>
								<div className="fbox-content">
									<h3>Make a Video Call<span className="subtitle">OnSkype</span></h3>
								</div>
							</div>
						</div>

						<div className="col-sm-6 col-lg-3">
							<div className="feature-box fbox-center fbox-bg fbox-plain">
								<div className="fbox-icon">
									<a href="#" id='contactIcon'><FontAwesomeIcon classNameName="card-star-icon" icon={faTwitter} /></a>
								</div>
								<div className="fbox-content">
									<h3>Follow on Twitter<span className="subtitle">2.3M Followers</span></h3>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</section>
       
    );
};

export default Contact;