import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Github, ExternalLink } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'WatchOut',
      description:
        'Wanna watch the latest and popular movies with real-time updates? WatchOut is the platform you are looking for!',
      tech: [
        'React',
        'JavaScript',
        'CSS',
        'Tailwind CSS',
        'API Integration',
        'FireBase'
      ],
      github: 'https://github.com/DarKxsouL/React_Projects',
      demo: 'https://imdb-clone-app-ashy.vercel.app/'
    },
    {
      title: 'Calendo',
      description:
        'Manage your reminders and events with ease. Calendo is a simple yet productive and intuitive calendar. Sign up to Calendo sat manage your personel events and reminders with high security and privacy.',
      tech: ['HTML', 'CSS', 'JavaScript', 'FireBase'],
      github: 'https://github.com/DarKxsouL/Calendo',
      demo: 'https://calendo-git-main-jiteshs-projects-c5b58d74.vercel.app'
    },
    // {
    //   title: 'ShopIt',
    //   description:
    //     'Confused where to find the right product at the minimum cost? Look no further! ShopIt is the perfect solution for you.',
    //   tech: ['React', 'Typescript', 'MySQL', 'React'],
    //   github: '#',
    //   demo: '#'
    // },
    {
      title: 'Car Karo',
      description:
        'A car rental application that offers a range of cars with various options, including rental rates, locations, and reservation system.',
      tech: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'Php'],
      github: 'https://github.com/DarKxsouL/CallKaro',
      demo: 'https://carkaro.infinityfreeapp.com/'
    },
    {
      title: 'Face Sync',
      description:
        'Computer vision application that makes your attendance system more efficient and accurate by using computer vision to detect faces and track their attendance.',
      tech: ['Python', 'OpenCV', 'Machine Learning'],
      github: 'https://github.com/DarKxsouL/Face_Sync',
      video:
        'https://drive.google.com/file/d/1mljyVd-mt14o6m8fK5shqrSjicoLZzsD/view'
    },
    {
      title: 'Brick Braker Game',
      description:
        'Desktop application for managing inventory with features like stock tracking, supplier management, and reporting.',
      tech: ['Java', 'Swing', 'MySQL', 'JDBC'],
      github: 'https://github.com/DarKxsouL/BrickBrakerGame',
      video:
        'https://drive.google.com/file/d/1umeU0GMRGN8vUz7wSbY6O0196VC1iRhf/view'
    },
    {
      title: 'Chat Application',
      description:
        'A functional calculator application built with Java Swing, supporting basic and advanced mathematical operations.',
      tech: ['Java', 'javafx', 'AWT'],
      github: 'https://github.com/DarKxsouL/JavaChatApp',
      video:
        'https://drive.google.com/file/d/161EzbPOJHPTMkwJfZ8vcUa2OMBmys1TT/view'
    },
    {
      title: 'Java Swing Calculator',
      description:
        'A functional calculator application built with Java Swing, supporting basic and advanced mathematical operations.',
      tech: ['Java', 'Swing', 'AWT'],
      github: 'https://github.com/DarKxsouL/JavaSwingCalculator ',
      video:
        'https://drive.google.com/file/d/1EiwUxFn8TdC2sRITJjRonaILf0HbpHf_/view'
    },
    {
      title: 'Bank Application',
      description:
        'Desktop application for managing inventory with features like stock tracking, supplier management, and reporting.',
      tech: ['Java', 'Swing', 'MySQL', 'JDBC'],
      github: 'https://github.com/DarKxsouL/BankApplication',
      video:
        'https://drive.google.com/file/d/1L1-OedjIIKPBTfQfOAQxKFBtCrcOA2-5/view'
    },
    {
      title: 'Currancy Convertor',
      description:
        'A functional calculator application built with Java Swing, supporting basic and advanced mathematical operations.',
      tech: ['Java', 'Swing', 'AWT'],
      github: 'https://github.com/DarKxsouL/CurrancyConvertor',
      video:
        'https://drive.google.com/file/d/1vdswq7U0vTuFUoxYRHiW0S84hpH_EDnb/view'
    },
    {
      title: 'To Do List App',
      description:
        'A functional calculator application built with Java Swing, supporting basic and advanced mathematical operations.',
      tech: ['Java', 'Swing', 'AWT'],
      github: 'https://github.com/DarKxsouL/ToDoListApp',
      video:
        'https://drive.google.com/file/d/1eIp4Peqei4v-jW8BhT1YnVrXmhFALug-/view'
    }
  ]

  const handleGithubClick = (githubUrl: string) => {
    window.open(githubUrl, '_blank', 'noopener,noreferrer')
  }

  const handleDemoClick = (demoUrl: string) => {
    window.open(demoUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className='py-20 px-4 bg-background dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden'>
      {/* Animated background */}
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-3xl animate-levitate'></div>
        <div className='absolute bottom-10 right-10 w-48 h-48 bg-gradient-to-r from-purple-400/5 to-pink-400/5 rounded-full blur-2xl animate-float-reverse'></div>
        <div className='floating-particle-1'></div>
        <div className='floating-particle-2'></div>
        <div className='floating-particle-3'></div>
      </div>

      <div className='max-w-6xl mx-auto relative z-10'>
        <div className='text-center mb-16 animate-bounce-in'>
          <h2 className='font-display text-4xl font-bold mb-4 text-gray-800 dark:text-white text-shimmer hover:animate-glow transition-all duration-300 cursor-default'>
            Featured Projects
          </h2>
          <div className='w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 animate-scale-in hover:w-32 transition-all duration-500 morphing-gradient'></div>
          <p className='font-sans text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-300 animate-fade-in delay-400'>
            Here are some of the projects I've worked on that demonstrate my
            technical skills and problem-solving abilities.
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <Card
              key={index}
              className='card-interactive animate-slide-in-elastic dark:bg-slate-800 dark:border-slate-700 glass-morphism group'
              style={{ animationDelay: `${200 + index * 150}ms` }}
            >
              <CardHeader className='relative'>
                <CardTitle className='font-display text-xl font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300'>
                  {project.title}
                </CardTitle>
                <CardDescription className='font-sans text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-300'>
                  {project.description}
                </CardDescription>

                {/* Interactive decorative element */}
                <div className='absolute top-2 right-2 w-2 h-2 bg-blue-400/30 rounded-full animate-bounce-gentle opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              </CardHeader>
              <CardContent className='relative'>
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className='px-3 py-1 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium hover:scale-105 transition-all duration-200 hover:bg-gray-200 dark:hover:bg-slate-600 animate-bounce-in hover-shimmer cursor-pointer'
                      style={{
                        animationDelay: `${
                          400 + index * 150 + techIndex * 50
                        }ms`
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.video && (
                    <p className='text-red-600 dark:text-red-400 font-semibold text-sm mb-2'>
                      Sorry demo is not available! Check out the output video!
                    </p>
                  )}
                </div>
                <div className='flex gap-3'>
                  <Button
                    variant='outline'
                    size='sm'
                    className='flex-1 btn-interactive hover:scale-105 transition-all duration-300 group/btn'
                    onClick={() => handleGithubClick(project.github)}
                  >
                    <Github className='mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform duration-300' />
                    Code
                  </Button>
                  {project.demo ? (
                    <Button
                      size='sm'
                      className='flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 btn-interactive hover:scale-105 transition-all duration-300 group/btn'
                      onClick={() => handleDemoClick(project.demo)}
                    >
                      <ExternalLink className='mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform duration-300' />
                      Demo
                    </Button>
                  ) : project.video ? (
                    <Button
                      size='sm'
                      className='flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 btn-interactive hover:scale-105 transition-all duration-300 group/btn'
                      onClick={() => window.open(project.video, '_blank')}
                    >
                      Demo: Video
                    </Button>
                  ) : (
                    <Button
                      size='sm'
                      disabled
                      className='opacity-50 cursor-not-allowed'
                    >
                      No Preview
                    </Button>
                  )}
                </div>

                {/* Interactive floating elements */}
                <div className='absolute bottom-2 right-2 w-3 h-3 bg-purple-400/20 rounded-full animate-float-subtle delay-1000 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
