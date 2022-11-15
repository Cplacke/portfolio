import Navigation from '../components/Navigation'

export const Resume = () => { 
    return (
        <div className="relative">
            <Navigation />
            <h2 className="text-3xl text-center text-blue-300 py-10 object-fill bg-space relative z-10"> Resumé </h2>
            <img src="./assets/faces/luke-skywalker.png" className="h-32 z-20 absolute top-20 right-24 md:right-64 lg:right-96 peek-a-boo" />
            <div className="w-full md:w-3/4 lg:w-3/5 px-4 md:px-0 mx-auto mb-20 pt-10 relative z-30 bg-void">

                <h3 className="text-2xl text-blue-900"> Colin Placke </h3>
                <div className="text-blue-800"> 2212 Paul’s Penny Lane, Raleigh  NC 27603 | 843-816-4318 | cplacke@gmail.com </div>

                <h4 className="text-xl text-blue-900 mt-4"> Summary </h4>
                <div className="ml-4">
                    I am currently pursuing a B.Sc. in Computational Science and in my senior year of the program, graduating Fall 2017. I am a dedicated and persistent individual searching a TDP Associate Position at Optum, at your Raleigh location. 
                </div>

                <h4 className="text-xl text-blue-900 mt-4"> Education </h4>
                <div className="ml-4">
                    <div className="text-blue-800 mt-2"> Diploma | May 2013 | Bluffton High School </div>
                    <div> Four year varsity Wrestling team 2009-2013 </div>
                    <div> Member of the National Honor Society, member of DECA 2010-2013 </div>
                    <div className="text-blue-800 mt-2"> BS in Computaional Science | Jan 2018 | University Of South Carolina Beaufort </div>
                    <div> Major in Computational Science, with a Cognate in Software Development </div>
                    <div> University of South Carolina Beaufort Mathematics Tutor </div>
                    <div> Graduate Magna Cum Laude </div>
                </div>
                {/* Current GPA – 3.89 */}
                <h4 className="text-xl text-blue-900 mt-4"> Skills &amp; Abilities  </h4>
                <div className="ml-4 mb-4">
                    <ul className="w-ful md:w-1/2 inline-block list-disc list-inside" style={{ verticalAlign: 'top' }}>
                        <li> Java 11, Java Spring, Java SpringBoot </li>
                        <li> JavaScript and TypeScript </li>
                        <li> React / SSR </li>
                        <li> Angular 8+ </li>
                        <li> SQL and NoSQL Database </li>
                        <li> Docker and Kubernetes </li>
                        <li> Progressive Web Apps <span className="text-gray-700">[PWA]</span> </li>
                        <li> RxJs <span className="text-gray-700">[Observables, Subscriptions]</span> </li>
                        <li> Developer Workflow Automation </li>
                    </ul>
                    <ul className="w-ful md:w-1/2 inline-block list-disc list-inside" style={{ verticalAlign: 'top' }}>
                        <li> GitHub and GitOps CI/CD </li>
                        <li> Jenkins CI/CD </li>
                        <li> Cypress Unit Testing </li>
                        <li> Postman <span className="text-gray-700">[HTTP Testing]</span> </li>
                        <li> Bash and Shell scripting </li>
                        <li> Unity <span className="text-gray-700">[Game Engine]</span> </li>
                        <li> Mobile App Development </li>
                        <li> Responsive Design </li>
                        <li> Agile Development Model </li>
                    </ul>
                </div>


                {/* Excellent Math, Problem Solving, and Algorithm development skills */}
                <h4 className="text-md text-blue-900 ml-4 mt-4"> Awards  </h4>
                <div className="ml-8">
                    <div> South Carolina LIFE Scholarship recipient </div>
                    <div> 3rd Place in Java implemented Video Game - Class Final </div>
                    <div> 3rd Place Presentation in Research and Scholarship Day </div>
                    <div> Honorable Mention - HACKATHONCLT 2018 and 2019 </div>
                    <div> MakeIT Happen Award - NHS Genomics Patient Choice &amp; Consent </div>
                </div>

                <h4 className="text-xl text-blue-900 mt-4"> Work Experience </h4>
                <div className="ml-4">
                    <div className="text-md text-blue-800 mt-2"> Shift Supervisor | Southern Barrel Brewing Co. | May 2015 - Jan 2018 </div>
                        <div className="ml-2"> Training of new employees, and managed customer and employee relations </div>
                        <div className="ml-2"> Cicerone certified Beer Server, certification demonstrating a competent knowledge of beer storage, service, knowledge of beer styles, culture, and knowledge about brewing process and ingredients.</div>
                    <div className="text-md text-blue-800 mt-2"> Sole Proprietor | Complete iPhone Repair | Sep 2016 - Jan 2018 </div>
                        <div className="ml-2"> Started own business, repairing and replacing iPhone parts </div>
                        <div className="ml-2"> Managed all ordering, scheduling of repairs, diagnosis, and installing new parts to the devices </div>
                    <div className="text-md text-blue-800 mt-2"> TDP Internship | Optum Technology | May 2017 – July 2017 </div>
                        <div className="ml-2"> Developer on Surgical Planning Application using Augmented Reality </div>
                        <div className="ml-2"> Full Stack developer, working with Unity engine </div>
                    <div className="text-md text-blue-800 mt-2"> Senior Software Engineer | Optum Technology | Jan 2018 – CURRENT </div>
                        <div className="ml-2"> TBD ... </div>
                        <div className="ml-2"> TBD ... </div>
                </div>
            </div>
        </div>
    );
}
