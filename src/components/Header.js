
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

                <div className="w-full px-4 md:p-0 md:w-3/4 lg:w-2/5 my-6 text-md text-gray-200 text-left m-auto">
                    Senior Developer with 5+ years experience in the healthcare technology industry,
                    building large scale multi-tenant applications for health care providers across the country at Optum Technology.
                    Working in an agile environment as a part of full stack development team, as team front-end and JavaScript 
                    subject matter expert.
                </div>
                <div className="w-full md:p-0 w-3/4 lg:w-2/5 my-6 text-md text-gray-200 text-left m-auto text-right font-fredoka">
                    "I don't embrace excuses, I embrace solutions" <span className="text-gray-400"> ~ John Taffer </span>
                </div>

                <WaveBorder className="-bottom-7 md:-bottom-10 lg:-bottom-16" />
            </div>

        );
    }
}

export default Header;