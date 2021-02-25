import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import logo from './logo.png';
import avatar from './avatar.jpg';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';

const Header = () => {
  return (
    <div className='header'>
      <div className='header__left'>
        <img src={logo} alt='' />
        <div className='header__search'>
          <SearchIcon />
          <input type='text' />
        </div>
      </div>
      <div className='header__right'>
        <HeaderOption Icon={HomeIcon} title='Home' />
        <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
        <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
        <HeaderOption Icon={ChatIcon} title='Messaging' />
        <HeaderOption Icon={NotificationsIcon} title='Notifications' />
        <HeaderOption avatar={avatar} title='Andrey' />
      </div>
    </div>
  );
};

export default Header;
