import React, { Component } from "react";
import Slider from "react-slick";
import { portfolioSlick2 } from "../../../page-demo/script";
import {Link} from "react-router-dom";


const PortfolioList = [
    {
        image: 'verrier',
        category: 'Development',
        title: 'Verrier'
    },
    {
        image: 'drippy',
        category: 'Development',
        title: 'Drippy'
    },
    {
        image: 'olive',
        category: 'Development',
        title: 'Olive'
    },
    {
        image: 'float',
        category: 'Development',
        title: 'Float'
    },
    {
        image: 'wimo',
        category: 'Development',
        title: 'Wimo'
    },
    {
        image: 'songs',
        category: 'Development',
        title: 'Songs'
    }
]

class Portfolio extends Component{
    render(){
        let title = 'Our Works',
        description = 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.';
        return(
            <React.Fragment>
                <div className="portfolio-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="section-title">
                                    <h2>{title}</h2>
                                    <p>{description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-slick-activation mt--70 mt_sm--40">
                        <Slider {...portfolioSlick2}>
                            {PortfolioList.map((value , index) => (
                                <div className="portfolio" key={index}>
                                    <div className="thumbnail-inner">
                                        <div className={`thumbnail ${value.image}`}></div>
                                        <div className={`bg-blr-image ${value.image}`}></div>
                                    </div>
                                    <div className="content">
                                        <div className="inner">
                                            <p>{value.category}</p>
                                            <h4 className="title"><a href="/portfolio-details">{value.title}</a></h4>
                                            <div className="portfolio-button">
                                                <a className="rn-btn" href="/portfolio-details">Case Study</a>
                                            </div>
                                        </div>
                                    </div>
                                    <Link className="link-overlay" to="/portfolio-details"></Link>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Portfolio;