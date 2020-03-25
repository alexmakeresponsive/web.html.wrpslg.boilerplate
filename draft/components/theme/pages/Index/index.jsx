import React from 'react';
import ReactDom from 'react-dom';

import Header from '../../parts/Header/index.jsx';
import Footer from '../../parts/Footer/index.jsx';

import '../../../vendor/materialize1/Carousel/index.css';
// import '../../../vendor/lostgrid/GridResponsive/index.styl';
import './index.styl';



const  Index = () => (
    <div className="pageIndex  sf-wr-page">
        <Header />
        <main className="mainIndex">
            <div className="grid12">
                <div className="col">
                    <p>col1</p>
                </div>
                <div className="col">
                    <p>col2</p>
                </div>
                <div className="col">
                    <p>col3</p>
                </div>
                <div className="col">
                    <p>col4</p>
                </div>
                <div className="col">
                    <p>col5</p>
                </div>
                <div className="col">
                    <p>col6</p>
                </div>
                <div className="col">
                    <p>col7</p>
                </div>
                <div className="col">
                    <p>col8</p>
                </div>
                <div className="col">
                    <p>col9</p>
                </div>
                <div className="col">
                    <p>col10</p>
                </div>
                <div className="col">
                    <p>col11</p>
                </div>
                <div className="col">
                    <p>col12</p>
                </div>
            </div>
            <div className="grid">
                <div className="col">
                    <p>col1</p>
                </div>
                <div className="col">
                    <p>col2</p>
                </div>
                <div className="col">
                    <p>col3</p>
                </div>
                <div className="col">
                    <p>col4</p>
                </div>
            </div>
            <div className="gridLost">
                <div className="col">
                    <p>col1</p>
                </div>
                <div className="col">
                    <p>col2</p>
                </div>
                <div className="col">
                    <p>col3</p>
                </div>
                <div className="col">
                    <p>col4</p>
                </div>
            </div>
        </main>
        <Footer />
    </div>
);


ReactDom.render(
        <Index />,
    document.getElementById('root')
);