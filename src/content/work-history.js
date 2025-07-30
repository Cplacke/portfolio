const links = {
    ji: 'https://www.uscb.edu/academics/academic_departments/school-of-science-and-mathematics/computer-science/faculty/yiming-ji.html',
    canada: 'https://www.uscb.edu/academics/academic_departments/school-of-science-and-mathematics/computer-science/faculty/brian-canada.html',
    liang: 'https://www.uscb.edu/academics/academic_departments/school-of-science-and-mathematics/computer-science/faculty/xuwei-liang.html',
    zhang: 'https://www.uscb.edu/academics/academic_departments/school-of-science-and-mathematics/computer-science/faculty/xiaomei-zhang.html',
    tdp: 'https://careers.unitedhealthgroup.com/early-careers/programs/technology/',
}

const workHistory = [
    {
        item:"Optum Technology", role:"Software Engineer", 
        years:"2018 - 2025",
        icon:"./assets/icons/briefcase.svg",
        content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar mattis nunc sed blandit libero volutpat sed cras. Id porta nibh venenatis cras sed. Sodales ut etiam sit amet nisl purus. `
    },
    {
        item:"Optum Technology", role:"TDP Internship",
        years:"Summer 2017",
        icon:"./assets/icons/idea.svg",
        content:(
            <div>
                In the summer between my Senior semesters I had known that this was my best opportunity to secure and work an internship and find out what
                life was like in the work force on the path I had set out on. This is when I first discovered Optum Technology, a healthcare delivery technology company.
                I was invited to take part part the the <a className="text-blue-900 hover:underline cursor-pointer" onClick={() => window.open(links.tdp)}>Technology Development Program (TDP)</a> for college students and recent graduates; an 80+ student class of interns from around the country 
                grouped into teams of 8. Where we then worked to Design, Market, and Develop a health care application using an assigned technology; in our teams case Augmented Reality (AR).
            </div>
        )
    },
    {
        item:"Complete Iphone Repair", role:"Owner Operator", 
        years:"2016 - 2018",
        icon:"./assets/icons/screwdriver.svg", 
        content:`While I was in school I had what I thought to be a brilliant idea to make a little extra cash fixing iPhone screens 
        and other replacement parts (batteries, cameras, buttons, etc.). I learned this skill after paying someone else to fix a screen I had cracked
        myself, but did not want to pay that price tag again, and instead decided that it couldn't be that hard and to hone a new skill in electronics repair. I found that parts were relatively
        cheap, people in need, and that I enjoyed taking the things apart and making it whole again. I created a network and a reputation with my classmates, co-workers, and as well
        as bar and restaurant patrons in need, where I could find plenty of cracked screens.`
    },
    {
        item:"University South Carolina Beaufort", role:"BS Computational Science", 
        years:"2014 - 2018",
        icon:"./assets/icons/hat-graduation.svg",
        content:(
            <div>
                Like many college students ready to take on the world; I was young, optimistic, and undecided. Starting with the general education courses
                I then tried my hand a programing found a love for calculus, I then had cemented my decision in Majoring in Computational Science. I seemed to take 
                to it naturally and nothing was more satisfying to me than successfully running code solving your problems in milliseconds in front of your eyes. With a superb
                suite of professors (
                    <a className="text-blue-900 hover:underline cursor-pointer" onClick={() => window.open(links.ji)}>Yiming Ji, Ph.D.</a>; 
                    <a className="text-blue-900 hover:underline cursor-pointer" onClick={() => window.open(links.canada)}> Brian Canada, Ph.D.</a>; 
                    <a className="text-blue-900 hover:underline cursor-pointer" onClick={() => window.open(links.liang)}> Xuwei Liang, Ph.D.</a>; and 
                    <a className="text-blue-900 hover:underline cursor-pointer" onClick={() => window.open(links.zhang)}> Xiaomei Zhang Ph.D. </a>
                to name a few) and the sense of comradery in 
                the Lab helping each other learn and progress, I had felt I found my calling (and it that didn't work out I'll go back and be a doctor).)
            </div>
        )
    },
    {
        item:"Food & Beverage", role:"Server / Bartender",
        years:"2011 - 2018",
        icon:"./assets/icons/dinner.svg",
        content:`Started my career while in high school and continued through college, working in the food and beverage industry. 
        I worked nights and doubles on the weekends and had the opportunity to meet many exceptional people who helped me develop my work 
        ethic and hustling mentality that I still carry with me today. During this time, I gained experience in rolling burritos, 
        food expediting, serving etiquette, bartending, and craft beer knowledge. As I worked my way through college, I learned many valuable 
        skills and made lasting friendships along the way.`
    }
];

export default workHistory;