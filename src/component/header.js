const Header = () => {
    return ( 
        <header>
            <nav>
                <div className="nav-container container">
                    <h1 className="brand">Dashboard</h1>
                    <div className="nav-link">
                        <img src="./images/vector.png" alt="" />
                        <p className="user">iben_Rodi</p>
                    </div>
                </div>
            </nav>
            <div className="header">
                <div className="header-container container">
                    <h2 className="header-head">Welcome Iben,</h2>
                    <p className="header-details">You can now see all onboarding information of your organization.</p>
                    <div className="infos-div">
                        <div className="infos">
                            <div className="info-img">
                                <img src="./images/Vector (2).png" alt="" />
                            </div>
                            {/* <img src="./images/Vector (2).png" alt="" /> */}
                            <div className="info-content">
                                <h3 className="info-header">1,015</h3>
                                <p className="info-detail">Total accounts</p>
                            </div>
                        </div>
                        <div className="infos">
                            <div className="info-img">
                                <img src="./images/Vector (3).png" alt="" />
                            </div>
                            {/* <img src="./images/Vector (3).png" alt="" /> */}
                            <div className="info-content">
                                <h3 className="info-header">72.5k</h3>
                                <p className="info-detail">Onboarded accounts</p>
                            </div>
                        </div>
                        <div className="infos">
                            <div className="info-img">
                                <img src="./images/Vector (4).png" alt="" />
                            </div>
                            {/* <img src="./images/Vector (4).png" alt="" /> */}
                            <div className="info-content">
                                <h3 className="info-header">650</h3>
                                <p className="info-detail">Suspended accounts</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
     );
}
 
export default Header;