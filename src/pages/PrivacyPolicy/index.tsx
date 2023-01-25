import React from 'react';

import { Header, Footer } from "../../components";

import "./index.css";

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="privacy-policy-page">
            <Header />

            <div className="privacy-policy">
                <h1 id="privacy-policy">Privacy Policy</h1>

                <blockquote>
                    <p>
                        Thank you for using our mobile apps. This privacy policy (“Policy”) explains how Lifters International and its affiliates (“we”, “us”, or “our”) 
                        collect, use, and share information about you when you use the App.
                    </p>
                </blockquote>

                <p>
                    By using the App, you agree to the collection, use, and sharing of your information as described in this Policy. 
                    If you do not agree with our policies and practices, do not download or use the App.
                </p>
                
                <h2 id="information-we-collect">Information We Collect</h2>

                <blockquote>
                    <p>
                        We may collect information about you when you use the App. This information may include your name, email address, location data, and 
                        other personal information.
                    </p>
                </blockquote>

                <h2 id="purpose-of-collection">Purpose of Collection</h2>

                <blockquote>
                    <p>We collect this information for the purpose of providing and improving the App, as well as for analytical and research purposes.</p>
                </blockquote>

                <h2 id="sharing-of-information">Sharing of Information</h2>

                <blockquote>
                    <p>
                        We may share your personal information with third parties in order to provide and improve the App, as well as for analytical and research purposes. 
                        We will only share your information with third parties who have a legitimate need for it and will protect your information in accordance with this Policy.
                    </p>
                </blockquote>

                <h2 id="data-protection">Data Protection</h2>

                <blockquote>
                    <p>We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. This may include using encryption or secure servers to store your information.</p>
                </blockquote>

                <h2 id="user-control">User Control</h2>

                <blockquote>
                    <p>You have the right to access and control your personal information. You can update or delete your account at any time by accessing the appropriate settings within the App.</p>
                </blockquote>

                <h2 id="changes-to-this-policy">Changes to This Policy</h2>

                <blockquote>
                    <p>We may update this Policy from time to time. We will notify you of any changes by posting the new Policy on this page. We encourage you to review the Policy whenever you access the App to stay informed about our information practices and your choices.</p>
                </blockquote>

                <h2 id="contact-us">Contact Us</h2>

                <blockquote>
                    <p>If you have any questions about this Policy or our information practices, please contact us at <a href="mailto:admins@lifters.app">admins@lifters.app</a>.</p>
                </blockquote>
            </div>

            <Footer />
        </div>
    )
}

export default PrivacyPolicy;
