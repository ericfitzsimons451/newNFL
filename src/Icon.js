import React from 'react';

function Icon(props) {

  return(
    <article className={props.teamName}>
      <img src={props.teamIcon} 
        alt="team logo" 
        onClick={props.showTeamInfo} 
        />  
      <h2 className="team-name" 
        onClick={props.showTeamInfo}>{props.teamName}</h2>
    </article>
    )
}

export default Icon;