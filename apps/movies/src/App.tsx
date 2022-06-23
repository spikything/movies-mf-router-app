import React from 'react';
import { AppShell } from 'ui';

function App() {
  return (
    <AppShell
      title='Movies'
      colorScheme='light'
      routes={[
        {
          path: '/',
          element: () => <div>Home</div>,
        },
      ]}
      navLinks={[
        {
          label: 'Home',
          path: '/',
        },
      ]}
    />
  );
}

export default App;
