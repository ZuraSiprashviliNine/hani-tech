
import React from 'react';
import {Fragment} from 'react';
import {SlideTitle} from './slideTitle';
import Translate from '../../../translate';

import {GlitchText} from '../../../../shared/glitch-text';

class SlideItemId extends React.Component{

    constructor(props){
        super(props);

        this.getSlideContentTop = this.getSlideContentTop.bind(this);
    }

    getSlideContentTop(){
        return this.props.top.items.map(item => {
            return (
                <Fragment
                    key={item + '_'}>
                    <div 
                        key={item}
                        className="slide-content-top-item">
                        <GlitchText
                            translate>
                            <Translate>
                                {item}
                            </Translate>
                        </GlitchText>
                    </div>
                    <div key={`item-${item}`} className="slide-content-top-item-div">
                        /
                    </div>
                </Fragment>
            )
        })
    }
    
    render(){
        return (
            <div className={`slide-component`}>
                <SlideTitle
                    title={this.props.title}
                    description={this.props.description}/>
                <div className="slide-content">
                    <div className="slide-content-top-wrap">
                        <div className="slide-content-top">
                            {this.getSlideContentTop()}
                        </div>
                    </div>
                    <div className="slide-content-title">
                        <div className="slide-content-title-text">
                            {this.props.content.title}
                        </div>
                        <div className="slide-content-title-line"/>
                    </div>
                    <div className="slide-content-description">
                        <GlitchText
                            translate>
                            <Translate>
                                {this.props.content.description}
                            </Translate>
                        </GlitchText>
                    </div>
                </div>
            </div>
        ) 
    }
}

export default SlideItemId;