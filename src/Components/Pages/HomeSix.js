import React, { Fragment } from 'react';
import { Grid, Typography, Box, styled, Card, CardActions, CardContent, CardMedia } from '@mui/material';

const MainSection = styled(Box)`
  background-color: #FFE4C9;
  width: 100%;
  height: 100%;
`

const MainBox = styled(Box)`
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  margin: 0 auto;
  max-width: 1085px;

  @media (max-width: 1200px) {
    max-width: 900px;
  }

  @media (max-width: 992px) {
    padding-left: 20px;
    padding-right: 20px;
  }

  @media (max-width: 600px) {
    padding-top: 50px;
    padding-bottom: 50px;
  }
`;

const SuperText = styled(Typography)`
  font-size: 3rem;
  font-weight: 600;
  font-family: 'Playfair Display', serif;
  margin-bottom: 30px;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }
`;

const CookText = styled(Typography)`
  font-weight: 600;
  font-family: 'Playfair Display', serif;
`
const RecipText = styled(Typography)`
  font-size: 12px;
`

const HomeSix = () => {
    return (
        <Fragment>
            <MainSection>
                <MainBox>
                    <SuperText>Hand-Picked Collections</SuperText>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card sx={{ maxWidth: 600 }}>
                                <CardMedia
                                    sx={{ height: 460 }}
                                    image="Image/h1.jpg"
                                    title="green iguana"
                                />
                                <CardContent>
                                    <CookText gutterBottom variant="h5" component="div">
                                        Sushi Combos for your Next Party
                                    </CookText>
                                    <CardActions style={{ width: '19%', height: '20px', marginLeft: 'auto', marginTop: '-32px' }}>
                                        <RecipText>156 Recipes</RecipText>
                                    </CardActions>
                                </CardContent>
                            </Card>
                        </Grid>
                        {/* Repeat the above Grid item for each card */}
                        <Grid item xs={12} sm={6} md={4}>
                            <Card sx={{ maxWidth: 600 }}>
                                <CardMedia
                                    sx={{ height: 460 }}
                                    image="Image/h2.jpg"
                                    title="green iguana"
                                />
                                <CardContent>
                                    <CookText gutterBottom variant="h5" component="div">
                                        Everything Bagel
                                    </CookText>
                                    <CardActions style={{  width: '19%', height: '20px', marginLeft: 'auto', marginTop: '-32px' }}>
                                        <RecipText>156 Recipes</RecipText>
                                    </CardActions>
                                </CardContent>
                            </Card>
                        </Grid>
                        {/* Repeat the above Grid item for each card */}
                        <Grid item xs={12} sm={6} md={4}>
                            <Card sx={{ maxWidth: 600 }}>
                                <CardMedia
                                    sx={{ height: 460 }}
                                    image="Image/h3.avif"
                                    title="green iguana"
                                />
                                <CardContent>
                                    <CookText gutterBottom variant="h5" component="div">
                                        Cook Life Chef
                                    </CookText>
                                    <CardActions style={{  width: '19%', height: '20px', marginLeft: 'auto', marginTop: '-32px' }}>
                                        <RecipText>156 Recipes</RecipText>
                                    </CardActions>
                                </CardContent>
                            </Card>
                        </Grid>
                        {/* Repeat the above Grid item for each card */}
                        <Grid item xs={12} sm={6} md={4}>
                            <Card sx={{ maxWidth: 600 }}>
                                <CardMedia
                                    sx={{ height: 460 }}
                                    image="Image/h4.jpg"
                                    title="green iguana"
                                />
                                <CardContent>
                                    <CookText gutterBottom variant="h5" component="div">
                                        Exquisite Dinner Recipe Ideas
                                    </CookText>
                                    <CardActions style={{  width: '19%', height: '20px', marginLeft: 'auto', marginTop: '-32px' }}>
                                        <RecipText>156 Recipes</RecipText>
                                    </CardActions>
                                </CardContent>
                            </Card>
                        </Grid>
                        {/* Repeat the above Grid item for each card */}
                        <Grid item xs={12} sm={6} md={4}>
                            <Card sx={{ maxWidth: 600 }}>
                                <CardMedia
                                    sx={{ height: 460 }}
                                    image="Image/h5.webp"
                                    title="green iguana"
                                />
                                <CardContent>
                                    <CookText gutterBottom variant="h5" component="div">
                                        The Ultimate Cookie Frenzy
                                    </CookText>
                                    <CardActions style={{  width: '19%', height: '20px', marginLeft: 'auto', marginTop: '-32px' }}>
                                        <RecipText>156 Recipes</RecipText>
                                    </CardActions>
                                </CardContent>
                            </Card>
                        </Grid>
                        {/* Repeat the above Grid item for each card */}
                        <Grid item xs={12} sm={6} md={4}>
                            <Card sx={{ maxWidth: 600 }}>
                                <CardMedia
                                    sx={{ height: 460 }}
                                    image="Image/h6.jpg"
                                    title="green iguana"
                                />
                                <CardContent>
                                    <CookText gutterBottom variant="h5" component="div">
                                        For the love of Donuts
                                    </CookText>
                                    <CardActions sx={{ justifyContent: 'flex-end' }}>
                                        <Box sx={{  width: 'fit-content', py: 1, px: 2 }}>
                                            <RecipText>156 Recipes</RecipText>
                                        </Box>
                                    </CardActions>

                                </CardContent>
                            </Card>
                        </Grid>
                        {/* Repeat the above Grid item for each card */}
                    </Grid>
                </MainBox>
            </MainSection>
        </Fragment>
    );
};

export default HomeSix;
