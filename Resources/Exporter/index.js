// Export Screens
import Login from '../Screens/Registration/Login/Login';
import Signup from '../Screens/Registration/Signup/Signup';
import Welcome from '../Screens/Registration/Welcome/Welcome';
import Loading from '../Screens/Registration/Loading/Loading';
import PaywallScreen from '../Screens/Paywall/PaywallScreen';
import Menu from '../Screens/Menu/Menu';
import ManageConnectionIMTracking from '../Screens/Tracking/manage_connection_IM_tracking/ManageConnectionIMTracking';
import TrackingRequests from '../Screens/Tracking/tracking_requests/TrackingRequests';
import CreateNewEvent from '../Screens/Menu/ManuChildrens/Event/new_event/CreateNewEvent';
import CreateNewGroup from '../Screens/Menu/ManuChildrens/Group/create_group/CreateNewGroup';
import AddNewConnections from '../Screens/Menu/ManuChildrens/AddNewConnections/AddNewConnections';

export {
  Login,
  Signup,
  Menu,
  Welcome,
  Loading,
  PaywallScreen,
  ManageConnectionIMTracking,
  TrackingRequests,
  CreateNewGroup,
  CreateNewEvent,
  AddNewConnections,
  // ManageConnectionTrackingMe
};

// Export Components

import TextFeild from '../Components/UI/Form/TextFeild';
import Gradient from '../Components/Gradients/LinearGradient';
import PrimaryButton from '../Components/UI/PrimaryButton';
import AnimatedLoading from '../Components/Loadings/AnimatedLoading';
import NavigationHeader from '../Components/UI/NavigationHeader';
import PaywallFacilityCard from '../Components/UI/PaywallFacilityCard';
import NotificationCard from '../Components/UI/NotificationCard';
import OpenForDating from '../Components/UI/OpenForDating';
import TrackingUserCard from '../Components/UI/Tracking/TrackingUserCard';
import {IconButton} from '../Components/UI/IconButton';
import DashedCircle from '../Components/UI/DashedCircle';
import RadioButton from '../Components/UI/Form/RadioButton';

export {
  TextFeild,
  Gradient,
  PrimaryButton,
  AnimatedLoading,
  NavigationHeader,
  PaywallFacilityCard,
  NotificationCard,
  OpenForDating,
  IconButton,
  TrackingUserCard,
  DashedCircle,
  RadioButton,
};

// Export Internationalization Files
import {hindi, english} from '../Internationalization/Languages';
export {hindi, english};
