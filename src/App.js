// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Registration from './components/Registration';
import DashBoard from './components/DashBoard';
import FeatureComparison from "./components/FeatureComparison";
import PhotoGallery from './components/PhotoGallery'
import BlogViewer from "./components/BlogViewer";
import AboutCA from "./components/AboutCA";
import Message from "./components/Message";
import News from "./components/News";
import SimpleCalendar from "./components/SimpleCalendar";
import AddEventInCalendarForm from "./components/AddEventInCalendarForm";
import Feature from "./components/Feature";
import AddFeatureForm from "./components/AddFeatureForm";
import EventCard from "./components/EventCard";
import EventGrid from "./components/EventGrid";
import ContactPage from "./components/ContactPage";
import Chatbox from "./components/Chatbox";
import PricingPage from "./components/PricingPage";
import FileHandler from "./components/FileHandler";
import AddCategory from "./components/AddCategory";
import AddPhoto from "./components/AddPhoto";

const pageSize = 9;
const apiKey = '90d07a0194994afb81b25f2807eb4937' ;
const App = () => {
return (
    <Router>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path = "/feature-comparison" element={<FeatureComparison/>} />
            <Route path = "/photos" element={<PhotoGallery/>} />
            <Route path = "/blogs-cybersecurity" element={<BlogViewer/>} />
            <Route path = "/about-ca" element={<AboutCA/>} />
            <Route path = "/ed-message" element={<Message />} />
            <Route path = "/calendar" element={<SimpleCalendar />} />
            <Route path = "/add-event-form" element={<AddEventInCalendarForm />} />
            <Route path = "/features" element={<Feature />} />
            <Route path = "/add-feature-form" element={<AddFeatureForm/>}></Route>
            <Route path = "/pricing-list" element={<PricingPage/>}></Route>
            <Route path = "/contact" element={<ContactPage/>}></Route>
            <Route path = "/events" element={<EventGrid/>}></Route>
            <Route path = "/chats" element={<Chatbox/>}></Route>
            <Route path = "/add-category" element={<AddCategory/>}></Route>
            <Route path = "/upload-photo" element={<AddPhoto/>}></Route>
            <Route path = "/file-upload" element={<FileHandler/>}></Route>
            <Route path="/news" element={<News apiKey={apiKey} key="general" country='in' category='general' pageSize={pageSize} />} />
            <Route path="/business" element={<News apiKey={apiKey} key="business" country='in' category='business' pageSize={pageSize} />} />
            <Route path="/entertainment" element={<News apiKey={apiKey} key="entertainment" country='in' category='entertainment' pageSize={pageSize} />} />
            <Route path="/health" element={<News apiKey={apiKey} key="health" country='in' category='health' pageSize={pageSize} />} />
            <Route path="/science" element={<News apiKey={apiKey} key="science" country='in' category='science' pageSize={pageSize} />} />
            <Route path="/sports" element={<News apiKey={apiKey} key="sports" country='in' category='sports' pageSize={pageSize} />} />
            <Route path="/technology" element={<News apiKey={apiKey} key="technology" country='in' category='technology' pageSize={pageSize} />} />
        </Routes>
    </Router>
);
};
export default App;
