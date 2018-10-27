
import React from 'react';
import {connect} from 'react-redux';
import { INIT_LANGUAGES } from '../Actions/language';
import { AppReadyState } from './functions/AppReadyState';

import { INIT_COMMON } from '../Actions/common';
import { INIT_HOME, SET_CURRENT_SLIDE_HOME, SET_PENDING_SLIDE_HOME } from '../Actions/home';

import Navbar from './shared/navbar';

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import Particles from 'react-particles-js';
// import Scrollbar from 'react-custom-scrollbars';

import Loadable from 'react-loadable';
import {Loading} from './Components/loading';

import {Redirect} from 'react-router-dom';

const Loads = {
    home: Loadable({
        loader: () => import('./containers/Pages/Home/'),
        loading: Loading
    })
};

class Parts extends React.Component{
    shouldComponentUpdate(){
        return false;
    }
    render(){
        return (
            <Particles
                    className={'particles-wrapper'}
                    canvasClassName={'particles-canvas'}/>
        )
    }
}

class Element extends React.Component{

    constructor(props){
        super(props);

        this.HandleSlideChange = this.HandleSlideChange.bind(this);   
    }

    HandleSlideChange(id){
        if(id !== this.props.Home.currentSlideId){
            this.props._SetPendingSlide(this.props.Home.currentSlideId);
            setTimeout(() => {
                this.props._SetCurrentSlideId(id);
                this.props._SetPendingSlide(-1);
            }, 1500);
        }
    }
    
    render(){
        return (
            <div
                className="application animated fadeIn"
                id="application">
                <Parts />
                <Router>
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
                        <div id="routerContainer">
                            <Navbar
                                items={this.props.Home.slides.map(slide => {
                                    return {
                                        title: slide.title,
                                        id: slide.id,
                                        description: slide.description
                                    }
                                })}
                                currentSlideId={this.props.Home.currentSlideId}
                                HandleSlideChange={this.HandleSlideChange}
                                location={this.props.Common.location}/>
                            <Switch>
                                <Route
                                    path="/"
                                    exact={true}
                                    component={Loads.home}/>
                                <Route
                                    component={()=> (<div>404</div>)}/>
                            </Switch>
                        </div>
                    {/* </Scrollbar> */}
                </Router>
            </div>
        )
    }
}

class App extends React.Component{
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
                required: ['keywords', 'active', 'languages'], 
                in: {
                    name: 'Languages',
                    obj: this.props.Language
                }
            },
            {
                required: ['location'],
                in: {
                    name: 'Common',
                    obj: this.props.Common
                }
            },
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
                case 'Common': {
                    this.props._InitCommon();
                    break;
                }

                case 'Languages': {
                    this.props._InitLanguages();
                    break;
                }

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
            this.Set(this.state.notReady);
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
        Language: state.Language,
        Common: state.Common,
        Home: state.Home
    }
};

const Actions = dispatch => {
    return {
        _InitCommon: () => {
            dispatch(INIT_COMMON());
        },
        _InitLanguages: code => {
            dispatch(INIT_LANGUAGES(code));
        },
        _InitHome: () => {
            dispatch(INIT_HOME());
        },
        _SetCurrentSlideId: id => {
            dispatch(SET_CURRENT_SLIDE_HOME(id));
        },
        _SetPendingSlide: id => {
            dispatch(SET_PENDING_SLIDE_HOME(id));
        }
    }
};

export default connect(States, Actions)(App);