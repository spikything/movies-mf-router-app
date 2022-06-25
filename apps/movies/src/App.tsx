import React from 'react';
import { AppShell } from 'ui';
import { MoviesContent } from 'movies-content';

function App() {
  return (
    <AppShell
      title='Movies'
      colorScheme='light'
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
