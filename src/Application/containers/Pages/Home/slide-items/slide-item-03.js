
import React from 'react';
import {Fragment} from 'react';
import {SlideTitle} from './slideTitle';

import Translate from '../../../translate';

import {SlideSwiper} from './SlideSwiper';

import {Link} from 'react-router-dom';

class SliderSwiperitem extends React.Component{
    constructor(props){
        super(props);

        this.getStat = this.getStat.bind(this);
    }

    getStat(){
        if(this.props.production){
            return (
                <div className="production">
                    <Translate>
                        production
                    </Translate>
                </div>
            )
        }else{
            return null;
        }
    }
    
    render(){
        return (
            <div 
                to={this.props.slag}
                tag="div"
                className="swiper-slide">
                <div className="item">
                    {this.getStat()}
                    <div 
                        style={{
                            backgroundImage: `url(${this.props.image})`
                        }}
                        className="image">
                        <img src={require('../ideal.png')}></img>
                    </div>
                    <div className="info">
                        <div className="title">
                            <Translate>
                                {this.props.title}
                            </Translate>
                        </div>
                        <div className="date">
                            {this.props.date}
                        </div>
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
                                <div className="slide-content-description">
                                    <Translate>
                                        {this.props.content.title}
                                    </Translate>
                                </div>
                           </div>
                        </div>
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