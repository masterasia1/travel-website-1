import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>Van Life Can take You Anywhere</h1>
        <div className='cards_container'>
            <div className='cards_wrapper'>
                <ul className='cards_items'>
                    <CardItem 
                    src='images/img-1.jpg'
                    text='Drive through the desert'
                    label='Adventure'
                    path='/services'
                    />
                </ul>

            </div>
        </div>
        
        </div>
  )
}

export default Cards