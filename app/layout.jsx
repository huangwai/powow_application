import * as React from 'react';
import Header from './header';
import '../styles/App.css';

export default function RootLayout({ children }) {
  fetch('http://localhost:3000/api/server');
  return (
    <html>
      <head />
      <body>
        <div className="App">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
