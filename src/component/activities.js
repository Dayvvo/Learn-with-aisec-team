const Activity = () => {
    return ( 
        <div className='container'>
            <h2 className='start-head'>What's hot</h2>
            <div className="activities">
                <div className="activityDate">
                    <h3 className='activityDate-head'>Recent activities</h3>
                    <select name="Date" id="">
                        <option value="today">Today</option>
                        <option value="yesterday">Yesterday</option>
                        <option value="tomorrow">Tomorrow</option>
                    </select>
                </div>
                <div className="activity-data">
                    <div className="acitvity-img-div">
                        <img src="./images/clock.png" alt="" />
                    </div>
                    <div className="activity-details">
                        <p>5 mins ago</p>
                        <h3>You just logged in to peeps DB</h3>
                    </div>
                </div>
                <div className="hr">
                    <hr />
                </div>
                <div className="activity-data">
                    <div className="acitvity-img-div">
                        <img src="./images/clock.png" alt="" />
                    </div>
                    <div className="activity-details">
                        <p>5 mins ago</p>
                        <h3>You just logged in to peeps DB</h3>
                    </div>
                </div>
                <div className="hr">
                    <hr />
                </div>
                <div className="activity-data">
                    <div className="acitvity-img-div">
                        <img src="./images/clock.png" alt="" />
                    </div>
                    <div className="activity-details">
                        <p>5 mins ago</p>
                        <h3>You just logged in to peeps DB</h3>
                    </div>
                </div>
                <div className="hr">
                    <hr />
                </div>
                <div className="activity-data">
                    <div className="acitvity-img-div">
                        <img src="./images/clock.png" alt="" />
                    </div>
                    <div className="activity-details">
                        <p>5 mins ago</p>
                        <h3>You just logged in to peeps DB</h3>
                    </div>
                </div>
                <div className="hr">
                    <hr />
                </div>
                <div className="activity-data">
                    <div className="acitvity-img-div">
                        <img src="./images/clock.png" alt="" />
                    </div>
                    <div className="activity-details">
                        <p>5 mins ago</p>
                        <h3>You just logged in to peeps DB</h3>
                    </div>
                </div>
                <div className="hr">
                    <hr />
                </div>
                <div className="activity-data">
                    <div className="acitvity-img-div">
                        <img src="./images/clock.png" alt="" />
                    </div>
                    <div className="activity-details">
                        <p>5 mins ago</p>
                        <h3>You just logged in to peeps DB</h3>
                    </div>
                </div>
              
            </div>
        </div>
     );
}
 
export default Activity;