import React from 'react'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className='w-full flex px-10 items-center justify-between  bg-blue-600 h-16 text-white'>

            <MenuRoundedIcon />
            <Link to="/alltask"> <h1 >Todos-List</h1></Link>
            <Link to='/'>
                <AccountCircleRoundedIcon />
            </Link>

        </div>
    )
}

export default Header
