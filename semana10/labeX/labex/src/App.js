import './App.css';
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import HomePage from "./pages/HomePage"
import AdminHomePage from "./pages/AdminHomePage"
import ApplicationFormPage from "./pages/ApplicationFormPage"
import TripDetailsPage from "./pages/TripDetailsPage"
import CreateTripPage from "./pages/CreateTripPage"
import LoginPage from "./pages/LoginPage"
import ListTripsPage from "./pages/ListTripsPage"

const theme = extendTheme({
  colors: {
    brand: {
      50: "#A4EA73",
      100: "#A4EA73",
      500: "#A4EA73",
    }
  }
});

function App() {
  return (

    <ChakraProvider theme={theme}>

      <HomePage/>
      <ListTripsPage/>
      <ApplicationFormPage/>
      <LoginPage/>
      <AdminHomePage/>
      <CreateTripPage/>
      <TripDetailsPage/>
      
    </ChakraProvider>
  );
}

export default App;
