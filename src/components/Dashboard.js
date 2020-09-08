import React, { Component } from "react";
import axios from "axios"

export class Dashboard extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             coronaVirus: []
        }
    }

    componentDidMount = () =>{
        axios.get('https://corona.lmao.ninja/v2/countries/gh').then((res) => {
            this.setState({
                coronaVirus: res.data
            })
        })
    }
    
  render() {
    return (
      <div>
        <div className="header">
          <div>
            <p id="logo">PaSe</p>
          </div>
          <div className="text">
            <p>PaSe Covid-19 Tracker - GHANA</p>
          </div>
        </div>

        <div className="dashboard">
          <div className="cases">
            <p>
              Cases <i className="fa fa-caret-up fa-lg" />
            </p>
            <span>{ this.state.coronaVirus.cases }</span>
          </div>
          <div className="cases">
            <p>
              Deaths <i className="fa fa-caret-up fa-lg" />
            </p>
            <span>{ this.state.coronaVirus.deaths }</span>
          </div>
          <div className="cases">
            <p>
              Active <i className="fa fa-caret-up fa-lg" />
            </p>
            <span>{ this.state.coronaVirus.active }</span>
          </div>
          <div className="cases">
            <p>
              Recovered <i className="fa fa-caret-down fa-lg" />
            </p>
            <span>{ this.state.coronaVirus.recovered }</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
