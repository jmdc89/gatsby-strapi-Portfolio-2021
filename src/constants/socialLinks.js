import React from "react"
import {
  FaFacebookMessenger,
  FaLinkedinIn,
  FaBehance,
  FaTwitter,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaFacebookMessenger className="social-icon"></FaFacebookMessenger>,
    url: "https://www.twitter.com",
  },
  {
    id: 2,
    icon: <FaLinkedinIn className="social-icon"></FaLinkedinIn>,
    url: "https://www.twitter.com",
  },
  {
    id: 4,
    icon: <FaBehance className="social-icon"></FaBehance>,
    url: "https://www.twitter.com",
  },
  {
    id: 5,
    icon: <FaTwitter className="social-icon"></FaTwitter>,
    url: "https://www.twitter.com",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link">
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