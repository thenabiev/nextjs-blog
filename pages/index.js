import React from 'react';
import Format from '@/layout/format';
// Components
import Section1 from '@/components/section1';
import Section2 from '@/components/section2';
import Section3 from '@/components/section3';
import Section4 from '@/components/section4';

const Home = () => {
  return (
    <Format>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </Format>
  )
}

export default Home