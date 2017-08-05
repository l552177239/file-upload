import React from 'react'
import axios from 'axios'
import setting from './setting'
import store from './redux/store'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './App.css'
import User from './User'

const Home = () => <div className='home'><Link to='/user'>个人中心</Link></div>

class App extends React.Component{
  componentWillMount(){
    console.log('5982ceac16f47145ed017562')
  }
  componentDidMount(){
    axios.get(`${setting.host}/users`)
    .then(res => store.dispatch({type:'LOAD_USERS', users:res.data}))
    .catch(err => alert('请求失败'))
  }
  render(){
    return(
      <BrowserRouter>
        <Provider store={store}>
          <div className="app">
              <Route exact path='/' component={Home} />
              <Route path='/user' component={User} />
          </div>
        </Provider>
      </BrowserRouter>
    )
  }
}

export default App
