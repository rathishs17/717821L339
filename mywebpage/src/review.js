import React, { useState } from 'react';

function FAQ() {
  const [faqs, setFaqs] = useState([
    {
      question: 'What is Lorem Ipsum?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      isOpen: false,
    },
    {
      question: 'Why do we use it?',
      answer: 'It is a long established fact that a reader will be distracted by the readable content...',
      isOpen: false,
    },
    {
      question: 'Where does it come from?',
      answer: 'Contrary to popular belief, Lorem Ipsum is not simply random text...',
      isOpen: false,
    },
    {
      question: 'Where can I get some?',
      answer: 'There are many variations of passages of Lorem Ipsum available...',
      isOpen: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setFaqs((prevFaqs) => {
      const newFaqs = [...prevFaqs];
      newFaqs[index].isOpen = !newFaqs[index].isOpen;
      return newFaqs;
    });
  };

  return (
    <div style={{ textAlign: 'left', marginLeft: '30px', fontSize: '16px' }}>
      {faqs.map((faq, index) => (
        <div key={index} style={{ marginBottom: '15px', display: 'block' }}>
          <div
            style={{ cursor: 'pointer', fontWeight: 'bold' }}
            onClick={() => toggleFAQ(index)}
          >
            <div style={{ borderBottom: '1px solid #ccc', paddingBottom: '5px' }}>{faq.question}</div>
            {faq.isOpen ? '' : ''}
          </div>
          {faq.isOpen && (
            <>
              <p>{faq.answer}</p>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default FAQ;
