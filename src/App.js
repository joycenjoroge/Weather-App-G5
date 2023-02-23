import React from 'react';
import Navigation from './Navigation';
import Weather from './Weather';
import ActivityList from './ActivityList';
import SelectedActivities from './SelectedActivities';
import Share from './Share';

function WeatherApp() {
  const activities = [
    { id: 1, name: 'Go for a hike', weatherType: 'Clear' },
    { id: 2, name: 'Go to the beach', weatherType: 'Clear' },
    { id: 3, name: 'Go skiing', weatherType: 'Snow' },
    { id: 4, name: 'Go ice skating', weatherType: 'Snow' },
    { id: 5, name: 'Go to the movies', weatherType: 'Rain' },
    { id: 6, name: 'Play board games', weatherType: 'Rain' },
  ];

  return (
    <div>
      <Navigation />
      <Weather />
      <ActivityList weatherType="Clear" activities={activities} />
      <ActivityList weatherType="Snow" activities={activities} />
      <ActivityList weatherType="Rain" activities={activities} />
      <SelectedActivities />
      <Share />
    </div>
  );
}

export default WeatherApp;
