import React, { useState } from 'react';
import './Banner.css';
import { Button } from '@material-ui/core';
import Search from './Search';
import { useHistory } from 'react-router-dom';


function Banner() {
    const History = useHistory();
    const [showSearch, setShowSearch] = useState(false);
    return (
        <div className='banner'>
            <div className="banner__search">
                {showSearch && <Search />}
                <Button onClick={() => setShowSearch(!showSearch)}
                    className='banner__searchButton'
                    variant='outlined'>
                    {showSearch ? 'Hide' : 'Search Dates'}
                </Button>
            </div>
            {/* <h1>I am Banner</h1> */}
            <div className="banner__info">
                <h1>Go Near</h1>
                <h5>
                    Plan a different kind of
                    getaway to uncover the
                    hidden gems near you.
                </h5>
                <Button onClick={() => History.push('/search')}
                    variant="outlined" >Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner
