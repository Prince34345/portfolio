export type ProjectTag = string

export interface ProjectType {
  name: string
  description: string
  tags: ProjectTag[]
  image: string
  sourceCodeLink: string
  projectLink?: string
};

export const projects: ProjectType[] = [
  {
    name: 'E-commerce Frontend-Backend',
    description: 'A comprehensive e-commerce application with a modern frontend and robust backend.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    image: 'https://via.placeholder.com/600x400', // Replace with actual image URL
    sourceCodeLink: 'https://github.com/username/ecommerce-frontend-backend',
    projectLink: 'https://ecommerce-example.com'
  },
  {
    name: 'Duolingo Clone',
    description: 'A clone of the popular language learning app Duolingo with similar functionalities.',
    tags: ['React Native', 'Firebase'],
    image: 'https://via.placeholder.com/600x400', // Replace with actual image URL
    sourceCodeLink: 'https://github.com/username/duolingo-clone',
    projectLink: 'https://duolingo-clone-example.com'
  },
  {
    name: 'Extra Project',
    description: 'An additional project that demonstrates my skills and expertise.',
    tags: ['Python', 'Flask', 'PostgreSQL'],
    image: 'https://via.placeholder.com/600x400', // Replace with actual image URL
    sourceCodeLink: 'https://github.com/username/extra-project',
    projectLink: 'https://extra-project-example.com'
  }
]
// skills section
export const skills: string[] = [
  'HTML', 'CSS', 'JavaScript', 'Express', 'jQuery', 'Node.js', 'MongoDB', 'React', 'Next.js',
  'TypeScript', 'SQL', 'PostgreSQL', 'Python', 'Java', 'C++', 'SCSS', 'React Native', 'Linux', 'Git', 'GitHub'
]
