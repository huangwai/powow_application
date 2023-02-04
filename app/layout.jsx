import * as React from 'react';
import Header from './header';
import '../styles/App.css';
// import Hero from './Hero';

export default function RootLayout({ children }) {
  fetch('http://localhost:3000/api/server');
  return (
    <html>
      <head />
      <body>
        <div className="App">
          <Header />
          {/* <Hero/> */}
          {children}
        </div>
      </body>
    </html>
  );
}
