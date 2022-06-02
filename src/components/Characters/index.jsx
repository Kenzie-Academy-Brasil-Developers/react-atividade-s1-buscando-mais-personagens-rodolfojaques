import CharCard from "../CharCard"
import ButtonNextPrev from "./ButtonNextPrev"
import './style.css'

function Characters({characterList,setCurrentPage,pageList}){

    return(
        <>
        <h1>Rick&amp;MortyDex </h1>
        <ButtonNextPrev 
        setCurrentPage={setCurrentPage}
        pageList={pageList}        
        />
        <ul>
            {characterList.map((character,i) => <CharCard character={character} key={character.id}/>)}
        </ul>
        <ButtonNextPrev 
        setCurrentPage={setCurrentPage}
        pageList={pageList}        
        />
        </>
    )
}

export default Characters