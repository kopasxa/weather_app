import React from 'react'
import EveryDayForecast from './EveryDayForecast'
import HeaderWeather from './HeaderWeather'

const Weather = ( props ) => {
    console.log(props.data)
    return (
        <div style={{width: '100%'}}>
            <HeaderWeather data={props.data}/>
            <EveryDayForecast data={props.forecast_data}/>
        </div>
    )
}

export default Weather