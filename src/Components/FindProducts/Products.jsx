import React, { useContext } from 'react';
import { MyContext } from '../../Context';
import '../FindProducts/Products.css'

export default function Products() {

    const prodVal = useContext(MyContext);

    return (
        <div className='cart'>
            {prodVal.findArr !== undefined ?
                prodVal.findArr.map(item => {
                    return (
                        <div key={item.pageid} className="cart-box">
                            <h3 className='h3'>{item.title}</h3>
                            <p className='p'>{item.snippet}</p>
                        </div>
                    )
                })
                : null
            }
        </div>
    )
}
