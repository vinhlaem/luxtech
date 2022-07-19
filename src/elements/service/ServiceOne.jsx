import React, { Component } from "react";


const ServiceList = [
    {
        icon: '01',
        title: 'Website Development',
        description: 'Build highly-engaging website with perfect UI/UX.'
    },
    {
        icon: '02',
        title: 'Mobile Development',
        description: 'Build awesome Android/IOS applications.'
    },
    {
        icon: '03',
        title: 'Web3 Development',
        description: 'Build Dapps on different blockchains'
    },
]

class ServiceOne extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="row">
                    {ServiceList.map( (val , i) => (
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                            <div className="service service__style--1">
                                <div className="icon">
                                    <img src={`/assets/images/icons/icon-${val.icon}.png`} alt="LuxTech"/>
                                </div>
                                <div className="content">
                                    <h4 className="title">{val.title}</h4>
                                    <p>{val.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceOne;