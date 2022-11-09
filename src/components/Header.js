
import React, { Component } from 'react';
import { WaveBorder } from './functional/WaveBorder';

class Header extends Component {
    render() { 
        return (
            <div style={{ backgroundImage: 'url(./assets/shooting-stars-gen-2.svg)', zIndex: 1, position: 'relative'}}
                className="py-16 xl:pb-40 text-center text-blue-300"
            >
                <img src="./assets/colin-placke.png"
                    className="h-64 m-auto block rounded-full"
                />

                <h2 className="text-3xl mt-6"> Colin Placke </h2>
                <h3 className="text-lg"> Full Stack Web Engineer </h3>

                <div className="w-3/4 lg:w-2/5 my-6 text-md text-gray-200 text-left m-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar mattis nunc sed blandit libero volutpat sed cras. Id porta nibh venenatis cras sed. Sodales ut etiam sit amet nisl purus. 
                </div>

                <WaveBorder className="-bottom-7 md:-bottom-10 lg:-bottom-16" />
            </div>

        );
    }
}

export default Header;