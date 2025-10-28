import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/layout';
import ChartCalculator from './chartcalculator';
import AstrologyReport from './fullreport';
import SiderealChartPage from './chartreport';
import FAQPage from './faq';
import TeamPage from './teams';
import MemberBioPage from './member';
import LearnChartPage from './learnchart';
import CoursesPage from './course';
import Readings from './readings';
import ContactPage from './contact';
import NewsletterPage from './newsletter';
import JoinNewsletterPage from './joinnewsletter';
import HoroscopePage from './weeklyhoroscope';
import SiderealAstrologyPage from './siderealastrology';
import MediaAppearancesPage from './appearance';
import TrueSkyLanding from './software';
import SiderealSignCalculator from './sideralsigns';
import AdminLayout from './components/adminlayout';
import AdminSettings from './adminsettings';
import AdminChat from './adminchat';
import AdminDocs from './admindocs';
import AdminProfilePage from './adminaccount';
import AdminChart from './adminmainchart';
import AdminMain from './adminmain';
import TransitPage from './transitpage';
import SynastryPage from './synastrypage';
import CompositePage from './composite';
import TransitGraphPage from "./transitgraphpage"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <App /> },
      { path: '/about', element: <App /> },
      { path: '/charts', element: <App /> },
      { path: '/learn', element: <App /> },
      {path:'/readings',element:<Readings/>},
      { path: '/software', element: <TrueSkyLanding /> },
      { path: '/more', element: <App /> },
      { path: '/contact', element: <ContactPage /> },
      { path: '/true-signs', element: <App /> },
      { path: '/sidereal-astrology', element: <App /> },
      { path: '/faq', element: <FAQPage /> },
      { path: '/team', element: <TeamPage /> },
      { path: '/team/:name', element: <MemberBioPage /> },
      { path: '/terms', element: <App /> },
      { path: '/free-report', element: <App /> },
      { path: '/newsletter', element: <NewsletterPage /> },
      { path: '/partner', element: <App /> },
      { path: '/chart-calculator', element: <ChartCalculator /> },
      { path: '/chart-report', element: <SiderealChartPage /> },
      { path: '/full-report', element: <AstrologyReport /> },
      { path: '/chart-dictionary', element: <LearnChartPage /> },
      { path:'/chart-course', element: <CoursesPage />},
      { path:'/horoscope', element: <HoroscopePage />},
      { path:'/joinnewsletter', element: <JoinNewsletterPage />},
      { path:'/appearance', element: <MediaAppearancesPage />},
      { path:'/siderealastrology', element: <SiderealAstrologyPage />},
      {path:'/sidereal-signs',element:<SiderealSignCalculator/>}
    ],
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      { path: '/admin/main', element: <AdminMain /> },
      { path: '/admin/transit', element: <TransitPage /> },
      { path: '/admin/graph', element: <TransitGraphPage /> },
      { path: '/admin/return', element: <AdminMain /> },
      { path: '/admin/settings', element: <AdminSettings /> },
      { path: '/admin/synastry', element: <SynastryPage /> },
      { path: '/admin/composite', element: <CompositePage /> },
      { path: '/admin/chat', element: <AdminChat /> },
      { path: '/admin/docs', element: <AdminDocs /> },
      { path: '/admin/account', element: <AdminProfilePage /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();