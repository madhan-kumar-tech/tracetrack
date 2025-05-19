import React from 'react';
import { useRoute } from '@react-navigation/native';
import ReportDownload from '../../../../molecules/ReportsDownload';

const reportConfigs = {
  other: {
    title: 'Other Reports',
    description: 'This report includes your vehicle running distance\nIdle time, Parked time, Moving time and\nOverspeed alerts',
    // ...other props for ReportDownload
  },
  geofence: {
    title: 'Geofence Reports',
    description: "This report includes your vehicle’s entry and exit times, duration inside geofences, and breach alerts.",
    // ...other props for ReportDownload
  },
  // Add more report types here
};
const ReportTypeScreen = () => {
  const route = useRoute();
  // configKey: 'geofence' | 'other' | ...
  const { configKey } = route.params as { configKey: keyof typeof reportConfigs };
  const config = reportConfigs[configKey];

  return (
    <ReportDownload {...config} />
  );
};

export default ReportTypeScreen;

//Usage
/*
The navigation knows which screen was pressed because,
when you navigate from the main Reports screen, you pass a parameter
(e.g., configKey: 'other' or configKey: 'geofence') to the ReportTypeScreen
*/

/*

Then, in ReportTypeScreen,
 you use useRoute() to read the configKey from route.params,
and use it to select the correct config and render the appropriate report UI.
*/