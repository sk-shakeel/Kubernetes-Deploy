import {  Box, Grid, styled, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomButton } from '../../components/atoms/Button';
import { Icons } from '../../components/atoms/Icons';
import { Banner } from '../../components/molecules/Banner';
import FAQ from '../../components/molecules/Faq';
import Searchbar from '../../components/molecules/Searchbar';
import Footer from '../../components/organisms/Footer';
import { ListOfServices } from '../../components/organisms/ListOfServices';
import ListOfTestimonialCards from '../../components/organisms/ListTestimonialCards';
import PackageList from '../../components/organisms/PackageList';
import TestCardsList from '../../components/organisms/TestCardsList';
import { HomeTemplate } from '../../components/templates/HomeTemplate';
import {
  BannerText,
  FAQs,
  HOME_PAGE_CONTENT,
  PATHS,
  Svg,
} from '../../utils/constants';

export const HomePage = () => {
  return <HomeTemplate page={<Home />} />;
};

const Home = () => {
  const navigate = useNavigate();
  return (
    <Grid
      container
      direction={'column'}
      display={'flex'}
      justifyContent={'center'}
      data-testid={'homePage'}
    >
      <ItemGrid item>
        <Searchbar />
      </ItemGrid>

      <ItemGrid item>
        <Banner
          heading={BannerText[0]}
          description={BannerText[1]}
          image={Svg.Family}
        />
        <Box sx={{display:'flex',justifyContent:'center',paddingTop:'1rem'}}><Icons icon={"progressIndicator2"} width={''} height={''}/></Box>
      </ItemGrid>

      <TextGrid item>
        <Typography
          sx={{ display: 'flex', alignItems: 'center' }}
          variant={'h1'}
        >
          {HOME_PAGE_CONTENT[0]}
        </Typography>
        <CustomButton style={{lineHeight:'0px'}}
          label={HOME_PAGE_CONTENT[1]}
          endIcon={<Icons icon={Svg.doublearrow} width={''} height={''} />}
        />
      </TextGrid>

      <ItemGrid item data-testid={'covid'}>
        <TestCardsList handleCovid={() => navigate(PATHS[4])} />
      </ItemGrid>

      <Grid item marginTop={'2rem'}>
        <ListOfServices />
      </Grid>

      <ItemGrid item marginTop={'0rem'}>
        <PackageList />
      </ItemGrid>

      <Grid item>
        <ListOfTestimonialCards />
      </Grid>

      <ItemGrid item marginTop={'3rem'}>
        <Typography variant={'h1'}>{HOME_PAGE_CONTENT[2]}</Typography>
      </ItemGrid>

      <ItemGrid item>
        {FAQs.map((faq, key) => {
          return (
            <MapGrid item key={key}>
              <FAQ question={faq} testid={'faq'} />
            </MapGrid>
          );
        })}
      </ItemGrid>

      <Grid item marginTop={'3rem'}>
        <Footer />
      </Grid>
    </Grid>
  );
};

const TextGrid = styled(Grid)({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  marginTop: '4rem',
  paddingLeft: '5.5rem',
  paddingRight: '5.5rem',
});

const MapGrid = styled(Grid)({
  width: '100%',
  paddingLeft: '2rem',
  height: '64px',
  Top: '4rem',
  boxShadow: '0px 0px 26px rgba(233, 232, 237, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const ItemGrid = styled(Grid)({
  marginTop: '2rem',
  paddingLeft: '5.5rem',
  paddingRight: '5.5rem',
});
