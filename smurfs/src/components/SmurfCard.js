
import React from 'react'
import { connect } from 'react-redux'


const SmurfCard = ({ smurf }) => {
    return (
        <div style={{border:'solid black 1px', padding:'10px', margin:'2rem'}}>
            <h3>{smurf.name}</h3>
            <p>{smurf.age}</p>
            <p>{smurf.height}</p>
      
        </div>
    )
}

export default connect(SmurfCard)