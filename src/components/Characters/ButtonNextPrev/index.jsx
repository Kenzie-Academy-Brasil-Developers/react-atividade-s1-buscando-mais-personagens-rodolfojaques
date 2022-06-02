import './style.css'

function ButtonNextPrev({setCurrentPage,pageList}){

    const prev = () => {

        pageList.info.prev !== null? 
        setCurrentPage(pageList.info.prev)
        : 
        setCurrentPage("https://rickandmortyapi.com/api/character/")

    }

    const next = () => {

        pageList.info.next !== null? 
        setCurrentPage(pageList.info.next)
        : 
        setCurrentPage(`https://rickandmortyapi.com/api/character/?page=${pageList.info.pages}`)

    }

    return (
        <div className="button__nextPrev">
            <button onClick={prev}>Voltar</button>
            <button onClick={next}>Avançar</button>
        </div>
    )
}

export default ButtonNextPrev
