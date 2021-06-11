import React from 'react'
import { useHistory } from 'react-router';
function Sidebar() {
    const history = useHistory();
    console.log(history);
    return (
        <div>
            <div className="sidebar-menu">
		  	<div className="logo"> <a href="#" className="sidebar-icon"> <span className="fa fa-bars"></span> </a> <a href="#"> <span id="logo" ></span> 
			  </a> </div>		  
		    <div className="menu">
		      <ul id="menu" >
		        <li id="menu-home" ><a onClick={()=>history.push('/')} style={{cursor:'pointer'}}><i className="fa fa-tachometer"></i><span>Dashboard</span></a></li>
		        <li id="menu-home" ><a onClick={()=>history.push('/cards')} style={{cursor:'pointer'}}><i className="fa fa-tachometer"></i><span>Cards</span></a></li>
		        <li id="menu-home" ><a onClick={()=>history.push('/subscriptions')} style={{cursor:'pointer'}}><i className="fa fa-tachometer"></i><span>Subscriptions</span></a></li>
		      </ul>
		    </div>
	 </div>
        </div>
    )
}

export default Sidebar
