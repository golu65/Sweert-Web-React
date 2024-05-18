import React, { Fragment } from 'react';
import { Grid, Box, styled, Typography } from '@mui/material';
import HomeTen from '../Pages/HomeTen'
import HomeEleven from '../Pages/HomeEleven'
import HomeTeve from '../Pages/HomeTeve'

const MainSection = styled(Box)`
  background-color: #FFE4C9;
  width: 100%;
  height: 100%;
`;

const MainBox = styled(Box)`
  width: 100%;
  padding-top: -180px;
  padding-bottom: 200px;
  margin: 0 auto;
  max-width: 1085px;

  @media (max-width: 1200px) {
    max-width: 900px;
  }

  @media (max-width: 992px) {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  @media (max-width: 600px) {
    padding-top: 50px;
    padding-bottom: 50px;
  }
`;

const BoxItem = styled(Box)`
  background-color: #e0e0e0;
  height: 100px;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

const SuperText = styled(Typography)`
  font-size: 3rem;
  font-weight: 600;
  font-family: 'Playfair Display', serif;
  margin-bottom: 50px;

  @media (max-width: 600px) {
    font-size: 2.5rem;
    margin-bottom: 30px;
  }
`;

const Image = styled('img')({
  width: '100%',
  height: '100%',
});

const MilkText = styled(Typography)`
  font-weight: 600;
  font-family: 'Playfair Display', serif;
  letter-spacing: 1px;
  text-align: center;
`;

const App = () => {
  return (
    <Fragment>
      <MainSection>
        <MainBox>
          <SuperText>Lates Recipes</SuperText>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <BoxItem>
                <Image src="Image/1.jpg" alt="one" />
                <MilkText>Caramel Strawberry Milkshek</MilkText>
              </BoxItem>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <BoxItem>
                <Image src="Image/2.jpg" alt="one" />
                <MilkText>Caramel Strawberry Milkshek</MilkText>
              </BoxItem>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <BoxItem>
                <Image src="Image/3.avif" alt="one" />
                <MilkText>Caramel Strawberry Milkshek</MilkText>
              </BoxItem>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <BoxItem>
                <Image src="Image/h6.jpg" alt="one" />
                <MilkText>Caramel Strawberry Milkshek</MilkText>
              </BoxItem>
            </Grid>
          </Grid>
        </MainBox>
      </MainSection>
      <HomeTen/>
        <HomeEleven/>
        <HomeTeve/>
    </Fragment>
  );
};

export default App;
