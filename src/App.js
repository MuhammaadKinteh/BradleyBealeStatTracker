import logo from './logo.svg';
import './App.css';
import React, { useState} from 'react'
//import dotenv from dotenv

function App() {
  

  const [Points, setPoints] = useState()
  
  function getPoints(year) {
    fetch(`https://api-nba-v1.p.rapidapi.com/players/statistics?id=45&season=${year}`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.API_KEY
      }
    }).then(response => {
      return response.json()
    }).then(data => {
      //let count = Object.keys(data).length;
      //console.log(data.results)
      let point = 0;
      for(let i = 0; i < data.results; i++){
        //console.log(point);
        point = point + data.response[i].points
      }
      setPoints(point)
      console.log(point)
      console.log(Points)

      return point;
    })

  }

  console.log("POINTS OF THE players:" + Points)
  /*
  const async = await getPoints(2021)
  console.log(await getPoints(2021));
  */
  
  /*
  function getPoints(year){
    let response = fetch(`https://api-nba-v1.p.rapidapi.com/players/statistics?id=45&season=${year}`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.API_KEY
      }})
    let data = response.json()
    let point = 0;
    for(let i = 0; i < data.results; i++){
      //console.log(point);
      point = point + data.response[i].points
    }
    //console.log(point)
    return point;   

  }

  */
  //console.log(getPoints(2021))

  const getRebounds = (year) => {
    fetch(`https://api-nba-v1.p.rapidapi.com/players/statistics?id=45&season=${year}`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.API_KEY
      }
    }).then(response => {
      return response.json()
    }).then(data => {
      //let count = Object.keys(data).length;
      //console.log(data.results)
      let rebounds = 0;
      for(let i = 0; i < data.results; i++){
        //console.log(point);
        rebounds = rebounds + data.response[i].totReb
      }
      return rebounds;
    })

  }

  const getAssists = (year) => {
    fetch(`https://api-nba-v1.p.rapidapi.com/players/statistics?id=45&season=${year}`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.API_KEY
      }
    }).then(response => {
      return response.json()
    }).then(data => {
      //let count = Object.keys(data).length;
      //console.log(data.results)
      let assist = 0;
      for(let i = 0; i < data.results; i++){
        //console.log(point);
        assist = assist + data.response[i].assists
      }
      return assist;
    })


  }

  //console.log("hiii:")
  //console.log(getPoints(2022));
  /*
  const getRebounds(year){
    
  }

  const getAssists(year){
    
  }*/
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <body>
          
        <h1>Bradely Beal Player Statistics</h1>
        <img src="https://media.bleacherreport.com/w_768,h_512,c_fill/br-img-images/003/878/626/hi-res-2c7a2c44307b9f203cafcf597ced0f4f_crop_north.jpg" alt="BradleyBealPic"></img>
        </body>
        
        <table border="1">
        <thead>
            <tr>
                <td>year: </td>
                <td>points </td>
                <td>rebounds </td>
                <td>assists </td>
            </tr>
            </thead>
            

            <tbody>
            <tr>
                <td className="table_style"><b>2022</b></td>
                <td className="table_style2"><b>8</b> </td>
                <td  className="table_style3"><b>8</b> </td>
                <td  className="table_style4"><b>8</b></td>
            </tr>
            <tr>
          <td className="table_style"><b>2021</b> </td>
           <td className="table_style2"><b>6</b></td>
           <td  className="table_style3" ><b>7</b> </td>
           <td  className="table_style4"><b>8</b> </td>
            </tr>
            <tr>
           <td className="table_style"><b>2020</b></td>
           <td className="table_style2"><b>10</b> </td>
           <td  className="table_style3"><b>11</b> </td>
           <td  className="table_style4"><b>12</b> </td>
            </tr>
            <tr>
           <td className="table_style"><b>2019</b></td>
           <td className="table_style2"><b>14</b></td>
           <td  className="table_style3"><b>15</b></td>
                <td  className="table_style4"><b>16</b></td>
            </tr>
        </tbody>
        </table>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
