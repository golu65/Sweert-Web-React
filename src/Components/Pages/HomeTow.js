import { Grid, Typography, styled, Box } from '@mui/material';
import React, { Fragment } from 'react';
import GradeIcon from '@mui/icons-material/Grade';

const MainSection = styled(Box)`
  background-color: #FFE4C9;
  width: 100%;
  height: 100%;
`;

const MainBox = styled(Box)`
  width: 100%;
  padding-top: -80px;
  padding-bottom: 50px;
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
  margin-bottom: 50px;

  @media (max-width: 600px) {
    font-size: 2.5rem;
    margin-bottom: 30px;
  }
`;

const ImageContainer = styled(Box)`
  position: relative;
  width: 100%;
  padding-top: 100%;
`;

const Image = styled('img')`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StartBox = styled(Box)`
  display: flex;
  padding-top: 8px;
`;

const SpinText = styled(Typography)`
  font-weight: 600;
  font-family: 'Playfair Display', serif;
  font-size: 14px;
`;

const HomeTow = () => {
  return (
    <Fragment>
      <MainSection>
        <MainBox>
          <SuperText>Super Delicious</SuperText>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <ImageContainer>
                <Image src="Image/1.jpg" alt="same" />
              </ImageContainer>
              <Box>
                <StartBox>
                  <GradeIcon style={{ color: '#FF642F', fontSize: '20px' }} />
                  <GradeIcon style={{ color: '#FF642F', fontSize: '20px' }} />
                  <GradeIcon style={{ color: '#FF642F', fontSize: '20px' }} />
                  <GradeIcon style={{ color: '#FF642F', fontSize: '20px' }} />
                  <GradeIcon style={{ color: '#FF642F', fontSize: '20px' }} />
                </StartBox>
              </Box>
              <SpinText>Spinach and Cheese Pasta</SpinText>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ImageContainer>
                <Image src="Image/2.jpg" alt="same" />
              </ImageContainer>
              <Box>
                <StartBox>
                  <GradeIcon style={{ color: '#FF642F', fontSize: '20px' }} />
                  <GradeIcon style={{ color: '#FF642F', fontSize: '20px' }} />
                  <GradeIcon style={{ color: '#FF642F', fontSize: '20px' }} />
                  <GradeIcon style={{ color: '#FF642F', fontSize: '20px' }} />
                  <GradeIcon style={{ color: '#FF642F', fontSize: '20px' }} />
                </StartBox>
              </Box>
              <SpinText>Fancy Glazed Donutus</SpinText>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ImageContainer>
                <Image src="Image/3.avif" alt="same" />
              </ImageContainer>
              <Box>
                <StartBox>
                  <GradeIcon style={{ color: '#FF642F', fontSize: '20px' }} />
                  <GradeIcon style={{ color: '#FF642F', fontSize: '20px' }} />
                  <GradeIcon style={{ color: '#FF642F', fontSize: '20px' }} />
                  <GradeIcon style={{ color: '#FF642F', fontSize: '20px' }} />
                  <GradeIcon style={{ color: '#FF642F', fontSize: '20px' }} />
                </StartBox>
              </Box>
              <SpinText>Mighty Cheesy Breakfast Buger</SpinText>
            </Grid>
          </Grid>
        </MainBox>
      </MainSection>
    </Fragment>
  );
};

export default HomeTow;
