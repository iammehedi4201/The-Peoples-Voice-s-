import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';

const FormLayout = () => {
    return (
        <div>
            <Header></Header>
             <Outlet></Outlet>
             <Footer></Footer>
        </div>
    );
};

export default FormLayout;