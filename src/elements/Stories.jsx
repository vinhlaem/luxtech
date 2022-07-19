import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";


import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";

import FooterTwo from "../component/footer/FooterTwo";



class PortfolioDetails extends Component{
    constructor () {
        super()
        this.state = {
          isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal () {
        this.setState({isOpen: true})
    }
    render(){
        return(
            <React.Fragment>
                <PageHelmet pageTitle='Stories' />

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
                
                {/* Start Breadcrump Area */}
                <div className="rn-page-title-area pt--120 pb--190 bg-color"  data-black-overlay="7">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title theme-gradient">Float - Build Courses With Notion</h2>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Breadcrump Area */}

                {/* Start Portfolio Details */}
                <div className="rn-portfolio-details ptb--80 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="portfolio-details">
                                    <div className="inner">
                                        <h2>Float</h2>
                                        <p className="subtitle">Float turns your docs in Notion into a fully operational online course in minutes. All the power of a traditional course platform, built in the same place you take notes.</p>
                                        
                                    </div>
                                        <div className="row sercice-details-content align-items-center">
                                            <div className="col-lg-6 col-12">
                                                <div className="thumb">
                                                    <img className="w-100" src="/assets/images/portfolio/newSource1.png" alt="Service Images"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <div className="details mt_md--30 mt_sm--30">
                                                    <h3>Paste your Notion doc link</h3>
                                                    <p>All we need to create a course is the link to your public Notion doc.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row sercice-details-content align-items-center">
                                            <div className="col-lg-6 col-12">
                                               
                                                <div className="details mt_md--30 mt_sm--30">
                                                    <h3>Set up your course page</h3>
                                                    <p>Next, you can build a quick landing page to collect pre-sales or payments. 
                                                        You can also set a custom domain, preview the course, 
                                                        and tackle SEO..</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12">
                                            <div className="thumb">
                                                    <img className="w-100" src="/assets/images/portfolio/newSource2.png" alt="Service Images"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row sercice-details-content align-items-center">
                                            <div className="col-lg-6 col-12">
                                                <div className="thumb">
                                                    <img className="w-100" src="/assets/images/portfolio/newSource3.png" alt="Service Images"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <div className="details mt_md--30 mt_sm--30">
                                                    <h3>Hook up payments</h3>
                                                    <p>Last step is to choose a payment integration that works for you to get paid through. 
                                                        We currently have options for Stripe and Gumroad..</p>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Portfolio Details */}
                

                {/* Start Related Work */}
                <div className="portfolio-related-work pb--80 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <span className="theme-color font--18 fontWeight600">Related Work</span>
                                    <h2>Our More Projects</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row mt--10">
                            {/* Start Single Portfolio */}
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="related-work text-center ">
                                    <div className="thumb">
                                            <img src="/assets/images/portfolio/olive.jpg" alt="Portfolio-images"/>
                                    </div>
                                    <div className="inner">
                                        <h4>Olive</h4>
                                        <span className="category">Development</span>
                                    </div>
                                </div>
                            </div>
                             {/* End Single Portfolio */}
                            {/* Start Single Portfolio */}
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="related-work text-center">
                                    <div className="thumb">
                                            <img src="/assets/images/portfolio/drippy.jpg" alt="Portfolio-images"/>
                                    </div>
                                    <div className="inner">
                                        <h4>Drippy</h4>
                                        <span className="category">Development</span>
                                    </div>
                                </div>
                            </div>
                             {/* End Single Portfolio */}
                        </div>
                    </div>
                </div>
                {/* End Related Work */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                
                <FooterTwo />  


            </React.Fragment>
        )
    }
}
export default PortfolioDetails;
