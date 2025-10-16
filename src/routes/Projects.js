import Navigation from '../components/Navigation'

export const Projects = () => { 
    return (
        <div className="relative bg-void">
            <Navigation />
            <h2 className="text-3xl text-center text-blue-300 py-10 object-fill bg-space z-10">
                Projects 
            </h2>
            <img src="./assets/faces/boba-fett.png" className="h-28 z-20 absolute top-96 right-12 sm:right-1/4 lg:right-1/3 peek-a-boo" />
            <div className="bg-void w-full md:w-4/5 lg:w/3-4 px-4 md:px-0 mx-auto mb-20 pt-10 z-30 relative">

                <div>
                    <h3 className="text-blue-900 text-xl mt-6 mb-2"> Mathel - a Number Game </h3>
                    <p>
                        A fast paced math game designed for on the go mobile play, with varying degrees of dificulty. 
                        I felt inspired to create a game after getting really into Wordle, and how everyone I knew was playing and 
                        having fun with it. A math game came to mind, and created something to keep the mind sharp and practice quick 
                        math problem solving that you could play anytime of day with a few spare minutes. Mathel was also created to 
                        replace downtime socail media useage, and taking that time back to improve yourself!
                    </p>
                    <p className="ms-4 mt-1"> Visit <a className="text-blue-800 text-underline" href="http://number-game.deno.dev">http://number-game.deno.dev</a> to see a live deployment </p>
                    {/* <iframe className='my-4 mx-6' src='http://number-game.deno.dev'></iframe> */}
                </div>
                <div>
                    <h3 className="text-blue-900 text-xl mt-6 mb-2"> Tarot Fortune Teller </h3>
                    <p>
                        After becoming intrested in Tarot cards, thier history, use, and interpretations I took to building something 
                        fun that could help me learn about the symbology and readings. Using the most famous set of designs, the Rider Waite deck,
                        of illustrations and scrapping the interpretations to use in generating readings. Now you can digitally read you tarot cards
                        anywhere without the need for a physical deck, or just explore the artwork. A great converstation starter and discuss with your friends.  
                    </p>
                    <p className="ms-4 mt-1"> Visit <a className="text-blue-800 text-underline" href="http://tarot.deno.dev">http://tarot.deno.dev</a> to see a live deployment </p>
                    {/* <iframe className='my-4 mx-6' src='http://tarot.deno.dev'></iframe> */}
                </div>
                <div>
                    <h3 className="text-blue-900 text-xl mt-6 mb-2"> My Chess Archive </h3>
                    <p>
                        When playing chess, nothing feels more satisfying than being able deliver a checkmate to take the win. After I had 
                        once again began to play more chess again online on Chess.com, I created a site that I can archive and show off all of my previous wins. 
                        Showing my personal stats, win history, end game summarries, and checkmates by piece. Building it so that I can easily create 
                        sites for my friends who also had a Chess.com account allowing for further personalization.
                    </p>
                    <p className="ms-4 mt-1"> Visit <a className="text-blue-800 text-underline" href="http://cplacke-chess.deno.dev">http://cplacke-chess.deno.dev</a> to see a live deployment </p>
                    {/* <iframe className='my-4 mx-6' src='http://cplacke-chess.deno.dev'></iframe> */}
                </div>
                 <div>
                    <h3 className="text-blue-900 text-xl mt-6 mb-2"> Realator Managed QR codes </h3>
                    <p>
                        TEXT HERE ABOUT Development of application
                    </p>
                    <p className="ms-4 mt-1"> Visit <a className="text-blue-800 text-underline" href="http://tpsells.deno.dev">http://tpsells.deno.dev</a> to see a live deployment </p>
                    {/* <iframe className='my-4 mx-6' src='http://tpsells.deno.dev'></iframe> */}
                </div>
                <div>
                    <h3 className="text-blue-900 text-xl mt-6 mb-2"> Anime Scrapper and Comic Book Reader </h3>
                    <p>
                        TEXT HERE ABOUT Development of application
                    </p>
                    <p className="ms-4 mt-1"> Visit <a className="text-blue-800 text-underline" href="http://bluelock.deno.dev">http://bluelock.deno.dev</a> to see a live deployment </p>
                    {/* <iframe className='my-4 mx-6' src='http://tpsells.deno.dev'></iframe> */}
                </div>
                <div>
                    <h3 className="text-blue-900 text-xl mt-6 mb-2"> Visual Studio Theme Generator </h3>
                    <p>
                        TEXT HERE ABOUT Development of application
                    </p>
                    <p className="ms-4 mt-1"> Visit <a className="text-blue-800 text-underline" href="http://visual-studio-records.deno.dev">http://visual-studio-records.deno.dev</a> to see a live deployment </p>
                    {/* <iframe className='my-4 mx-6' src='http://visual-studio-records.deno.dev'></iframe> */}
                </div>

                {/* <div>
                    <h3 className="text-blue-900 text-xl mt-6 mb-2"> Mathel - a Number Game </h3>
                    <div className="w-full md:w-1/2 inline-block"> 
                        I was wondering if there is a CSS or javascript magic that could place a marker in an html text so that the browser know where the line break creation is preffered when the text gets cramped. Is there such thing?
                        <a onClick={() => window.open("http://number-game.deno.dev")}
                            className="text-blue-500 hover:underline my-4 block"
                        > Go to http://number-game.deno.dev
                        </a>
                    </div>
                    <div className="w-full md:w-1/2 flex md:inline-block align-top mx-auto" style={{ maxHeight: '40%' }}> 
                        <img className="w-2/5 inline-block mr-auto ml-4 md:mx-4 rounded-md" src="./assets/screens/mathel-question-mobile.png" />
                        <img className="w-2/5 inline-block ml-auto mr-4 md:mx-4 rounded-md" src="./assets/screens/mathel-final-mobile.png" />
                    </div>
                </div>
                <div>
                    <h3 className="text-blue-900 text-xl mt-6 mb-2"> Charcuterie &amp; More by Dylan </h3>
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
                    <h3 className="text-blue-900 text-xl mt-6 mb-2"> Album Art - Theme generator  </h3>
                    <div className="w-full md:w-1/2 inline-block"> 
                        I was wondering if there is a CSS or javascript magic that could place a marker in an html text so that the browser know where the line break creation is preffered when the text gets cramped. Is there such thing?
                    </div>                    
                    <div className="w-full md:w-1/2 inline-block align-top pl-4"> {'< IMAGE HERE >'} </div>
                </div> */}
            </div>
        </div>
    );
}
