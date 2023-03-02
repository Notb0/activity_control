import React, {Component} from "react";

 class Timer extends Component{
  constructor() {
    super();
    this.state = {seconds: 0,
                  minuts: 0,
                  hours: 0,
                  startStopTime: false,
                  clearTimer: false
                  };

    this.addTime5 = this.addTime5.bind(this);
    this.addTime10 = this.addTime10.bind(this);
    this.addTime30 = this.addTime30.bind(this);
  } 

  async addTime5() {
    await this.setState({minuts: this.state.minuts + 5});
    if(this.state.minuts > 59) {
      this.setState({hours: this.state.hours + 1});
      this.setState({minuts: this.state.minuts - 60});
    } else{
    }
  }

  async addTime10() {
    await this.setState({minuts: this.state.minuts + 10});
    if(this.state.minuts > 59) {
      this.setState({hours: this.state.hours + 1});
      this.setState({minuts: this.state.minuts - 60});
    } else{
    }
  }

  async addTime30() {
    await this.setState({minuts: this.state.minuts + 30});
    if(this.state.minuts > 59) {
      this.setState({hours: this.state.hours + 1});
      this.setState({minuts: this.state.minuts - 60});
    }
  }

  minusTime = () => {
    if( this.state.hours <= 0 & this.state.minuts <= 0 & this.state.seconds <= 0) {
      clearInterval(this.timer);
      this.startStopTime();
    } else {
      

      this.setState({seconds: this.state.seconds - 1});

      if(this.state.seconds <= 0 & this.state.minuts > 0) {
        this.setState({seconds: 59});
        this.setState({minuts: this.state.minuts - 1})
      };
  
      if(this.state.minuts === 0 & this.state.hours > 0) {
        this.setState({hours: this.state.hours - 1});
        this.setState({minuts: 59});
        this.setState({seconds: 59});
      };
    }
  }

  async clearTimer() {
    await this.setState({clearTimer: !this.state.clearTimer});
    if(this.state.seconds > 0 || this.state.minuts > 0 || this.state.hours > 0) {
      this.setState({seconds: 0});
      this.setState({minuts: 0});
      this.setState({hours: 0});
    }
  }

  async startStopTime() {
    await this.setState({startStopTime: !this.state.startStopTime});
    let el = document.getElementById('btn_start');
    if (this.state.startStopTime) {
      this.timer = setInterval(this.minusTime, 1000);
      el.innerText = "II";
      el.style.width = '90px';
      el.style.height = '90px';
      el.style.fontSize = '60px';
      console.log('||');
    }else {
      clearInterval(this.timer);
      el.innerText = "▶";
      el.style.width = null ;
      el.style.height = null ;
      el.style.fontSize = null;
      console.log('>');
    }

  }
  
  render() {
    return (
      <>
      <div className='main_clock'>
      <div className='main_btn_clock'>
      </div>
        <hr className='hr'/>
      <div className='main_btn_timer'>
        <button className="btn_time" onClick={this.addTime5}>+5</button>
        <button className="btn_time" onClick={this.addTime10}>+10</button>
        <button className="btn_time" onClick={this.addTime30}>+30</button>
      </div>
        <div className="show-counter">
      <div className="countdown">
        <p className="p_timer">{this.state.hours}</p>
        <span>hours</span>
      </div>
        <p className="p_timer devide">:</p>
      <div className="countdown">
        <p className="p_timer">{this.state.minuts}</p>
        <span>minuts</span>
      </div>
        <p className="p_timer devide">:</p>
      <div className="countdown">
        <p className="p_timer">{this.state.seconds}</p>
        <span>seconds</span>
      </div>
        </div>
      <div className=" main_btn_start">
        <button id="btn_start" className="btn_start flex" onClick={() => {this.startStopTime()}}>▶</button>
      </div>
      <div className="main_btn_clear">
        <button id="clear" className="btn_clear" onClick={() => {this.clearTimer()}}>clear</button>
      </div>
      </div>
      </>
    )
  }
}

export {Timer}