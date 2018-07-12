import React from 'react';
import GiftBox from './present-block/GiftBox';
import FireWorks from  './present-block/fire-works/FireWorks'
import Cake from  './present-block/cake/Cake'

class HelenBirthDayApp extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isFireWorkLaunch: false,
      step: 0
    }
  }
  
  giftBoxClickHandler() {
    let step = 0, stepTimes = [2000,500];
    const that = this;
    
    const openBox = () => {
      switch (step) {
        case 3:
          this.setState({isFireWorkLaunch: true})
        case 4:
          return false
      }
  
      setTimeout(() => openBox(), stepTimes[step] )
      ++step
      console.log(step)
      that.setState({step: step})
    }
    openBox();
  }
  
  render() {
        return(
            <main className={'birthday-container'}>
              {this.state.isFireWorkLaunch ? <FireWorks/> : null}
              <Cake/>
              <GiftBox step={this.state.step} click={this.giftBoxClickHandler.bind(this)}/>
            </main>
        )
    }
}

export  default  HelenBirthDayApp;