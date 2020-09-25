import React from "react";
import HeroSection from "../../HeroSection";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";
import Pricing from "../../Pricing";
import Form from "../../../Form";
function SignUp() {
  return (
    <>
      <HeroSection {...homeObjThree} />
      <Form />
    </>
  );
}

export default SignUp;
