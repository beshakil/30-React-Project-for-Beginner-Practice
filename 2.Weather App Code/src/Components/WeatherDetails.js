import React from "react";

function WeatherDetails() {
    return (
        <>
            <article className="widget">
                <div className="weatherIcon">
                    <i className='wi wi-day-cloudy'></i>
                </div>
                <div className="weatherInfo">
                    <div className="temperature">
                        <span>24.99&deg;</span>
                    </div>
                    <div className="description">
                        <div className="weatherCondition">CLOUDS</div>
                        <div className="place">
                            Dhaka, Bangladesh
                        </div>
                    </div>
                </div>
                <div className="date">{new Date().toLocaleString()}</div>
                <div className="extra-temp">
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-sunset"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                02:30 PM <br />
                                Sunset
                            </p>
                        </div>

                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-humidity"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                94 <br />
                                Humidity
                            </p>
                        </div>
                    </div>

                    <div className="weather-extra-info">
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-rain"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                1004 <br />
                                Pressure
                            </p>
                        </div>

                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-strong-wind"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                10.2 <br />
                                Speed
                            </p>
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
}

export default WeatherDetails;
