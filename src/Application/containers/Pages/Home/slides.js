
import React from 'react';

import {SlideItem} from './slideItem';

export class Slides extends React.Component{
    constructor(props){
        super(props);

        this.GetSlideData = this.GetSlideData.bind(this);
    }

    GetSlideData(){
        return this.props.slides.find(slide => slide.id === this.props.activeSlideId);
    }
    
    render(){
        return (
            <div
                className="content-wrap">
                <SlideItem
                    activeSlideId={this.props.activeSlideId}
                    pendingSlideId={this.props.pendingSlideId}
                    {...this.GetSlideData()}/>
            </div>
        )
    }
}