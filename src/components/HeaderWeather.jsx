import React, { useState } from 'react'
import { Card, Image } from 'react-bootstrap'
import classes from '../styles/HeaderWeather.module.css';

const HeaderWeather = ( props ) => {
    const [clock, setClock] = useState(new Date());

    setInterval(() => setClock(new Date()), 1000);

    return (
        <Card style={{ width: '100%' }} className={classes.card}>
            <Card.Body>
                <Card.Title className={classes.card_title}>{Math.floor(props.data.main.temp)}&#176; <Image className={classes.image_weather} src={`https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}/></Card.Title>
                <Card.Subtitle className="mb-2">{props.data.name}</Card.Subtitle>
                <Card.Text className={classes.card_text}>
                    {Math.floor(props.data.main.temp_max)}&#176; / {Math.floor(props.data.main.temp_min)}&#176; It feels like {Math.floor(props.data.main.feels_like)}&#176;<br></br>
                    {clock.toLocaleString('en-US', {weekday: 'short'})}, {clock.getHours()}:{clock.getMinutes()}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default HeaderWeather