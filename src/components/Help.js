import React from 'react';

function Help() {
  return (
    <div className="page-container">
      <h2>Help & FAQ</h2>
      <div className="faq-section">
        <h3>Frequently Asked Questions</h3>
        <div className="faq-item">
          <h4>How do I start a new chat?</h4>
          <p>Click on the "New Chat" button in the sidebar to start a fresh conversation with FoodAI.</p>
        </div>
        <div className="faq-item">
          <h4>Can I save my favorite recipes?</h4>
          <p>Currently, this feature is not available. We're working on implementing a save function in a future update.</p>
        </div>
        <div className="faq-item">
          <h4>How accurate are the recipes?</h4>
          <p>FoodAI provides recipes based on a vast database of culinary knowledge. However, always use your best judgment and refer to trusted sources for critical cooking information.</p>
        </div>
      </div>
      <div className="contact-section">
        <h3>Need More Help?</h3>
        <p>If you can't find the answer you're looking for, please contact our support team at support@foodai.com</p>
      </div>
    </div>
  );
}

export default Help;
