// src/App.js
import React, { Suspense, lazy, memo } from 'react';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import Loader from './components/Loader';
import { useInView } from 'react-intersection-observer';
import './styles/Global.css'; 

// Lazy load components
const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const Contact = lazy(() => import('./components/Contact'));

// Optimized Section Loader with memoization
const SectionLoader = memo(({ component: Component }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} style={{ minHeight: '10vh' }}>
      <Suspense fallback={<Loader />}>
        {inView ? <Component /> : null}
      </Suspense>
    </div>
  );
});

SectionLoader.displayName = 'SectionLoader';

const App = () => {
  return (
    <>
      <Header />
      <SectionLoader component={About} />
      <SectionLoader component={Services} />
      <SectionLoader component={Portfolio} />
      <SectionLoader component={Contact} />
      <ScrollToTop />
    </>
  );
};

export default App;
