import React from "react"
import { Link } from "gatsby"
import { Paper } from "@material-ui/core"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "@fontsource/ibm-plex-mono"
import mwriterdemo from "../images/demo.gif"
import cpdemo from "../images/cp-demo.gif"


const IndexPage = () => (
  <div style={{ width: 1220, margin: '40px auto', fontFamily: "IBM Plex Mono" }}>
    <SEO title="Home" />
    <h1>Arthur Song</h1>
    <p>Recent Projects</p>
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Project img={mwriterdemo} imgAlt="mwriter demo gif" name="MWriter" description="A journaling application that can publish entries directly to Medium's website. Uses GitHub API to automatically create and import GitHub gists during publishing. ReactJS, MongoDB, Express, GitHub & Medium API"/>
      <Project img={cpdemo} imgAlt="console poker demo gif" name="Console Poker" description="Retro 8-bit themed Poker application. Users can deposit real money using Stripe into their accounts and play live Poker. Ruby on Rails, WebSockets, Redux Middlewares, React, and Stripe API, Google OAuth"/>
    </div>
  </div>
)

const Project = ({ img, imgAlt, name, description }) => (
  <Paper style={{ display: 'inline-block', width: 500, marginBottom: 32 }}>
    <img src={img} alt={imgAlt} width={500}/>
    <p style={{ padding: '0 14px' }}><strong>{name}</strong> - {description}</p>
  </Paper>
)

export default IndexPage
