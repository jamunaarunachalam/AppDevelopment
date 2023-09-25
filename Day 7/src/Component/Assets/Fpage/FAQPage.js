import React from 'react';
import './FAQPage.css'
function FAQPage() {
  // Define an array of FAQ items with questions and answers
  const faqItems = [
    {
      question: '1. How much water should I drink each day?',
      answer:
        'The recommended daily water intake varies based on factors like age, weight, activity level, and climate. Our app calculates a personalized daily goal for you to ensure you meet your hydration needs.',
    },
    {
      question: '2. Why should I track my water consumption?',
      answer:
        'Tracking your water intake helps you stay hydrated, which is essential for overall health. It can also help you reach your hydration goals and maintain proper bodily functions.',
    },
    {
      question: '3. Can I adjust my daily water intake goal?',
      answer:
        'Yes, you can customize your daily goal in the app settings. However, it is essential to set a goal that aligns with your individual needs and lifestyle.',
    },
    {
        question: '3. Is it possible to drink too much water?',
        answer:
          'Yes, excessive water consumption can lead to a condition called hyponatremia, where the body electrolyte balance is disrupted. It is essential to maintain a balance and not overhydrate.',
      },{
        question: '3. What are the signs of dehydration, and how can I prevent it?',
        answer:
          'Signs of dehydration include dark urine, dry mouth, fatigue, and dizziness. Prevent dehydration by drinking water regularly throughout the day, especially during physical activity or in hot weather.',
      },
    
  ];

  return (
    <div className="faq-page">
      <h2>Frequently Asked Questions</h2>
      <ul className="faq-list">
        {faqItems.map((item, index) => (
          <li key={index} className="faq-item">
            <div className="faq-question">{item.question}</div>
            <div className="faq-answer">{item.answer}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FAQPage;
