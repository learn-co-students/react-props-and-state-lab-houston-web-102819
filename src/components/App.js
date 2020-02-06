import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (pet) => {
    this.setState({
      filters: {
        type: pet
      }
    })
  }
  findPets = () => {
    if(this.state.filters.type === 'all'){
      fetch('/api/pets')
      .then((res) => res.json())
      .then((res) => {
        this.setState({pets: res})
      })
    }
    if(this.state.filters.type === 'cat')
      fetch('/api/pets?type=cat')
      .then((res) => res.json())
      .then((res) => {
        this.setState({pets: res})
      })
    if(this.state.filters.type === 'dog')
      fetch('/api/pets?type=dog')
      .then((res) => res.json())
      .then((res) => {
        this.setState({pets: res})
      })
    if(this.state.filters.type === 'micropig')
      fetch('/api/pets?type=micropig')
      .then((res) => res.json())
      .then((res) => {
        this.setState({pets: res})
      })
  }

 

  adoptPet = (id) => {
    const modifiedPet = this.state.pets.map(pet => {
      if(pet.id === id){
        let modifiedPet = pet
        modifiedPet.isAdopted = true
        return modifiedPet
      } else {
        return pet
      }
    })
    this.setState({ 
    pets: modifiedPet
     
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.findPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
