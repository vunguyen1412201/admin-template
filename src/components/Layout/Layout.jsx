import React, {useEffect} from 'react'

import './layout.css'
import TopNav from '../topnav/TopNav'
import Sidebar from '../sidebar/Sidebar'
import Routes from '../Routes'

import { BrowserRouter, Route } from 'react-router-dom'





const Layout = () => {


    return (
        <BrowserRouter>
            <Route render={(props) => (
                <div className='layout'>
                    <Sidebar {...props}/>
                    <div className="layout__content">
                        <TopNav/>
                        <div className="layout__content-main">
                            <Routes />
                        </div>
                    </div>
                </div>
            )}/>
        </BrowserRouter>
    )
}

export default Layout