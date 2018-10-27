
import React from 'react';
import {connect} from 'react-redux';

import {INIT_HOME, SET_CURRENT_SLIDE_HOME, SET_PENDING_SLIDE_HOME} from '../../../../Actions/home';
import {Loading} from '../../../Components/loading';
import Element from './element';
import { AppReadyState } from '../../../functions/AppReadyState';

class Home extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            ready: false,
            notReady: []
        };

        this.Ready = this.Ready.bind(this);
        this.Check = this.Check.bind(this);
        this.PostCheck = this.PostCheck.bind(this);
        this.Set = this.Set.bind(this);
    }

    Ready(state = true){
        this.setState({
            ready: state
        })
    }

    PostCheck(){
        let _Check = this.Check();
        this.setState({
            notReady: _Check.invalids,
            ready: _Check.result
        })
    }
    
    Check(){ // Returns invalid Objects and result value
        return AppReadyState([
            {
                required: ['slides'], 
                in: {
                    name: 'Home',
                    obj: this.props.Home
                }
            }
        ]);
    }

    Set(invalids = this.state.notReady){ //Bundle of actions
        invalids.map(invalid => {
            switch(invalid){
                case 'Home': {
                    this.props._InitHome();
                    break;
                }
                default: {
                    break;
                }
            }
        });
    }
    

    componentWillMount(){
        this.PostCheck();
    }
    
    componentDidMount(){
        if(!this.state.ready){
            this.Set();
        }
    }

    componentDidUpdate(prev){
        setImmediate(() => {
            if(!this.state.ready){
                if(this.state.notReady.length){
                    this.PostCheck();
                }else{
                    this.Ready();
                }
            }
        });
    }

    render(){
        return this.state.ready ? (
                <Element {...this.props}/>
            )
             : (
                <Loading />
            );
    }
}

const States = state => {
    return {
        Home: state.Home
    };
};

const Actions = dispatch => {
    return {
        _InitHome: () => {
            dispatch(INIT_HOME());
        },
        _SetCurrentSlideId: id => {
            dispatch(SET_CURRENT_SLIDE_HOME(id));
        },
        _SetPendingSlide: id => {
            dispatch(SET_PENDING_SLIDE_HOME(id));
        }
    };
};

export default connect(States, Actions)(Home);