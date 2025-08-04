import { useNavigate } from 'react-router-dom';

export const useNavigation = (onNavigate: (destination: string) => void) => {
  const navigate = useNavigate();

  const navigateWithSplash = (destination: string) => {
    onNavigate(destination);
    
    // Navigate after a short delay to allow splash to start
    setTimeout(() => {
      switch (destination) {
        case 'home':
          navigate('/');
          break;
        case 'explore':
          navigate('/explore');
          break;
        case 'portfolio':
          navigate('/portfolio');
          break;
        case 'profile':
          navigate('/profile');
          break;
        default:
          navigate('/');
      }
    }, 300);
  };

  return navigateWithSplash;
}; 