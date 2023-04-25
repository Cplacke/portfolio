
import React, { Component } from 'react';
import { WaveBorder } from './functional/WaveBorder';

class Header extends Component {
    render() { 
        return (
            <div style={{ backgroundImage: 'url(./assets/shooting-stars-gen-2.svg)', zIndex: 1, position: 'relative'}}
                className="py-16 xl:pb-40 text-center text-blue-300 bg-space"
            >
                <img src="./assets/colin-placke.png"
                    className="h-64 m-auto block rounded-full"
                />

                <h2 className="text-3xl mt-6"> Colin Placke </h2>
                <h3 className="text-lg"> Full Stack Web Engineer </h3>

                <div className="w-full px-4 md:p-0 md:w-3/4 lg:w-2/5 my-6 text-md text-gray-200 text-left m-auto">
                    Welcome! I'm Colin Placke, a seasoned Senior Developer in the exciting and ever-evolving healthcare technology industry. Over the past 5+ years, I've been building large-scale multi-tenant applications for healthcare providers across the country at Optum Technology. As part of an agile and dynamic full-stack development team, I've become a go-to subject matter expert for front-end and JavaScript technologies. But I'm always eager for new challenges and opportunities to learn and grow. Let's connect and see how we can build something amazing together!
                </div>
                <div className="w-full md:p-0 w-3/4 lg:w-2/5 my-6 text-md text-gray-200 text-left m-auto text-right font-fredoka">
                    "I'm a simple man trying to make my way through the galaxy." <span className="text-gray-400"> ~ Boba Fett </span>
                </div>

                <WaveBorder className="-bottom-7 md:-bottom-10 lg:-bottom-16" />
            </div>

        );
    }
}

export default Header;