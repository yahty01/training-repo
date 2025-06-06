import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Layout } from './layout/Layout';
import Pages from './Pages';

// * 3 - застилизовать хэдэр и сайдбар в соответствии с дизайном

function HW5() {
  return (
    <HashRouter>
      <Layout>
        <Pages />
      </Layout>
    </HashRouter>
  );
}

export default HW5;
