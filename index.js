const reactContentRoot = document.getElementById('root');

const App = () => {
    const myItem = 'item3';

    return (
        <ul>
            <li>item1</li>
            <li>item2</li>
            <li>{myItem.toUpperCase()}</li>
        </ul>
    )
}

// Interpolation


ReactDOM.render(<App />, reactContentRoot); // possible to use App()