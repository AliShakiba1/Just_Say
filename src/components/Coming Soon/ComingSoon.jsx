import React from 'react'
import JustSayLogo from '../../assets/loge.svg'
import Timer from '..//timer/timer'
import Header from './/header/Header'
import './ComingSoon.css'

const ComingSoon = () => {
  return (
    <div className="container">
      <div className="header">
        <Header />
      </div>
      <div className="main">
        <img
          src={JustSayLogo}
          alt="JustSayLogo"
          className="JustSayLogo"
          style={{
            width: '350px',
            height: '350px',
          }}
        />
        <div className="COMINGSOON">COMING SOON</div>
        <Timer />
      </div>
      <div
        className="footer"
        style={{
          fontFamily: 'Inter',
        }}
      >
        <a href="https://github.com/AliShakiba1">&#169; Ali Shakiba</a>
      </div>
    </div>
  )
}

export default ComingSoon
