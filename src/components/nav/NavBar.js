import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useSimpleAuth from "../../hooks/ui/useSimpleAuth";
import { Nav, NavbarBrand, Button } from 'reactstrap';
import './NavBar.css';

const NavBar = (props) => {
  const { isAuthenticated, logout } = useSimpleAuth()
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  toggle();
 
  return (
    <Nav className="navbar navbar-light p-0 shadow">
      <NavbarBrand className="logoText"><img className="navLogo m-2" src="https://lh3.googleusercontent.com/WS11omgCE4mXOyzC3Hz2NyOK-oFydBVPnjmpUeOjrRfBdZaFIeeUBlu4o3U_t9eY_74o1xIoi4udRsCRcHbG7lOn2ByqG5J5n4TPdl44kW-x7ngbZ9vVIhflRkZk9dD-1A1I4bp12ztiN9yp6yQx9VE1SD_VV2kcybNTMoWNiGPR-a2Uu0ZGJWyq6c4eK9dc1HHEklKv3CBOOTctktuyeRKSWyzKWjDm_YfBfbUpkHu7_LRw5yv_dwZugxrS3GhhXDu2d_JOg5UN-cFUqkaai7od4rjwk2hNy2E86RvRDQ6Rfvcrx3862p0xX1KdXqWpwewQoplOFGfQ3yzmhsn1jJwLCY_6IfseusCSIbFFTBHiWCGvh9lCK_0i6TUIAe6IQwVhgv-MoTYXzUGISUOtOXFXBzCfZTj91OrJWH_SGwOs153Zr90OmWIxzRGCmcDSTxEJs9wyw8TzKNFn3CLlkFPOybi3RabkIAfPEd3BUD8mhf9saAQDfLkKvS4LNxuSLYKRhhfkinPf6RnnQjVFEekb5dyjeVMneAlQYmnZTOZ_SMGWgEkxWNY_rwppp1RdU7zGiqxGM2ovQdnTMrGssfr-gkbnCHX1pE0Pslb4PJ6nucqpfoJOpHcID_y_ETS2BihCJ6gumna4WeTveyn0G1aZi--_63l9giZZxWhgBy3C6HW6Cmqe_ykrZ8kZ=s512-no?authuser=0" alt="money logo" />JoesList</NavbarBrand>
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
            <NavLink className="nav-link" to="/list">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/categories">Categories</NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/sell">Sell</NavLink>
        </li> 
        <li className="nav-item">
          <NavLink className="nav-link" to="/myproducts">My Products</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/myaccount">My Account</NavLink>
        </li>
        {isAuthenticated() ? 
          <li className="nav-item">
            <Button outline color="secondary" className="buttonText" 
              onClick={() => {
                logout();
                props.history.push({
                  pathname: "/",});
              }} to="/"
              >
              Logout</Button>
        </li>
         : (
          <>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">Login</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/register">Register</NavLink>
            </li>
          </>
        )}
      {isAuthenticated() ? 
        <li>
          <img className="cart p-1 mr-3" src="https://lh3.googleusercontent.com/xanbwhgvTRpWsVYoIQW2FB_WotJsGfTrBWcgCHDVo-YOKH89eWXG6ZNZTPHgqcXIEUs6asoH-0aBTv85Ha7bLDehhMaVuTZUO99nkzHd8SsxgOHc95RkcYBxfrPJJMAI-H-bynwtO-0nZaM5836R4IjwYOP4Jg9zT1vmdvw5MeMP6KFswbArXw4CW0ek0YwWZ1_wd9SaK0nXsvcuIXyM9J4iASVNLA13i3aQDU8Y6TQ4IAZG2yt0lHeZQd0Aiw3pfiGhqHtSHUX46K66P_R-UqoddsdDpsLuYyvPQTeBi5ztG52DcTkPiugQZWRRAWXcvgs4zAmgql3IsatbmnVzdNeyOsTHH5y5tP_77_gcyGRMG5a9Otrtqzh9OyBfBi1rjM_9OVqHNeiPBsXC94RZ0KfenPZwX2JYXB_tFoQQhxJFm0zuodOlxYpG18MdvsxgDefTbnNo65iyD_-bWlsjyrbG0AEBVPvL2ZClX-nemUcqWA0r9xoFBXw9_9LmOMzu3VM1jKukaO52nbMSnI_vAQgeRl3--ZHqH4WXSTLk59x-TxMvX8OxB1rvDAhZCqlsREIwKwMF7Ve1MW70pbeElaieyQGAChdGR9j1j8DIaeCVGiv5VjkZyXFlmkaLKv_n6XmANG7XaPc0rOs_JQ-R0VqzOspRlSRZCdreWw06JqLYv8jeLoGtrbk6kD5E=s512-no?authuser=0" alt="shopping cart"/>
        </li> : ('')
      }
      </ul>
    </Nav>
  );
};

export default NavBar
