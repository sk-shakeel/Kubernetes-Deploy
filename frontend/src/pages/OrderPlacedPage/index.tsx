import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomButton } from '../../components/atoms/Button';
import { Icons } from '../../components/atoms/Icons';
import BottomNav from '../../components/molecules/BottomNav';
import OrderPlaced from '../../components/molecules/Orderplaced';
import AfterAppointmentTemplate from '../../components/templates/AfterAppointBookedTemplate';
import { Svg } from '../../utils/constants';
import theme from '../../utils/theme';

const OrderPlacedPage = () => {
  const navigate = useNavigate();
  return (
    <AfterAppointmentTemplate
      testid="orderplacedpageid"
      leftorganism={
        <Icons icon={Svg.paymentsuccess} width={theme.spacing(97.25)} height={theme.spacing(109)}  
        />
      }
      rightorganism={<OrderPlaced />}
      bottomNav={
        <BottomNav
          completeClick={() => navigate('/trackorder')}
          label={'Track Your Order'}
          displayCancel={false}
          selectionDetail={
            <CustomButton
              variant="outlined"
              onClick={() => navigate('/home')}
              label={'Back to Home'}
            />
          }
        />
      }
    />
  );
};

export default OrderPlacedPage;
