import React, { useState } from 'react'

function CardItem({ item }) {
    return (
            <div className='w-full h-8 flex items-center pl-2  
          border rounded-md border-pink-300 
      hover:border-pink-500 hover:shadow 
      shadow-pink-500/40 hover:shadow-pink-500/40
         '
            >
                {`${item.id}、${item.name}`}
            </div>
    )
}

export default CardItem