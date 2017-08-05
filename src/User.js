import React from 'react'
import { connect } from 'react-redux'

class User extends React.Component{
  render(){
    if(this.props.user.users === undefined){
    }else{
      let { users } = this.props.user
      let userId = Object.keys(users)
      console.log(users)
      var userList = userId.map(id =>
        <li key={id}>{users[id].username}</li>
      )
    }
    return(
      <div className="user">
        { userList }
        <input type='file' className='file-input' onChange={this.handleChange} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user:state.user.all
})
export default connect(mapStateToProps)(User)
