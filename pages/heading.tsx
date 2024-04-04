import React from 'react';
import PrimaryHeading from '@/components/elemets/Heading/PrimaryHeading';

const HomePage = () => {
  return (
    <div>
      <PrimaryHeading
        as="h1"
        style="display:none;"
        className="first-letter:"
      >
        Hello, Next.js!
      </PrimaryHeading>
      <Heading as="h2">Subheading</Heading>
      <Heading as="h3">Another Subheading</Heading>
    </div>
  );
};

export default HomePage;
