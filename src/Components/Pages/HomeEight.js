import { Grid, Typography, styled, Box } from '@mui/material';
import React, { Fragment } from 'react';

const MainSection = styled(Box)`
  background-color: #FFE4C9;
  width: 100%;
  height: 100%;
`;

const MainBox = styled(Box)`
  width: 100%;
  padding-top: 40px;
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
  font-size: 2rem;
  font-weight: 600;
  font-family: 'Playfair Display', serif;
  margin-bottom: 50px;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 2.5rem;
    margin-bottom: 30px;
  }
`;

const ServiceText = styled(Typography)`
  text-align: center;
  color: #FF642F;
`


const Image = styled('img')({
  width: '100%',
  marginLeft: '0px',
  marginTop: '30px'
});

const StartBox = styled(Box)`
  display: flex;
  padding-top: 8px;
  margin-top: 20px;
`;

const FoodText = styled(Typography)`
  font-weight: 600;
  font-family: 'Playfair Display', serif;
  padding-left: 100px;
  font-size: 18px;

  @media (max-width: 600px) {
    padding-left: 0;
    text-align: center;
  }
`;

const SpinText = styled(Typography)`
  text-align: center;
  font-family: 'Playfair Display', serif;
  font-size: 14px;
  padding-bottom: 50px;
`;

const HomeEight = () => {
  return (
    <Fragment>
      <MainSection>
        <MainBox>
          <ServiceText>How to work</ServiceText>
          <SuperText>Food Us An Important Part of A Balanced Diet</SuperText>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <Box style={{ borderRadius: '20px', background: '#FFE4C9' }}>
                    <Image src="Image/l1.png" alt="same" />
                    <Box>
                      <StartBox>
                        <FoodText>CHOOSE</FoodText>
                      </StartBox>
                    </Box>
                    <SpinText>Do you want to lose weight, exercise, adhere to a therapeutic diet? A dietitian will help you with choosing the right program!</SpinText>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Box style={{ borderRadius: '20px', background: '#FFE4C9' }}>
                    <Box>
                      <StartBox>
                        <FoodText>PREPARE FOOD</FoodText>
                      </StartBox>
                    </Box>
                    <SpinText>Do you want to lose weight, exercise, adhere to a therapeutic diet? A dietitian will help you with choosing the right program!</SpinText>
                    <Image src="Image/5.png" alt="same" />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Box style={{ borderRadius: '20px', background: '#FFE4C9' }}>
                    <Image src="Image/p1.png" alt="same" />
                    <Box>
                      <StartBox>
                        <FoodText>DELIVERY</FoodText>
                      </StartBox>
                    </Box>
                    <SpinText>Do you want to lose weight, exercise, adhere to a therapeutic diet? A dietitian will help you with choosing the right program!</SpinText>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </MainBox>
      </MainSection>
    </Fragment>
  );
};

export default HomeEight;
