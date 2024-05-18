import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, styled, Typography } from '@mui/material'
import React, { Fragment, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';





const Image = styled('img')({
    width: '2.5rem',
    borderRadius: '50%'
})
const DrawerCmpo = () => {
    const [openDrawer, setOpenDrawer] = useState(false)
    return (
        <Fragment>
            <Drawer open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <List>


                    <ListItemButton >
                        <ListItemIcon style={{ color: 'black' }}>
                            <>
                                <Link to='/' style={{ color: 'black', textDecoration: 'none', marginRight: '25px' }} >
                                    <ListItemText sx={{ fontSize: '2rem', marginTop: '2rem' }}>Home Page</ListItemText>
                                </Link>



                            </>

                        </ListItemIcon>
                    </ListItemButton>

                   

                </List>
                <List>


                    <ListItemButton >
                        <ListItemIcon style={{ color: 'black' }}>
                            <>


                                <Link to='/categoery' style={{ color: 'black', textDecoration: 'none', marginRight: '25px' }} >
                                    <ListItemText sx={{ fontSize: '2rem', marginTop: '2rem' }}>Categories</ListItemText>
                                </Link>

                             

                            </>

                        </ListItemIcon>
                    </ListItemButton>

                    


                </List>

                <List>


                    <ListItemButton >
                        <ListItemIcon style={{ color: 'black' }}>
                            <>



                                <Link to='/recipe' style={{ color: 'black', textDecoration: 'none', marginRight: '25px' }} >
                                    <ListItemText sx={{ fontSize: '2rem', marginTop: '2rem' }}>Recipe Page</ListItemText>
                                </Link>

                              

                            </>

                        </ListItemIcon>
                    </ListItemButton>

              


                </List>

                <List>


                    <ListItemButton >
                        <ListItemIcon style={{ color: 'black' }}>
                            <>





                                <Link to='/sweethtooth' style={{ color: 'black', textDecoration: 'none', marginRight: '25px' }} >
                                    <ListItemText sx={{ fontSize: '2rem', marginTop: '2rem' }}>Sweet Tooth</ListItemText>
                                </Link>

                            </>

                        </ListItemIcon>
                    </ListItemButton>

                    <Typography variant="h6" component="div" sx={{ flexGrow: '1', marginTop: '2rem' }} className="header__item--mobile">
                        <SearchIcon style={{ fontSize: '2.5rem' }} />
                        <Image src="Image/headerIcon.jpg" alt="alet" />
                    </Typography>


                </List>
            </Drawer>
            <IconButton sx={{ color: 'white', marginLeft: 'auto' }} onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon sx={{ fontSize: '2.5rem' }} />
            </IconButton>
        </Fragment>
    )
}

export default DrawerCmpo
