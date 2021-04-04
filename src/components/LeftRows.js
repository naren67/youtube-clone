import React from 'react'
import './LeftRows.css'

function LeftRows({Icon,title}) {
          return (
                    <div className='list-of-rows'>
                         <Icon className='icons__img' />
                          <p className='icons__name'>{title} </p>
                    </div>
          )
}

export default LeftRows
