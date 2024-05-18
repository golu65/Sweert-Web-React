import React, { Fragment } from 'react'
import { AppBar, Toolbar, Typography, styled, useMediaQuery, useTheme } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import DrawerCmpo from './DrawerCmpo';
import { Link } from 'react-router-dom';

const Image = styled('img')({
    width: '2.5rem',
    borderRadius: '50%'
})

const page = ['Home Page', '', 'Page', 'Buy']

const Header = () => {

    const theme = useTheme();
    const isMath = useMediaQuery(theme.breakpoints.down('md'))
    return (
        <Fragment>
            <AppBar position="fixed">
                <Toolbar >
                    {
                        isMath ? (
                            <>
                                <Typography variant="h5" component="div" sx={{ flexGrow: 20 }} className="header__item--desktop">
                                    Tastebite
                                </Typography>
                                <DrawerCmpo />
                            </>
                        ) : (

                            <>

                                <Typography variant="h4" component="div" sx={{ flexGrow: 20 }} className="header__item--desktop">
                                    Tastebite
                                </Typography>

                                {

                                    <>
                                        <Link to='/' style={{ color: 'white', textDecoration: 'none', marginRight: '25px' }} >
                                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className="header__item--desktop" >Home Page
                                                <ExpandMoreIcon />
                                            </Typography>

                                        </Link>


                                        <Link to='/categoery' style={{ color: 'white', textDecoration: 'none', marginRight: '25px' }} >
                                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className="header__item--desktop" >Categories
                                                <ExpandMoreIcon />
                                            </Typography>
                                        </Link>

                                        <Link to='/recipe' style={{ color: 'white', textDecoration: 'none', marginRight: '25px' }} >
                                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className="header__item--desktop" >Recipe page
                                            <ExpandMoreIcon />
                                        </Typography>
                                        </Link>

                                        <Link to='/sweethtooth' style={{ color: 'white', textDecoration: 'none', marginRight: '25px' }} >
                                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className="header__item--desktop" >Sweet Tooth
                                            <ExpandMoreIcon />
                                        </Typography>
                                        </Link>

                                    </>

                                }



                                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className="header__item--mobile">
                                    <SearchIcon style={{ fontSize: '2.5rem' }} />
                                </Typography>
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className="header__item--mobile">
                                    <Image src="Image/headerIcon.jpg" alt="alet" />
                                </Typography>

                            </>
                        )
                    }

                </Toolbar>

            </AppBar>
        </Fragment>
    )
}

export default Header
