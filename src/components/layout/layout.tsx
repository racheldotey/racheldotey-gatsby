/**
 * Layout component
 */
import * as React from 'react';
import PropTypes from 'prop-types';

import Header from './header';
import Footer from './footer';

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
