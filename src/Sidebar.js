import { Avatar } from '@material-ui/core';
import './Sidebar.css';

const Sidebar = () => {
  const recentItem = (topic) => {
    <div className='sidebar__recentItem'>
      <span className='sidebar__hash'>#</span>
      <p>{topic}</p>
    </div>;
  };

  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <img
          src='https://images.unsplash.com/photo-1508615039623-a25605d2b022?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80'
          alt=''
        />
        <Avatar classname='sidebar__avatar' />
        <h2>Andrey Semeyko</h2>
        <h4>andrey@gmail.com</h4>
      </div>
      <div className='sidebar__stats'>
        <div className='sidebar__stat'>
          <p>Who viewed you</p>
          <p className='sidebar__statNumber'>2,500</p>
        </div>
        <div className='sidebar__stat'>
          <p>Views on post</p>
          <p className='sidebar__statNumber'>5,000</p>
        </div>
      </div>
      <div className='sidebar__bottom'>
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('mern')}
        {recentItem('firebase')}
        {recentItem('airtable')}
      </div>
    </div>
  );
};

export default Sidebar;
