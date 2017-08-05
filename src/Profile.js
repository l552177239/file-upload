import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

class Profile extends React.Component{
  handleChange = (event) => {
    const file = event.target.files[0]
    const reader = new FileReader()
    let formData = new FormData()
    reader.onload = (event) => {
      formData.append('avatar', file)
      formData.append('userId', '5982ceac16f47145ed017562')
      console.log(file,event.target.result)
      axios.post(`http://yummy.haoduoshipin.com/avatar`, {avatar:file, userId:'5982ceac16f47145ed017562'})
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }
    reader.readAsDataURL(file)
  }
  render(){
    console.log(this.props.user)
    return(
      <div className="user">
        <input type='file' className='file-input' onChange={this.handleChange} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user:state.user.all
})
export default connect(mapStateToProps)(Profile)
