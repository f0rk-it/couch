'use client'

import styles from "./page.css"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from "react"

gsap.registerPlugin(ScrollTrigger)

export default function Home() {

  useEffect(() => {
    ScrollTrigger.create({
      animation: gsap.from('.logo', {
        y: '50vh',
        scale: 8,
        yPercent: -50,
      }),
      scrub: true,
      trigger: '.content',
      start: 'top bottom',
      endTrigger: '.content',
      end: 'top center'
    })
  }, [])

  return (
    <>
      <main className="main-wrapper">
        <div className="logo-container">
          <h1 className="logo">COUCH</h1>
        </div>

        <div className="container"></div>

        <div className="content">
          <img src="/single-couch.png" alt="" />
        </div>
      </main>
    </>
  )
}
