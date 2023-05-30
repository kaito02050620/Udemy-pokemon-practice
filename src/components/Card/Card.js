import React from "react";
import "./Card.css";

function Card({ pokemon }) {
  return (
    <>
      <div className="card">
        <div className="cardImg">
          <img src={pokemon.sprites.front_default}></img>
        </div>
        <h3 className="cardName">{pokemon.name}</h3>
        <div className="cardTypes">
          <div>タイプ</div>
          {pokemon.types.map((type, i) => {
            return (
              <div key={i}>
                <span className="typeName">{type.type.name}</span>
              </div>
            );
          })}
        </div>
        <div className="cardInfo">
          <div className="cardData">
            <p className="title">重さ: {pokemon.weight}kg</p>
          </div>
        </div>
        <div className="cardInfo">
          <div className="cardData">
            <p className="title">高さ: {pokemon.height}m</p>
          </div>
        </div>
        <div className="cardInfo">
          <div className="cardData">
            <p className="title">特性: {pokemon.abilities[0].ability.name}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
