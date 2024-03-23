import { Box, Grid, styled, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import theme from '../../../utils/theme';
import { ADDRESS_TEXT, LIST_OF_ADDRESSES, Svg } from '../../../utils/constants';
import { CustomButton } from '../../atoms/Button';
import { Icons } from '../../atoms/Icons';
import { AddressCard } from '../../molecules/AddressCard';
import { createGlobalState } from 'react-use';
import { AddressProps, AddressService, loggedUser } from '../../../services';

interface Props {
  onClick?: () => void;
  testId?: string;
}


export const AddressCardOrgState = createGlobalState<number>(0);
export const AddressCardOrgStringState = createGlobalState<string>('');

export const AddressCardOrg = (props: Props) => {
  const [addressSelected, setAddressSelected] = AddressCardOrgState();
  const [, setTrackAddress] = AddressCardOrgStringState();

  const [address, setAddress] = useState([]);

  useEffect(() => {
    const key = async () => {
      setAddress(await AddressService.getAddress());
    };
    key();
  }, [address, setAddress]);

  return (
    <OuterGrid
      container
      justifyContent={'flex-start'}
      alignItems={'center'}
      direction={'column'}
    >
      <ButtonGrid item>
        <Box>
          <Typography variant={'subtitle1'} paddingTop={'9px'}>
            {ADDRESS_TEXT[0]}
          </Typography>
        </Box>
        <Box>
          <CustomButton
            label={ADDRESS_TEXT[1]}
            onClick={props.onClick}
            startIcon={
              <Icons icon={Svg.vector} width={'12px'} height={'12px'} />
            }
            variant={'text'}
            style={style}
          />
        </Box>
      </ButtonGrid>

      <Cards
        item
        justifyContent={'center'}
        alignItems={'center'}
        data-testid={props.testId}
      >
        <Box sx={{ marginTop: '2rem' }}>
          {address.length !== 0 &&
            address.filter((value:AddressProps)=>value.userId===loggedUser).map((address: AddressProps, key: number) => {
              return (
                <Grid
                  item
                  key={key}
                  sx={{ width: '32rem', paddingBottom: '1rem' }}
                  onClick={() => {
                    setAddressSelected(address.id);
                    setTrackAddress(
                      address.houseNo +
                        ' ' +
                        address.area +
                        ' ' +
                        address.city +
                        ' - ' +
                        address.zipcode,
                    );
                  }}
                >
                  <AddressCard
                    addressStatusstr={LIST_OF_ADDRESSES[0].addressStatusstr}
                    addressStr={
                      address.houseNo +
                      ' ' +
                      address.area +
                      ' ' +
                      address.city +
                      ' - ' +
                      address.zipcode
                    }
                    addressnameStr={LIST_OF_ADDRESSES[0].addressnameStr}
                    isChecked={address.id === addressSelected}
                  />
                </Grid>
              );
            })}
        </Box>
      </Cards>
    </OuterGrid>
  );
};

export const OuterGrid = styled(Grid)({
  maxWidth: '583px',
  width: '100%',
  minHeight: '560px',
  paddingTop: theme.spacing(6),
  borderRadius: theme.spacing(2),
  backgroundColor: theme.palette.grey[800],
  boxShadow: 'rgb(233 232 237 / 50%) 0px 0px 26px',
});

const ButtonGrid = styled(Grid)({
  display: 'flex',
  justifyContent: 'space-between',
  maxWidth: '32rem',
  width: '87%',
  height: '2rem',
  paddingBottom: '2rem',
});

const style = {
  color: 'primary.main',
  fontWeight: 500,
  cursor: 'pointer',
  fontSize: '16px',
};

export const Cards = styled(Grid)({
  display: 'grid',
  width: '100%',
});
