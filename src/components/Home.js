import React from 'react'
import image from "../back.jpg"

function Home() {
  return (
    <main>
      <img src={image} alt="mountains" className="absolute h-full object-cover w-full"/>
      <section className="about-section relative flex justify-center pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl text-white font-bold cursive leading-none lg:leading-slug home-name">Hi!I'm Maria.</h1>
      </section>
    </main>
  )
}

export default Home
