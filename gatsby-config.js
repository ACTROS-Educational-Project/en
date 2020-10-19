module.exports = {
  siteMetadata: {
    title: `ACTROS`,
    siteUrl: `https://actros-educational-project.github.io/en/`,
    description: `Center for Advanced Training on Robotics and %TOPICS%`,
    topics: [
      'Open Source',
      'Navigation',
      'Deep Learning',
      'Perception',
    ],
    menu: [
      {
        name: 'Home',
        path: '/'
      },
      {
        name: 'Courses',
        path: '/courses'
      }, //Poner la coma cuando se descomente!
      {
        name: 'About',
        path: '/about'
      },
      {
        name: 'Contact',
        path: '/contact'
      }
    ],
    footerMenu: [
      {
        name: 'Courses',
        path: '/courses'
      },
    ],
    search: true,
    author: {
      name: `ACTROS`,
      description: `The project <a href="https://www.rosin-project.eu/ftp/center-for-advanced-training-on-robotics-and-open-source-act-ros-education-project" target="_blank"><strong>“Center for Advanced Training on Robotics and Open Source (ACTROS)”</strong></a> aims to create a reference center in mobile robotics training using Open Source, mainly ROS and ROS2. This center is within the <a href="https://www.urjc.es/" target="_blank"><strong>Rey Juan Carlos University</strong></a>, which is currently a national benchmark in ROS training, both by university courses taught since 2015 (Advanced University Course in Robot Programming with ROS) and by the creation of a Degree in Software Robotics, which is a pioneer in our country because of its focus on software development for robots.
      This project aims to equip the existing laboratory robotics robots reference in the field (Pepper, Tiago, Kobuki, etc.) to carry out regularly run courses both for advanced students, and professionals who want to train in software development for robots. This project has received funding from the European Union’s Horizon 2020 research and innovation programme under grant agreement No. 732287.`,
      social: {
        facebook: ``,
        twitter: `https://twitter.com/IntellRobotLabs`,
        linkedin: ``,
        instagram: ``,
        youtube: ``,
        github: `https://github.com/ACTROS-Educational-Project`,
        twitch: ``
      }
    }
  },
  plugins: [
    {
      resolve: `@nehalist/gatsby-theme-nehalem`,
      options: {
        manifest: {
          name: `nehalem - A Gatsby theme`,
          short_name: `nehalem`,
          start_url: `/en/`,
          background_color: `#a4cbb8`,
          theme_color: `#a4cbb8`,
          display: `minimal-ui`,
          icon: `${__dirname}/content/assets/images/intellrobotslab_icon.png`
        }
      }
    }
  ]
};
