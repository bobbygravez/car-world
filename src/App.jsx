import { useState } from 'react'
import Header from './header'
import Body from './body'
import { nanoid } from "nanoid";
import CarDetails from './cardetails';
import loader from "./assets/loader.gif"


function App() {
 const [loading, setLoading] = useState(false)
 const [showDetails, setShowDetails] = useState(false)
 const [carId, setCarId] = useState('')
 const [noData, setNoData] = useState(false)
 const [carData, setCarData] = useState([])
 const [carSpec, setCarSpec] = useState({
    make: "",
    model: "",
    year: "",
    limit: 10
 })


 function handleChange(e){
  const {name, value} = e.target

  setCarSpec(prevState => ({
    ...prevState,
    [name]: value
  }))

 }
    function getCars(e){
      setLoading(true)
      e.preventDefault()
        fetch(`https://api.api-ninjas.com/v1/cars?make=${carSpec.make}&model=${carSpec.model}&limit=${carSpec.limit}&year=${carSpec.year}`, {headers: {'X-Api-Key': 'rzC+wtRRhd6uim0Lj4R7ag==R8yyET4eSB3ZNReQ'}})
        .then(response => {
          if(!response.ok){
            throw new Error("An unexpected error occured, Adjust your search parameters or check your network connection")
          }
          return response.json()
        })
        .then(data => {
          console.log(data)
          if(data.length === 0){
            setNoData(true)
          } else{
            setNoData(false)
          }
          setCarData(data.map(car => {
            return {
              city_mpg: car.city_mpg,
              class: car.class,
              combination_mpg: car.combination_mpg,
              cylinders: car.cylinders,
              displacement: car.displacement,
              drive: car.drive,
              fuel_type: car.fuel_type,
              highway_mpg: car.highway_mpg,
              make: car.make,
              model: car.model,
              transmission: car.transmission,
              year: car.year,
              id: nanoid()
            }
          }))
          setCarSpec(
            {
              make: "",
              model: "",
              year: "",
              limit: 10
           }
          )
          setLoading(false)
        })
        .catch(err => {console.error(err)})
    }

    function getCarId(id){
     for(let car of carData){
      if(car.id === id){
        setCarId(id)
      }
     }
    }

    function displayDetails(){
      setShowDetails(true)
    }

    function hideDetails(){
      setShowDetails(false)
    }


  return (
    <div>
      {showDetails?  <CarDetails carData={carData} carId={carId} hideDetails={hideDetails}/> : <div className='app'>
          <Header handleChange={handleChange} getCars={getCars} carSpec={carSpec}/>
          {loading? <img src={loader} alt="loader" className='loader'/> : <Body carData={carData} getCarId={getCarId} displayDetails={displayDetails} noData={noData}/>}
      </div>}
      
    </div>
  )
}

export default App
