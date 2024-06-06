import React from 'react';
import { Heading } from '@/components/ui-components/Heading';

const Page = () => {
  return (
    <div>
      <Heading
        as="h1"
        text="Heading Level 1"
      />
      <Heading
        as="h2"
        text="Heading Level 2"
      />
      <Heading
        as="h3"
        text="Heading Level 3"
      />
      <Heading
        as="h4"
        text="Heading Level 4"
      />
      <Heading
        as="h5"
        text="Heading Level 5"
      />
    </div>
  );
};

export default Page;
