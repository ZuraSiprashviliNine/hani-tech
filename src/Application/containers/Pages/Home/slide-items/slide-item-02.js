
import React from 'react';
import {SlideTitle} from './slideTitle';

import Translate from '../../../translate';

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
                            <div className="col-lg-6 col-md-8 col-12">
                                <div className="slide-content-title">
                                    <div className="slide-content-title-text">
                                        <Translate>
                                            {this.props.content.title}
                                        </Translate>
                                    </div>
                                    <div className="slide-content-title-line"></div>
                                </div>
                                <div className="slide-content-description">
                                    <Translate>
                                        {this.props.content.description}
                                    </Translate>
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