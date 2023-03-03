import '../Wikipedia/Wikipedia.css';
import React, { useContext } from 'react';
import { MyContext } from '../../Context';
import Products from "../FindProducts/Products";

export default function Wikipedia() {

    const wikiVal = useContext(MyContext);

    return (
        <div className='wiki'>
            <div className='box'>
                <div className="img-box">
                    <img src="/images/wiki-logo.png" />
                </div>
                <h1 className="wiki-title">Search Wikipedia</h1>
            </div>

            <form className="wiki-form" onSubmit={(e) => wikiVal.searchFrom(e)}>
                <input className="wiki-inp" type="text" value={wikiVal.searchInp} placeholder="Search..." onChange={(e) => wikiVal.serachFunc(e)} />
                <button className="wiki-btn">Search</button>
            </form>

            <Products />
        </div>
    )
}
