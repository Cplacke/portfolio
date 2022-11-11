import React, { Component }from "react";

class Footer extends Component {
    render() { 
        return (
            <div className="text-normal text-center text-gray-200 bg-space p-10 lg:px-0">
                <div className="w-full lg:w-3/5 m-auto" > 
                    Feel free to contact me anytime at 
                        <a href="mailto:cplacke@gmail.com" className="text-blue-300 mx-2 hover:underline"> 
                            cplacke@gmail.com 
                        </a>
                    <br/>
                    I am eager to help build something amazing with you.
                </div>
                <span className="text-sm text-gray-500"> Placketaffy 2023 </span>
                <div className="text-sm text-gray-500"> Built with React, Tailwind, and Deno </div>
            </div>
        );
    }
}

export default Footer;