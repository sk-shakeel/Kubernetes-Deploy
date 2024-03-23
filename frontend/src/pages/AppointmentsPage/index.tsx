import { Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { AppointmentCard } from '../../components/molecules/AppointmentCard';
import { HomeTemplate } from '../../components/templates/HomeTemplate';
import { AppointmentProps, AppointmentService,PatientService } from '../../services';
import { APPOINTMENT_PAGE, pName, RECENT_TESTS, reportCardDetails, Svg } from '../../utils/constants';
import theme from '../../utils/theme';

export const AppointmentPage = () => {
  return <HomeTemplate page={<Appointments />} />;
};


const Appointments = () => {
  const [app,setApp]=useState([]);
  const [patientName,setPatientname]=useState([])

  useEffect(() => {
    const key = async () => {
      setApp(await AppointmentService.getAppointment());
      setPatientname(await PatientService.getPatients());
    };
    key();
  }, [app, setApp,patientName, setPatientname]);

  return (
    <Grid container direction={'column'} marginLeft={theme.spacing(24)} data-testid={'appointmentPage'}>
      <Grid item sx={{ marginTop: theme.spacing(5) }}>
        <Typography variant={'h1'}>{APPOINTMENT_PAGE[0]}</Typography>
      </Grid>
      <Grid item sx={{ marginTop: theme.spacing(15) }}>
        <Typography variant={'subtitle1'}>{APPOINTMENT_PAGE[1]}</Typography>
      </Grid>
      <Grid item sx={{ marginTop: theme.spacing(10) }}>
        {(app.length !== 0 && patientName.length!==0) &&
          app.map((appointment:AppointmentProps, key) => {
            return (
              <Grid item key={key} sx={{paddingBottom:'1rem'}}>
                <AppointmentCard
                  icon={Svg.covid}
                  testName={reportCardDetails[1]+" -"}
                  labName={reportCardDetails[0]}
                  patientName={pName(patientName,appointment.patientId)}
                  appointmentDate={appointment.day +" "+appointment.date+", "+appointment.time.replace(' - ',' am to ')+" am"}
                />
              </Grid>
            );
          })}
      </Grid>
      <Grid item sx={{ marginTop: theme.spacing(20) }}>
        <Typography variant={'subtitle1'}>{APPOINTMENT_PAGE[2]}</Typography>
      </Grid>
      <Grid item sx={{ marginTop: theme.spacing(10) }}>
        <AppointmentCard
          icon={Svg.body}
          testName={RECENT_TESTS[0]}
          labName={RECENT_TESTS[1]}
          patientName={RECENT_TESTS[2]}
          appointmentDate={RECENT_TESTS[3]}
        />
      </Grid>
    </Grid>
  );
};
