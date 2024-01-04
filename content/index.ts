export const content = {
  title: 'Landing page title from local markdown',
  internal: true,
  mainpitch: {
    title: 'Hi, I’m Alejandro | **Software** **Engineer**',
    subtitle:
      "I love exploring and creating 🚀 I'm a lifelong learner 🎓 and I might have a thing for traditional Neapolitan Pizza 🍕",
    action: 'Book a call',
  },
  bio: {
    title: 'My **Skills**',
    image: 'landingImage.jpg',
    features: [
      {
        header: 'I love building stuff 📱',
        body: 'I started playing with computers when I was 11 years-old. Since then I have been tinkering with all sorts of technologies that in some way or another led me to work on music, photography, sound engineering, electric engineering, automation, video production, feature film post-production, VR games, and 3D sound.',
      },
    ],
  },
  projects: [
    {
      title: 'Refy',
      role: 'Full stack developer / Tech Lead',
      keywords: ['nextjs', 'typescript', 'graphql', 'apollo', 'react'],
      body: 'Assembled and lead a team of 8 developers to create core features and integrate third party APIs. Implemented CI/CD pipeline with Typescript type-checking, database migration, code linting and preview deploys.',
      image: 'refy.png',
      action: 'View project',
      link: '/projects/refy/overview/',
    },
    {
      title: 'Glee Factor',
      body: 'I took their existing wordpress site and turned it into a headless CMS with React on the frontend. The site features e-commerce, downloads and a seamless bilingual experience.',
      image: 'glee.png',
      action: 'View project',
      link: '/projects/gleefactor/overview/',
    },
    {
      title: 'ING Creatives',
      body: 'I built the latest version of the site to improve speed and performance. It features statically generated pages, cloud image resizing and a custom CMS.',
      image: 'ing.png',
      action: 'View project',
      link: '/projects/ing/overview/',
    },
    {
      title: 'Moving day',
      body: "Looking for an apartment in Montreal is quite a pain. Since Kijiji doesn't provide a public API, I made one that runs on a local server.",
      image: 'movingday.png',
      action: 'View project',
      link: '/projects/movingday/overview/',
    },
    {
      title: 'Wodly',
      body: 'Save your home workouts and display them in a friendly manner. Share with your friends!',
      image: 'wodly.png',
      action: 'View project',
      link: '/projects/wodly/overview/',
    },
  ],
  contact: {
    title: "Let's have a **chat**",
    action: 'Get in touch',
  },
};
