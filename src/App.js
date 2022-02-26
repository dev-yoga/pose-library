import * as React from 'react';
import './App.css';

const App = () => {

  const poses = [
    {
      name: 'Corpse Pose',
      sanskrit: 'Savasana',
      pose_type: 'Supine',
      url: 'https://www.yogajournal.com/poses/corpse-pose-2/',
      objectID: 1
    },
    {
      name: 'Monkey Pose',
      sanskrit: 'Hanumanasana',
      pose_type: 'Seated',
      url: 'https://www.yogajournal.com/poses/monkey-pose/',
      objectID: 2
    },
  ];


  const [searchTerm, setSearchTerm] = React.useState('');

const searchedPoses = poses.filter((pose)=>
    pose.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


const handleSearch = (event) => {
  setSearchTerm(event.target.value);
};

  return (
    <div>
      <h1>Yoga Poses</h1>
      <Search onSearch={handleSearch} />
      <hr />
      <List list={searchedPoses} />
    </div>
  );
};

const Search = (props) => (
  <div>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" onChange={props.onSearch} />
  </div>
);

const List = (props) => (
  <ul>
    {props.list.map((item) => (
      <Item key={item.objectID} item={item} />
    ))}
  </ul>
);

const Item = (props) => (
  <li>
    <span>
      <a href={props.item.url}>{props.item.name}</a>
    </span>
    <span>{props.item.sanskrit}</span>
    <span>{props.item.pose_type}</span>
  </li>
);

export default App;
