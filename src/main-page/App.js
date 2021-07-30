import './App.css';
import FeaturedHouse from './FeaturedHouse';
import Header from './Header';
import { useEffect, useState, useMemo } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HouseFilter from './HouseFilter';
import SearchResults from '../searchresults';
import HouseFromQuery from '../house/HouseFromQuery';

function App() {
  //the initial value of allHouses here is an empty array
  //use of empty arrays is like using the do-while loops
  //we only want them to be executed once
  const [allHouses, setAllHouses] = useState([]);
  //useEffect(function, (can be dependency list)function to be extecuted when anything here changes)
  useEffect(() => {
    const fetchHouses = async () => {
      // console.log('inside fetchhouses')
      const rsp = await fetch('houses.json')
      //fetched as response
      // console.log(rsp);
      //response converted to JSON
      const houses = await rsp.json();
      // console.log(houses)
      // allhouses = houses;
      setAllHouses(houses);
    }
    fetchHouses();
  }, []);
  // console.log('outside')
  console.log(allHouses)
  let featuredhouse

  //useMemo
  //memoisation - creation of the memo
  //writing to the local storage about certain things in site

  useMemo(()=>{
    if(allHouses.length){
      const randomIndex = Math.floor(Math.random()*allHouses.length);
      featuredhouse = allHouses[randomIndex];
    }
  }
  ,[allHouses]);

  return (
    <Router>
      <div className="container">
        <Header subtitle="Buy a house from us" />
        <HouseFilter allHouses={allHouses}/>
        <Switch>
          <Route exact path="/">
            <FeaturedHouse house={featuredhouse}/>
          </Route>
          {/* this country is bought from index of search results */}
          <Route path="/searchresults/:country">
            <SearchResults allHouses={allHouses}/>
          </Route>
          {/* this is used to show the particluar house selected under country */}
          <Route path="/house/:id">
              {/* we cannot use the house component in the main page becoausr it is
              not capable */}
              <HouseFromQuery allHouses={allHouses}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
