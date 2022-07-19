import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import CounterOne from "../elements/counters/CounterOne";
import BrandTwo from "../elements/BrandTwo";
import { FaFacebookF , FaLinkedinIn ,FaMailBulk } from "react-icons/fa";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import FooterTwo from "../component/footer/FooterTwo";

const TeamMember = [
    {
        name: "Mr Phung",
        skill: 'CEO - Team Lead',
        img: '/assets/images/team/Phung.jpg',
        fb: "https://www.facebook.com/phung.76",
        linked: 'http://linkedin.com/in/phungnv',
        gmail: 'nvphvn@gmail.com'
    },
    {
        name: "Mr Trung",
        skill: 'Team Lead',
        img: '/assets/images/team/Trung.jpg',
        fb: null,
        linked: null,
        gmail: 'tranhuutrung1408@gmail.com'
    },
    {
        name: "Mr Quy",
        skill: 'Senior Web developer',
        img: '/assets/images/team/Quy.jpg',
        fb: "https://www.facebook.com/profile.php?id=100034820326962",
        linked: null,
        gmail: 'nguyenphuquyracer@gmail.com'
    },

]


class About extends Component{
    render(){
        let title = 'About Us',
        description = 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going.';
        return(
            <React.Fragment>
                <PageHelmet pageTitle='About Us' />

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
                {/* Start Breadcrump Area */}
                <Breadcrumb title={'About Us'}   />
                {/* End Breadcrump Area */}

                {/* Start About Area  */}
                <div className="rn-about-area ptb--70 bg_color--1">
                    <div className="rn-about-wrapper">
                        <div className="container">
                            <div className="row row--35 align-items-center">
                                <div className="col-lg-5">
                                    <div className="thumbnail">
                                        <img className="w-100" src="/assets/images/about/about-us.jpg" alt="About Images"/>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <h2 className="title">{title}</h2>
                                            <p className="description">{description}</p>
                                        </div>
                                        <div className="row mt--30">
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                <div className="about-us-list">
                                                    <h3 className="title">Who we are</h3>
                                                    <p>There are many vtions of passages of Lorem Ipsum available, but the majority have suffered.</p>
                                                </div>
                                            </div>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End About Area  */}

                 {/* Start CounterUp Area */}
                 <div className="rn-counterup-area pb--80 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <h3 className="fontWeight500">Our Fun Facts</h3>
                                </div>
                            </div>
                        </div>
                        <CounterOne />
                    </div>
                </div>
                {/* End CounterUp Area */}
                {/* Start Team Area  */}
                <div className="rn-team-area bg_color--1 ptb--70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title service-style--3 text-center mb--25">
                                    <h2 className="title">Skilled Team</h2>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {TeamMember.map((value, index) => (
                                    <div key={index} className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="team">
                                        <div className="thumbnail">
                                            <img className="w-100" src={value.img} alt="Blog Images"/>
                                        </div>
                                        <div className="content">
                                            <h4 className="title">{value.name}</h4>
                                            <p className="designation">{value.skill}</p>
                                        </div>
                                        <ul className="social-icon" >
                                            <li><a href={value.fb}><FaFacebookF /></a></li>
                                            <li><a href={value.linked}><FaLinkedinIn /></a></li>
                                            <li><a href={value.gmail}><FaMailBulk /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            ))}
                            {/* Start Single Team  */}
                            
                            {/* End Single Team  */}
                        </div>
                    </div>
                </div>
                {/* End Team Area  */}


                {/* Start Brand Area */}
                <div className="rn-brand-area brand-separation bg_color--5 ptb--120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <BrandTwo />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Brand Area */}

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
export default About