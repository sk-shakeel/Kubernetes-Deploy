import { Grid, styled, Typography } from '@mui/material';
import React from 'react';
import {
  Package_List,
  Package_List_Heading,
  Svg,
} from '../../../utils/constants';
import { CustomButton } from '../../atoms/Button';
import { Icons } from '../../atoms/Icons';
import TestPackageCard from '../../molecules/TestPackageCard';

const GridContainer = styled(Grid)({
  width: '100%',
  height: '409px',
});

const GridItem = styled(Grid)({
  margin: '32px 0px'
})

const PackageList = () => {
  return (
    <GridContainer data-testid="listofpackages_container">
      <Grid container display={'flex'} justifyContent="space-between">
        <GridItem item display={'flex'} alignItems="center">
          <Typography variant="h1" color="text.primary">
            {Package_List_Heading}
          </Typography>
        </GridItem>
        <Grid item>
          <CustomButton style={{lineHeight:'0px'}}
            label={'See more'}
            endIcon={<Icons icon={Svg.doublearrow} width={''} height={''} />}
          />
        </Grid>
      </Grid>
      <Grid container data-testid="test-card-list-container">
        {Package_List.map((data, key) => {
          return (
            <Grid key={key} item sm={4} md={4}>
              <TestPackageCard
                image={data.image}
                testpackage={data.testpackage}
                cost={data.cost}
                report_time={data.report_time}
                noOfTest={data.noOfTest}
                testid={'list_of_packages_' + key}
              />
            </Grid>
          );
        })}
      </Grid>
    </GridContainer>
  );
};

export default PackageList;