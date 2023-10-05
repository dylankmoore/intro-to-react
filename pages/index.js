// import { Button } from 'react-bootstrap'; // TODO: COMMENT IN FOR AUTH
// import { signOut } from '../utils/auth'; // TODO: COMMENT IN FOR AUTH
// import { useAuth } from '../utils/context/authContext'; // TODO: COMMENT IN FOR AUTH
import { useState } from 'react';

function Home() {
  // const { user } = useAuth(); // TODO: COMMENT IN FOR AUTH
  const [value, setValue] = useState(0);
  const handleClick = () => {
    setValue((prevState) => prevState + 1);
  };

  const user = { displayName: 'Dylan' }; // TODO: COMMENT OUT FOR AUTH
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '750px',
        margin: '0 auto',
        backgroundImage: 'url("https://img.freepik.com/premium-vector/wavy-shapes-swirling-strokes-vector-seamless-pattern-attractive-multicolored-design-children_717949-597.jpg")',
      }}
    >
      <h1>Hello {user.displayName}!</h1>
      <h2>{value}</h2>
      <button type="button" onClick={handleClick}>Increment</button>
      <button type="button" onClick={() => setValue((prevState) => prevState - 1)}>Decrement</button>
      <button type="button" onClick={() => setValue(0)}>Reset</button>
    </div>
  );
}

export default Home;
