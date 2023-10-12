import React from 'react';
import style from './card.css'

function ThreeCardProps({data: {square_1,square_2,square_3}}){
    return (
    <div class="card3">
    <div class="blue"><h2>{square_1.title}</h2></div>
    <div class="blue1"><h2>{square_2.title}</h2></div>
    <div class="green"><h2>{square_3.title}</h2></div>
    </div>
)};
export default ThreeCardProps;