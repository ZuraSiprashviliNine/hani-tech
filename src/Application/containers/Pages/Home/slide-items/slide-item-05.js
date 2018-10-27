

import React from 'react';
import {SlideTitle} from './slideTitle';

import Translate from '../../../translate';

import Swiper from 'react-id-swiper';

class SliderItem extends React.Component{
    constructor(props){
        super(props);
        this.getDate = this.getDate.bind(this);
    }

    getDate(){
        if(this.props.date.length === 2){
            return this.props.date[0] + ' - ' + this.props.date[1];
        }else{
            return this.props.date[0];
        }
    }

    render(){
        return (
            <div 
                className="swiper-slide">
                <div className="item">
                    <div className="date">
                        {this.getDate()}
                    </div>
                    <div className="title">
                        <Translate>
                            {this.props.title}
                        </Translate>
                        <div className="line"/>
                    </div>
                    <div className="description">
                        <Translate>
                            {this.props.description}
                        </Translate>
                    </div>
                </div>
            </div>
        )
    }
}

class Slider extends React.Component{
    constructor(props){
        super(props);

        this.getSlides = this.getSlides.bind(this);
    }

    getSlides(){
        return this.props.partners.map(partner => <SliderItem 
            key={partner.id}
            {...partner}/>);
    }
    
    render(){
        return (
            <Swiper
                {...{slidesPerView: 2,
                    autoHeight: true,
                    breakpoints: {
                        992: {
                            slidesPerView: 2
                        },
                        768: {
                            slidesPerView: 1
                        }
                    },
                    pagination: {
                      el: '.swiper-pagination',
                      clickable: true,
                    }}}>
                {this.getSlides()}
            </Swiper>
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
                        <div className="row">
                            <div className="col-12">
                                <div className="content-partner-item">
                                    <Slider 
                                        partners={this.props.content.partners}/>
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