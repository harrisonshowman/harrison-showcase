export const useNavigation = (onNavigate: (destination: string) => void) => {
  const navigateWithSplash = (destination: string) => {
    onNavigate(destination);
  };

  return navigateWithSplash;
}; 