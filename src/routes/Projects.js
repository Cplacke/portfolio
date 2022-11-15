import Navigation from '../components/Navigation'

export const Projects = () => { 
    return (
        <div className="relative bg-void">
            <Navigation />
            <h2 className="text-3xl text-center text-blue-300 py-10 object-fill bg-space z-10">
                Projects 
            </h2>
            <img src="./assets/faces/darth-vader.png" className="h-32 z-20 absolute top-20 left-3 md:left-48 peek-a-boo" />
            <img src="./assets/faces/boba-fett.png" className="h-32 z-20 absolute top-20 right-14 md:right-56 peek-a-boo-offset" />
            <div className="bg-void w-full md:w-4/5 lg:w/3-4 px-4 md:px-0 mx-auto mb-20 pt-10 z-30 relative">
                <div>
                    <h3 className="text-blue-900 text-xl my-6"> Mathel - a Number Game </h3>
                    <div className="w-full md:w-1/2 inline-block"> 
                        I was wondering if there is a CSS or javascript magic that could place a marker in an html text so that the browser know where the line break creation is preffered when the text gets cramped. Is there such thing?
                        <a onClick={() => window.open("http://number-game.deno.dev")}
                            className="text-blue-500 hover:underline my-4 block"
                        > Go to http://number-game.deno.dev
                        </a>
                    </div>
                    <div className="w-full md:w-1/2 flex md:inline-block align-top mx-auto"> 
                        <img className="w-2/5 inline-block mr-auto ml-4 md:mx-4 rounded-md" src="./assets/screens/mathel-question-mobile.png" />
                        <img className="w-2/5 inline-block ml-auto mr-4 md:mx-4 rounded-md" src="./assets/screens/mathel-final-mobile.png" />
                    </div>
                </div>
                <div>
                    <h3 className="text-blue-900 text-xl my-6"> Charcuterie &amp; More by Dylan </h3>
                    <div className="w-full md:w-1/2 inline-block"> 
                        I was wondering if there is a CSS or javascript magic that could place a marker in an html text so that the browser know where the line break creation is preffered when the text gets cramped. Is there such thing?
                        <a onClick={() => window.open("http://charcuterieandmore.deno.dev")}
                            className="text-blue-500 hover:underline my-4 block"
                        > Go to http://charcuterieandmore.deno.dev
                        </a>
                    </div>
                    <div className="w-full md:w-1/2 inline-block align-top md:pl-4 mx-auto">
                        <img className="rounded-md" src="./assets/screens/charcuterie.png" />
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
