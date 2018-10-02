import React, {Component} from 'react';
import citydata from '../cities.json'
import CityCard from './CityCard'
import Boxes from './Boxes'

class Cities extends Component {
    
    randomNumber = (arr) => {
        let newArr = []
        let a
        while (arr.length !== 0) {
        let rand = Math.floor(Math.random() * arr.length)
        a = arr.splice(rand,1)
        a = a[0]
        newArr.push(a)
        }
        this.setState({cities:newArr})
    }

    // randomLoser = () => {
    //     let b = Math.floor(Math.random() * this.state.cities.length)
    //     this.setState({loser: b})
    // }

    checkLoser = (id) => {
        for(let i=0;i<this.state.ids.length;i++) {
            if(this.state.ids[i] === id) {
                var check = 1
                if(this.state.current > this.state.max){
                    this.setState({
                        max: this.state.current,
                    })
                    alert("You set a new high score of " + this.state.current)
                }
                this.setState({current:0, ids:[]})
                
            } 
        }
        
        if(check !== 1) {this.setState({current: this.state.current + 1, ids: [...this.state.ids,id] })
        check = 0;
    }
    
    }

    state = {
        cities: citydata,
        loser: 13,
        max: 0,
        current: 0,
        ids: []
        
    }

    render() {
        return(
            <div>
                <div className="container-fluid">
                <nav className="bg-dark text-light">
                <div className="row"><div className="col-md-12 text-center"><h1>Clicky Game</h1><h3>Directions: Select an image, but don't select it twice!</h3></div></div>
                <div className="row">
                <div className="col-md-6 text-center">
                <h4>Longest Streak: {this.state.max}</h4>
                
            </div>
            <div className="col-md-6 text-center">
                <h4>Current Streak: {this.state.current}</h4>
                
            </div>


            </div>
                </nav>
                </div>
            <div className="row">
            
            {this.state.cities.map(item => (
              <div className="col-md-2" >
                     <CityCard loserNumber={this.state.loser} checkLoser={this.checkLoser} randomNumber={this.randomNumber} randomLoser={this.randomLoser} cities={this.state.cities} randomNumber={this.randomNumber} name = {item.name} id={item.id}  image={item.image} />
                </div>
            ))}
        </div>
        </div>)
    }
    
   



}










export default Cities;