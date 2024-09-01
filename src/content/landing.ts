import { content as projectData } from './projects';

export const landingPage = {
  title: 'Landing page title from local markdown',
  internal: true,
  mainpitch: {
    title: 'Hi, I’m Sanish | **Software** **Engineer**',
    subtitle:
      "I love travelling and creating 🚀 I'm a lifelong learner 🎓 and I might have a thing for traditional Neapolitan Pizza 🍕",
    buttonText: 'Book a call',
  },
  bio: {
    title: 'My **Skills**',
    image: 'landingImage.jpg',
    features: [
      {
        header: 'I love building stuff 📱',
        body: 'I started playing with computers when I was 8 years-old. What started as an obsession of playing video games in some way or another led me to software engineering and AI research.',
      },
    ],
  },
  projects: [
    {
      body: 'Led the design and implementation of an Ant Colony Optimization algorithm for the Vehicle Routing Problem, resulting in improved route optimization and enhanced performance.',
      image: 'refy.png',
      buttonText: 'View project',
      link: '/projects/refy/',
      ...projectData.refy,
    },
    {
      body: 'Pioneered the integration of Deep Convolutional Generative Adversarial Networks using the Celeb dataset to generate artificial human faces, enhancing model training efficiency.',
      image: 'glee.png',
      buttonText: 'View project',
      link: '/projects/gleefactor/',
      ...projectData.gleefactor,
    },
    {
      body: 'Developed Convolutional Neural Networks and a Django-powered system to automate and improve facial recognition-based student attendance tracking, simplifying the process and increasing accuracy.',
      image: 'ing.png',
      buttonText: 'View project',
      link: '/projects/ing/',
      ...projectData.ing,
    },
    {
      body: 'Developed AI algorithms for predicting cardiovascular disease risk, integrating them into React Native and Django frameworks to enhance diagnostic accuracy and improve user engagement across mobile and web platforms.',
      image: 'movingday.png',
      buttonText: 'View project',
      link: '/projects/movingday/',
      ...projectData.movingday,
    },
  ],
  contact: {
    title: "Let's have a **chat**",
    buttonText: 'Get in touch',
  },
};
