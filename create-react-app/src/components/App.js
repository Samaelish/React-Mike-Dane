import React, { useState, useEffect } from 'react'
import CountButton from './CountButton/CountButton'
import SearchBar from './SearchBar/SearchBar'
import Button from './Button/Button'

const App = () => {
    const [productsState, setProductsState] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.herokuapp.com/products/')
            .then(res=>res.json())
            .then(productsArray=> {
                const newProductsState = productsArray.map((product) => {
                    return product.title
                })
                setProductsState(newProductsState)
            })

    }, [])

    const hasProducts = productsState.length > 0

    return (
        <div>
            <Button>Hello World</Button>
            <Button buttonText='hello'/>
            <Button buttonText='otherButton'/>
            <Button buttonText='lalala'/>
            {/* <CountButton incrementBy={1} buttonColor={'blue'}/> */}
            

            {/* Conditional rendering */}
            {/* {hasProducts ? <SearchBar products={productsState} /> : 'Loading...'} */}
        </div>
    )
}

export default App