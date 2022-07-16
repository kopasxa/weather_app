import React from 'react'
import { Table, Image } from 'react-bootstrap';
import classes from '../styles/EveryDayForecast.module.css'

const EveryDayForecast = ( props ) => {
    console.log(props)
    let tds = []

    props.data.daily.forEach((e) =>  {
        let date = new Date(e.dt * 1000)
        //console.log(date)
        tds.push(<tr>
                    <td>{date.toLocaleString('en-US', {weekday: 'short'})}</td>
                    <td><Image style={{width: '50px'}} src={`https://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png`}/></td>
                    <td>{Math.floor(e.temp.day)}&#176;</td>
                    <td>{Math.floor(e.temp.night)}&#176;</td>
                </tr>)
    })

    return (
        <Table responsive className={classes.table}>
            <tbody>
                {tds}
            </tbody>
        </Table>
    )
}

export default EveryDayForecast