import React from 'react';
import HeroSection from '../src/components/HeroSection';
import AboutSection from '../src/components/AboutSection';
import ValuesSection from '../src/components/ValuesSection';
import MenuSelectionSection from '../src/components/MenuSelectionSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ValuesSection />
      <MenuSelectionSection />
    </div>
  );
}
