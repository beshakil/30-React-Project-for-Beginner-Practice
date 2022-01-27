import React from "react";
import "./Style.css";
import WeatherDetails from "./WeatherDetails";

function SearchMain() {
    return (
        <div>
            <div className="wrap" style={{ paddingTop: '40px' }}>
                <div className="search">
                    <nav class="navbar navbar-light">
                        <div class="form-inline">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search city.." aria-label="Search"></input>
                            <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                        </div>
                    </nav>
                </div>
            </div>
            <WeatherDetails />
        </div>
    );
}

export default SearchMain;