import {
  Grid,
  List,
  ListItem,
  ListItemText,
  styled,
  Box,
  Typography,
} from '@mui/material';
import React from 'react';
import theme from '../../../utils/theme';
import { FooterText, Svg } from '../../../utils/constants';
import { Icons } from '../../atoms/Icons';
import { CompanyLogo } from '../../atoms/Logo';

const StyledContainer = styled(Box)({
  display: 'flex',
  backgroundColor: theme.palette.primary.dark,
  boxSizing: 'border-box',
  padding: `${theme.spacing(15)} !important`,
});

const StyledListItem = styled(ListItem)({
  paddingBottom: theme.spacing(5),
});

const StyledList = styled(List)({
  paddingTop: theme.spacing(5),
});

const Footer = () => {
  return (
    <StyledContainer>
      <Grid
        container
        display={'flex'}
        justifyContent={'space-between'}
        spacing={2}
      >
        <Grid item xs={6} md={6}>
          <CompanyLogo iconColor="white" weight={'500'} />
          <StyledList>
            {FooterText.map((data, key) => {
              return (
                <ListItem
                  key={key}
                  sx={{
                    paddingBottom: `${theme.spacing(2)}`,
                  }}
                  disablePadding
                >
                  <ListItemText
                    primary={
                      <Typography variant="overline" color="white">
                        {data}
                      </Typography>
                    }
                  />
                </ListItem>
              );
            })}
          </StyledList>
        </Grid>
        <Grid item>
          <List>
            <StyledListItem>
              <Icons icon={Svg.googleplay} width={''} height={''} />
            </StyledListItem>
            <StyledListItem>
              <Icons icon={Svg.appstore} width={''} height={''} />
            </StyledListItem>
            <ListItem sx={{ justifyContent: 'flex-end', display: 'flex' }}>
              <Box sx={{ marginRight: theme.spacing(4.2) }}>
                <Icons
                  icon={Svg.fb}
                  width={theme.spacing(5)}
                  height={theme.spacing(4.97)}
                />
              </Box>
              <Icons
                icon={Svg.twitter}
                width={theme.spacing(5)}
                height={theme.spacing(5)}
              />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default Footer;
