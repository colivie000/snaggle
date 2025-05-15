import React from "react";
import HomeBanner from "../components/Landing/HomeBanner";
import PopularServices from "../components/Landing/PopularServices";
import FeatureSection from "../components/Landing/FeatureSection";
import Services from "../components/Landing/Services";
import JoinSnaggle from "../components/Landing/JoinSnaggle";
// import AuthWrapper from "../components/AuthWrapper";
// import Companies from "../components/Landing/Companies";
// import FiverrBusiness from "../components/Landing/FiverrBusiness";
// import { useStateProvider } from "../context/StateContext";

// Define the shape of your state here if it's not already typed in your context
type State = {
  showLoginModal: boolean;
  showSignupModal: boolean;
};

const Index: React.FC = () => {
  // const [{ showLoginModal, showSignupModal }] = useStateProvider() as [State];

  return (
    <div>
      <HomeBanner />
      {/* <Companies /> */}
      <PopularServices />
      <FeatureSection />
      <Services />
      <JoinSnaggle />
      {/* <FiverrBusiness /> */}
      {/* {(showLoginModal || showSignupModal) && (
        <AuthWrapper type={showLoginModal ? "login" : "signup"} />
      )} */}
    </div>
  );
};

export default Index;
