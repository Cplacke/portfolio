import React, { Component, createRef } from "react";
import ReactStars from "react-rating-stars-component";
import Carousel from "nuka-carousel";

import technology from '../content/technology';

class Technology extends Component {

    constructor() {
        super();
        this.technology = technology;
        this.state = {
            activeType: 'All',
            slideIndex: 0,
        }
        this.slickSlider = createRef();
    }
    technology;
    alt = true;

    render() { 
        return (
            <div className="text-gray-200 bg-space pt-36 pb-5">
                <h2 className="text-3xl text-center text-blue-300 mt-8"> Skills  &amp; Technologies </h2>  

                <div className="m-auto mb-20 w-3/4 lg:w-3/5">
                    <div className="flex my-6">
                        <button className={
                                "uppercase hover:text-white hover:bg-blue-300 border border-blue-300 rounded-full px-4 py-2 mx-auto "
                                +(this.state.activeType === 'Languages' ? 'text-white bg-blue-300' : 'text-blue-300') 
                            }
                            onClick={() => { this.setState({ slideIndex: this.technology.findIndex((t) => (t.type === 'Languages'))/2, activeType: 'Languages'}) }} 
                        > Languages </button>
                        <button className={
                                "uppercase hover:text-white hover:bg-blue-300 border border-blue-300 rounded-full px-4 py-2 mx-auto "
                                +(this.state.activeType === 'Frameworks' ? 'text-white bg-blue-300' : 'text-blue-300')
                            }
                            onClick={() => { this.setState({ slideIndex: this.technology.findIndex((t) => (t.type === 'Frameworks'))/2, activeType: 'Frameworks'} ) }}
                        > Frameworks </button>
                        <button className={
                                "uppercase hover:text-white hover:bg-blue-300 border border-blue-300 rounded-full px-4 py-2 mx-auto "
                                +(this.state.activeType === 'Databases' ? 'text-white bg-blue-300' : 'text-blue-300') 
                            }
                            onClick={() => { this.setState({ slideIndex: this.technology.findIndex((t) => (t.type === 'Databases'))/2, activeType: 'Databases'} ) }}
                        > Databases </button>
                        <button className={
                                "uppercase hover:text-white hover:bg-blue-300 border border-blue-300 rounded-full px-4 py-2 mx-auto "
                                +(this.state.activeType === 'Tools & Deployment' ? 'text-white bg-blue-300' : 'text-blue-300') 
                            }
                            onClick={() => { this.setState({ slideIndex: this.technology.findIndex((t) => (t.type === 'Tools & Deployment'))/2, activeType: 'Tools & Deployment'} ) }}
                        > Tools &amp; Deployment </button>
                    </div>
                    <Carousel wrapAround={true}
                        beforeSlide={(curr, next) => { 
                            this.setState({ activeType: this.technology[next*2].type}) 
                        }}
                        slideIndex={this.state.slideIndex}
                        renderCenterLeftControls={({ previousDisabled, previousSlide }) => (
                            <button className="absolute -left-20 uppercase text-blue-300 hover:text-white hover:bg-blue-300 border border-blue-300 rounded-full px-4 py-2"
                                onClick={previousSlide} disabled={previousDisabled}>
                                Prev
                            </button>
                        )}
                        renderCenterRightControls={({ nextDisabled, nextSlide }) => (
                            <button className="absolute -right-20 uppercase text-blue-300 hover:text-white hover:bg-blue-300 border border-blue-300 rounded-full px-4 py-2"
                                onClick={nextSlide} disabled={nextDisabled}>
                                Next
                            </button>
                        )}
                    >
                        {
                            this.technology
                                .map((item, i) => {
                                    if ( i%2 === 0 ) {
                                        // this.alt = !this.alt;
                                        return <div key={`tech-${i}`}> {[this.technology[i], this.technology[i+1]].map((item, j) => {
                                            let classList = this.alt ? 'mr-auto ml-0' : 'ml-auto mr-0 text-right';
                                            this.alt = !this.alt;
                                            return (
                                                <div className={classList+" w-3/4 px-4"} key={`tech-${i}-${j}`}>
                                                    <img src={item.img} className={classList+" h-24 my-4 "+item.css} />
                                                    <div className="text-blue-200 font-medium">
                                                        { item.title } 
                                                        <ReactStars classNames={classList}
                                                            count={5} edit={false} isHalf={true}
                                                            size={24} value={item.value}
                                                            activeColor="#ffd700"
                                                        />
                                                    </div>
                                                    <div> 
                                                        { item.caption }
                                                    </div>
                                                </div>
                                            );
                                        })} </div>;
                                    }
                                })
                        }
                    </Carousel>
                </div>
            </div>
        );
    }
}

export default Technology;