import React from "react";
import car from "./assets/car.jfif"


function Body(props){

    const data = props.carData.map(car => {
        return <div key={car.id} className="car-box">
                        <h1>{car.make}</h1>
                        <h2>Model: {car.model}</h2>
                        <h3>
                            Combination_mpg: {car.combination_mpg}
                        </h3>
                        <h3>year: {car.year}</h3>
                        <a href="#" onClick={() => {
                            props.getCarId(car.id)
                            props.displayDetails()
                            }}>See more details</a>
                </div>
    })

    return(
        <div className="body">
            <div className="watermark">
                <img src={car} alt="" />
            </div>
            {props.noData? <h2 className="no-result">Sorry!, there are no results for your search, please try adjusting your search parameters.</h2> : data}
        </div>
    )
}

export default Body