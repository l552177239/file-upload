let user = {
  all:{

  }
}

export default function userReducer(state=user, action){
  switch (action.type) {
    case 'LOAD_USERS':
      return {...state,all:action.users}
    default:
      return state
  }
}
