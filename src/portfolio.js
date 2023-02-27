const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://luke-ichpekov.github.io/portfolio/',
  title: 'LI.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Luke Ichpekov',
  role: 'Software Engineer',
  description:
    'Hello! I’m Luke, and I love building things on the internet. I’m a third-year computer engineering student with a passion for modern tech. I’ve been fortunate enough to work with B2B companies, startups, and clients through freelancing. My current focus is creating modern, functional, and highly scalable digital experiences at League Inc.',
  social: {
    linkedin: 'https://www.linkedin.com/in/luke-ichpekov/',
    github: 'https://github.com/luke-ichpekov',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Spotify Tracker',
    description:
      'Inspired by Spotify’s yearly wrapped, this web app allows users to login and view a collection of recent statistics, such as recently played songs, favorite song of the month, and top artist of the month.',
    stack: ['React', 'Spotify API'],
    sourceCode: 'https://github.com/luke-ichpekov/spotify-tracker',
    livePreview: 'https://luke-ichpekov.github.io/spotify-tracker/',

  },
  {
    name: 'Retro AI',
    description:
      'After fondly recalling my experiences of playing Pokemon on my DS, I became interested in AI, particularly reinforcement learning. The project I’m showcasing features various agents trained to excel at classic retro games.',
    stack: ['Python', 'Numpy', 'Javascript'],
    sourceCode: 'https://github.com/luke-ichpekov/RetroAiCode',
    livePreview: 'https://luke-ichpekov.github.io/RetroAI/',

  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'Python',
  'C/C++',
  "Java",
  'TypeScript',
  'React',
  'Vue',
  'Material UI',
  'Git',
  'Jest',
  'Docker',
  'Grafana',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'lichpeko@uwaterloo.ca',
}

export { header, about, projects, skills, contact }
