import { createBrowserRouter } from "react-router-dom";
import AboutUs from "../Components/AboutUs/AboutUs";
import Contract from "../Components/ContractUs/Contract";
import Login from "../Components/Forms/LoginForm/Login";
import Register from "../Components/Forms/RegistrationForm/Register";
import Home from "../Components/Home/Home";
import Entertainment from "../Components/News/Entertainment/Entertainment";
import General from "../Components/News/General/General";
import Health from "../Components/News/Health/Health";
import Science from "../Components/News/Science/Science";
import Sports from "../Components/News/Sports/Sports";
import Technology from "../Components/News/Technology/Technology";
import NumberLogin from "../Components/NumberLogin/NumberLogin";
import ProfileDetails from "../Components/ProfileDetails/ProfileDetails";
import TermsAndConditions from "../Components/TermsAndConditons/TermsAndConditions";
import TextGenerator from "../Components/TextGenerator/TextGenerator";
import FormLayout from "../Layouts/FormLayout/FormLayout";
import Main from "../Layouts/MainLayout/Main";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/sports",
        element: <Sports></Sports>,
        loader: () => {
          return fetch("https://the-proples-voice-s-server.vercel.app/sports");
        },
      },
      {
        path: "/entertainment",
        loader: () => {
          return fetch(
            "https://the-proples-voice-s-server.vercel.app/entertainment"
          );
        },
        element: <Entertainment></Entertainment>,
      },
      {
        path: "/general",
        loader: () => {
          return fetch("https://the-proples-voice-s-server.vercel.app/general");
        },
        element: (
          <PrivateRoutes>
            <General></General>
          </PrivateRoutes>
        ),
      },
      {
        path: "/health",
        loader: () => {
          return fetch("https://the-proples-voice-s-server.vercel.app/health");
        },
        element: <Health></Health>,
      },
      {
        path: "/science",
        loader: () => {
          return fetch("https://the-proples-voice-s-server.vercel.app/science");
        },
        element: <Science></Science>,
      },
      {
        path: "/technology",
        loader: () => {
          return fetch(
            "https://the-proples-voice-s-server.vercel.app/technology"
          );
        },
        element: <Technology></Technology>,
      },
      {
        path: "/about",
        element: (
          <PrivateRoutes>
            <AboutUs></AboutUs>
          </PrivateRoutes>
        ),
      },
      {
        path: "/contract",
        element: (
          <PrivateRoutes>
            <Contract></Contract>
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "",
    element: <FormLayout></FormLayout>,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Register></Register>,
      },
      {
        path: "/profile",
        element: <ProfileDetails></ProfileDetails>,
      },
      {
        path: "/terms",
        element: <TermsAndConditions></TermsAndConditions>,
      },
      {
        path: "/numberLogin",
        element: <NumberLogin></NumberLogin>,
      },
      {
        path: "/text",
        element: <TextGenerator></TextGenerator>,
      },
    ],
  },
]);
