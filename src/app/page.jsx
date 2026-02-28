'use client'

import styles from "./page.css"
import Hero from "@/components/Hero"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from "react"

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  useEffect(() => {
    ScrollTrigger.create({
      trigger: '.main-wrapper',
      pin: true,
      start: 'top top',
      end: '+=3000',
    })

    gsap.fromTo('.hero h1', {
      scale: 1,
      y: 0
    },
    
    {
      scale: 0.1,
      y: '-45vh',

      scrollTrigger: {
        trigger: '.main-wrapper',
        start: 'top center',
        end: '+=1500',
        scrub: true,
        markers: true
      }
    })
  }, [])

  return (
    <>
      <main className="main-wrapper">
        <Hero />
      </main>
    </>
  )
}
