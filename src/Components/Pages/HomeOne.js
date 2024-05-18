import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import MovingIcon from '@mui/icons-material/Moving';

const MainSection = styled(Box)`
  background-color: #FFE4C9;
  width: 100%;
  height: 100%;
`

const MainBox = styled(Box)`
  width: 100%;
  padding-top: 155px;
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

const IconBox = styled(Box)`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`

const WouldText = styled(Typography)`
  color: black;
  font-weight: 600;
  letter-spacing: 1px;
`

const IconBoxSec = styled(Typography)`
  margin-top: 3rem;
  text-align: center;
`

const SuperText = styled(Typography)`
  font-size: 3rem;
  font-weight: 600;
  font-family: 'Playfair Display', serif;
`




export default function MediaControlCard() {
    return (
        <MainSection>
            <MainBox>
                <Card sx={{ display: 'flex', backgroundColor: '#F3F1FF' }} className="Card">
                    <Box sx={{ display: 'flex', flexDirection: 'column' }} className="Box">
                        <CardMedia
                            component="img"
                            sx={{ width: '100%', maxWidth: 550 }}
                            image="Image/cake.jpg"
                            alt="Live from space album cover"
                        />
                    </Box>
                    <Box sx={{ flex: 1 }}>
                        <IconBox>
                            <MovingIcon />
                            <WouldText>85% would make this again</WouldText>
                        </IconBox>

                        <IconBoxSec>
                            <SuperText>Mighty Super<br />Cheesecake</SuperText>
                            <Typography>Look no further for a creamy and <br /> ultra-smooth classic cheesecake <br /> recipe! No one can deny its simple <br /> decadency</Typography>
                        </IconBoxSec>
                    </Box>
                </Card>
            </MainBox>
        </MainSection>
    );
}
