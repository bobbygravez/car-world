import React from "react";

function Header(props){

    function disabledState(){
        if(props.carSpec.make === "" || props.carSpec.model === '' || props.carSpec.year === ""){
            return true
        } else{
            return false
        }
    }

    return(
        <div className="header">
                <h2>Search for your specification</h2>
            <form className="nav" action="#" method="#">

            <label htmlFor="make">Car make:</label>
            <input type="text" name="make" id="make" placeholder="Toyota" onChange={(e) => props.handleChange(e)} value={props.carSpec.make} required/>

            <label htmlFor="model">Car model:</label>
            <input type="text" name="model" id="model" placeholder="Corolla" onChange={(e) => props.handleChange(e)} value={props.carSpec.model} required/>

            <label htmlFor="year">Car year:</label>
            <input type="text" name="year" id="year" placeholder="2010" onChange={(e) => props.handleChange(e)} value={props.carSpec.year} required/>

            <label htmlFor="limit">Result limit:</label>
            <input type="text" name="limit" id="limit" placeholder="10" onChange={(e) => props.handleChange(e)} value={props.carSpec.limit}/>

            <button style={{cursor: disabledState()? "not-allowed" : "pointer"}} disabled={disabledState()} onClick={(e) => props.getCars(e)}>Search</button>
        </form>  
        </div>
        
    )
}

export default Header