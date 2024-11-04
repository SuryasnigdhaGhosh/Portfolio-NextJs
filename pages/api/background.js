const background = [
    {
        eduCards: [
          
            {
                id: 1,
                title: 'University of Engineering and Management',
                degree: 'B.Tech Computer Science',
                // detail: "Completed SSC part 1 and part 2 in Science subjects from Falcon Academy Seni Gumbat Kohat",
                year: '2020-2024'
            },
            {
                id: 2,
                title: 'Central Model School',
                degree: 'Senior Secondary (XII), Science,CBSE',
                year: '2017-2019'
            },
            {
                id: 3,
                title: 'Springdale High School',
                degree: 'Secondary(X), WBBSE',
                // detail: "Bachelor's Degree in Computer System Engineering from UET Peshawar.",
                year: '2017'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'Software Developer Engineer 1',
                role: 'Lean Platform Technologies',
                // url: 'https://www.encoderbytes.com/',
                desc: "As an SDE1, I develop and maintain a SaaS product, implementing new features and ensuring optimal performance.",

                year: 'Oct 2024 - Present',
                location: 'Goa, India'
            },
            {
                id: 2,
                title: 'Member of Technical Staff',
                role: 'Lean Platform Technologies',
                // url: 'https://jmm.ltd/',
                desc: 'Collaborated with the QA , backend and designing team to identify and resolve frontend related issues, ensuring a bug-free user experience.',
                year: 'July 2024 - September 2024',
                location: 'Goa, India'
            },
            {
                id: 3,
                title: 'Frontend Developer Intern',
                role: ' Lean Platform Technologies',
                // url: 'no website',
                desc: 'Utilized React.js to build dynamic and interactive components, improving the overall performance and responsiveness of the application',
                year: 'Feb 2024 - Jun 2024',
                location: 'Remote'
            },


        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
