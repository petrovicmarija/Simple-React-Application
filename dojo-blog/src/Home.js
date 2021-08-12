import { useState } from 'react';

const Home = () => {

    //let name = 'john';
    const [name, setName] = useState('john');
    const [age, setAge] = useState(25);

    const handleClick = () => {
        setName('matt');
        setAge(30);
    }

    const handleClickAgain = (name) => {
        console.log('hello ' + name);
    }
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p> { name } is { age } years old </p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={() => handleClickAgain('john') }>Click me again</button>
        </div>
      );
}
 
export default Home;