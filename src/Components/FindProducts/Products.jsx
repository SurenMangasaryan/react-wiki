import React, { useContext } from 'react';
import { MyContext } from '../../Context';
import '../FindProducts/Products.css'

export default function Products() {

    const prodVal = useContext(MyContext);
    console.log(prodVal.findArr);
    return (
        <div className='cart'>
            {prodVal.findArr !== undefined ?
                prodVal.findArr.map(item => {
                    return (
                        <a href={`https://en.wikipedia.org/?curid=${item.pageid}`} key={item.pageid}>
                            <div className="cart-box">
                                <h3 className='h3'>{item.title}</h3>
                                <p className='p'>{item.snippet}</p>
                            </div>
                        </a>
                    )
                })
                : null
            }
        </div>
    )
}
