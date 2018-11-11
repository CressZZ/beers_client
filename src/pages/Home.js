import React from 'react';
import { Link } from 'react-router-dom'

import Header from '../Header.js'
import './home.scss';


const Home = (prop) => {
    return (
        <div>
            <Header match={prop.match}/>
            환영합니다.
            <div className="home_btn">
                <Link to='/beer_list'>목록으로 가기</Link>
            </div>
        </div>
    );
};

export default Home;