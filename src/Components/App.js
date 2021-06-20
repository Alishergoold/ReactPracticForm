import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      narx: 0,
      soni: 0,
      jami: 0,
    }
  }

  addNumber = () => {
    const {narx,soni} = this.state;
    //const items = this.data.map((item)=>item.titles);
    this.setState({narx: narx + 10000});
    this.setState({soni: soni + 1});
  }

  minusNumber = () => {
    const {narx,soni} = this.state;
    //const items = this.data.map((item)=>item.titles);
    this.setState({narx: narx - 10000});
    this.setState({soni: soni - 1});
  }
  addEvent = (e) => {
    console.log(e);
  }

  renderUser = (cinTit) => {
    return  cinTit.map(cinema => (  
            <table key={cinema.id}>
              <thead>
                <tr>
                <td>Titles</td>
                <td>Janr</td>
                <td>Stock</td>
                <td>Like</td>
                <td>Baho</td>
                </tr>
              </thead>
             
              <tbody>
                <tr>
                <td>{cinema.titles}</td>
                <td>{cinema.genre}</td>
                <td>{cinema.stock}</td>
                <td>{cinema.isLike}</td>
                <td>{cinema.rate}</td>
                </tr>
              </tbody>
            </table>
    ));
  }

  render() { 
    const {addNumber, minusNumber, addEvent} = this;
    const {narx,soni} = this.state;
    const cinTit = [{
      id : 1,
      titles : 'Matrix',
      genre: 'Action',
      stock: 7,
      rate: 5,
      isLike: false
    },
    {
      id : 2,
      titles : 'NEO',
      genre: 'Romantic',
      stock: 6,
      rate: 5,
      isLike: true
    },
    {
      id : 3,
      titles : 'Avatar',
      genre: 'Fantastic',
      stock: 5,
      rate: 5,
      isLike: true
    },
    {
      id : 4,
      titles : 'Titanic',
      genre: 'Romantic',
      stock: 4,
      rate: 6
    },
    {
      id : 5,
      titles : 'Blade',
      genre: 'Action',
      stock: 2,
      rate: 7,
      isLike: true
    },
    {
      id : 6,
      titles : 'Iraq',
      genre: 'Action',
      stock: 1,
      rate: 8,
      isLike: true
    },
    {
      id : 7,
      titles : 'Star Wars',
      genre: 'Fantastic',
      stock: 7,
      rate: 5,
      isLike: true
    },
    {
      id : 8,
      titles : 'AirPlane',
      genre: 'Action',
      stock: 2,
      rate: 9,
      isLike: true
    },
    {
      id : 9,
      titles : 'Antarctida',
      genre: 'Action',
      stock: 5,
      rate: 7,
      isLike: false
    }];

    return (
      <div>
        <table>
          <thead>
            <tr>
            <td>Nomi</td>
            <td>Narxi</td>
            <td>Soni</td>
            <td>JAMI</td>
            </tr>
          </thead>
          <tbody>
            <tr>
            <td>Pepsi</td>
            <td>10000</td>
            <td>{soni}</td>
            <td className = {narx > 0 ? "active" : ""}>{narx}</td>
            </tr>
          </tbody>
        </table>
        <p></p>
        <button onClick={addNumber}>Plus</button>
        <button onClick={minusNumber}>Minus</button>
      
        <h3>Cinema Titles</h3>
        <ul>{this.renderUser(cinTit)}</ul>
        <button onClick={(e) => addEvent("Ishga tushdi")}>Plus</button>
      </div>
    );
  }
}

export default App;

