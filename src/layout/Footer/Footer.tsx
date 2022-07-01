import React from 'react';
import {
  FooterWrapper,
} from './Footer.styles';
import { FooterProps } from './Footer.d';

const Footer: React.FC<FooterProps> = () => (
  <FooterWrapper>
    Copyright ©
    {' '}
    {(new Date().getFullYear())}
  </FooterWrapper>
);

export default Footer;
