import React from 'react';
import './Home.css';
import Banner from './Banner';
// import { Card } from '@material-ui/core';
import Card from './Card';

function Home() {
    return (
        <div className='home'>
            {/* <h1>This is a home component</h1> */}
            <Banner />
            <div className='home__section'>
                <Card
                    src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
                    title="Online Experiences"
                    description="Unique activities we can do together, led by a world of hosts."
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                    title="Unique stays"
                    description="Spaces that are more than just a place to sleep."
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                    title="Entire homes"
                    description="Comfortable private places, with room for friends or family."
                />
            </div>
            <div className='home__section'>
                <Card
                    src="https://a0.muscache.com/im/pictures/c6ae7fad-bb58-455b-bd95-5bc6cc9c2bd3.jpg?aki_policy=large"
                    title="Renovated 1 BR: With Ganges View and Swimming pool"
                    description="Superhost with a stunning view of river along side the flat"
                    price="₹3,500/night"
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/21a047f7-a608-493e-bf6b-3f722d286d08.jpg?aki_policy=large"
                    title="Historic 1br downtown cabin with hot tub and views"
                    description="Soothe your soul in a hot tub above downtown while staring into Rocky Mountain"
                    price="₹14,884/night"
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/36134816/f30a137b_original.jpg?aki_policy=large"
                    title="Beautiful Log Home-Spectacular View"
                    description="All-season log home - 2,500 square feet of home with 4 bedrooms! Hot tub with 33 massage jets"
                    price="₹24,510/night"
                />
            </div>
        </div>
    )
}

export default Home;
