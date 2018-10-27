
import React from 'react';

import Loadable from 'react-loadable';
import {Loading} from '../../../Components/loading';

const loads = {
    "01": Loadable({
        loader: () => import('./slide-items/slide-item-01'),
        loading: Loading
    }),
    "02": Loadable({
        loader: () => import('./slide-items/slide-item-02'),
        loading: Loading
    }),
    "03": Loadable({
        loader: () => import('./slide-items/slide-item-03'),
        loading: Loading
    }),
    "04": Loadable({
        loader: () => import('./slide-items/slide-item-04'),
        loading: Loading
    }),
    "05": Loadable({
        loader: () => import('./slide-items/slide-item-05'),
        loading: Loading
    }),
    "06": Loadable({
        loader: () => import('./slide-items/slide-item-06'),
        loading: Loading
    })
}

export class SlideItem extends React.Component {
    constructor(props){
        super(props);
    }
    
    render(){
        const SlideComponent = loads[this.props.title];

        return (
            <div className={`content-item-wrap content-item-wrap-${this.props.title} ${this.props.pendingSlideId === this.props.id ? 'pend' : ''}`}>
                <div className={`content-item content-item-${this.props.title} ${this.props.pendingSlideId === this.props.id ? 'pend' : ''}`}>
                    <SlideComponent
                        activeSlideId={this.props.activeSlideId}
                        {...this.props}/>
                </div>
            </div>
        )
    }
}