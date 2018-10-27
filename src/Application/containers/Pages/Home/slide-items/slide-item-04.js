
import React from 'react';
import {Fragment} from 'react';
import {SlideTitle} from './slideTitle';

import Translate from '../../../translate';
import FontAwesome from 'react-fontawesome';
import {SlideSwiper} from './SlideSwiper';

import {Link} from 'react-router-dom';

class SliderSwiperitem extends React.Component{
    constructor(props){
        super(props);

        this.getSocials = this.getSocials.bind(this);
    }

    getSocials(){
        let result = [];
        for(let i in this.props.socials){
            result.push((
                <div 
                    key={i}
                    className="socials-item">
                    <a href="#">
                        <FontAwesome
                            name={i}/>
                    </a>
                </div>
            ));
        }

        return result;
    }
    
    render(){
        return (
            <div
                className="swiper-slide">
                <div className="item">
                    <div
                        to={this.props.slag}
                        tag="div"
                        style={{
                            backgroundImage: `url(${this.props.image})`
                        }}
                        className="image">
                        <img src={require('./ideal.png')}></img>
                    </div>
                    <div
                        to={this.props.slag}
                        tag="div"
                        className="info">
                        <Translate>
                            {this.props.title}
                        </Translate>
                    </div>
                    <div className="stat">
                        <Translate>
                            {this.props.stat}
                        </Translate>
                    </div>
                    <div className="socials">
                        {this.getSocials()}
                    </div>
                </div>
            </div>
        )
    }
}

class SlideItemId extends React.Component{

    constructor(props){
        super(props);

        this.getSlideItems = this.getSlideItems.bind(this);
    }

    getSlideItems(){
        return this.props.content.items.map(item => {
            return (
                <SliderSwiperitem
                    {...item}
                    key={item.id}/>
            );
        });
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
                                <SlideSwiper>
                                    {this.getSlideItems()}
                                </SlideSwiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ) 
    }
}

export default SlideItemId;