import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const trains = [
  { id: 1, name: 'Train A', schedule: '9:00 AM' },
  { id: 2, name: 'Train B', schedule: '11:00 AM' },
  { id: 3, name: 'Train C', schedule: '1:00 PM' },
];

const TrainList = () => {
  return (
    <div>
      <h2>All Trains</h2>
      <ul>
        {trains.map((train) => (
          <li key={train.id}>
            <Link to={`/trains/${train.id}`}>{train.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const TrainDetails = ({ match }) => {
  const trainId = parseInt(match.params.trainId);
  const train = trains.find((train) => train.id === trainId);

  if (!train) {
    return <div>Train not found</div>;
  }

  return (
    <div>
      <h2>Train Details</h2>
      <h3>{train.name}</h3>
      <p>Schedule: {train.schedule}</p>
      <Link to="/trains">Back to all trains</Link>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/trains" component={TrainList} />
        <Route path="/trains/:trainId" component={TrainDetails} />
      </Switch>
    </Router>
  );
};

export default App;