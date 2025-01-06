import { ProjectDetails } from "@/types/project"

export const projects: ProjectDetails[] = [
    {
      id: "okalpha",
      title: "OKALPHA",
      subtitle: "Digital design and development platform",
      category: "WEBFLOW DEVELOPMENT",
      year: "2024",
      client: "OKALPHA Inc.",
      role: "Lead Developer",
      timeline: "3 months",
      overview: "OKALPHA is a comprehensive digital platform that streamlines the design and development process for creative professionals.",
      challenge: "The client needed a sophisticated platform that could handle complex design workflows while maintaining an intuitive user interface.",
      solution: "Implemented a modular architecture using Webflow's CMS and custom code integrations to create a flexible and powerful system.",
      outcome: "Launched successfully with positive user feedback and a 40% increase in workflow efficiency for early adopters.",
      technologies: ["Webflow", "JavaScript", "CSS", "Figma", "REST API"],
      responsibilities: [
        "Architecture planning",
        "Custom code implementation",
        "Performance optimization",
        "Client communication"
      ],
      images: [
        {
          url: "/projects/okalpha/hero.jpg",
          alt: "OKALPHA platform hero image"
        },
        {
          url: "/projects/okalpha/dashboard.jpg",
          alt: "OKALPHA dashboard interface",
          caption: "Main dashboard interface showing key features"
        },
        {
          url: "/projects/okalpha/workflow.jpg",
          alt: "OKALPHA workflow demonstration",
          caption: "Custom workflow automation system"
        }
      ],
      nextProject: {
        id: "ecommerce-platform",
        title: "E-Commerce Platform"
      }
    },
    {
      id: "ecommerce-platform",
      title: "E-Commerce Platform",
      subtitle: "Online shopping experience with secure payment integration",
      category: "E-COMMERCE DEVELOPMENT",
      year: "2024",
      client: "Self-initiated Project",
      role: "Full Stack Developer",
      timeline: "4 months",
      overview: "A comprehensive e-commerce platform that allows users to browse products, add them to a cart, and securely check out.",
      challenge: "Integrating secure payment processing while ensuring a seamless user experience across devices.",
      solution: "Utilized React for the frontend, Node.js and Express for the backend, and integrated Stripe for payment processing.",
      outcome: "Successfully deployed with over 1,000 users in the first month and positive feedback on usability.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
      responsibilities: [
        "Frontend development with React",
        "Backend API development with Node.js",
        "Payment gateway integration",
        "User authentication implementation"
      ],
      images: [
        {
          url: "/projects/ecommerce/hero.jpg",
          alt: "E-Commerce platform hero image"
        },
        {
          url: "/projects/ecommerce/product-list.jpg",
          alt: "Product listing interface",
          caption: "User-friendly product catalog"
        },
        {
          url: "/projects/ecommerce/checkout.jpg",
          alt: "Checkout process interface",
          caption: "Secure checkout process"
        }
      ],
      nextProject: {
        id: "social-media-app",
        title: "Social Media Application"
      }
    },
    {
      id: "social-media-app",
      title: "Social Media Application",
      subtitle: "Connect and share with friends online",
      category: "SOCIAL MEDIA DEVELOPMENT",
      year: "2024",
      client: "Self-initiated Project",
      role: "Full Stack Developer",
      timeline: "5 months",
      overview: "A social media platform that allows users to create profiles, post updates, and interact with others.",
      challenge: "Managing user data privacy while enabling real-time interactions.",
      solution: "Developed using Angular for the frontend and Django for the backend with PostgreSQL as the database.",
      outcome: "Launched successfully with active user engagement and positive feedback on its features.",
      technologies: ["Angular", "Django", "PostgreSQL", "WebSocket"],
      responsibilities: [
        "Frontend application development with Angular",
        "Backend API development with Django REST framework",
        "Real-time notification implementation using WebSocket"
      ],
      images: [
        {
          url: "/projects/social-media/hero.jpg",
          alt: "Social Media Application hero image"
        },
        {
          url: "/projects/social-media/profile.jpg",
          alt: "User profile interface",
          caption: "User profile showcasing posts and interactions"
        },
        {
          url: "/projects/social-media/feed.jpg",
          alt: "News feed interface",
          caption: "Dynamic news feed displaying user updates"
        }
      ],
      nextProject: {
        id: 'task-management-app',
        title:'Task Management Application'
       }
    },
    {
       id:'task-management-app',
       title:'Task Management Application',
       subtitle:'Organize tasks efficiently',
       category:'PRODUCTIVITY TOOL',
       year:'2024',
       client:'Self-initiated Project',
       role:'Full Stack Developer',
       timeline:'3 months',
       overview:'A task management application that helps users track their tasks, set deadlines, and collaborate with others.',
       challenge:'Ensuring data synchronization between multiple users in real-time.',
       solution:'Built with Vue.js for the frontend and Ruby on Rails for the backend, utilizing ActionCable for real-time updates.',
       outcome:'Successfully deployed with over 500 active users within the first month.',
       technologies:['Vue.js', 'Ruby on Rails', 'PostgreSQL', 'ActionCable'],
       responsibilities:[
           'Frontend development using Vue.js',
           'Backend API development with Ruby on Rails',
           'Real-time collaboration features'
       ],
       images:[
           {
               url:'/projects/task-manager/hero.jpg',
               alt:'Task Management Application hero image'
           },
           {
               url:'/projects/task-manager/dashboard.jpg',
               alt:'Dashboard interface',
               caption:'Main dashboard displaying tasks'
           },
           {
               url:'/projects/task-manager/details.jpg',
               alt:'Task details view',
               caption:'Detailed view of individual tasks'
           }
       ],
       nextProject:{
           id:'blogging-platform',
           title:'Blogging Platform'
       }
    },
    {
       id:'blogging-platform',
       title:'Blogging Platform',
       subtitle:'Share thoughts and ideas through writing',
       category:'CONTENT MANAGEMENT SYSTEM',
       year:'2024',
       client:'Self-initiated Project',
       role:'Full Stack Developer',
       timeline:'3 months',
       overview:'A blogging platform where users can write, edit, and publish their blog posts.',
       challenge:'Implementing rich text editing capabilities while managing user roles.',
       solution:'Developed using Next.js for server-side rendering and Node.js for backend services.',
       outcome:'Launched successfully with positive reviews from writers about its ease of use.',
       technologies:['Next.js', 'Node.js', 'MongoDB'],
       responsibilities:[
           'Frontend development using Next.js',
           'Backend API development with Node.js',
           'User authentication and role management'
       ],
       images:[
           {
               url:'/projects/blog/hero.jpg',
               alt:'Blogging Platform hero image'
           },
           {
               url:'/projects/blog/editor.jpg',
               alt:'Rich text editor interface',
               caption:'Intuitive rich text editor for creating posts'
           },
           {
               url:'/projects/blog/posts.jpg',
               alt:'Blog posts listing page',
               caption:'Listing of published blog posts'
           }
       ],
       nextProject:{
           id:'real-time-chat-app',
           title:'Real-Time Chat Application'
       }
    },
    {
         id:'real-time-chat-app',
         title:'Real-Time Chat Application',
         subtitle:'Connect instantly through chat messages',
         category:'COMMUNICATION TOOL',
         year:'2024',
         client:'Self-initiated Project',
         role:'Full Stack Developer',
         timeline:'2 months',
         overview:'A chat application allowing users to communicate in real-time via text messages.',
         challenge:'Handling concurrent connections efficiently while ensuring message delivery reliability.',
         solution:'Built using React for the frontend, Node.js with Socket.io for real-time communication on the backend.',
         outcome:'Successfully deployed with high user engagement during initial testing phases.',
         technologies:['React', 'Node.js', 'Socket.io', 'MongoDB'],
         responsibilities:[
             'Frontend development using React',
             'Backend API development with Node.js and Socket.io'
         ],
         images:[
             {
                 url:'/projects/chat/hero.jpg',
                 alt:'Chat Application hero image'
             },
             {
                 url:'/projects/chat/chatroom.jpg',
                 alt:'Chat room interface',
                 caption:'Active chat room displaying messages'
             },
             {
                 url:'/projects/chat/user-profile.jpg',
                 alt:'User profile settings page',
                 caption:'User settings for managing profiles'
             }
         ],
         nextProject:{
             id:'grocery-delivery-app',
             title:'Grocery Delivery App'
         }
     },
     {
         id:'grocery-delivery-app',
         title:'Grocery Delivery App',
         subtitle:'Order groceries online conveniently',
         category:'E-COMMERCE DEVELOPMENT',
         year:'2024',
         client:'Self-initiated Project',
         role:'Full Stack Developer',
         timeline:'4 months',
         overview:'An app allowing users to order groceries online with delivery options.',
         challenge:'Integrating location-based services to track deliveries in real-time.',
         solution:'Developed using Flutter for mobile development, Express.js for backend APIs, and MongoDB for data management.',
         outcome:'Successfully deployed with positive feedback from users regarding convenience.',
         technologies:['Flutter', 'Express.js', 'MongoDB'],
         responsibilities:[
             'Mobile app development using Flutter',
             'Backend API development with Express.js',
             'Location-based service integration'
         ],
         images:[
             {
                 url:'/projects/grocery/hero.jpg',
                 alt:'Grocery Delivery App hero image'
             },
             {
                 url:'/projects/grocery/catalog.jpg',
                 alt:'Grocery catalog interface',
                 caption:'User-friendly grocery catalog'
             },
             {
                 url:'/projects/grocery/checkout.jpg',
                 alt:'Checkout process interface',
                 caption:'Easy checkout process'
             }
         ]
     }
  ];
  

  export async function getProjectDetails(
    id: string
  ): Promise<(ProjectDetails & { nextProject?: ProjectDetails; prevProject?: ProjectDetails }) | undefined> {
    const index = projects.findIndex((project) => project.id === id);
  
    if (index === -1) return undefined;
  
    const project = projects[index];
    const nextProject = projects[index + 1] || undefined;
    const prevProject = projects[index - 1] || undefined;
  
    return {
      ...project,
      nextProject,
      prevProject,
    };
  }
  

export async function getAllProjects() {
  return projects
}