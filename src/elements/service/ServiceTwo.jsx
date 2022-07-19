import React, { Component } from "react";


const ServiceList = [
    {
        icon: '01',
        title: 'Website Development',
        description: 'Build highly-engaging website with perfect UI/UX.',
        link: '/website'
    },
    {
        icon: '02',
        title: 'Mobile Development',
        description: 'Build awesome Android/IOS applications.',
        link: '/mobile'
    },
    {
        icon: '03',
        title: 'Web3 Development',
        description: 'Build Dapps on different blockchains',
        link: '/blockchains'
    },
]

class ServiceTwo extends Component{
    render(){
        let title = 'Services',
        description = 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.';
        return(
            <React.Fragment>
                <div className="row">
                    <div className="col-lg-4 col-12">
                        <div className="section-title mt--30 mt_md--5 mt_mobile--5 mb_mobile--10">
                            <h2 className="title">{title}</h2>
                            <p>{description}</p>
                            <div className="service-btn">
                                <a className="btn-transparent rn-btn-dark" href="/website"><span className="text">Request Custom Service</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-12 mt_md--50">
                        <div className="row service-one-wrapper">
                            {ServiceList.map( (val , i) => (
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={i}>
                                    <a href={val.link}>
                                        <div className="service service__style--2">
                                            <div className="icon">
                                            <img src={`/assets/images/icons/icon-${val.icon}.png`} alt="LuxTech"/>
                                            </div>
                                            <div className="content">
                                                <h3 className="title">{val.title}</h3>
                                                <p>{val.description}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceTwo;
