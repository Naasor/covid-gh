import React, { Component } from "react";

export class Cards extends Component {
  render() {
    return (
      <div className='data'>

        <div className="tips">
          <a href="https://san-covid-frontend.herokuapp.com/" rel="noopener noreferrer" target="_blank">
            <p>WORLD RECORDS</p>
            <img
              src="/image/globe.jpg"
              alt="Earth Globe"
              width="195px"
              height="180px"
            /> 
          </a>
        </div>

        <div className="tips">
          <a href="https://www.euro.who.int/en/health-topics/health-emergencies/coronavirus-covid-19/technical-guidance/food-and-nutrition-tips-during-self-quarantine" rel="noopener noreferrer" target="_blank">
            <p>Health Tips</p>
            <img
              src="/image/tips6.jpg"
              alt="COVID-19 Mental Health and Healthy Habits"
              width="195px"
              height="180px"
            />
          </a>
        </div>

        <div className="tips">
          <a href="https://www.ghanahealthservice.org/covid19/latest.php" rel="noopener noreferrer" target="_blank">
            <p>News &amp; Updates</p>
            <img
              src="/image/update2.jpg"
              alt="Covid-19 Updates"
              width="195px"
              height="180px"
            />
          </a>
        </div>

      </div>
    );
  }
}

export default Cards;
