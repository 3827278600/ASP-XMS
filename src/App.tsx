import { FC } from 'react';

const App: FC = () => (
  <div>
    <h1>{import.meta.env.VITE_APP_TITLE}</h1>
    Hello World
  </div>
);

export default App;
