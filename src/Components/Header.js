import React from 'react'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
// import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link, useNavigate } from 'react-router-dom';
import { Badge, Box, IconButton, Menu, MenuItem } from '@mui/material';
const Header = () => {
    const menuId = "primary-search-account-menu";
    const [anchorEl, setAnchorEl] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
        
    };
    const navigate = useNavigate()
    const userLogedOut =()=>{
        localStorage.removeItem('NotloggedIn')
navigate("/")
    }


    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem
                onClick={() => {
                    handleMenuClose();
                    userLogedOut();
                    
                }}
            >
                Log out
            </MenuItem>
        </Menu>
    );
    return (
        <div className='w-full flex px-10 items-center justify-between  bg-blue-600 h-16 text-white'>

            <MenuRoundedIcon />
            <Link to="/alltask"> <h1 >Todos-List</h1></Link>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton
                            size="large"
                            aria-label="show 4 new mails"
                            color="inherit"
                        >
                            <Badge badgeContent={4} color="error">
                                <MailIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <Badge badgeContent={17} color="error">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </Box>
                    {renderMenu}

        </div>
    )
}

export default Header
