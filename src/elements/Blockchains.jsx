import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";

import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Slider from "react-slick";
import {slickDot} from "../page-demo/script"
import FooterTwo from "../component/footer/FooterTwo";


const list = [
    
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

class Blockchains extends Component{
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
                
                {/* Start Pagehelmet  */}
                <PageHelmet pageTitle='Blockchains Development' />
                {/* End Pagehelmet  */}

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

                {/* Start Breadcrump Area */}
                <div className="rn-page-title-area pt--120 pb--190 bg-color"  data-black-overlay="5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title theme-gradient">BLOCKCHAINS DEVELOPMENT</h2>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Breadcrump Area */}

                {/* Start Page Wrapper */}
                <div className="rn-service-details ptb--50 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="service-details-inner">
                                    <div className="inner">
                                        {/* Start Single Area */}
                                        <div className="row sercice-details-content pb--80 align-items-center">
                                            <div className="col-lg-6 col-12">
                                                <div className="thumb">
                                                    <img className="w-100" src="/assets/images/service/blockchains.png" alt="Service Images"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <div className="details mt_md--30 mt_sm--30">
                                                    <p>A blockchain is a decentralized digital ledger that saves transactions on thousands of computers around the globe. 
                                                        These are registered in a way that inhibits their subsequent modification. 
                                                        Blockchain technology increases the security and speeds up the exchange of information in a way that is cost-effective and more transparent. 
                                                        It also dispenses with third parties whose main role was to provide a trust and certification element in transactions 
                                                        (such as notaries and banks).</p>
                                                
                                                    <h4 className="title">OUR SOLUTION</h4>
                                                    <ul className="liststyle">
                                                        <li>Blockchain deployment and development with web3, solidity, cakeshop and truffle.</li>
                                                        <li>Web platforms using Phoneix / Elixir and serverless architecture..</li>
                                                        <li>Enterprise native mobile apps with Swift and Objective-C.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Single Area */}

                                        {/* Start Single Area */}
                                        <div className="row sercice-details-content align-items-center">
                                            <div className="col-lg-12 col-12 order-2 order-lg-1">
                                                <div className="details-product" >
                                                   <h2>OUR PRODUCTS</h2>
                                                   <div className="col-lg-12">
                                    <div className="slick-space-gutter--15 slickdot--20">
                                        <Slider {...slickDot}>
                                            {list.map((value , index) => (
                                                <div className="portfolio" key={index}>
                                                    <div className="thumbnail-inner">
                                                        <div className={`thumbnail ${value.image}`}></div>
                                                        <div className={`bg-blr-image ${value.image}`}></div>
                                                    </div>
                                                    <div className="content">
                                                        <div className="inner">
                                                            <p>{value.category}</p>
                                                            <h4><a href="/portfolio-details">{value.title}</a></h4>
                                                            <div className="portfolio-button">
                                                                <a className="rn-btn" href="/portfolio-details">Case Study</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </Slider>
                                    </div>
                                </div>
                                                </div>
                
                                            </div>
                                            
                                        </div>
                                        {/* End Single Area */}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Page Wrapper */}
                
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
export default Blockchains;