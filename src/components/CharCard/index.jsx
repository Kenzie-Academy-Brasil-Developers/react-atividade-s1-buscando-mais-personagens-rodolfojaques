import './style.css'

function CharCard({character},key){

    return(

        
        <li key={key} style={ character.status === "Alive"?
            {backgroundColor: "aquamarine"}
            :
            {backgroundColor: "rgba(0, 0, 139, 0.295)"}
            }>
            <h3>{character.name}</h3>
            <img src={character.image} />
        </li>
    )

}

export default CharCard