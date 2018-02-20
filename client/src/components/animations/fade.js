// npm packages
import React from 'react';
import {CSSTransition} from 'react-transition-group';
import {element} from 'prop-types';

// our packages
import './styles.css';

const DURATION = 300;

const Fade = ({children, ...props}) => (
  <CSSTransition {...props} timeout={DURATION} classNames="fade">
    {children}
  </CSSTransition>
);
Fade.propTypes = {
  children: element.isRequired,
};

export default Fade;
