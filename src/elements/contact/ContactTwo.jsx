import React, { Component } from "react";
import ContactForm from "./ContactForm";

class ContactTwo extends Component {
    render(){
        return(
            <div className="contact-form--1">
                <div className="container">
                    <div className="row row--35 align-items-start">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="section-title text-left mb--50">
                                <h2 className="title">Contact Us.</h2>
                                <h4 className="description">CAN WE HELP YOU ?</h4>
                                   <p className="description">If you face any type of problem, reach out to our support team anytime from anywhere.</p>
                            </div>
                            <div className="form-wrapper">
                                <ContactForm />
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2">
                            <div className="thumbnail mb_md--30 mb_sm--30">
                                <img className="mt--65" src="/assets/images/logo/luxtech.jpg" alt="LuxTech"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ContactTwo;