import React from "react";
import './Header.css';
import Logo from './../../assets/logo.svg'
import Button from '@material-ui/core/Button';

const Header = function () {
    return(
        <div className = 'header'>
            <img src = {Logo} alt = "Logo" className = 'logo'/>
            <Button variant = 'contained' color = 'primary' style = {{float: 'right'}}>
                Login
            </Button>
            <Button variant = 'contained' color = 'primary' style = {{float: 'right'}}>
                Logout
            </Button>
            <Button variant = 'contained' color = 'primary' style = {{float: 'right'}}>
                Book Show
            </Button>
        </div>
    )
}

export default Header;