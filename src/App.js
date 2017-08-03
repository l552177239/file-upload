import React from 'react'
import axios from 'axios'
import './App.css'

class App extends React.Component{
  login = () => {
    axios.put(`http://yummy.haoduoshipin.com/user`, { slogan: `求成功`, username:`liu`})
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
  }
  handleChange = (event) => {
    const file = event.target.files[0]
    const reader = new FileReader()
    let formData = new FormData()
    reader.onload = (event) => {
      formData.append('avatar', file)
      formData.append('userId', '5982ceac16f47145ed017562')
      axios.post(`http://yummy.haoduoshipin.com/avatar`, formData)
        .then(res => console.log(1,res.data))
        .catch(err => console.log(err))
    }
    reader.readAsDataURL(file)
  }
  render(){
    return(
      <div className="App">
        <input type='file' className='file-input' onChange={this.handleChange} />
        <input type='button' className='file-input' value='登录' onClick={this.login} />
      </div>
    )
  }
}

export default App
