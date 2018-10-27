
import React from 'react';

import Translate from '../../../../containers/translate';
import {Dude} from '../../../../Components/dude';

export class SlideTitle extends React.Component{
    render(){
        return (
            <div className="slide-title">
                <div className="slide-title-id">
                    <span className="slide-title-id-text">
                        {this.props.title}
                    </span>
                    <Dude />
                </div>
                <div className="slide-title-description">
                    <Translate>
                        {this.props.description}
                    </Translate>
                </div>
            </div>
        )
    }
}