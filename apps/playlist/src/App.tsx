import React from 'react';
import { AppShell } from 'ui';
import MoviesContent from './MoviesContent';

function App() {
  return (
    <AppShell
      title='Playlist'
      colorScheme='dark'
      routes={[
        {
          path: '/',
          element: MoviesContent,
        },
        {
          path: '/playlist',
          element: () => <div>Playlist</div>,
        },
      ]}
      navLinks={[
        {
          label: 'Home',
          path: '/',
        },
        {
          label: 'Playlist',
          path: '/playlist',
        },
      ]}
    />
  );
}

export default App;
