import React from "react";

const Liste = (props) => {

    const listeNavn = props.navn;

    return (
        <article className="list" id={listeNavn}>
            <h2 className="list-heading">{listeNavn}</h2>
            <p>Her blir det innhold</p>
        </article>
    )
}

export default Liste;