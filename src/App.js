import React from 'react'
import './App.css';
import User from './User';
import Search from './Search';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      filtered: [],
      ids: []
    }

  }


  componentDidMount() {
  let self = this
  let usersRequest = new XMLHttpRequest()
  usersRequest.onreadystatechange = function() {
    let usersResponse = usersRequest.response
    if (this.readyState === 4 && this.status === 200) {
      usersResponse.sort(function(userA, userB){
        if(userA.last_name < userB.last_name) { return -1; }
        if(userA.last_name > userB.last_name) { return 1; }
        return 0;
    })
      self.setState({users: usersResponse, filtered: usersResponse})
   }
  }
  usersRequest.open("GET", "https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json")
  usersRequest.responseType = 'json'
  usersRequest.send()
  }

  

  render() {
    return (
      <div className="contacts">
        <header className="contacts__header">Contacts</header>
        <Search searchQuery={
          (query) => {
            if (!query){
              this.setState({
                users: this.state.users,
                filtered: this.state.users,
                ids: this.state.ids
              })
            }
            this.setState({
              users: this.state.users,
              filtered: this.state.users.filter( user => {
                return user.first_name.includes(query) || user.last_name.includes(query)
              }),
              ids: this.state.ids
            })
          }
        } 
        />
        <ul className="contacts__list">
          {this.state.filtered.map( (user, index) => {
            return (<User key={index} 
                          user={user} 
                          ids={this.state.ids}
                          setId={
                            (command, thisId) => {
                              if (command === "set"){
                                let arrCopy = this.state.ids.slice(0)
                                arrCopy.push(thisId)
                                this.setState({
                                  users: this.state.users,
                                  filtered: this.state.users,
                                  ids: [...arrCopy]
                                })
                                console.log([...arrCopy])
                              } else {
                                let removeIndex = this.state.ids.indexOf(thisId)
                                let arrCopy = this.state.ids.slice(0)
                                arrCopy.splice(removeIndex, 1)
                                this.setState({
                                  users: this.state.users,
                                  filtered: this.state.users,
                                  ids: [...arrCopy]
                                })
                              }
                            }
                          } />)
          })}
        </ul>
        
      </div>
    )
  }
}


export default App;
