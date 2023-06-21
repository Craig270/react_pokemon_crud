import React from 'react'


//This component was built to practice using props to build reusable componenets. Notice how 
//I destructured the props in the function paramaters this saves writing props in the parameter and then need to write props.title or
//props.description. 
const GoalItem = ({title, description}) => {
  return (
    <div>
        <h3>{title} </h3>
        <p>{description}</p>
    </div>
  )
}

export default GoalItem