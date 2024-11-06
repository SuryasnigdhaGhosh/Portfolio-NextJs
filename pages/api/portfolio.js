const portfolio = [
    
    {
        id: 1,
        projectName: "KhamBee (Dynamic Website Builder & Course Management)",
        url: "https://khambee.com/",
        image: "projects/khamB.png",
        gif:"projects/khamB.gif",
        organization: "Lean Platform Technologies",

        projectDetail: "Developed two interconnected features to launch KhamBee: a Dynamic Website Builder, enabling users to create and manage customizable, multi-page websites with lead form support, lazy loading, and responsive themes; and a Multi-Course Management system, allowing users to create and manage courses with pricing, batch management, status tracking, coupon creation, and automated email updates, all seamlessly integrated into users' websites.",
        technologiesUsed: [
            {
                tech: "React.js"
            },
            {
                tech: "Next.js"
            },
            {
                tech: "REST API's"
            },
            {
                tech: "Firebase"
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
            {
                tech: "MUI"
            },


        ]
    },
    {
        id: 2,
        projectName: "Admin Dashboard",
        url: "https://khambee.com/",
        image: "projects/admin.png",
        gif:"projects/admin.gif",
        organization: "Lean Platform Technologies",
        projectDetail: "Led a team to build a multi-functional admin dashboard for a SaaS platform, including lead management, pricing controls, and user analytics, later expanding it for multiple platform support and boosting lead management efficiency by 30%.The dashboard also streamlined payout processing and integrated seamlessly with the main platform and sales page, and empowered the platform with real-time flexibility to switch between lifetime and subscription pricing models.",
        technologiesUsed: [
            {
                tech: "React.js"
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
        id: 3,
        projectName: "Google Calendar slot booking",
        url: "/",
        image: "projects/google.jpg",
        organization: "Lean Platform Technologies",

        projectDetail: "Integrated Google oAuth services through the Google Developer Console to implement a slot booking feature that connects Google Calendar and Google Meet. This feature allows users to book available time slots and automatically schedule meetings on their Google Calendar, complete with Google Meet links for easy access.",
        technologiesUsed: [
            {
                tech: "React.js"
            },
            {
                tech: "Node.js"
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
        id: 4,
        projectName: "Social(WIP)",
        url: "https://github.com/SuryasnigdhaGhosh/SOCIAL-React",
        image: "projects/social.png",
        organization: "Personal Project",

        projectDetail: "Developing a social media platform as a first full-stack project, using Node.js, Express.js, MySQL, and Postman for the backend, with React.js and SCSS for the frontend. Current features include login and registration, customizable profiles, photo posting, user connections, post likes, and more.",
        technologiesUsed: [
            {
                tech: "React.js"
            },
            {
                tech: "Node.js"
            },
            {
                tech: "Express.js"
            },
            {
                tech: "SCSS"
            },
            {
                tech: "MySQL"
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
                tech: "React.js"
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
        id: 8,
        projectName: "SpaceFighter",
        url: "https://github.com/SuryasnigdhaGhosh/SPACEFIGTER-pygame",
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

    {
        id: 7,
        projectName: "Currency Converter",
        url: "https://suryasnigdhaghosh.github.io/CurrencyConverter/",
        image: "projects/currencyConverter.png",
        organization: "Personal",

        projectDetail: "Developed a desktop application using Electron.js and Tailwind CSS for real-time currency conversion, leveraging APIs to provide free, up-to-date exchange rates. The application supports currencies from all countries and offers seamless, accurate conversions.",
        technologiesUsed: [
            {
                tech: "Electron.js"
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
        url: "https://github.com/SuryasnigdhaGhosh/STOCKSchart",
        image: "projects/stocks.png",
        organization: "Personal",

        projectDetail: "Developed a stock chart application with an intuitive, visually appealing UI that displays real-time stock prices of major companies in dynamic graphs. Integrated the AlphaVantage free stock exchange API for live data and implemented ApexCharts for responsive, interactive charting.",
        technologiesUsed: [
            {
                tech: "React.js"
            },
            {
                tech: "Tailwind CSS"
            },
            {
                tech: "REST API's"
            },

        ]
    },


]
export default function handler(req, res) {
    res.status(200).json(portfolio)
}
