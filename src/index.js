// React Required
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Create Import File
import './index.scss';

import PageScrollTop from './component/PageScrollTop';

// Home layout

import MainDemo from './home/MainDemo';




// Element Layout

import Website from "./elements/Website";
import Mobile from './elements/Mobile';
import Blockchains from './elements/Blockchains';
import About from "./elements/About";
import Contact from "./elements/Contact";
import Stories from "./elements/Stories";
import error404 from "./elements/error404";


// Blocks Layout

// import Team from "./blocks/Team";
// import Counters from "./blocks/Counters";
// import Testimonial from "./blocks/Testimonial";
// import Portfolio from "./blocks/Portfolio";
// import VideoPopup from "./blocks/VideoPopup";
// import Gallery from "./blocks/Gallery";
// import Brand from "./blocks/Brand";
// import ProgressBar from "./blocks/ProgressBar";
// import ContactForm from "./blocks/ContactForm";
// import GoogleMap from "./blocks/GoogleMap";
// import Columns from "./blocks/Columns";
// import PricingTable from "./blocks/PricingTable";
import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

class Root extends Component{
    render(){
        return(
            <BrowserRouter basename={'/'}>
                <PageScrollTop>
                    <Switch>
                        <Route exact path={`${process.env.PUBLIC_URL}/`} component={MainDemo}/>
                       

                        {/* Element Layot */}
                       
                        <Route exact path={`${process.env.PUBLIC_URL}/website`} component={Website}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/mobile`} component={Mobile}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/blockchains`} component={Blockchains}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/contact`} component={Contact}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/about-us`} component={About}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/stories`} component={Stories}/>

                        {/* Blocks Elements  */}
                        {/* <Route exact path={`${process.env.PUBLIC_URL}/team`} component={Team}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/counters`} component={Counters}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/testimonial`} component={Testimonial}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/portfolio`} component={Portfolio}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/video-popup`} component={VideoPopup}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/gallery`} component={Gallery}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/clint-logo`} component={Brand}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/progressbar`} component={ProgressBar}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/contact-form`} component={ContactForm}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/google-map`} component={GoogleMap}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/columns`} component={Columns}/> */}
                        {/* <Route exact path={`${process.env.PUBLIC_URL}/pricing-table`} component={PricingTable}/> */}


                        
                        <Route path={`${process.env.PUBLIC_URL}/404`} component={error404}/>
                        <Route component={error404}/>

                    </Switch>
                </PageScrollTop>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
serviceWorker.register();