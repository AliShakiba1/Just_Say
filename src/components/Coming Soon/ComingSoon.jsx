import React from 'react'
import JustSayLogo from '../../assets/loge.svg'
import Timer from '..//timer/timer'
import './ComingSoon.css'

const ComingSoon = () => {
  return (
    <div className="container">
      <div className="header">logo</div>
      <div className="main">
        <img
          src={JustSayLogo}
          alt="JustSayLogo"
          style={{
            width: '500px',
            height: '520px',
          }}
        />
        <div className="COMINGSOON">COMING SOON</div>
        <Timer />
      </div>
    </div>
  )
}

export default ComingSoon
