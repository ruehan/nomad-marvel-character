import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  line-height: 1.6;
`;

const Header = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #212121;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const Subheader = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #424242;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
  color: #616161;
`;

const AboutPage = () => {
  return (
    <AboutContainer>
      <Header>About Marvel Characters</Header>
      
      <Section>
        <Subheader>The Project</Subheader>
        <Paragraph>
          This project was created as a graduation project for the Nomad Coders React course. The goal of the project was to create a web application using React and the Marvel API. The application allows users to search for Marvel characters and view information about them, including their name, description, and a list of comics they have appeared in.
        </Paragraph>
      </Section>
      
    </AboutContainer>
  );
};

export default AboutPage;
