import React from 'react'
import CardItem from './CardItem'
import './Cards.css'


function Cards() {
  return (
    <div className='cards'>
        <h1>Van Life Can Take You Anywhere</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                    src= 'images/img-3.jpg'
                    text='Drive through the desert'
                    label='Adventure'
                    path='/locations'
                    />
                </ul>
                <CardItem 
                    src= 'images/img-9.jpg'
                    text='Experience the sea'
                    label='Travel'
                    path='/locations'
                    />

            </div>
        </div>
        
        </div>
  )
}

export default Cards