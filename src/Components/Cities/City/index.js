import React from 'react'

export default function City({ cityData }) {
    return (
        <div>
            <p>Name : {city.name}</p>
            <p>Temperature: {city.main.temp}</p>
        </div>
    )
}
