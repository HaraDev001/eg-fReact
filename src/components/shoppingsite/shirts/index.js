import React from 'react';
import Product from './Product'

import './index.css'

function ShirtPage({items}){
    return (
      <div className='container'>
        <div className='row'>
          {
            items.map(p=>{
              return <Product product={p} key={p.id}/>
            })
          }
        </div>
      </div>
    )
}

export default ShirtPage;