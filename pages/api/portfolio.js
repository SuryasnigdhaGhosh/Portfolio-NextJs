const portfolio = [
    {
        id: 1,
        projectName: "Admin Dashboard",
        url: "https://khambee.com/",
        image: "projects/adminDash.png",
        organization: "Lean Platform Technologies",
        projectDetail: "Led a team of three (backend and QA) to develop an admin dashboard for a SaaS platform, providing robust features for lead management, flexible pricing controls, user profile management, commission settings, coupon creation, user analytics, lead management and comprehensive sorting and filtering. The dashboard also streamlined payout processing and integrated seamlessly with the main platform and sales page. Later, we expanded it to support multiple platforms, allowing admins to switch easily between them. This upgrade improved lead management efficiency by 30% and empowered the platform with real-time flexibility to switch between lifetime and subscription pricing models.",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },

            {
                tech: "REST API's"
            },
            {
                tech: "Material UI"
            },
            {
                tech: "SCSS"
            },
            {
                tech: "Javascript"
            },
            {
                tech: "Firebase"
            },
        ]
    },
    {
        id: 2,
        projectName: "Dynamic Website Builder with Customizable Themes",
        url: "https://artvista.khambee.com/",
        image: "projects/dynamicWeb.png",
        organization: "Lean Platform Technologies",

        projectDetail: "Developed a feature from proof of concept to implementation , enabling users to create and manage dynamic, multi-page websites directly from their dashboards. This feature provides users with extensive control, including multiple theme options, content and layout customization, and flexible component positioning. Each page comes with default sections, along with options to add fully customizable sections as needed. Users can also design custom pages using a library of pre-built components, with options to assign dynamic names and routing for seamless navigation. Additionally, the websites support lead form integration, helping users capture and manage leads effectively through their custom sites.The website side includes dynamic lazy loading of components activated in the user dashboard, ensuring efficient performance. It also supports dynamic routing for smooth navigation and offers seamless, responsive themes for an optimized user experience across devices.",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: "REST API's"
            },
            {
                tech: "Lazy Loading"
            },
            {
                tech: "Material UI"
            },
            {
                tech: "TailwindCSS"
            },
            {
                tech: "SCSS"
            },
        

        ]
    },
    {
        id: 3,
        projectName: "Comprehensive Multi-Course Management",
        url: "https://khambee.com/",
        image: "projects/course.png",
        organization: "Lean Platform Technologies",

        projectDetail: "Developed a feature that enables users to create and manage multiple courses directly from their dashboards, with extensive configuration options to tailor each course. Users can control all aspects of course management, from setting and adjusting pricing to managing multiple batches within a single course, tracking course status,creating course coupons, and customizing course details. Additionally, the feature supports automated email communication, allowing users to send course updates and certificates of completion to participants. Each course can be showcased seamlessly on the user’s own website, creating a cohesive experience for both instructors and learners.",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: "REST API's"
            },
            {
                tech: "MUI"
            },
            {
                tech: "TailwindCSS"
            },
            {
                tech: "Postman"
            },
        ]
    },

    {
        id: 4,
        projectName: "Google Calendar slot booking",
        url: "/",
        image: "projects/google.jpg",
        organization: "Lean Platform Technologies",

        projectDetail: "Integrated Google oAuth services through the Google Developer Console to implement a slot booking feature that connects Google Calendar and Google Meet. This feature allows users to book available time slots and automatically schedule meetings on their Google Calendar, complete with Google Meet links for easy access.",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: "NodeJS"
            },
            {
                tech: "GDC"
            },
            {
                tech: "oAuth"
            },
            {
                tech: "REST API's"
            },
            {
                tech: "Javascipt"
            },
        ]
    },
    {
        id: 5,
        projectName: "Video Calling POC",
        url: "/",
        image: "projects/vdo-call.png",
        organization: "Lean Platform Technologies",

        projectDetail: "Conducted a proof of concept to implement a video calling feature within my project, utilizing Stream APIs and SDKs. This feature enables a host to join a video call directly from their dashboard, while users can join the same call from a separate website. The goal was to create a seamless video conferencing experience that allows participants to connect effortlessly across different platforms.",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: "SDks"
            },
            {
                tech: "REST API's"
            },
        ]
    },
   

    {
        id: 7,
        projectName: "Currency Converter",
        url: "https://suryasnigdhaghosh.github.io/CurrencyConverter/",
        image: "projects/currencyConverter.png",
        organization: "Personal",

        projectDetail: "Developed a desktop application using Express.js and Tailwind CSS for real-time currency conversion, leveraging APIs to provide free, up-to-date exchange rates. The application supports currencies from all countries and offers seamless, accurate conversions.",
        technologiesUsed: [
            {
                tech: "ExpressJS"
            },
            {
                tech: "Tailwind CSS"
            },
            {
                tech: "REST API's"
            },

        ]
    },
    {
        id: 6,
        projectName: "STOCKSchart",
        url: "/",
        image: "projects/stocks.png",
        organization: "Personal",

        projectDetail: "Developed a stock chart application with an intuitive, visually appealing UI that displays real-time stock prices of major companies in dynamic graphs. Integrated the AlphaVantage free stock exchange API for live data and implemented ApexCharts for responsive, interactive charting.",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: "Tailwind CSS"
            },
            {
                tech: "REST API's"
            },

        ]
    },
    
    {
        id: 8,
        projectName: "SpaceFighter",
        url: "/",
        image: "projects/pygame.png",
        organization: "Personal",

        projectDetail: "Developed a basic spacefighter game using Python's Pygame module, featuring background music and custom images. This project was a hands-on way to learn and practice Pygame fundamentals.",
        technologiesUsed: [
            {
                tech: "Python"
            },
            {
                tech: "pygame"
            },
        
        ]
    },
]
export default function handler(req, res) {
    res.status(200).json(portfolio)
}
