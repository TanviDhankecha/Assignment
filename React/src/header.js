import React from 'react';
import { NavLink} from 'react-router-dom';

export const Header = () =>{

    return(
        <>
       
            <nav>
              
                <NavLink to='/'>
                    <h1>Shopping World</h1>
                </NavLink>
            
             <div style={{"padding":"20px","background":"black"}}>
                    <NavLink to="/addproduct" activeStyle style={{"margin-left":"50px"}}>
                       Add Products
                    </NavLink>
                    <NavLink to="/product" activeStyle style={{"margin-left":"50px"}}>
                       Products
                    </NavLink>
                    <NavLink to="/cart" activeStyle style={{"margin-left":"50px"}}>
                       carts
                    </NavLink>
                    </div>
                    </nav>
        </>
    )
}

//export default Header;
