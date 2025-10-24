import React from 'react';
import HeroSection from '../src/components/sections/HeroSection';
import AboutSection from '../src/components/sections/AboutSection';
import ValuesSection from '../src/components/sections/ValuesSection';
import MenuSelectionSection from '../src/components/sections/MenuSelectionSection';
import ExampleSection from '../src/components/sections/ExampleSection';
import Navbar from '../src/components/common/Navbar';
import ScrollIndicator from '../src/components/animations/ScrollIndicator';

export default function Home() {
  return (
    <div className="scroll-container">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ValuesSection />
      <MenuSelectionSection />
      <ExampleSection />
      <ScrollIndicator />
    </div>
  );
}
