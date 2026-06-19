// src/App.js
import React, { Suspense, lazy, memo } from 'react';
import Header from './components/header/Header.js';
import ScrollToTop from './components/scroller/Scroller.js';
import Loader from './components/loader/Loader.js';
import { useInView } from 'react-intersection-observer';
import './styles/Global.css'; 

// Lazy load components
const About = lazy(() => import('./components/about/About.js'));
const Services = lazy(() => import('./components/services/Services.js'));
const Portfolio = lazy(() => import('./components/portfolio/Portfolio.js'));
const Contact = lazy(() => import('./components/contact/Contact.js'));

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
