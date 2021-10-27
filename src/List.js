import React from "react"

const List = ({ people }) => {


    return <>
        {people.map((person) => {
            const { id, name, age, image } = person
            return <div className="person" key={id}>
                <img src={image} alt={name} />
                <h3>{name}</h3>
                <p>{age} years old</p>

            </div>
        })}
    </>
}

export default List;