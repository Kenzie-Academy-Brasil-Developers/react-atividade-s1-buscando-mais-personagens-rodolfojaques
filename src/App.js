
import './App.css';
import { useState, useEffect} from 'react'
import Characters from './components/Characters';

function App() {

  const [pageList,setPageList] = useState({})
  const [currentPage,setCurrentPage] = useState("https://rickandmortyapi.com/api/character/")
  const [characterList,setCharacterList] = useState([])

  useEffect(()=>{

    fetch(currentPage)
    .then(resp=> resp.json())
    .then(resp => {
      setCharacterList(resp.results)
      setPageList(resp)
    })
    .catch(err => err)

  },[currentPage])


  return (
    <div className="App">
      <header className="App-header">
       <Characters
       pageList={pageList} 
       setCurrentPage={setCurrentPage}
       characterList={characterList}
       />
      </header>
    </div>
  );
}

export default App;
