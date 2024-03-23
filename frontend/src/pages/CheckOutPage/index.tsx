import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../../components/molecules/BottomNav';
import { useGlobalMonthDayState } from '../../components/molecules/MonthDaySelector';
import { useGlobalMonthSelector } from '../../components/molecules/MonthSelector';
import TestStepper from '../../components/molecules/Stepper';
import { useGlobalTimeState } from '../../components/molecules/TimeSelector';
import { AddressCardOrgState } from '../../components/organisms/AddressCardOrg';
import CheckoutPaymentOptions from '../../components/organisms/CheckOutPaymentOptions';
import { useGlobalLabSelectionState } from '../../components/organisms/LabSelection';
import { ReviewOrderForm } from '../../components/organisms/ReviewOrderDetails';
import { useGlobalPatientIdState } from '../../components/organisms/SelectPatientOrg';
import AfterAppointmentTemplate from '../../components/templates/AfterAppointBookedTemplate';
import { AppointmentService, loggedUser } from '../../services';
import { DaySelectorValues,fullDays,fullDaysProps} from '../../utils/constants';

const CheckoutPage = () => {
  const [id] = useGlobalPatientIdState();
  const [lab] = useGlobalLabSelectionState();
  const [dayIndex] = useGlobalMonthDayState();
  const [time] = useGlobalTimeState();
  const [month] = useGlobalMonthSelector();
  const [addId]= AddressCardOrgState()

  const handleAppointment = () =>{
    id.forEach(async (item:number)=>{
    const appointment={
      patientId:item,
      testLabId:lab.labId,
      month:month,
      date:DaySelectorValues[dayIndex].date.toString(),
      day: fullDays[DaySelectorValues[dayIndex].day  as keyof fullDaysProps],
      userId:loggedUser,
      addressId:addId,
      time:time
    }
    await AppointmentService.postAppointment(appointment)}
  )}

  const navigate = useNavigate();
  return (
    <AfterAppointmentTemplate
      header={
        <TestStepper
          stepper={false}
          handleBack={() => navigate(-1)}
          heading={'Checkout'}
        />
      }
      leftorganism={<ReviewOrderForm testId={'revieworder'} />}
      divider={true}
      rightorganism={<CheckoutPaymentOptions />}
      bottomNav={
        <BottomNav
          label={'Pay Now'}
          displayCancel={false}
          completeClick={() => {navigate('/orderplaced');handleAppointment()}}
        />
      }
    />
  );
};

export default CheckoutPage;