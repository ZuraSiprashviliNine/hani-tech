
import React from 'react';
import Swiper from 'react-id-swiper';

export class SlideSwiper extends React.Component{
    render(){
        return (
            <Swiper
                {...{
                    slidesPerView: 3,
                    spaceBetween: 0,
                    direction: 'horizontal',
                    autoHeight: true,
                    pagination: {
                      el: '.swiper-pagination',
                      clickable: true,
                    },
                    breakpoints: {
                        1200: {
                            slidesPerView: 4
                        },
                        992: {
                            slidesPerView: 3
                        },
                        768: {
                            slidesPerView: 2
                        },
                        576: {
                            slidesPerView: 1
                        }
                    }
                  }}>
                  {this.props.children}
            </Swiper>
        )
    }
}
