import React, { useState } from 'react'

function CardItem({ index,item }) {
    return (
            <div className='h-8 flex items-center pl-2  
          border rounded-md border-pink-300 pr-2
      hover:border-pink-500 hover:shadow 
      shadow-pink-500/40 hover:shadow-pink-500/40
         '
            >
                {`${index+1}、${item.title}`}
            </div>
    )
}

export default CardItem