import React from 'react';

const SideCard = (porps) => {
    const {img, details, comment}=porps.sidvarData;
  
    return (
        <div className="entry col-12">
            <div className="grid-inner row g-0">
                <div className="col-auto">
                    <div className="entry-image">
                        <a href="#">
                            <img
                            className="rounded-circle"
                            src={img}
                            alt="Image"
                            />
                        </a>
                    </div>
                </div>
                <div className="col ps-3">
                    <div className="entry-title">
                        <h4>
                            <a href="#">
                            {details}
                            </a>
                        </h4>
                    </div>
                    <div className="entry-meta">
                        <ul>
                            <li>
                                <i className="icon-comments-alt"></i> {comment}
                                Comments
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideCard;