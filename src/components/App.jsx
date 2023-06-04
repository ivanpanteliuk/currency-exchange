import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { lazy, useEffect } from 'react';
import SharedLayout from './SharedLayout';

const Home = lazy(() => import('../pages/Home/Home'));
const Exchange = lazy(() => import('../pages/Exchange/Exchange'));

export function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="exchange" element={<Exchange />} />
      </Route>
      <Route
        path="*"
        element={
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '300px',
            }}
          >
            <p style={{ fontSize: '100px', color: '#fff' }}>Page not found</p>
          </div>
        }
      />
    </Routes>
  );
}
