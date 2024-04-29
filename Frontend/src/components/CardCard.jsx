import React from 'react';
import {Row,Col} from 'react-bootstrap';

const BoxWrapper = () => {
    return (
        
        <div className="box-wrapper">
            <figure className="shape-box shape-box_half">
                <img src="https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="" />
                <div className="brk-abs-overlay z-index-0 bg-black opacity-60"></div>
                <figcaption>
                    <div className="show-cont">
                        <h3 className="card-no">01</h3>
                        <h4 className="card-main-title">Design</h4>
                    </div>
                    <p className="card-content">Customer interactions, study and analysis of company branding through creative briefs. Creation of mock-up designs by using UI tools that simulate actions and pre-visualize the reactions.</p>
                    <a href="#" className="read-more-btn">Read More</a>
                </figcaption>
                <span className="after"></span>
            </figure>
            <figure className="shape-box shape-box_half">
                <img src="https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80" alt="" />
                <div className="brk-abs-overlay z-index-0 bg-black opacity-60"></div>
                <figcaption>
                    <div className="show-cont">
                        <h3 className="card-no">02</h3>
                        <h4 className="card-main-title">DEVELOP</h4>
                    </div>
                    <p className="card-content">Customer interactions, study and analysis of company branding through creative briefs. Creation of mock-up designs by using UI tools that simulate actions and pre-visualize the reactions.</p>
                    <a href="#" className="read-more-btn">Read More</a>
                </figcaption>
                <span className="after"></span>
            </figure>
            <figure className="shape-box shape-box_half">
                <img src="https://images.unsplash.com/photo-1498075702571-ecb018f3752d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=757&q=80" alt="" />
                <div className="brk-abs-overlay z-index-0 bg-black opacity-60"></div>
                <figcaption>
                    <div className="show-cont">
                        <h3 className="card-no">03</h3>
                        <h4 className="card-main-title">RESEARCH</h4>
                    </div>
                    <p className="card-content">Customer interactions, study and analysis of company branding through creative briefs. Creation of mock-up designs by using UI tools that simulate actions and pre-visualize the reactions.</p>
                    <a href="#" className="read-more-btn">Read More</a>
                </figcaption>
                <span className="after"></span>
            </figure>
            
        </div>
        
    );
};

export default BoxWrapper;
