import * as React from 'react';
import Header from './header';

export default function RootLayout({ children }) {
  fetch('http://localhost:3000/api/server');
  return (
    <html>
      <head />
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
