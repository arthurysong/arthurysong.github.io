import React from "react"
import { Link } from "gatsby"
import { Paper } from "@material-ui/core"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "@fontsource/ibm-plex-mono"
import mwriterdemo from "../images/demo.gif"
import cpdemo from "../images/cp-demo.gif"
import lagdemo from "../images/lagdemo.gif"
import iotcardemo from "../images/iotcardemo.gif"
import resume from "../documents/resume_06_21_22.pdf"

const IndexPage = () => (
  <div
    style={{
      width: 800,
      margin: "40px auto",
      fontFamily: "IBM Plex Mono",
    }}
  >
    <SEO title="Home" />
    <h1>Arthur Song</h1>
    <div style={{ display: "flex" }}>
      {/* <ProfileLink link={resume} name="Resume" /> */}
      <Link to="/resume">Resume</Link>
      <span style={{ marginRight: 12 }}>|</span>
      <ProfileLink
        link="https://www.linkedin.com/in/arthurcodes/"
        name="LinkedIn"
      />
      <span style={{ marginRight: 12 }}>|</span>
      <ProfileLink link="https://github.com/arthurysong" name="GitHub" />
    </div>

    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: 32,
        alignItems: "start",
      }}
    >
      <p>Recent Projects</p>
      <Project
        img={lagdemo}
        imgAlt="louis and gregory app demo gif"
        name="Louis and Gregory"
        description="POS application for Louis and Gregory's beauty product dispensing machine. PayPal SDK, Braintree API, ReactJS, Socket.io, Express"
      />
      <Project
        deployedLink="https://www.youtube.com/watch?v=Kr3GwY9iteg&feature=youtu.be&ab_channel=ArthurSong"
        img={iotcardemo}
        imgAlt="iot car demo"
        name="IoT ESP 32 Robot"
        description="ESP 32 two wheeled robot controlled using a mobile Flutter app. I <3 Arduinos. MQTT, AWS EC2, Flutter, ESP 32"
      />
      <Project
        deployedLink="https://www.mwriter.app"
        img={mwriterdemo}
        imgAlt="mwriter demo gif"
        name="MWriter"
        description="A journaling application that can publish entries directly to Medium. Uses GitHub API to automatically import code blocks as GitHub gists during publishing. ReactJS, MongoDB, Express, GitHub & Medium API"
      />
      <Project
        deployedLink="http://console-poker.herokuapp.com/"
        img={cpdemo}
        imgAlt="console poker demo gif"
        name="Console Poker"
        description="Retro 8-bit themed Poker application. Users can deposit real money using Stripe into their accounts and play live Poker. Ruby on Rails, WebSockets, Redux Middlewares, React, and Stripe API, Google OAuth"
      />
    </div>
  </div>
)

const ProfileLink = ({ link, name }) => (
  <a style={{ marginRight: 12 }} href={link} target="_blank">
    {name}
  </a>
)

const Project = ({ img, imgAlt, name, description, deployedLink }) => (
  <a target="_blank" href={deployedLink}>
    <Paper style={{ display: "inline-block", width: 500, marginBottom: 32 }}>
      <img src={img} alt={imgAlt} width={500} />
      <p style={{ padding: "0 14px" }}>
        <strong>{name}</strong> - {description}
      </p>
    </Paper>
  </a>
)

export default IndexPage
