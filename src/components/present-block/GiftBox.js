import React from 'react'

const GiftBox = ({click, step}) => {
  return(
    <section className={`step-${step}`}>
      <div className="giftbox" onClick={click}>
        <div className="cover">
          <div></div>
        </div>
        <div className="box"></div>
      </div>
      <div className="icons">
        <div className="row">
          <span className="letter" style={{transition: 'transform 0.4s ease-out 0.82s, opacity 0.4s 0.82s'}}>Л</span>
          <span className="letter" style={{transition: 'transform 0.4s ease-out 0.8s, opacity 0.4s 0.8s'}}>е</span>
          <span className="letter" style={{transition: 'transform 0.4s ease-out 0.89s, opacity 0.4s 0.89s'}}>н</span>
          <span className="letter" style={{transition: 'transform 0.4s ease-out 0.87s, opacity 0.4s 0.87s'}}>о</span>
          <span className="letter" style={{transition: 'transform 0.4s ease-out 0.86s, opacity 0.4s 0.86s'}}>ч</span>
          <span className="letter" style={{transition: 'transform 0.4s ease-out 0.86s, opacity 0.4s 0.88s'}}>к</span>
          <span className="letter" style={{transition: 'transform 0.4s ease-out 0.86s, opacity 0.4s 0.90s'}}>а</span>
          <span className="letter" style={{transition: 'transform 0.4s ease-out 0.86s, opacity 0.4s 0.90s'}}>&nbsp;</span>
          <span className="letter" style={{transition: 'transform 0.4s ease-out 0.86s, opacity 0.4s 0.90s'}}>!</span>
          <span className="letter" style={{transition: 'transform 0.4s ease-out 0.86s, opacity 0.4s 0.90s'}}>!</span>
          <span className="letter" style={{transition: 'transform 0.4s ease-out 0.86s, opacity 0.4s 0.90s'}}>!</span>
        </div>
        <div className="row">
          <span className="letter" style={{transition: 'transform 0.4s ease-out 0.82s, opacity 0.4s 0.82s'}}>C</span>
          <span className="letter" style={{transition: 'transform 0.4s ease-out 0.8s, opacity 0.4s 0.8s'}}>&nbsp;</span>
          <span className="letter" style={{transition: 'transform 0.4s ease-out 0.89s, opacity 0.4s 0.89s'}}>Д</span>
          <span className="letter" style={{transition: 'transform 0.4s ease-out 0.87s, opacity 0.4s 0.87s'}}>н</span>
          <span className="letter" style={{transition: 'transform 0.4s ease-out 0.86s, opacity 0.4s 0.86s'}}>е</span>
          <span className="letter" style={{transition: 'transform 0.4s ease-out 0.86s, opacity 0.4s 0.88s'}}>м</span>
          <span className="letter" style={{transition: 'transform 0.4s ease-out 0.86s, opacity 0.4s 0.90s'}}>&nbsp;</span>
          <span className="letter" style={{transition: 'transform 0.4s ease-out 0.93s, opacity 0.4s 0.90s'}}>Р</span>
          <span className="letter" style={{transition: 'transform 0.4s ease-out 0.76s, opacity 0.4s 0.90s'}}>о</span>
          <span className="letter" style={{transition: 'transform 0.4s ease-out 0.96s, opacity 0.4s 0.90s'}}>ж</span>
          <span className="letter" style={{transition: 'transform 0.4s ease-out 0.96s, opacity 0.4s 0.90s'}}>д</span>
          <span className="letter" style={{transition: 'transform 0.4s ease-out 0.96s, opacity 0.4s 0.90s'}}>е</span>
          <span className="letter" style={{transition: 'transform 0.4s ease-out 0.96s, opacity 0.4s 0.90s'}}>н</span>
          <span className="letter" style={{transition: 'transform 0.4s ease-out 0.96s, opacity 0.4s 0.90s'}}>и</span>
          <span className="letter" style={{transition: 'transform 0.4s ease-out 0.96s, opacity 0.4s 0.90s'}}>я</span>
          <span className="letter" style={{transition: 'transform 0.4s ease-out 0.83s, opacity 0.4s 0.90s'}}>&nbsp;</span>
          <span className="letter" style={{transition: 'transform 0.4s ease-out 0.84s, opacity 0.4s 0.90s'}}>т</span>
          <span className="letter" style={{transition: 'transform 0.4s ease-out 0.87s, opacity 0.4s 0.94s'}}>е</span>
          <span className="letter" style={{transition: 'transform 0.4s ease-out 0.89s, opacity 0.4s 0.95s'}}>б</span>
          <span className="letter" style={{transition: 'transform 0.4s ease-out 0.81s, opacity 0.4s 0.96s'}}>я</span>
          <span className="letter" style={{transition: 'transform 0.4s ease-out 0.84s, opacity 0.4s 0.97s'}}>&nbsp;</span>
          <span className="letter" style={{transition: 'transform 0.4s ease-out 0.82s, opacity 0.4s 0.98s'}}>!</span>
          <span className="letter" style={{transition: 'transform 0.4s ease-out 0.88s, opacity 0.4s 0.99s'}}>!</span>
          <span className="letter" style={{transition: 'transform 0.4s ease-out 0.89s, opacity 0.4s 0.89s'}}>!</span>
        </div>
      </div>
    </section>
  )
}

export default GiftBox;