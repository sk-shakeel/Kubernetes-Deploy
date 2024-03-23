import { Box, CardHeader, Grid, styled, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import theme from '../../../utils/theme';
import {
  labDetailsCardContent,
  labRatingSlots,
  LabSelectionText,
  Svg,
} from '../../../utils/constants';
import { CustomButton } from '../../atoms/Button';
import { Icons } from '../../atoms/Icons';
import { LabDetailsCard } from '../../molecules/LabDetailsCard';
import { Cards, OuterGrid } from '../AddressCardOrg';
import { createGlobalState } from 'react-use';
import { useNavigate } from 'react-router-dom';
import { LabProps, LabService } from '../../../services';

export const useGlobalLabSelectionState = createGlobalState<LabProps>({
  labId: 0,
  labName: labDetailsCardContent[0],
  rating: labRatingSlots[0],
  availableSlots: labRatingSlots[1]
});



const LabSelection = () => {
  const [lab, setLab] = useGlobalLabSelectionState();
  const handleClick = (data: LabProps) => {
    setLab(data);
  };

  const [labs, setLabs] = useState([]);

 // eslint-disable-next-line react-hooks/rules-of-hooks
 useEffect(()=>{
  const key = async ()=>{
    setLabs(await LabService.getLab())
  };
  key();
  },[labs, setLabs]);
    
  const navigate = useNavigate()
 

  return (
    <OuterGrid
      container
      justifyContent={'flex-start'}
      alignItems={'center'}
      direction={'column'}
    >
      <StyledCardHeader
        data-testid="addtestid"
        action={
          <CustomButton
            label={LabSelectionText.addtest}
            onClick={() => navigate('')}
            startIcon={
              <Icons icon={Svg.vector} width={'12px'} height={'12px'} />
            }
            variant={'text'}
            style={customStyle}
          />
        }
      />

      <ButtonGrid item>
        <Box>
          <Typography
            variant={'subtitle1'}
            color="text.primary"
            paddingTop={'9px'}
          >
            {LabSelectionText.selectlab}
          </Typography>
        </Box>
        <StyledBox>
          <Icons
            icon={Svg.sort}
            width={theme.spacing(5)}
            height={theme.spacing(6)}
          />
          <Typography variant="h3" color="text.secondary">
            {LabSelectionText.sort}
          </Typography>
        </StyledBox>
      </ButtonGrid>

      <Cards
        item
        justifyContent={'center'}
        alignItems={'center'}
        data-testid="labsid"
      >
        <Box sx={{ marginTop: '1rem' }} data-testid={'labcard_box'}>
          {(labs!==undefined ) && labs.map((data:LabProps,key: number ) => {
            return (
              <Grid
                item
                data-testid = {`labdetailgrid_${key}`}
                key={key}
                sx={{ width: '33.44rem', paddingBottom: '1.5rem' }}
                onClick={() => handleClick(data)}
              >
                <LabDetailsCard
                  isSelected={lab.labId===data.labId ? true : false}
                  logo={Svg.altos}
                  labName={data.labName}
                  rating={data.rating}
                  slotsAvailable={data.availableSlots}
                  reportDetails={labDetailsCardContent[3]}
                  amount={labRatingSlots[2]}
                  noOfTests={labRatingSlots[3]}
                  data-testid={'labcardsid'}
                />
              </Grid>
            );
          })}
        </Box>
      </Cards>
    </OuterGrid>
  );
};

export default LabSelection;

const ButtonGrid = styled(Grid)({
  display: 'flex',
  justifyContent: 'space-between',
  width: '32rem',
  height: '2rem',
  paddingBottom: '2rem',
});

const customStyle = {
  color: 'primary.main',
  fontWeight: 600,
  cursor: 'pointer',
  fontSize: '16px',
  lineHeight: '20px',
};

const StyledBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  marginTop: theme.spacing(5),
});

const StyledCardHeader = styled(CardHeader)({
  display: 'flex',
  justifyContent: 'flex-end',
  width: '85%',
});