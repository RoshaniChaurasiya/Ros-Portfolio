// src/App.js
import React, { Suspense, lazy } from 'react';
import Header from './components/Header';
import { useInView } from 'react-intersection-observer';
import './App.css'; 

// Lazy load components
const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const Contact = lazy(() => import('./components/Contact'));

const SectionLoader = ({ component: Component }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.30, // Load the component when 25% is in view
  });

  return (
    <div ref={ref} style={{ minHeight: '10vh' }}>
      {inView ? <Component /> : null}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<div></div>}>
        <SectionLoader component={About} />
      </Suspense>
      <Suspense fallback={<div></div>}>
        <SectionLoader component={Services} />
      </Suspense>
      <Suspense fallback={<div></div>}>
        <SectionLoader component={Portfolio} />
      </Suspense>
      <Suspense fallback={<div></div>}>
        <SectionLoader component={Contact} />
      </Suspense>
    </div>
  );
};

export default App;
