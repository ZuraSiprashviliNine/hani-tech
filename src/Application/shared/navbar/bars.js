
import React from 'react';
import {Fragment} from 'react';

import FontAwesome from 'react-fontawesome';
import Translate from '../../containers/translate';

// import Scrollbar from 'react-custom-scrollbars';

export class Bars extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            pop: false
        };

        this.Pop = this.Pop.bind(this);
        this.getPopContent = this.getPopContent.bind(this);
    }

    Pop(){
        this.setState({
            pop: !this.state.pop
        })
    }

    getPopContent(){
        return this.props.items.map(item => (
            <Fragment
                key={item.id}>
                <button
                    onClick={() => {this.props.slideChange(item.id); this.Pop()}}
                    className={`pop-content-item ${this.props.current === item.id ? 'active': ''}`}>
                    <div className="text">
                        <span>
                            <Translate>
                                {item.description}
                            </Translate>
                        </span>
                    </div>
                    <div className="divider"></div>
                    <div className="text">
                        <span>
                            <Translate>
                                {item.description}
                            </Translate>
                        </span>
                    </div>
                </button>
            </Fragment>
        ));
    }
    
    render(){
        return (
            <div className={`bars ${this.state.pop ? 'active': ''}`}>
                <button 
                    onClick={this.Pop}
                    className="bar">
                    <FontAwesome
                        name="bars"/>
                </button>
                <div className={`pop animated ${this.state.pop ? 'fadeIn' : 'fadeOut'}`}>
                    {/* <Scrollbar
                        autoHide={true}
                        renderThumbVertical={() => {
                            return (
                                <div
                                    className={'track-vertical'} style={{
                                    backgroundColor: '#fff'
                                }}/>
                            );
                        }}> */}
                        <div className="pop-content">
                            <div className="pop-bars">
                                <button 
                                    onClick={this.Pop}
                                    className="bar">
                                    <FontAwesome
                                        name="angle-down"/>
                                </button>
                            </div>
                            <div className="pop-content-items">
                                {this.getPopContent()}
                            </div>
                        </div>
                    {/* </Scrollbar> */}
                </div>
            </div>
        )
    }
}