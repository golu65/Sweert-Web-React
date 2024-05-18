import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

const MainSection = styled(Box)`
  background-color: #FFE4C9;
  width: 100%;
  height: 100%;
`

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
    padding-top: 100px;
    padding-bottom: 100px;
  }
`

const SuperText = styled(Typography)`
  font-size: 3rem;
  font-weight: 600;
  font-family: 'Playfair Display', serif;
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;

  @media (min-width: 600px) {
    padding-left: 400px;
    padding-top: 80px;
    text-align: left;
  }
`

const EnajoyText = styled(Typography)`
  font-weight: 600;
  font-family: 'Playfair Display', serif;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  text-align: center;
  margin-bottom: 30px;
  letter-spacing: 1px;

  @media (min-width: 600px) {
    padding-left: 370px;
    text-align: left;
  }
`

const JoinText = styled(Typography)`
  font-size: 12px;
  color: grey;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 10px;
  margin-bottom: 80px;
  font-weight: 600;

  @media (min-width: 600px) {
    margin-left: 370px;
    text-align: left;
  }
`

const EmailLabel = styled('div')`
  margin-left: 20px;
  margin-right: 20px;

  @media (min-width: 600px) {
    margin-left: 23rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
`

const EmailInput = styled('input')`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;

  @media (min-width: 600px) {
    margin-bottom: 0;
    margin-right: 10px;
  }
`



export default function HomeFive() {
  return (
    <MainSection>
      <MainBox>
        <Card sx={{ backgroundColor: '#FFD7C9' }} className="Card">
          <Box sx={{ flexDirection: 'column' }} className="Box">
            <SuperText>Deliciousness <br/> to your inbox</SuperText>
            <EnajoyText>Enjoy weekly hand-picked recipes and recommendations</EnajoyText>

            <EmailLabel>
              <EmailInput type="email" id="email" name="email" required placeholder="Email" />
 
            </EmailLabel>

            <JoinText>By joining our newsletter you agree to our Terms and Conditions</JoinText>
          </Box>
        </Card>
      </MainBox>
    </MainSection>
  );
}
