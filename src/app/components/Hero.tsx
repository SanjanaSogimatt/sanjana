import React from 'react'

const Hero = () => {
    return (
        <main>
            <div className="w-full z-10 max-w-8xl ">
                <div className="mt-12 mb-24 mx-6">
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-4 max-md:col-span-6 max-sm:col-span-12">
                            <h1 className="text-white text-lg opacity-40">Hey there,</h1>
                            <p className='mb-4 text-white body z-1000 md:mb-0'>
                                I'm Sanjana. I'm a developer based in India. I'm passionate about building software that makes a difference. I'm currently working on some exciting projects that I can't wait to share with you. But I’m always open to new opportunities and collaborations.
                            </p>
                        </div>
                        <div className="col-span-6 max-md:col-span-6 col-start-7 col-end-13 max-sm:col-span-12 ">
                            <div className="grid grid-cols-6 gap-4">
                                <h1 className='col-start-1 col-span-2 opacity-40'>Few things about me</h1>
                                <p className='col-start-3 col-span-5'>
                                    I am a full stack dev to survive in this economy. Apart from that I love to build games and cool looking websites. <br /> 
                                </p>
                                <br />
                                <h1 className='col-start-1 col-span-2 opacity-40'>Fun fact</h1>
                                <p className='col-start-3 col-span-5'>If I am not coding, you can find me binge watching anime (I'm a weeb) or K-Drama. <br /> So even if you don't have a project, feel free to ping me. I'm always up for a chat.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Hero