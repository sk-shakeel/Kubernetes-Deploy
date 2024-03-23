import { Box, Divider, Grid, styled, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import theme from '../../../utils/theme';
import { handleChecked, PATIENT_TEXT, Svg } from '../../../utils/constants';
import { CustomButton } from '../../atoms/Button';
import { Icons } from '../../atoms/Icons';
import { SelectPatient } from '../../molecules/SelectPatient';
import { PatientService, loggedUser, PatientProps} from '../../../services';
import { createGlobalState } from 'react-use';
import { useNavigate } from 'react-router-dom';

export const useGlobalPatientIdState = createGlobalState<number[]>([]);

interface SelectPatientProps {
  ListOfPatients?: unknown;
  onClick?: () => void;
  testId?: string;
  handlePatients?: () => void;
}


export const SelectPatientsOrg = (props: SelectPatientProps) => {
  const [id, setId] = useGlobalPatientIdState();
  const [patient, setPatient] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const key = async () => {
      setPatient(await PatientService.getPatients());
    };
    key();
  }, [patient, setPatient]);


  return (
    <OuterGrid container direction={'column'} data-testid={props.testId}>
      <ButtonGrid item>
        <Box>
          <Typography variant={'subtitle1'} paddingTop={'9px'}>
            {PATIENT_TEXT[0]}
          </Typography>
        </Box>
        <Box>
          <CustomButton
            label={PATIENT_TEXT[1]}
            onClick={() => navigate(-1)}
            startIcon={
              <Icons icon={Svg.vector} width={'12px'} height={'12px'} />
            }
            variant={'text'}
            style={style}
          />
        </Box>
      </ButtonGrid>

      <Line />

      <Cards item data-testid={props.testId}>
        <Box sx={{ marginTop: '2rem' }}>
          {patient.length !== 0 &&
            patient.filter((value:PatientProps)=>value.userId===loggedUser).map(
              (
                patient:PatientProps,
                key,
              ) => {
                return (
                  <Fetch
                    item
                    key={key}>
                    <SelectPatient
                      name={patient.name}
                      details={`${patient.relation}, ${patient.gender}, ${patient.age} years`}
                      isChecked={id.includes(patient.patientId)}
                      handleChecked={(e) => {
                        setId(handleChecked(patient.patientId, e.target.checked, id));
                      }}
                    />
                  </Fetch>
                );
              },
            )}
        </Box>
      </Cards>
    </OuterGrid>
  );
};

const OuterGrid = styled(Grid)({
  maxWidth: '583px',
  width: '100%',
  minHeight: '560px',
  paddingTop: theme.spacing(6),
  borderRadius: theme.spacing(2),
  justifyContent: 'flex-start',
  alignItems: 'center',
  backgroundColor: theme.palette.grey[800],
  boxShadow: 'rgb(233 232 237 / 50%) 0px 0px 26px',
});

const ButtonGrid = styled(Grid)({
  display: 'flex',
  justifyContent: 'space-between',
  width: '32rem',
  height: '4rem',
  paddingBottom: '2rem',
});

const style = {
  color: 'primary.main',
  fontWeight: 600,
  cursor: 'pointer',
  fontSize: '16px',
};

const Cards = styled(Grid)({
  display: 'grid',
  maxWidth: '10rem',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
});

export const Line = styled(Divider)({
  width: '95%',
});

const Fetch = styled(Grid)({
  width: '33rem',
  paddingBottom: '2rem',
});
