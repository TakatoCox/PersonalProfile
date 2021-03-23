import React from 'react';
import Time from './clockEngine';
import "./clocks.css"


const Clocks = () => {

    return ( 
        <div className="clockContainer">
            {/* <div className="cityClock">
                <div className="city">Honolulu</div>
                <Time timeZone={-36000}/>
            </div> */}
            <div className="cityClock">
                <div className="city">LosAngeles</div>
                <Time timeZone={-25200}/>
            </div>
            <div className="cityClock">
                <div className="city">New York</div>
                <Time timeZone={-14400}/>
            </div>
            <div className="cityClock">
                <div className="city">London</div>
                <Time timeZone={3600}/>
            </div>
            <div className="cityClock">
                <div className="city">Beijing</div>
                <Time timeZone={28800}/>
            </div>
            {/* <div className="cityClock">
                <div className="city">Beijing</div>
                <Time timeZone={28800}/>
            </div> */}
            <div className="cityClock">
                <div className="city">Tokyo</div>
                <Time timeZone={32400}/>
            </div>
        </div>
    );
}
 
export default Clocks;
