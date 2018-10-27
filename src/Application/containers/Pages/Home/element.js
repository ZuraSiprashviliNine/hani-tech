
import React from 'react';

import Scrollbar from 'react-custom-scrollbars';

import Footer from '../../../shared/footer';

import {Pagination} from './pagination';

import {Slides} from './slides';

class Element extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            slideButtons: []
        };

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
    
    componentDidMount(){
        this.setState({
            slideButtons: this.props.Home.slides.map(item => {
                return {
                    title: item.title,
                    id: item.id
                }
            })
        });
    }
    
    render(){
        return (
            <div className="page home" id="home">
                <Scrollbar
                    autoHide={true}
                    renderThumbVertical={() => {
                        return (
                            <div
                                className={'track-vertical'} style={{
                                backgroundColor: '#fff'
                            }}/>
                        );
                    }}>
                    <div className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-10 offset-lg-1 col-12">
                                    <Slides 
                                        pendingSlideId={this.props.Home.pendingId}
                                        slides={this.props.Home.slides}
                                        activeSlideId={this.props.Home.currentSlideId}
                                        slideChange={this.HandleSlideChange}/>
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </div>
                </Scrollbar>
                <div className="pagination">
                    <Pagination
                        activeSlideId={this.props.Home.currentSlideId}
                        slideChange={this.HandleSlideChange}
                        items={this.state.slideButtons}/>
                </div>
            </div>
        )
    }
}

export default Element;