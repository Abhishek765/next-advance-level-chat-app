import { useEffect } from 'react';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  useEffect(() => {
    console.log('render');
  }, []);

  return <h1 className="text-blue-800">Welcome to Next Level Chat app</h1>;
};

export default Home;
