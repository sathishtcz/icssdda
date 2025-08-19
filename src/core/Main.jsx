import { Outlet, useLocation } from 'react-router-dom'
import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Register from '../shared/components/Register/Register';

export default function Main() {
    return (
        <>
          <Header/>
            <main className={`w-auto mx-auto`}>
                <Outlet/>
            </main>
            <Register/> 
            <Footer />
        </>
    )
}
