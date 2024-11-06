const expertise = [
    {
        id: 0,
        title: 'Frontend Software Development',
        desc: 'Experienced Frontend Software Developer skilled in creating dynamic, user-focused applications with React.js, Next.js, Node.js, and other modern web technologies. Proficient in building interactive, high-performance interfaces and collaborating closely with backend developers, UX/UI designers, and QA teams to deliver polished, responsive experiences.',
    },
    {
        id: 1,
        title: 'Agile methodologies',
        desc: "I have a strong background in Agile methodologies, working extensively within sprint-based environments and covering the full software development lifecycle—from gathering requirements to deployment. I focus on iterative feedback and continuous improvement to ensure timely, high-quality feature delivery that aligns with client expectations.",
    },
    {
        id: 2,
        title: 'Designing (UI/UX)',
        desc: 'I have a keen eye for UI/UX design and collaborate closely with designers to craft user-friendly, visually appealing interfaces that boost usability and engagement. My background in sketching and portrait art strengthens my understanding of aesthetics and composition, enabling me to contribute to intuitive, visually cohesive designs that resonate with users.',
    },
    {
        id: 3,
        title: 'Git     ',
        desc: "I’m experienced in managing Git workflows to ensure smooth team collaboration with clear version control. Proficient in branching strategies, pull requests, and merge conflict resolution, I support seamless integration, minimizing errors and enabling efficient releases.",
    },
    {
        id: 4,
        title: 'Problem Solving',
        desc: "I bring strong problem-solving skills, enabling efficient issue resolution and functionality improvements. My collaborative leadership ensures timely, high-quality project delivery through open communication and continuous improvement.",
    },
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
