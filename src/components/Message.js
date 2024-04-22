import React from 'react';
import '../css/Message.css';
import NavBar from "./Navbar";
import BlackFooter from "./BlackFooter";
import {GiFoodTruck} from "react-icons/gi";
import Footer from "./Footer";
import image1 from "./ed_bcc.jpg"
import backgroundImage from "./album/event_background.jpeg";

const Message = () => {
    return (
        <div>
            <div className="navbar-fixed"> <NavBar />
            </div>
            <div>
                <br/>
                <br/>
            </div>
            <div style={{ backgroundImage: `url(${backgroundImage})`, height: '100px',display: 'flex',
                justifyContent: 'center',
                alignItems: 'center' }}>
                <h2>ED's Message</h2>
            </div>
            <div className="message-container">
                <div className="message-content">
                    <div className="message-image">
                        <img src={image1} alt="Chairman" />
                    </div>
                    <div className="message-text">
                        <h1 className="message-title">ED's Message</h1>
                            <p className="message-body">
                                জনাব রণজিৎ কুমার (৫৯৪৩) বিসিএস প্রশাসন ক্যাডারের ১৩তম ব্যাচের একজন সদস্য। প্রশাসন ক্যাডারে সহকারি কমিশনার হিসেবে ১৯৯৪ খ্রিস্টাব্দের ২৫ এপ্রিল  যোগদান করেন। বর্তমানে তিনি বাংলাদেশ কম্পিউটার কাউন্সিলে নির্বাহী পরিচালক (গ্রেড-১) হিসেবে কর্মরত আছেন। নিজ জেলা-বরিশাল
                            </p>
                            <p className="message-body">
                                তিনি মাঠ পর্যায়ে ১ম শ্রেণীর ম্যাজিস্ট্রেট, সহকারি কমিশনার (ভূমি), উপজেলা নির্বাহী অফিসার, অতিরিক্ত জেলা প্রশাসক হিসেবে দায়িত্ব পালন করেন। এছাড়াও তিনি শিক্ষা মন্ত্রণালয়ে এনটিআরসিএ’র সচিব, সিটি কর্পোরেশনের প্রধান নির্বাহী কর্মকর্তা, জাতীয় রাজস্ব বোর্ডের ১ম সচিব, নৌপরিবহন মন্ত্রণালয়, মৎস ও প্রাণী সম্পদ মন্ত্রণালয়, ধর্ম বিষয়ক মন্ত্রণালয় এবং তথ্য ও যোগাযোগ প্রযুক্তি বিভাগসমূহে নিষ্ঠার সাথে দায়িত্ব পালন করেছেন।
                            </p>
                            <p>
                                তার দীর্ঘ কর্মজীবনে জনাব কুমার সক্রিয়ভাবে বিভিন্ন সভা,সেমিনার, আঞ্চলিক,দ্বি-পাক্ষিক,বহুপাক্ষিক এবং বিভিন্ন আর্ন্তজাতিক প্রোগ্রামে সক্রিয়ভাবে অংশগ্রহণ করেন। তিনি বৃহত্তর আর্ন্তজাতিক অনুষ্ঠান ICPC World Finals Dhaka 2022-এর ৪৫তম বিশ্ব আসর আয়োজনের প্রধান পৃষ্ঠপোষকের দায়িত্ব পালন করেন।
                            </p>
                            <p>
                                ব্যক্তিগত জীবনে তিনি বিবাহিত এবং এক পুত্র ও এক কন্যার জনক। তার প্রধান লক্ষ্য বাংলাদেশের সেবা করা।
                            </p>
                    </div>
                </div>
                <div className="message-divider"></div>
            </div>
            <BlackFooter />
            <Footer/>
        </div>

    );
};

export default Message;