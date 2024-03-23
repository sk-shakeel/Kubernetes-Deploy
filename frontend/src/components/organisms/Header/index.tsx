import { AppBar, Grid, styled, Typography, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import { NAV_ITEMS, Svg, PATHS, LOCATION } from '../../../utils/constants';
import { Icons } from '../../atoms/Icons';
import { CompanyLogo } from '../../atoms/Logo';
import { Locationpick } from '../../molecules/Locationpicker';
import theme from '../../../utils/theme';
import {createGlobalState} from 'react-use';

export const headerGlobalNavItemState = createGlobalState<number>(0)

export const Header = () => {
  const [navItem, setNavItem] = headerGlobalNavItemState();
  const navigate = useNavigate()

  const handleNavigation = (key:number)=>{
    setNavItem(key);
    navigate(PATHS[key])
  }

  return (
    <Bar data-testid={'header'}>
        <InnerGrid container>
          <Grid item>
            <CompanyLogo weight={'500'} />
          </Grid>
          <NavItems item data-testid={'navitems'}>
            {NAV_ITEMS.map((item, key) => {
              return (
                <Box
                  key={key}
                  onClick={()=>handleNavigation(key)}
                  style={{
                    textDecoration: 'none',
                    cursor:'pointer',
                    borderBottom:
                      navItem === key
                        ? `3px solid ${theme.palette.primary.main}`
                        : 'none',
                  }}
                >
                  <Typography
                    variant={'h3'}
                    color={
                      navItem === key
                        ? 'primary.main'
                        : 'text.secondary'
                    }
                  >
                    {item}
                  </Typography>
                </Box>
              );
            })}
          </NavItems>
          <LocGrid item>
            <Box>
              <Locationpick text={LOCATION} />
            </Box>
            <IconBox>
              <Link to={PATHS[3]}>
                <Icons icon={Svg.user1} width={'30px'} height={'30px'} />
              </Link>
              <CartIcon>
              <Icons icon={Svg.Cart} width={'24px'} height={'24px'} />
              </CartIcon>
            </IconBox>
          </LocGrid>
        </InnerGrid>
    </Bar>
  );
};

const Bar = styled(AppBar)({
  background: theme.palette.grey[800],
  width: '100%',
  boxShadow: '0px 0px 26px rgba(233, 232, 237, 0.5)',
});

const IconBox = styled(Box)({
  paddingTop: theme.spacing(3),
  width: '4rem',
  justifyContent: 'space-between',
  display: 'flex',
});

const CartIcon = styled(Box)({
  marginTop: theme.spacing(-1)
})

const LocGrid = styled(Grid)({
  display: 'flex',
  justifyContent: 'space-between',
  width: '24rem',
});

const NavItems = styled(Grid)({
  width: '20rem',
  justifyContent: 'space-between',
  display: 'flex',
});

const InnerGrid = styled(Grid)({
  display: 'flex',
  justifyContent: 'space-between',
  paddingLeft: '6rem',
  paddingRight: '6rem',
  alignItems: 'center',
  height: '3.2rem',
});