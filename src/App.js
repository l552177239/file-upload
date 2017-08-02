import React from 'react'
import './App.css'

class App extends React.Component{
  handleChange = () => {
    console.log(1)
  }
  render(){
    return(
      <div className="App">
        <input type='file' className='file-input' onChange={this.handleChange} />
      </div>
    )
  }
}

export default App
