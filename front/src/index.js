import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { useLocalStorage } from './hooks/useLocalStorage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SignUp, Login, Profile, TermsAndConditions } from './pages';
import Search from './pages/Search';
import { LoginModal } from './components/LoginModal/LoginModal';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { UserProvider } from './components/contexts/UserContext';
import { BusinessProfile } from './pages/BusinessProfile';
import { GlobalStyles } from '@mui/material';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Validate } from './components/Validate/Validate';

const theme = createTheme({
  palette: {
    primary: {
      main: '#292c37',
    },
    secondary: {
      main: '#616161',
    },
    background: {
      default: '#ffffff',
      paper: '#ececea',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#ececea',
          textTransform: 'none',
          backgroundColor: '#292c37',
          '&:hover': {
            backgroundColor: '#111111',
            boxShadow: 'none',
          },
        },
      },
    },
  },
});

export const TokenContext = React.createContext();
const TokenProvider = (props) => {
  const [token, setToken] = useLocalStorage('token');
  return (
    <TokenContext.Provider value={[token, setToken]}>
      {props.children}
    </TokenContext.Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <TokenProvider>
        <UserProvider>
          <BrowserRouter>
            <Header />
            <main className='main'>
              <Routes>
                <Route path='/' element={<App />} />
                <Route path='/signup' element={<SignUp />} />
                {/*  <Route path='/loginModal' element={<LoginModal />} /> */}
                <Route path='/search' element={<Search />} />
                <Route path='/profile' element={<Profile />} />
                <Route
                  path='/businessProfile/:id'
                  element={<BusinessProfile />}
                />
                <Route
                  path='/validate/:registrationCode'
                  element={<Validate />}
                />
                <Route
                  path='/TermsAndConditions'
                  element={<TermsAndConditions />}
                />
              </Routes>
            </main>
            <Footer />
          </BrowserRouter>
        </UserProvider>
      </TokenProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
