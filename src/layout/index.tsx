import React from 'react';
import LayoutWrap from '../components/LayoutWrap';
import { Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const DefaultLayout = ({ children }) => {
  return (
    <>
      hi
      <div>{children}</div>
    </>
  );
};

const NonAuthLayout = ({ children }) => {
  return (
    <>
      <div>
        hello
        {children}
      </div>
    </>
  );
};

const InvestigateLayout = ({ children }) => {
  return (
    <>
      InvestigateLayout
      <div>{children}</div>
    </>
  );
};

const InvestigateByTxHashLayout = ({ children }) => {
  return (
    <>
      InvestigateByTxHashLayout
      <div>{children}</div>
    </>
  );
};

const InvestigateByAddressLayout = ({ children }) => {
  return (
    <>
      InvestigateByAddressLayout
      <div>{children}</div>
    </>
  );
};

// Check role va tra element component theo role
function LayoutWrapper({ allroutes }) {
  return (
    <>
      <LayoutWrap>
        <Routes>
          {allroutes?.map((route, index) => {
            console.log(route);
            return (
              <>
                {
                  <Route
                    key={index}
                    path={route.path}
                    element={
                      <>
                        {route.routeId === 0 ? (
                          <DefaultLayout>{route.element}</DefaultLayout>
                        ) : route.routeId === 1 ? (
                          <InvestigateLayout>{route.element}</InvestigateLayout>
                        ) : route.routeId === 1_1 ? (
                          <InvestigateByTxHashLayout>{route.element}</InvestigateByTxHashLayout>
                        ) : route.routeId === 1_2 ? (
                          <InvestigateByAddressLayout>{route.element}</InvestigateByAddressLayout>
                        ) : route.routeId === 2 ? (
                          <NonAuthLayout>{route.element}</NonAuthLayout>
                        ) : (
                          <>Not Found</>
                        )}
                      </>
                    }
                  />
                }
              </>
            );
          })}
        </Routes>
      </LayoutWrap>
    </>
  );
}

LayoutWrapper.propTypes = {
  allroutes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      element: PropTypes.elementType.isRequired,
      routeId: PropTypes.number.isRequired,
    })
  ).isRequired,
};

InvestigateLayout.propTypes = {
  children: PropTypes.node,
};
InvestigateByTxHashLayout.propTypes = {
  children: PropTypes.node,
};
InvestigateByAddressLayout.propTypes = {
  children: PropTypes.node,
};
DefaultLayout.propTypes = {
  children: PropTypes.node,
};
NonAuthLayout.propTypes = {
  children: PropTypes.node,
};

export default LayoutWrapper;
