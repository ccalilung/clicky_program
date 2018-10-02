import React from "react";
import Cities from './Cities'

class Boxes extends React.Component {



    state = {
        max: 0,
        current: 0
    }

    render() {
        return(
            <div className="row">
                <div className="col-md-6 text-center">
                Longest Streak: {this.state.max}
                
            </div>
            <div className="col-md-6 text-center">
                Current Streak: {this.state.current}
                
            </div>


            </div>
        ) 

    }



}
   


export default Boxes;

