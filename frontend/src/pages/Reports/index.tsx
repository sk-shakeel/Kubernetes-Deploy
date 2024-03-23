import React from 'react';
import ReportsTab from '../../components/organisms/ReportsTab';
import { HomeTemplate } from '../../components/templates/HomeTemplate';


const ReportsPage = () => {
    return(
        <HomeTemplate page={<ReportsTab/>} />
    )
}

export default ReportsPage;