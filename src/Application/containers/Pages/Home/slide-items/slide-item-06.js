

import React from 'react';
import {SlideTitle} from './slideTitle';

import Translate from '../../../translate';

class Map extends React.Component{
    render(){
        return (
            <div className="map">
                <div className="map-bg">
                    <div className="map-circle-big">
                        <div className="map-circle-thumb">
                            <div className="map-circle-small">
                               <div className="map-circle-thumb">
                                
                            </div>
                        </div>
                    </div>
                    <div className="map-text">
                            <div className="map-text-one">
                                {this.props.x}
                            </div>
                            <div className="map-text-two">
                                {this.props.y}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class Form extends React.Component{
    render(){
        return (
            <form>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6 ">
                            <div className="item">
                                <label htmlFor="name">
                                    <Translate>
                                        full name
                                    </Translate>
                                </label>
                                <input id="name" type="text" className="form-control"/>
                                <div className="line"></div>    
                            </div>
                        </div>
                        <div className="col-sm-6 ">
                            <div className="item">
                                <label htmlFor="email">
                                    <Translate>
                                        email address
                                    </Translate>
                                </label>
                                <input id="email" type="email" className="form-control"/>
                                <div className="line"></div>    
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 ">
                            <div className="item">
                                <label htmlFor="message">
                                    <Translate>
                                        message
                                    </Translate>
                                </label>
                                <textarea
                                    id="message"
                                    className="form-control"/>
                                <div className="line"></div>    
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <button
                                type="submit"
                                className="submit-btn">
                                <Translate>
                                    lets be friends
                                </Translate>
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

class SlideItemId extends React.Component{

    constructor(props){
        super(props);

    }
    
    render(){
        return (
            <div className="slide-component">
                <SlideTitle
                    title={this.props.title}
                    description={this.props.description}/>
                <div className="slide-content">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 col-md-6 col-12">
                                <Map 
                                    x={this.props.content.map.x}
                                    y={this.props.content.map.y}/>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="slide-content-top-wrap">
                                    <div className="slide-content-top">
                                        <Translate>
                                            contact
                                        </Translate>
                                    </div>
                                </div>
                                <div className="slide-content-description">
                                    <Translate>
                                        {this.props.content.description}
                                    </Translate>
                                </div>
                                <div className="slide-content-form">
                                    <Form />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ) 
    }
}

export default SlideItemId;