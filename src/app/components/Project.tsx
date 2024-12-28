
import React from 'react'
import Card from './Card'
import ContentCard from './ContentCard'
import Background from './Background'

const Project = () => {
  return (
    <section className='main grid relative col-start-1 col-end-13 md:grid-cols-3 w-full gap-8 p-4'>
      <div className="flex flex-col gap-6">
        <Card src='/phaser.jpg' heading='Get-together' subheading='A virtual hangout place' inProgress={true} link='/' />
        <Card src='/camp.png' heading='Campsite' subheading='Find campsites near you' inProgress={false} link='/campsite' />
        <ContentCard title={"What's next?"} description={"I am constantly learning be it tech or non-tech. At present, I am learning about framer motion and web3 and as of non-tech thing I am trying to learn how to make a plushie (I'm just a girl)"} />
       
        <Background />
      </div>
      
      <div className='flex flex-col gap-6'>
        <Card Vdsrc='/feature-2.mp4' heading='Zentry' subheading='Inspired from Zentry' inProgress={false} link='/zentry' />
        <Background/>
        <Card src='/game-logo.png' heading='Little fruit ninja' subheading='Pixel art game' inProgress={false} link="/little-fruit-ninja" />

      </div>
      
      <div className="flex flex-col gap-6">
        <Card src='/amrit.webp' heading='Amrit' subheading='Made for community' inProgress={false} link='https://amrit.piramalswasthya.org/' />
        <ContentCard title={"What I use"} description={"I use a variety of tools and technologies to build my projects, including React, TypeScript, Tailwind CSS, and more. Each project is crafted with attention to detail and a focus on delivering a great user experience."} />
        <Card Vdsrc='/chilli.mp4' heading='Thirtysixstudios' subheading='Inspired by thirtysixstudios ' inProgress={false} link='/thirtysixstudios' />
        <Card src='/feature-1.png' heading='xora' subheading='Saas landing page' inProgress={true} link='/xora' />
        <Background />
      </div>
      
    </section>
  )
}

export default Project