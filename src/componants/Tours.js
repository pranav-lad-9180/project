import React from 'react'
import Card from './Card'

function Tours(props) {
    const tours = props.tours
    console.log(tours)
    
    return (
        <div style={{display:'flex '}}>
            {tours.map((tour) => (
                <Card key={tour.id} tour={tour} />
            ))}
        </div>
    )
}

export default Tours
