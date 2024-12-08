import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  background: #1976D2;
  color: white;
  padding: 20px;
  border-radius: 10px;
  height: 92%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: "Arial", sans-serif;
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

const CardSubContainer = styled.div`
  padding: 5rem;
  align-items: center;
`;

const Heading = styled.h1`
  margin: 0;
  font-size: 2rem;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  display: flex;
  padding-bottom: 45px;
`;

const InfoRow = styled.div`
padding-left: 52px;
  gap: 10px;
  font-size: 1rem;
  align-items: center;
  display: flex;
  padding-bottom: 30px;
`;

const Icon = styled.span`
  font-size: 1.2rem;
`;

const Link = styled.a`
  color: white;
  text-decoration: underline;
  font-size: 1rem;
  padding-left: 80px;

  &:hover {
    text-decoration: none;
  }
`;

const ContactCard = () => {
  return (
    <CardContainer>
      <CardSubContainer>
        <Heading>Get in Touch</Heading>
        <InfoRow>
          <Icon>📧</Icon>
          <span>editors.support@designoutsources.com</span>
        </InfoRow>
        <InfoRow>
          <Icon>📞</Icon>
          <span>(+61) 485906541</span>
        </InfoRow>
        <InfoRow>
          <Icon>📍</Icon>
          <span>
          48, North Terrace, Penong SA-5690, Australia
          </span>
        </InfoRow>
        <Link
          href="https://www.google.com/maps"
          target="_blank"
          rel="noopener noreferrer"
          PaddingLeft="50px"
        >
          Get directions →
        </Link>
      </CardSubContainer>
    </CardContainer>
  );
};

export default ContactCard;
