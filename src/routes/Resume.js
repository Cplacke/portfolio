import Navigation from '../components/Navigation'

export const Resume = () => { 
    return (
        <div className="relative">
            <Navigation />

            <h2 className="text-3xl text-center text-blue-300 py-10 object-fill bg-space relative z-10"> Resumé </h2>
            <img src="./assets/faces/mando-torso.png" className="h-36 z-20 absolute top-96 left-12 sm:left-1/4 md:left-1/3 peek-a-boo" />

            <div className="w-full md:w-3/4 lg:w-3/5 px-4 md:px-0 mx-auto mb-20 pt-10 relative z-30 bg-void">
                <h3 className="text-2xl text-blue-900"> Colin Placke </h3>
                <div className="text-blue-800"> Raleigh  NC 27603 | cplacke@gmail.com </div>

                <h4 className="text-xl text-blue-900 mt-4"> About Me </h4>
                <div className="ml-4">
                    Hello my name is Colin, A Cicerone-certified food and beverage professional with over 7 years of extensive experience in dynamic bar and service environments, specializing in beer knowledge and service excellence. Eager to bring a passion for exceptional guest experience in high-volume operations to a food and beverage role at the Lenovo Center.
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
                {/* <h4 className="text-xl text-blue-900 mt-4"> Skills &amp; Abilities  </h4>
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
                </div> */}


                {/* Excellent Math, Problem Solving, and Algorithm development skills */}
                <h4 className="text-xl text-blue-900 mt-4"> Awards </h4>
                <div className="ml-4">
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
                        <div className="ml-2"> Trained new employees and managed customer and employee relations with success. </div>
                        <div className="ml-2"> Obtained Cicerone certified Beer Server certification, demonstrating expertise in beer storage, service, knowledge of beer styles and culture, and the brewing process and ingredients. </div>
                    <div className="text-md text-blue-800 mt-2"> Sole Proprietor | Complete iPhone Repair | Sep 2016 - Jan 2018 </div>
                        <div className="ml-2"> Founded and operated an iPhone repair business, managing all aspects of the operation, including ordering, repair scheduling, diagnosis, and installation of new parts. </div>
                    <div className="text-md text-blue-800 mt-2"> TDP Internship | Optum Technology | May 2017 – July 2017 </div>
                        <div className="ml-2"> Developed a Surgical Planning Application using Augmented Reality as a Developer. </div>
                        <div className="ml-2"> Worked as a Full Stack developer with the Unity engine. </div>
                    <div className="text-md text-blue-800 mt-2"> Senior Software Engineer | Optum Technology | Jan 2018 – 2025 </div>
                        <div className="ml-2"> Served as Senior Full Stack Developer and co-lead of an Agile development team. </div>
                        <div className="ml-2"> Served as a subject matter expert on front-end development and JavaScript for the team. </div>
                        <div className="ml-2"> Designed and iterated on a Microservice-based back-end application ecosystem, as well as front-end applications for both users and admins. </div>
                        <div className="ml-2"> Acted as the Code Owner, responsible for reviewing, revising, and maintaining a maintainable and reusable code base. </div>
                </div>
            </div>
        </div>
    );
}
