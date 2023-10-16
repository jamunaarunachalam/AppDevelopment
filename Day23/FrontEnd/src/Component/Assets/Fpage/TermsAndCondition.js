import React from 'react'
import './TermsAndCondition.css';
import Nave from './Nave';

export default function TermsAndCondition() {
  return (
    
    <div className="terms-and-conditions">
    <h1>Terms and Conditions for Water Consumption Tracker</h1>
    <p>
      By using the Water Consumption Tracker (the "Service"), you agree to
      comply with and be bound by the following terms and conditions of use.
      If you do not agree to these terms, please do not use the Service.
    </p>

    <h2>1. Use of the Service</h2>
    <p>
      You must be at least 18 years old to use this Service. By using the
      Service, you represent and warrant that you are at least 18 years old.
    </p>

    <h2>2. Privacy Policy</h2>
    <p>
      Your use of the Service is also governed by our{" "}
      <a href="/privacy">Privacy Policy</a>, which can be found at the
      designated link.
    </p>

    <h2>3. User Accounts</h2>
    <p>
      To use certain features of the Service, you may be required to create a
      user account. You are responsible for maintaining the confidentiality of
      your account information, including your username and password.
    </p>

    <h2>4. Prohibited Activities</h2>
    <p>
      You agree not to engage in any of the following prohibited activities:
      <ul>
        <li>Use the Service for any unlawful purpose or in any way that may violate any applicable laws.</li>
        <li>Attempt to gain unauthorized access to the Service or its related systems or networks.</li>
        <li>Engage in any conduct that restricts or inhibits any other user from using the Service.</li>
        <li>Introduce any malicious software or harmful code into the Service's platform.</li>
      </ul>
    </p>

    <h2>5. Termination</h2>
    <p>
      We reserve the right to terminate or suspend your access to the Service
      at our sole discretion, without notice, for any conduct that we believe
      violates these Terms and Conditions or is harmful to other users of the
      Service or third parties, or for any other reason.
    </p>

    <h2>6. Changes to Terms and Conditions</h2>
    <p>
      We reserve the right to modify these terms and conditions at any time.
      You are responsible for reviewing these terms periodically for changes.
      Your continued use of the Service after changes are made constitutes
      acceptance of the updated terms.
    </p>

    <h2>7. Contact Information</h2>
    <p>
      If you have any questions or concerns regarding these terms and
      conditions, please contact us at example@example.com.
    </p>
    <Nave/>
  </div>
 
   
  )
}
