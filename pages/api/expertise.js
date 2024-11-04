const expertise = [
    {
        id: 0,
        title: 'Frontend Software Development',
        desc: 'I am an experienced Frontend Software Developer with a solid foundation in creating dynamic, user-centric applications using React.js , Next.js , Node.js etc and modern web development technologies. My background includes extensive hands-on experience in crafting interactive, high-performance interfaces and collaborating closely with cross-functional teams, including backend developers, UX/UI designers, and QA specialists, to deliver polished, responsive user experiences. ',
    },
    {
        id: 1,
        title: 'Agile methodologies',
        desc: "I have a strong background in Agile methodologies, having worked extensively within sprint-based development environments. My experience covers the complete software development lifecycle, from gathering requirements and planning through to deployment and production. By embracing iterative feedback and continuous improvement, I ensure timely delivery of features that meet client expectations while maintaining high-quality standards across each stage of development.",
    },
    {
        id: 2,
        title: 'Designing (UI/UX)',
        desc: 'I have a keen eye for UI/UX design and work closely with designers to create user-friendly, visually appealing interfaces that enhance usability and engagement. My background in sketching and portrait art deepens my understanding of aesthetics and composition, allowing me to contribute effectively to creating intuitive, visually cohesive designs that resonate with users.',
    },
    {
        id: 3,
        title: 'Git     ',
        desc: "With extensive experience in managing git workflows, I ensure effective collaboration across teams, maintaining clear version control and code organization. I am proficient in branching strategies, pull requests, and resolving merge conflicts, enabling smooth integration and deployment processes. My approach to using Git optimizes project management by facilitating seamless collaboration, minimizing errors, and supporting efficient, reliable releases.",
    },
    {
        id: 4,
        title: 'Problem Solving',
        desc: "I bring strong problem-solving and critical-thinking skills, enabling me to efficiently identify and resolve complex issues while enhancing overall functionality. My leadership approach fosters collaboration within teams, ensuring project goals are met on time and to a high standard through open communication and continuous improvement.",
    },
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
