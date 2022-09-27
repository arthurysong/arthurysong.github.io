import React from "react"
import "./resume.css"
import home from "../images/icons/home.png"
import mail from "../images/icons/mail.png"
import phone from "../images/icons/phone.png"
import web from "../images/icons/web.png"

export default function Resume() {
  return (
    <div
      className="resume"
      style={{
        backgroundColor: "#333",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 50,
      }}
    >
      <div
        className="paper"
        style={{
          width: 816,
          height: 1054,
          backgroundColor: "white",
          overflow: "hidden",
          fontSize: 12,
        }}
      >
        <div
          className="grid"
          style={{
            display: "grid",
            gridTemplateColumns: "4fr 2fr",
            alignItems: "start",
          }}
        >
          <div
            className="headerBorder"
            style={{
              borderLeft: "2px solid #7A7A7A",
              borderBottom: "2px solid #7A7A7A",
              gridColumn: "1 / 3",
              zIndex: 5,
            }}
          >
            <div
              className="header"
              style={{
                zIndex: 10,
                color: "white",
                backgroundColor: "#353F58",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                width: "100%",
                padding: 40,
                position: "relative",
                left: 8,
                top: -20,
                // fontFamily: "georgia; serif",
              }}
            >
              <h1
                style={{
                  textTransform: "uppercase",
                  letterSpacing: 6,
                  marginBottom: 10,
                  fontFamily: "georgia, serif",
                  fontSize: 32,
                }}
              >
                Arthur Song
              </h1>

              <div
                style={{
                  width: 45,
                  height: 5,
                  backgroundColor: "white",
                  marginBottom: 8,
                }}
              />
              <h4
                style={{
                  textTransform: "uppercase",
                  fontFamily: "georgia, serif",
                  fontSize: 12,
                  letterSpacing: 2,
                }}
              >
                Software Engineer
              </h4>
            </div>
          </div>

          <div
            className="left"
            style={{ paddingTop: 14, paddingLeft: 30, paddingRight: 18 }}
          >
            <div className="experience section">
              <SectionHeader text="Experience" />
              <div className="subsection">
                <h3>Software Engineer Full Stack</h3>
                <p style={{ fontStyle: "italic" }}>
                  TapGoods, Dallas, TX / Jun 2021 - May 2022
                </p>
                <ul>
                  <li>
                    Redesigned authorization system using Ruby on Rails, MySQL,
                    and Redux, allowing businesses to create custom levels of
                    authorization for their users
                  </li>
                  <li>
                    Led ChurnZero API integration into Ruby on Rails and React
                    to track user data and reduce churn
                  </li>
                  <li>
                    Updated Stripe API business logic in Ruby to reflect new
                    pricing model
                  </li>
                  <li>
                    Implemented work orders feature in React and Ruby on Rails
                    to allow users to track the maintenance of inventory
                  </li>
                  <li>
                    Created Ruby scripts to fix bugs for clients and to migrate
                    existing data to support new features
                  </li>
                  <li>
                    Overhauled inventory management logic in Ruby on Rails,
                    ElasticSearch, and Searchkick to support 'first come first
                    served' model
                  </li>
                </ul>
              </div>
              <div className="subsection">
                <h3>Software Engineer</h3>
                <p style={{ fontStyle: "italic" }}>
                  Louis and Gregory, New York, NY / Sep 2020 - Feb 2021
                </p>
                <ul>
                  <li>
                    Built customized checkout experience using React, Paypal
                    SDK, and Braintree API
                  </li>
                  <li>
                    Integrated order processing using NodeJS and tested
                    reliability using different user journeys
                  </li>
                  <li>
                    Designed QR feature using Socket.io, NodeJS, and ReactJS
                    allowing users to control POS machines using personal
                    devices
                  </li>
                  <li>
                    Implemented communication strategy between servers, POS
                    applications, and micro-controllers using Socket.io and
                    NodeJS
                  </li>
                  <li>
                    Created and maintained documentation for code repositories
                  </li>
                </ul>
              </div>
            </div>

            <div className="projects section">
              <SectionHeader text="Projects" />

              <div className="subsection">
                <h3>MWriter</h3>
                <a href="https://shorturl.at/efzLS" target="_blank">
                  shorturl.at/efzLS
                </a>
                <ul>
                  <li>
                    Utilized Express.js, MongoDB, and React to create a
                    cloud-based WYSIWYG journal app
                  </li>
                  <li>
                    Automated the creation and importing of GitHub gists using
                    GitHub API
                  </li>
                  <li>
                    Leveraged Medium’s API to publish journal entries directly
                    from Mwriter
                  </li>
                </ul>
              </div>

              <div className="subsection">
                <h3>Console Poker</h3>
                <a href="https://shorturl.at/cmZ38" target="_blank">
                  shorturl.at/cmZ38
                </a>
                <ul>
                  <li>
                    Designed business logic in Rails API to store and represent
                    Texas Hold’em games
                  </li>
                  <li>
                    Integrated Stripe’s payment API to accept user payments and
                    store account funds
                  </li>
                  <li>
                    Integrated Google API to allow authentication via Google
                    email
                  </li>
                  <li>
                    Built real-time multi-player capabilities including chatting
                    using Rails ActionCable and React.js
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="right"
            style={{
              backgroundColor: "#F5F6F5",
              padding: "14px 18px",
              top: -50,
              paddingTop: 64,
              position: "relative",
              paddingBottom: 54,
            }}
          >
            <div className="links section">
              <ul style={{ listStyleType: "none" }}>
                <li>
                  <img src={mail} />
                  arthursong14@gmail.com
                </li>
                <li>
                  <img src={phone} />
                  (818) 269-7378
                </li>
                <li>
                  <img src={home} />
                  Glendale, CA, 91208
                </li>
                <li>
                  <img src={web} />
                  <a
                    href="https://arthurysong.github.io"
                    style={{ color: "inherit", textDecoration: "inherit" }}
                    target="_blank"
                  >
                    https://arthurysong.github.io
                  </a>
                </li>
              </ul>
            </div>

            <div className="education section">
              <SectionHeader text="Education" />

              <h3>Western Governors University</h3>
              <h6>Salt Lake City, UT</h6>
              <p style={{ fontStyle: "italic" }}>(Apr 2024)</p>
              <p style={{ marginBottom: 18 }}>
                Bachelor of Science in Computer Science
              </p>

              <h3>Flatiron School</h3>
              <h6>New York, NY</h6>
              <p style={{ fontStyle: "italic" }}>Apr 2019 - Apr 2020</p>
              <p>Software Engineering Bootcamp</p>
            </div>

            <div className="skills section">
              <SectionHeader text="Additional Skills" />

              <ul>
                <li>React</li>
                <li>Python</li>
                <li>Ruby on Rails</li>
                <li>AWS</li>
                <li>MySQL</li>
                <li>PostgreSQL</li>
                <li>RSpec</li>
                <li>ElasticSearch</li>
                <li>Git, GitHub</li>
                <li>SCRUM</li>
                <li>REST</li>
                <li>Docker</li>
                <li>API Integration</li>
              </ul>
            </div>

            <div className="certifications section">
              <SectionHeader text="Certifications" />

              <p>AWS Cloud Practitioner Certification</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const SectionHeader = ({ text }) => {
  return (
    <div style={{ marginBottom: 15 }}>
      <h2 style={{ marginBottom: 2 }}>{text}</h2>
      <div style={{ height: 5, width: 25, backgroundColor: "#CFCFCF" }} />
    </div>
  )
}
