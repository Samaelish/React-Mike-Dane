import React from 'react'
import CountButton from './CountButton'

const App = () => {
    return (
        <div>
            <CountButton incrementBy={1} buttonColor={'blue'} borderRadius={'2px'}/>
            <CountButton incrementBy={5} buttonColor={'red'} borderRadius={'100px'}/>
            <CountButton incrementBy={800} buttonColor={'green'} borderRadius={'50%'}/>
        </div>
    )
}

export default App