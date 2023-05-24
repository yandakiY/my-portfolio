import React from 'react'
import Header from './Header'

const Hero = () => {
    return (
        <div className='h-screen bg-gray-700'>
            {/* Header */}
            <Header />

            {/* Hero Part */}
            {/* Presentation */}
            <section className='md:py-48 py-16'> {/* appliquer un padding top et bottom pour centrer verticalement les elements dans le hero */}
                <div className='text-white flex flex-col-reverse md:grid md:grid-cols-3 grid-cols-1 gap-2'>

                    {/* texte introduction */}
                    <div className='md:text-6xl text-5xl text-white md:text-justify text-center border py-4 px-8 m-4 col-span-2'>
                        {/* bloc 1 - grand titre */}
                        <div className="bloc1">
                            <p>
                                <span className='text-gray-300'>Hello there i'm </span>
                                <br />
                                <span className='font-bold font-name'>Yandaki.dev</span>
                            </p>

                        </div>

                        <div className='mt-4 text-2xl text-gray-300'>
                            <p>
                                I'm a <span className='text-white font-title text-3xl'>software engineer,</span> <br />
                                <span className='md:text-xl text-lg'>
                                    Passionate about Javascript and specialized in front-end development with an expertise in React.
                                    With also my knowledge in Python and Java, my goal is to create innovative web applications that improve people's lives and simplify their daily tasks.
                                </span>
                            </p>
                            <p className='mt-4 text-xl flex md:justify-start justify-center'>
                                <span className='m-4 cursor-pointer rounded-full hover:bg-white'><img width="30" height="30" src="https://img.icons8.com/ios-filled/50/github.png" alt="github"/></span>
                                <span className='m-4 cursor-pointer hover:bg-white'><img width="30" height="30" src="https://img.icons8.com/ios-filled/50/linkedin.png" alt="linkedin"/></span>
                                <span className='m-4 cursor-pointer hover:bg-white'><img width="30" height="30" src="https://img.icons8.com/ios-filled/50/codepen.png" alt="codepen"/></span>
                            </p>
                        </div>
                    </div>

                    {/* Image presentation */}
                    <div className='text-white p-4 m-4 flex items-center justify-center'>
                        <img className='rounded-full max-w-full md:w-3/4 w-1/3' src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" alt="" srcset="" />
                    </div>

                </div>
            </section>
        </div>

    )
}

export default Hero