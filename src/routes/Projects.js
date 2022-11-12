import Navigation from '../components/Navigation'

export const Projects = () => { 
    return (
        <div>
            <Navigation />
            <h2 className="text-3xl text-center text-blue-300 py-10 mb-10 object-fill bg-space"> Projects </h2>
            <div className="w-full md:w-4/5 lg:w/3-4 px-4 md:px-0 mx-auto mb-20">
                <div>
                    <h3 className="text-blue-900 text-xl my-6"> Mathel - a Number Game </h3>
                    <div className="w-full md:w-1/2 inline-block"> 
                        I was wondering if there is a CSS or javascript magic that could place a marker in an html text so that the browser know where the line break creation is preffered when the text gets cramped. Is there such thing?
                        <a onClick={() => window.open("http://number-game.deno.dev")}
                            className="text-blue-500 hover:underline mt-4 block"
                        > Go to http://number-game.deno.dev
                        </a>
                    </div>
                    <div className="w-full md:w-1/2 inline-block align-top pl-4"> 
                        {/* <img src="./assets/screens/mathel-question.png" /> */}
                        <img className="w-2/5 inline-block mx-4 rounded-md" src="./assets/screens/mathel-question-mobile.png" />
                        <img className="w-2/5 inline-block mx-4 rounded-md" src="./assets/screens/mathel-final-mobile.png" />
                    </div>
                </div>
                <div>
                    <h3 className="text-blue-900 text-xl my-6"> Charcuterie &amp; More by Dylan </h3>
                    <div className="w-full md:w-1/2 inline-block"> 
                        I was wondering if there is a CSS or javascript magic that could place a marker in an html text so that the browser know where the line break creation is preffered when the text gets cramped. Is there such thing?
                        <a onClick={() => window.open("http://charcuterieandmore.deno.dev")}
                            className="text-blue-500 hover:underline mt-4 block"
                        > Go to http://charcuterieandmore.deno.dev
                        </a>
                    </div>
                    <div className="w-full md:w-1/2 inline-block align-top pl-4">
                        <img className="mx-4 rounded-md" src="./assets/screens/charcuterie.png" />
                    </div>
                </div>
                <div>
                    <h3 className="text-blue-900 text-xl my-6"> Album Art - Theme generator  </h3>
                    <div className="w-full md:w-1/2 inline-block"> 
                        I was wondering if there is a CSS or javascript magic that could place a marker in an html text so that the browser know where the line break creation is preffered when the text gets cramped. Is there such thing?
                    </div>                    
                    <div className="w-full md:w-1/2 inline-block align-top pl-4"> {'< IMAGE HERE >'} </div>
                </div>
            </div>
        </div>
    );
}
