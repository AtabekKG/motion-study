import React from 'react';
import _AboutUs from "./_About-us";
import _Exams from "./_Exams";
import _Comments from "./_Comments";
import _Form from "./_Form";
import _Hero from "./_Hero";

const Home = () => {
  return (
    <>
        <_Hero/>
        <_AboutUs/>
        <_Exams/>
        <_Comments/>
        <_Form/>
    </>
  )
}

export default Home;
