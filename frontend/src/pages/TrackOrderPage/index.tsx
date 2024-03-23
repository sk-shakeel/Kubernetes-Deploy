import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../../components/molecules/BottomNav';
import { OrderDetails } from '../../components/molecules/OrderDetails';
import {  AddressCardOrgStringState } from '../../components/organisms/AddressCardOrg';
import TrackYouOrder from '../../components/organisms/TrackYourOrder';
import AfterAppointmentTemplate from '../../components/templates/AfterAppointBookedTemplate';
import { COMMENT, ORDER_AMOUNT, reportCardDetails, trackOfEvents } from '../../utils/constants';

const TrackOrderPage = () => {
  const navigate = useNavigate();
  const {user} = useAuth0();
  const [address] = AddressCardOrgStringState();

  return (
    <AfterAppointmentTemplate
      leftorganism={
        <OrderDetails
          patientName={user?.name}
          testName={reportCardDetails[1]}
          address={address}
          amount={ORDER_AMOUNT[0]}
          instructions={COMMENT}
          currency={'Dollar'}
        />
      }
      rightorganism={
        <TrackYouOrder trackOfEvents={trackOfEvents} activeStep={1} />
      }
      divider={true}
      bottomNav={
        <BottomNav
          completeClick={() => {
            navigate('/home');
          }}
          label={'Back to Home'}
          displayCancel={false}
        />
      }
    />
  );
};

export default TrackOrderPage;


