import React from 'react';
import LayoutWrap from '../components/LayoutWrap';
import { Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const ChatLayout = ({ children }) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};

const NonAuthLayout = ({ children }) => {
  return (
    <>
      <div>
        {children}
      </div>
    </>
  );
};

const AuthLayout = ({ children }) => {
  return (
    <>
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
            return (
              <>
                {
                  <Route
                    key={index}
                    path={route.path}
                    element={
                      <>
                        {route.routeId === 3 ? (
                          <AuthLayout>{route.element}</AuthLayout>
                        ) : route.routeId === 2 ? (
                          <ChatLayout>{route.element}</ChatLayout>
                        ) : route.routeId === 1 ? (
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

AuthLayout.propTypes = {
  children: PropTypes.node,
};
ChatLayout.propTypes = {
  children: PropTypes.node,
};
NonAuthLayout.propTypes = {
  children: PropTypes.node,
};

export default LayoutWrapper;
