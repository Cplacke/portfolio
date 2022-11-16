import Navigation from '../components/Navigation'

export const Resume = () => { 
    return (
        <div className="relative">
            <Navigation />

            <h2 className="text-3xl text-center text-blue-300 py-10 object-fill bg-space relative z-10"> Resumé </h2>
            <img src="./assets/faces/mando-torso.png" className="h-36 z-20 absolute top-96 left-12 sm:left-1/4 md:left-1/3 peek-a-boo" />

            <div className="w-full md:w-3/4 lg:w-3/5 px-4 md:px-0 mx-auto mb-20 pt-10 relative z-30 bg-void">
                <h3 className="text-2xl text-blue-900"> Colin Placke </h3>
                <div className="text-blue-800"> 2212 Paul’s Penny Lane, Raleigh  NC 27603 | 843-816-4318 | cplacke@gmail.com </div>

                <h4 className="text-xl text-blue-900 mt-4"> Summary </h4>
                <div className="ml-4">
                    I am currently a Senior Developer with 5+ years experience in the Healthcare Technology industry at Optum Technology, over the past 
                    years I have been able to learn a tremendous amount about full stack and enterprise development. I am ready to take my experience
                    and continue my journey outside of healthcare, explore more of the world, and find a place to work in the intersection of my greatest joys.
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
                        <li> Cypress Functional Testing </li>
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
                    <div> Cicerone: Certified Beer Server </div>
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
                        <div className="ml-2"> Senior Full Stack Developer, working as co-lead of Agile development team </div>
                        <div className="ml-2"> Team front-end and JavaScript subject matter expert </div>
                        <div className="ml-2"> Develop and iterate on Microservice based back-end application ecosystem, as well as application and admin font-end applications </div>
                        <div className="ml-2"> Code Owner; responsible for reviewing, revising and editing a maintainable and reuseable code base </div>
                </div>
            </div>
        </div>
    );
}
