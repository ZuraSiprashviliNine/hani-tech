
import React from 'react';

export class Pagination extends React.Component{
    
    constructor(props){
        super(props);

        this.getItems = this.getItems.bind(this);
    }    

    getItems(){
        return this.props.items.map(item => (
            <div 
                key={item.id}
                onClick={() => {this.props.slideChange(item.id)}}
                className={`pagination-item ${this.props.activeSlideId === item.id ? 'active' : ''}`}>
                <span className="pagination-item-span">
                    {item.title}
                </span>
                <div className="pagination-item-back"/>
            </div>
        ))
    }
    
    render(){
        return (
            <div className="pagination-wrap">
                {this.getItems()}
            </div>
        )
    }
}