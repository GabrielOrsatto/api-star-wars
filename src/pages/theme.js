import { DefaultTheme } from '@react-navigation/native';

const StarWarsTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FFD700',  
    background: '#000000',
    card: '#1a1a1a',  
    text: '#FFD700',  
    border: '#272727',
    notification: '#FFD700', 
  },
};

export default StarWarsTheme;
