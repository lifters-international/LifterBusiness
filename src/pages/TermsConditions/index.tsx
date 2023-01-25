import React from 'react';

import { Header, Footer } from "../../components";

import "./index.css";

const TermsConditions: React.FC = () => {
    return (
        <div className="terms-conditions-page">
            <Header />
            <div className="terms-conditions">

                <h1 id="terms-conditions">Terms &amp; Conditions</h1>

                <blockquote>
                    <p>
                        This terms and conditions agreement (“Agreement”) is between you and Lifters International LLC and applies to your use of any mobile application published 
                        by Lifters International LLC (the “App”).
                    </p>
                </blockquote>

                <p>By downloading or using the App, you agree to be bound by the terms and conditions of this Agreement. If you do not agree to the terms and conditions of this Agreement, do not download or use the App.</p>
                
                <ol>
                    <li>
                        <p>
                            License to Use the App. We grant you a limited, non-exclusive, non-transferable, 
                            revocable license to use the App for your personal, non-commercial use. You may not use the App for any other purpose, or in any other manner, 
                            without our prior written permission.
                        </p>
                    </li>

                    <li>
                        <p>
                            Intellectual Property. The App and all content and materials included within it, including, but not limited to, text, graphics, images, software, and 
                            trademarks, are the property of Lifters International LLC or its licensors and are protected by intellectual property laws. You may not use any content 
                            or materials on the App for any commercial purpose without the express written consent of  Lifters International LLC.
                        </p>
                    </li>

                    <li>
                        <p>
                            Third-Party Services. The App may include links to third-party websites or services. We are not responsible for the privacy practices or content of 
                            these third-party websites or services. We encourage you to read the privacy policies of any third-party website or service that you access through the
                            App.
                        </p>
                    </li>

                    <li>
                        <p>
                            Disclaimer of Warranties. THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTY OF ANY KIND. 
                            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, 
                            IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                        </p>
                    </li>

                    <li>
                        <p>
                            Limitation of Liability. IN NO EVENT SHALL  Lifters International LLC BE LIABLE FOR ANY DAMAGES OF ANY KIND, INCLUDING, BUT NOT LIMITED TO, DIRECT, 
                            INDIRECT, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGES, ARISING OUT OF OR IN CONNECTION WITH THE APP OR THE USE OR INABILITY TO USE THE APP, EVEN IF
                            WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                        </p>
                    </li>

                    <li>
                        <p>
                            Indemnification. You agree to indemnify and hold  Lifters International LLC and its affiliates, officers, agents, and employees harmless from any claim 
                            or demand, including reasonable attorneys&#39; fees, made by any third party due to or arising out of your use of the App, your violation of this 
                            Agreement, or your violation of any rights of another.
                        </p>
                    </li>

                    <li>
                        <p>
                            Governing Law. This Agreement shall be governed by and construed in accordance with the laws of the State of United States, without giving effect to any 
                            principles of conflicts of law.
                        </p>
                    </li>

                    <li>
                        <p>
                            Dispute Resolution. Any dispute arising out of or relating to this Agreement shall be resolved through binding arbitration in accordance with the rules 
                            of the American Arbitration Association.
                        </p>
                    </li>

                    <li>
                        <p>
                            Changes to this Agreement. We reserve the right to modify this Agreement at any time. We will post any changes on this page and encourage you to review 
                            the Agreement whenever you access the App. Your continued use of the App after any changes have been made constitutes your acceptance of the revised 
                            Agreement.
                        </p>
                    </li>

                    <li>
                        <p>
                            Entire Agreement. This Agreement constitutes the entire agreement between you and  Lifters International LLC and supersedes all prior or contemporaneous
                        </p>
                    </li>
                </ol>

            </div>

            <Footer />
        </div>
    )
}

export default TermsConditions
