import React from 'react'
import './App.css'

class App extends React.Component{
  handleChange = (e) => {
    const file = e.target.files[0]
    console.log(file)
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
