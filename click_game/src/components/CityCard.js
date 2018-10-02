import React from "react";


const CityCard = (props) => (

    
        <div>
            
        <div className="mt-3 text-center">
            
            <h3 className="text-center">{props.name}</h3>
            <img width="225px" alt="some image" src={props.image}/>
            <br></br>
            <button className="btn btn-success mt-3" type="button" onClick={() => {
                
                props.checkLoser(props.id,props.loserNumber)
            
                props.randomNumber(props.cities)}}>
                
                
                
                Select</button>
            
        </div>
        </div>
 



);

export default CityCard;

