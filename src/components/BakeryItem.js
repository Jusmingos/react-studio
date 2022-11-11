import "./BakeryItem.css"
import { useState } from 'react';



// TODO: create a component that displays a single bakery item
export default function BakeryItem(props) {
    const [bakeryItem, setBakeryItem] = useState()
    const [count, setCount] = useState(0)

    const handleButtonAddCart = e => {
        e.preventDefault()
        setCount(count + 1)
        props.addToCart(props.item.name, props.item.price)
    }

    return (
        <div className="bakery-item-box">
            <img src={props.item.image}></img>
            <h3>{props.item.name}</h3>
            <h3>{props.item.description}</h3>
            <div className="footer">
                <h3>{props.item.price}</h3>
                <button className='add-button' onClick={handleButtonAddCart}>
                    Add to Cart
                </button>
            </div>
        </div>
    )
}
