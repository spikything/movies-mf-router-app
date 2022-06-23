import React from 'react';
import { AppShell } from 'ui';

function App() {
  return (
    <AppShell title='Movies' colorScheme='light' routes={[
      {
        path: '/',
        element: () => <div>Home</div>,
      },
    ]} />
  );
}

export default App;
