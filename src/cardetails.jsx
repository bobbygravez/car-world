import React from "react";

function CarDetails(props){
    const car = props.carData.find(car => car.id === props.carId)
    
    return(
        <div className="car-container">
                <a href="#" onClick={() => props.hideDetails()}><i className="fa-solid fa-arrow-left"></i>Go back</a>
            
            <div className="flex">
                <div className="car-details">
                    <h1>{car.make}</h1>
                    <h2>Model: {car.model}</h2>
                    <h3>Year: {car.year}</h3>
                    <h3>Class: {car.class}</h3>
                    <h3>
                        Combination_mpg: {car.combination_mpg}
                    </h3>
                    <h3>
                        Highway_mpg: {car.highway_mpg}
                    </h3>
                    <h3>
                        City_mpg: {car.city_mpg}
                    </h3>
                    <h3>Cylinders: {car.cylinders}</h3>
                    <h3>Drive: {car.drive}</h3>
                    <h3>Fuel_type: {car.fuel_type}</h3>
                    <h3>Transmission: {car.transmission}</h3>
                </div>
                <ul>
                    <li>
                        <h3>Displacement:</h3>
                        Displacement is the total swept volume of all the pistons in an engine. This is measured by calculating the combined volume of all cylinders in the engine, multiplied by how many revolutions each piston can make in a minute (RPM). It’s a measure of how large an engine is, and it’s usually calculated using liters. The larger displacement means that an engine generates more power than a small displacement one.</li>

                    <li>
                        <h3>MPG:</h3>
                        When you’re in the process of searching for and buying a new car, you’re bound to come across the term ‘MPG’. MPG stands for miles per gallon and it refers to a common measurement of fuel economy - the average number of miles a vehicle can drive on one gallon of fuel. The higher the MPG, the more economically friendly a car is.

                        Basically, a high MPG means you can drive the same distance with less fuel in the tank. This in turn means you should have to refuel less often than vehicles with a lower MPG - providing you have the same size fuel tank, of course. A high MPG additionally has a knock-on effect of the eco-friendliness of a vehicle, which is important to bear in mind.

                        Both the practical and environmental impacts of a high MPG make it a desirable feature for a car to have - something manufacturers have noticed, as newer cars tend to have higher MPG.</li>
                </ul>
            </div>
        </div>
    )
}

export default CarDetails