import { ActivityIndicator } from 'react-native';
import { sharedStyles } from '../styles/SharedStyles';

export default function LoadingSpinner() {
    return <ActivityIndicator style={sharedStyles.loadingSpinner} size='large' color='#FFFFFF'/>
  }