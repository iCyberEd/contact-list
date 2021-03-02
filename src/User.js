function User(props) {
  let user = props.user
  let setId = props.setId
  let ids = props.ids

  function saveId() {
    if (!checkIds()){
      setId("set", user.id)
    } else {
      setId("remove", user.id)
    }
  }

  function checkIds(){
    if (ids.indexOf(user.id) === -1){
      return false
    } else {
      return true
    }
  }

  return (<li className={checkIds() ? "contacts__user--active" : "contacts__user"} onClick={() => saveId()}>
    <div className="contacts__user__image"><img src={user.avatar} alt={user.first_name.slice(0, 1) + user.last_name.slice(0, 1)} className="contacts__user__icon"></img></div>
    <div className="contacts__user__info">
      <div className="contacts__user__name">{user.first_name + " " + user.last_name}</div>
      <div className="contacts__user__email">{user.email}</div>
    </div>
  </li>)

}

export default User