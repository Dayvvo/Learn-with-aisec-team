const Sidenav = () => {
    return ( 
        <div className="sidenav">
            <h1 className="side-head">PeepsDB</h1>
            <div className="sidenav-container">
                <div className="sidenav-items dash">
                    <img src="./images/dash.png" alt="" />
                    <h1 className="sidenav-items-text">Dashboard</h1>
                </div>
                <div className="sidenav-items">
                    <img src="./images/workspace.png" alt="" />
                    <h1 className="sidenav-items-text">Workspaces &gt;</h1>
                </div>
                <div className="sidenav-items">
                    <img src="./images/logs.png" alt="" />
                    <h1 className="sidenav-items-text">Logs</h1>
                </div>
                <div className="sidenav-items">
                    <img src="./images/users.png" alt="" />
                    <h1 className="sidenav-items-text">Users</h1>
                </div>
            </div> 
        </div>
     );
}
 
export default Sidenav;