import React from 'react'
import { Card } from 'react-bootstrap'

const Weather = ( props ) => {
    console.log(props.data)
    return (
        <div>
            <Card style={{ width: '40rem' }}>
                <Card.Img variant="top" style={{width: '100px'}} src={`https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`} />
                <Card.Body>
                    <Card.Title>{props.data.name}: {props.data.main.feels_like} &#176;C</Card.Title>
                    <Card.Text>
                        {props.data.weather[0].description}
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
        </div>
    )
}

export default Weather