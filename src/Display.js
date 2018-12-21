import React, { Component } from 'react';
import Icon from './Icon.js'

export default class Display extends Component{
  constructor() {
    super();

    this.state = {
      displayTeamIcons: true,
      currentTeamToDisplay: null
    }
  }

  showTeamInfo = (e) => {
    console.log(e.target.parentElement.className)
    this.setState({displayTeamIcons: false, currentTeamToDisplay: e.target.parentElement.className })
  }

  render() {

    if (this.state.displayTeamIcons) {
    return(

        <main>
        {
          this.props.nflTeams.map((team) => {
          return <Icon 
                    teamIcon={team.team_icon}
                    teamName={team.name}
                    key={team.name} 
                    showTeamInfo={this.showTeamInfo}
                    />
        })
        }
        </main>
      )
      } else {

        return(
          <main>
            <h2>{this.state.currentTeamToDisplay}</h2>
          </main>
          )
      }
  }
}