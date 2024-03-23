import React from 'react';

import { useNavigate } from 'react-router-dom';
import { StepperHomeText, PatientFormRadio } from '../../utils/constants';
import BookTestTemplate from '../../components/templates/BookTestTemplate';
import AddPatientForm, {
  AddPatientFormDate,
  AddPatientFormGender,
  AddPatientFormName,
  AddPatientFormRelation,
} from '../../components/organisms/AddPatientForm';
import TestStepper from '../../components/molecules/Stepper';
import BottomNav from '../../components/molecules/BottomNav';
import { loggedUser, PatientProps, PatientService } from '../../services';

function PatientFormPage() {
  const navigate = useNavigate();
  const patientDate = AddPatientFormDate();
  const age =
    patientDate[0]?.get('year') !== undefined
      ? Math.abs(patientDate[0]?.get('year') - new Date().getFullYear())
      : 0;
  const relation = AddPatientFormRelation();
  const name = AddPatientFormName();
  const gender = AddPatientFormGender();

  const PatientProps = {
    patientId: 1,
    userId: loggedUser,
    relation: relation[0],
    name: name[0],
    age: age,
    gender: PatientFormRadio[gender[0]],
  };
  return (
    <BookTestTemplate
      stepper={
        <TestStepper
          steps={StepperHomeText}
          activeStep={2}
          handleBack={() => history.back()}
        />
      }
      page={<AddPatientForm></AddPatientForm>}
      bottomNav={
        <BottomNav
          label={'Next'}
          displayCancel={true}
          cancelClick={() => navigate('/home')}
          completeClick={() => {
            handlePatient(PatientProps);
            navigate('/selectpatient');
          }}
        />
      }
    />
  );
}

const handlePatient = (PatientProps: PatientProps) => {
  {
    PatientProps.name.length !== 0 && PatientService.postPatients(PatientProps);
  }
};

export default PatientFormPage;
