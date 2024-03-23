import { useAuth0 } from '@auth0/auth0-react';
import { Box, Grid, Stack, styled } from '@mui/material';
import React, { useState } from 'react';
import theme from '../../utils/theme';
import { AccountHeadings, Svg, userDetails, handleLogout } from '../../utils/constants';
import { Icons } from '../../components/atoms/Icons/index';
import { AccountOptions } from '../../components/molecules/AccountOptions/index';
import ProfileInfo from '../../components/molecules/ProfileInfo/index';
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom';

function AccountPage() {
  const { user, logout } = useAuth0();
  const details = userDetails(user);
  const [open,] = useState(true);
  const navigate = useNavigate()

  return (
    <Modal open={open} data-testid="account-modal">
      <ModalBox>
        <AccountGrid container rowGap={0}>
          <IconGrid item xs={11.5}>
            <Box onClick={() => navigate(-1)} sx={PointerStyle}>
              <Icons icon={Svg.close} width={'20px'} height={'20px'} />
            </Box>
          </IconGrid>
          <ProfileGrid item xs={12}>
            <AccountInnerBox>
              <ProfileInfo
                userName={details.name}
                userEmail={details.email}
                userNumber={details.phoneNumber}
              />
              {AccountHeadings.map((value, key) => (
                <AccountOptions
                  key={key}
                  icon={value.image}
                  heading={value.heading}
                  description={value.desc}
                  onClick={() => {
                    handleLogout(logout,value.heading);
                  }}
                />
              ))}
            </AccountInnerBox>
          </ProfileGrid>
        </AccountGrid>
      </ModalBox>
    </Modal>
  );
}

export default AccountPage;

const PointerStyle ={
  cursor : "pointer"
}

const AccountGrid = styled(Grid)({
  maxWidth: '40%',
  backgroundColor: theme.palette.grey[800],
  // alignItems: 'center',
  justifyContent:'center',
  paddingTop: '1%',
  paddingBottom: '2%',
});

const ModalBox = styled(Box)({
  height: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
});

const IconGrid = styled(Grid)({
  display: 'flex',
  justifyContent: 'flex-end',
  height: 'fit-content',
});

const ProfileGrid = styled(Grid)({
  display: 'flex',
  justifyContent: 'center',
  marginLeft: '5%',
});
const AccountInnerBox = styled(Stack)({
  width: '95%',
  paddingBottom:'5rem'
});
