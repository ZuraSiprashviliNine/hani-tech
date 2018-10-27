
import React from 'react';

import { 
    Cycler 
} from "react-text-scrambler";

export class GlitchText extends React.Component{
    render(){
        if(this.props.translate){
            return (
                <Cycler
                    strings={[
                        this.props.children.props.children,
                        this.props.children.props.children.split('').reverse().join('')
                    ]}
                    duration={5000}
                    renderIn={5000}
                    text={this.props.children.props.children} />
            );
        }else{
            return (
                <Cycler
                    strings={[
                        this.props.children,
                        this.props.children.split('').reverse().join('')
                    ]}
                    duration={5000}
                    renderIn={5000}
                    text={this.props.children} />
            )
        }
    }
}