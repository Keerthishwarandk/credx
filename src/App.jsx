import { useState } from 'react'
import './App.css'



export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.company) newErrors.company = 'Company is required';
    if (!formData.licenseType) newErrors.licenseType = 'Select a license type';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      alert('Form submitted!');
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white text-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Turn Unused Software Licenses Into Cash</h1>
        <p className="text-lg md:text-xl mb-6">SoftSell helps businesses sell surplus software licenses quickly and legally.</p>
        <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-200 transition">Get a Quote</button>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-100 text-center px-4">
        <h2 className="text-3xl font-bold mb-10">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            ['Upload License', '📤'],
            ['Get Valuation', '💰'],
            ['Get Paid', '🏦'],
          ].map(([title, icon], i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow">
              <div className="text-4xl mb-4">{icon}</div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600">{`Step ${i + 1} to turn your license into cash`}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 text-center px-4">
        <h2 className="text-3xl font-bold mb-10">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            ['Fast Payouts', '⚡'],
            ['Secure Transfers', '🔒'],
            ['Fair Market Pricing', '📊'],
            ['Dedicated Support', '🤝'],
          ].map(([title, icon], i) => (
            <div key={i} className="p-6 bg-gray-100 rounded-lg">
              <div className="text-3xl mb-3">{icon}</div>
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-gray-600">We ensure {title.toLowerCase()} for every transaction.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[{
            name: 'Jane Doe', role: 'IT Manager', company: 'TechNova Inc.',
            review: 'SoftSell made it so easy to monetize our unused software assets. Great experience!'
          }, {
            name: 'John Smith', role: 'Procurement Lead', company: 'InnoWare Ltd.',
            review: 'Professional service and quick turnaround. Highly recommend SoftSell.'
          }].map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-700 italic mb-4">"{t.review}"</p>
              <p className="font-semibold">{t.name}</p>
              <p className="text-sm text-gray-500">{t.role}, {t.company}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4 max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Get In Touch</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {['name', 'email', 'company'].map((field) => (
            <div key={field}>
              <input
                type="text"
                name={field}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={formData[field]}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded"
              />
              {errors[field] && <p className="text-red-500 text-sm">{errors[field]}</p>}
            </div>
          ))}

          <div>
            <select
              name="licenseType"
              value={formData.licenseType}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
            >
              <option value="">Select License Type</option>
              <option value="Office365">Office 365</option>
              <option value="Adobe">Adobe Creative Cloud</option>
              <option value="Antivirus">Antivirus</option>
            </select>
            {errors.licenseType && <p className="text-red-500 text-sm">{errors.licenseType}</p>}
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>

          <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">Submit</button>
        </form>
      </section>

      <footer className="bg-blue-600 text-white text-center py-6">
        <p>&copy; 2025 SoftSell. All rights reserved.</p>
      </footer>
    </div>
  );
}



