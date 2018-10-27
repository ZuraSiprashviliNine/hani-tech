
import React from 'react';

import {Logo} from '../logo';
import {Bars} from './bars';
import {GlitchText} from '../glitch-text';

class Navbar extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
    }
    
    render(){
        return (
            <div
                id="navbar"
                className="navbar">
                <div className="navbar-rocket"/>
                <Logo />
                <a href="#" className="navbar-location">
                    <div className="navbar-location-wrap">
                        <div
                            className="navbar-location_lat">
                            <GlitchText>
                                {this.props.location.lat}
                            </GlitchText>
                        </div>
                        <div className="navbar-location_divider">
                            -
                        </div>
                        <div
                            className="navbar-location-lon">
                            <GlitchText>
                                {this.props.location.lon}
                            </GlitchText>
                        </div>
                    </div>
                </a>
                <Bars current={this.props.currentSlideId} slideChange={this.props.HandleSlideChange} items={this.props.items}/>
            </div>
        )
    }
}

export default Navbar;