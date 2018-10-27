
import React from 'react';

import FontAwesome from 'react-fontawesome';

export class Logo extends React.Component{
    render(){
        return (
            <div
                className="navbar-logo">
                <div className="navbar-logo-wrap">
                    <div className="icon">
                        <img
                            src={require('./logo.svg')}
                            className="logo"/>
                    </div>
                    <div className="title">
                        Hani.Tech
                    </div>
                </div>
            </div>
        )
    }
}