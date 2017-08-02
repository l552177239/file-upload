import React from 'react'
import axios from 'axios'
import './App.css'

class App extends React.Component{
  handleChange = (e) => {
    const file = e.target.files[0]
    let reader = new FileReader()
    reader.onload = (event) => {
      let formData = new FormData()
      formData.append('avatar', file)
      formData.append('userId', 'liu')
      axios.post(`http://yummy.haoduoshipin.com/avater`, formData)
        .then(res=>{res=>console.log(res.data)})
        .catch(err => console.log(err))
    }
    reader.readAsDataURL(file)
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
