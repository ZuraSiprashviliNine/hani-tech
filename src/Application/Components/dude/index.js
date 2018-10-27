
import React from 'react';

export class Dude extends React.Component{
    render(){
        return (
            <div className="dude">
                <div className="dude-left dude-item dude-item-sider" />
                <div className="dude-base dude-item" />
                <div className="dude-right dude-item dude-item-sider" />
            </div>
        )
    }
}