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
  width: '30%',
  marginLeft: '108px',
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
`

const SpinText = styled(Typography)`
  text-align: center;
  font-family: 'Playfair Display', serif;
  font-size: 14px;
  padding-bottom: 50px;
`;

const HomeSeven = () => {
  return (
    <Fragment>
      <MainSection>
        <MainBox>
          <ServiceText>Service</ServiceText>
          <SuperText>Why Choose Our Favorite Food</SuperText>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <Box style={{ borderRadius: '20px', background: 'white' }}>
                    <Image src="Image/d1.png" alt="same" />
                    <Box>
                      <StartBox>
                        <FoodText>Qualityfull Food</FoodText>
                      </StartBox>
                    </Box>
                    <SpinText>But I must explain to you how all this <br /> mistaken idea of denouncing pleasure and <br /> praising pain was born</SpinText>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Box style={{ borderRadius: '20px', background: 'white' }}>
                    <Image src="Image/d1.png" alt="same" />
                    <Box>
                      <StartBox>
                        <FoodText>Healthy Food</FoodText>
                      </StartBox>
                    </Box>
                    <SpinText>But I must explain to you how all this <br /> mistaken idea of denouncing pleasure and <br /> praising pain was born</SpinText>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Box style={{ borderRadius: '20px', background: 'white' }}>
                    <Image src="Image/d1.png" alt="same" />
                    <Box>
                      <StartBox>
                        <FoodText>Fast Delivery</FoodText>
                      </StartBox>
                    </Box>
                    <SpinText>But I must explain to you how all this <br /> mistaken idea of denouncing pleasure and <br /> praising pain was born</SpinText>
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

export default HomeSeven;
