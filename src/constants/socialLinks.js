import React from "react"
import {
  FaFacebookMessenger,
  FaLinkedinIn,
  FaBehance,
  FaGithub,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaFacebookMessenger className="social-icon"></FaFacebookMessenger>,
    url: "https://www.facebook.com/josemanuel.dominguez.710/",
  },
  {
    id: 4,
    icon: <FaGithub className="social-icon"></FaGithub>,
    url: "https://github.com/jmdc89",
  },
  {
    id: 2,
    icon: <FaLinkedinIn className="social-icon"></FaLinkedinIn>,
    url: "https://www.linkedin.com/in/jos%C3%A9-manuel-dom%C3%ADnguez-425b1b113/",
  },
  
  // {
  //   id: 5,
  //   icon: <FaTwitter className="social-icon"></FaTwitter>,
  //   url: "https://www.twitter.com",
  // },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} target="_blank" className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}