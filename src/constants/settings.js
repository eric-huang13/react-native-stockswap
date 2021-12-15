import {Platform} from 'react-native';

export const GOOGLE_IOS_CLIENT_ID =
  Platform.OS === 'ios'
    ? '534509051413-1up4ql426i3annnm2j3p2ouj9dd3nn42.apps.googleusercontent.com'
    : '';
export const GOOGLE_WEB_CLIENT_ID =
  Platform.OS === 'ios'
    ? ''
    : '534509051413-6a8ceait2pji394mgui3svtrnp7bl4hp.apps.googleusercontent.com';

export const API_SERVER =
  'http://ss-alb-dev-207883179.us-east-2.elb.amazonaws.com';

export const STOCKS_SERVER =
  'http://ec2-3-14-152-2.us-east-2.compute.amazonaws.com';
