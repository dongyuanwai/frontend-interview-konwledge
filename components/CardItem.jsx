import React, { useState } from 'react'

function CardItem({ index,item }) {
    return (
            <div className='flex items-center p-2 border rounded-md border-pink-300 
             hover:border-pink-500 hover:shadow shadow-pink-500/40 hover:shadow-pink-500/40'
            >
                {`${index+1}、${item.title}`}
            </div>
    )
}

export default CardItem