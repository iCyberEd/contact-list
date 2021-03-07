import React from 'react';
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
  fetch('https://next.json-generator.com/api/json/get/N1l0Vp6Gq')
  .then(response => response.json())
  .then(data => {
      data.sort(function(userA, userB){
        if(userA.last_name < userB.last_name) { return -1; }
        if(userA.last_name > userB.last_name) { return 1; }
        return 0;
    })
      self.setState({users: data, filtered: data})
  })
  }

  render() {

    let setId = (command, thisId) => {
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

    let usersList = this.state.filtered.map( (user, index) => {
      return (<User key={index} 
                    user={user} 
                    ids={this.state.ids}
                    setId={setId} />)
    })

    let searchQuery = (query) => {
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

    return (
      <div className="contacts">
        <header className="contacts__header">Contacts</header>
        <Search searchQuery={searchQuery} />
        <ul className="contacts__list">
          {usersList}
        </ul>
        
      </div>
    )
  }
}


export default App;
