import { Grid, Typography, styled, Box } from '@mui/material';
import React, { Fragment } from 'react';

const MainSection = styled(Box)`
  background-color: #FFE4C9;
  width: 100%;
  height: 100%;
`;

const MainBox = styled(Box)`
  width: 100%;
  padding-top: -180px;
  padding-bottom: 50px;
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
  height: 'auto',
  borderRadius: '50%',
  objectFit: 'cover',
});

const SpinText = styled(Typography)`
  font-weight: 600;
  font-family: 'Playfair Display', serif;
  font-size: 14px;
  text-align: center;
`;

const HomeFour = () => {
  return (
    <Fragment>
      <MainSection>
        <MainBox>
          <SuperText>Popular Categories</SuperText>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                  <Image src="Image/s1.jpg" alt="same" />
                  <SpinText>Pasta</SpinText>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Image src="Image/s2.jpg" alt="same" />
                  <SpinText>Pizza</SpinText>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Image src="Image/s3.jpg" alt="same" />
                  <SpinText>Vegan</SpinText>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Image src="Image/1.jpg" alt="same" />
                  <SpinText>Breakfast</SpinText>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Image src="Image/2.jpg" alt="same" />
                  <SpinText>Desserts</SpinText>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Image src="Image/3.avif" alt="same" />
                  <SpinText>Smoothies</SpinText>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </MainBox>
      </MainSection>
    </Fragment>
  );
};

export default HomeFour;
