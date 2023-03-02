import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            className: 'h_clock'
        };
      }
    
      componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
    
      componentWillUnmount() {
        clearInterval(this.timerID);
      }

      tick() {
        this.setState({
          date: new Date(), 
        });
      }

      fullScreen () {

         let element = document.getElementById('h_clock');
         let req = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen;

        if(req){
            req.call(element);
        } else {
            let wscript = new window.ActiveXObject("Wscript.shell");
            wscript.SendKeys("{F11}");
        }
        return false;
        
    };
    
    render() {
        return (
          <>
          <hr className='hr'/>
          <div className='main_clock'>
            <div className='main_btn_clock'>
            </div>
              <div className='podlojka'>
                <h1 id='h_clock' className={this.state.className}> {this.state.date.toLocaleTimeString()}</h1>
              </div>
                </div>
            <div className='main_full_screen'>
              <button onClick={() => this.fullScreen()} className='btn_full_screen'>full screen</button>
              <p className='p'>Make the time full screen so that no one distracts you and you can follow the time.</p>
            </div>
          </>
        );
      }
    }
export {Clock}