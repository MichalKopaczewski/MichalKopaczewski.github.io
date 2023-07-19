import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import { Home } from './Components/Home';
import './Layout/sass/main.scss'

function App() {
  return (
    <Layout>
      <Routes >
        <Route path={'/'} element={<Home />} />

      </Routes>
    </Layout>
  );
}

export default App;
