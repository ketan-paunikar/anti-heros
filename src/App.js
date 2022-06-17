import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();


    //state object
    this.state = {
      monsters: [{
        "id": 1,
        "name": "a-bomb",
        "speed": 17,
        "power": 24,
        "images": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/1-a-bomb.jpg"
      },
      {
        "id": 2,
        "name": "abe-sapien",
        "speed": 20,
        "power": 31,
        "images": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/2-abe-sapien.jpg"
      },
      {
        "id": 3,
        "name": "abin-sur",
        "speed": 13,
        "power": 27,
        "images": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/3-abin-sur.jpg"
      },
      {
        "id": 4,
        "name": "abomination",
        "speed": 22,
        "power": 48,
        "images": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/4-abomination.jpg"
      },
      {
        "id": 5,
        "name": "abraxas",
        "speed": 19,
        "power": 26,
        "images": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/5-abraxas.jpg"
      },
      {
        "id": 6,
        "name": "absorbing-man",
        "speed": 22,
        "power": 41,
        "images": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/6-absorbing-man.jpg"
      },
      {
        "id": 7,
        "name": "adam-monroe",
        "speed": 15,
        "power": 27,
        "images": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/7-adam-monroe.jpg"
      },
      {
        "id": 8,
        "name": "adam-strange",
        "speed": 21,
        "power": 28,
        "images": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/8-adam-strange.jpg"
      },
      {
        "id": 10,
        "name": "agent-bob",
        "speed": 14,
        "power": 25,
        "images": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/10-agent-bob.jpg"
      },
      {
        "id": 11,
        "name": "agent-zero",
        "speed": 10,
        "power": 21,
        "images": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/11-agent-zero.jpg"
      }],
      searchField: '' // it stores the input form the variable searchFiled
    };
  }



  // react lifecycle (componentDidMount()), it will run after first render(), compenentDidMount will fetch the data from API.
  // once data is fetched it will change the data in state object by calling the setState() method.
  componentDidMount() {
    fetch('http://localhost:5000/users') // fetch method - to collect data to servers/APIs (promises)
      // fetch method will return promise which will be resolved with response object.
      // but response object contains entire http server response of the useless data.
      .then((response) => response.json())
      // using the .json() method,it will return the 2nd promise which will contain the parsed data that we wanted.
      .then((users) =>
        // once we have the data we wanted, will mount the data in this.state() object.
        // to mount the data we use setState() method, setState() method will change the state of the object.
        this.setState(
          // will be using callback fuction inside of setState() method to mount the data in state object.
          () => {
            return { monsters: users };
          }
        )
      )
  }


  //using the 'event' hanlder to search the perticular montser 
  // making onchange event an individual componenet, assigining it to variable onSearchChange.
  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();

    // storing the searched strings in the empty 'searchField', present in this.state object
    this.setState(() => {
      return { searchField };
    });
  };



  // render() will display the visual UI on the web page.
  render() {

    // array destructing.
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    //using filter() method to filter the array of 'monsters', and adding the filtered monster in new 'filterMonster', filter()
    // method won't change origional array.
    const filteredMonster = monsters.filter((monster) => {

      // filter and return the monsters, depends on the input string from onSearchChange event.
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    return (

      // both onChangeHandler & monster are the props that is used to pass th data from parent component (SearchBox & CardList)
      //  to the chld component.
      <div className="App">
        <h1 className='title'> Friendly Monsters </h1>

        <SearchBox onChangeHandler={onSearchChange} placeholder='search monster' className='monsters-search-box' />
        <CardList monsters={filteredMonster} />

      </div>
    );
  }
}
export default App;
