import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import { Mail, Phone, MapPin, MessageSquare, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };
  
  return (
    <Layout>
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have questions about our Chhath Puja offerings or need to place a bulk order? 
              We're here to help you with all your festival preparation needs.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Contact Info */}
              <div className="lg:w-1/3 bg-amber-600 text-white p-8">
                <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p>+91 98765 43210</p>
                      <p className="text-amber-100 text-sm mt-1">Mon-Sat 9am-6pm</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p>info@chhathdelights.com</p>
                      <p className="text-amber-100 text-sm mt-1">We reply within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Location</h3>
                      <p>123 Festive Street, Patna</p>
                      <p>Bihar, India - 800001</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MessageSquare className="h-6 w-6 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">WhatsApp</h3>
                      <p>+91 98765 43210</p>
                      <p className="text-amber-100 text-sm mt-1">For quick inquiries</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h3 className="font-semibold mb-3">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5L14.17.5C10.4.5,9.25,3.06,9.25,5.33v2.12H7v4h2.25V22h5.25V11.46h3.46Z" />
                      </svg>
                    </a>
                    <a href="#" className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.46,6C21.69,6.35,20.86,6.58,20,6.69c0.83-0.5,1.48-1.29,1.78-2.24c-0.79,0.47-1.66,0.81-2.6,1c-0.75-0.79-1.82-1.29-3-1.29 c-2.27,0-4.1,1.84-4.1,4.11c0,0.32,0.04,0.64,0.11,0.94c-3.41-0.17-6.43-1.8-8.46-4.29C3.37,5.59,3.21,6.33,3.21,7.11 c0,1.43,0.73,2.68,1.84,3.42C4.37,10.5,3.74,10.3,3.2,10c0,0.02,0,0.03,0,0.05c0,1.99,1.41,3.65,3.29,4.03 c-0.34,0.09-0.71,0.14-1.08,0.14c-0.26,0-0.52-0.03-0.77-0.07c0.52,1.63,2.04,2.82,3.83,2.85c-1.4,1.1-3.17,1.76-5.1,1.76 c-0.33,0-0.66-0.02-0.98-0.06C1.8,20.49,3.97,21.27,6.28,21.27c7.53,0,11.64-6.24,11.64-11.66c0-0.18,0-0.35-0.01-0.53 C18.7,7.5,19.64,6.81,20.44,6" />
                      </svg>
                    </a>
                    <a href="#" className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12,2.16c3.2,0,3.58,0.01,4.85,0.07c1.17,0.05,1.8,0.25,2.23,0.41c0.56,0.22,0.96,0.48,1.38,0.9 c0.42,0.42,0.68,0.82,0.9,1.38c0.16,0.42,0.36,1.05,0.41,2.23c0.06,1.27,0.07,1.65,0.07,4.85s-0.01,3.58-0.07,4.85 c-0.05,1.17-0.25,1.8-0.41,2.23c-0.22,0.56-0.48,0.96-0.9,1.38c-0.42,0.42-0.82,0.68-1.38,0.9c-0.42,0.16-1.05,0.36-2.23,0.41 c-1.27,0.06-1.65,0.07-4.85,0.07s-3.58-0.01-4.85-0.07c-1.17-0.05-1.8-0.25-2.23-0.41c-0.56-0.22-0.96-0.48-1.38-0.9 c-0.42-0.42-0.68-0.82-0.9-1.38c-0.16-0.42-0.36-1.05-0.41-2.23c-0.06-1.27-0.07-1.65-0.07-4.85s0.01-3.58,0.07-4.85 c0.05-1.17,0.25-1.8,0.41-2.23c0.22-0.56,0.48-0.96,0.9-1.38c0.42-0.42,0.82-0.68,1.38-0.9c0.42-0.16,1.05-0.36,2.23-0.41 C8.42,2.17,8.8,2.16,12,2.16 M12,0C8.74,0,8.33,0.01,7.05,0.07C5.78,0.13,4.9,0.33,4.14,0.63C3.35,0.93,2.68,1.34,2.01,2.01 C1.34,2.68,0.93,3.35,0.63,4.14C0.33,4.9,0.13,5.78,0.07,7.05C0.01,8.33,0,8.74,0,12s0.01,3.67,0.07,4.95 c0.06,1.27,0.26,2.15,0.56,2.91c0.3,0.79,0.71,1.46,1.38,2.13c0.67,0.67,1.34,1.08,2.13,1.38c0.76,0.3,1.64,0.5,2.91,0.56 C8.33,23.99,8.74,24,12,24s3.67-0.01,4.95-0.07c1.27-0.06,2.15-0.26,2.91-0.56c0.79-0.3,1.46-0.71,2.13-1.38 c0.67-0.67,1.08-1.34,1.38-2.13c0.3-0.76,0.5-1.64,0.56-2.91C23.99,15.67,24,15.26,24,12s-0.01-3.67-0.07-4.95 c-0.06-1.27-0.26-2.15-0.56-2.91c-0.3-0.79-0.71-1.46-1.38-2.13c-0.67-0.67-1.34-1.08-2.13-1.38c-0.76-0.3-1.64-0.5-2.91-0.56 C15.67,0.01,15.26,0,12,0" />
                        <path d="M12,5.84c-3.4,0-6.16,2.76-6.16,6.16s2.76,6.16,6.16,6.16s6.16-2.76,6.16-6.16S15.4,5.84,12,5.84 M12,16 c-2.21,0-4-1.79-4-4s1.79-4,4-4s4,1.79,4,4S14.21,16,12,16" />
                        <circle cx="18.41" cy="5.59" r="1.44" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="lg:w-2/3 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="order">Order Information</option>
                        <option value="bulk">Bulk Order</option>
                        <option value="feedback">Feedback</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                      required
                    ></textarea>
                  </div>
                  
                  <Button 
                    type="submit"
                    className="flex items-center justify-center"
                    size="lg"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
          
          {/* Map */}
          <div className="mt-12 rounded-lg overflow-hidden shadow-md">
            <div className="bg-amber-100 p-4 text-center">
              <h3 className="font-semibold text-amber-800">Our Location</h3>
              <p className="text-amber-700">Visit our store for special festival discounts!</p>
            </div>
            <div className="h-96 bg-gray-200 w-full">
              {/* In a real application, you would embed a Google Maps iframe here */}
              <div className="w-full h-full flex items-center justify-center bg-gray-200">
                <MapPin className="h-12 w-12 text-gray-400" />
                <span className="ml-2 text-gray-600">Map would be displayed here</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;