import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import '../styles/Contact.css'

const initialForm = { name: '', email: '', phone: '', service: '', message: '' }

const EMAILJS_SERVICE_ID = 'service_f5wotxm'
const EMAILJS_TEMPLATE_ID = 'template_wx8534r'
const EMAILJS_PUBLIC_KEY = '18J1NvYBGYLPZurpG'
const WHATSAPP_NUMBER = '919500034743'

const Contact = () => {
  const [form, setForm] = useState(initialForm)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [errors, setErrors] = useState({})
  const ref = useScrollAnimation()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const validate = () => {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'Please fill in your name'
    if (!form.email.trim()) newErrors.email = 'Please fill in your email'
    if (!form.phone.trim()) newErrors.phone = 'Please fill in your phone number'
    if (!form.service) newErrors.service = 'Please select a service'
    if (!form.message.trim()) newErrors.message = 'Please fill in your message'
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setLoading(true)

    // Send email via EmailJS
    emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        from_email: form.email,
        phone: form.phone,
        service: form.service || 'Not specified',
        message: form.message,
        to_email: 'pixhood26@gmail.com',
      },
      EMAILJS_PUBLIC_KEY
    ).then(() => {
      // Open WhatsApp with pre-filled message
      const whatsappText = encodeURIComponent(
        `New Enquiry from Pixhood Website:\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service || 'Not specified'}\nMessage: ${form.message}`
      )
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappText}`, '_blank')

      setLoading(false)
      setSuccess(true)
      setForm(initialForm)
      setErrors({})
      setTimeout(() => setSuccess(false), 5000)
    }).catch(() => {
      setLoading(false)
      setErrors({ submit: 'Failed to send message. Please try again or contact us directly.' })
    })
  }

  return (
    <section className="contact" id="contact" ref={ref}>
      <div className="container">
        <div className="section-header aos-elem">
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title">Contact Us</h2>
          <div className="title-underline"></div>
        </div>
        <div className="contact-wrapper">
          <div className="contact-info aos-elem">
            <h3>Let's Create Together</h3>
            <p>Ready to tell your story? Reach out and let's discuss how we can bring your vision to life.</p>
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon"><i className="fas fa-phone"></i></div>
                <div>
                  <h4>Phone / WhatsApp</h4>
                  <a href="tel:+919500034743">+91 95000 34743</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><i className="fas fa-envelope"></i></div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:pixhood26@gmail.com">pixhood26@gmail.com</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><i className="fas fa-map-marker-alt"></i></div>
                <div>
                  <h4>Location</h4>
                  <p>Chennai, Tamil Nadu, India</p>
                </div>
              </div>
            </div>
            <div className="social-links">
              {[
                { icon: 'fa-instagram', label: 'Instagram' },
                { icon: 'fa-facebook-f', label: 'Facebook' },
                { icon: 'fa-youtube', label: 'YouTube' },
                { icon: 'fa-linkedin-in', label: 'LinkedIn' },
              ].map(({ icon, label }) => (
                <a href="#" className="social-link" aria-label={label} key={label}>
                  <i className={`fab ${icon}`}></i>
                </a>
              ))}
            </div>
            <a href="https://wa.me/919500034743" className="whatsapp-btn" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i> Chat on WhatsApp
            </a>
          </div>
          <div className="contact-form-wrapper aos-elem">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <input type="text" name="name" placeholder=" " value={form.name} onChange={handleChange} required />
                  <label>Your Name</label>
                  {errors.name && <span className="field-error">{errors.name}</span>}
                </div>
                <div className="form-group">
                  <input type="email" name="email" placeholder=" " value={form.email} onChange={handleChange} required />
                  <label>Your Email</label>
                  {errors.email && <span className="field-error">{errors.email}</span>}
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <input type="tel" name="phone" placeholder=" " value={form.phone} onChange={handleChange} required />
                  <label>Phone Number</label>
                  {errors.phone && <span className="field-error">{errors.phone}</span>}
                </div>
                <div className="form-group">
                  <select name="service" value={form.service} onChange={handleChange}>
                    <option value="" disabled>Select Service</option>
                    {['Wedding','Family Functions','Corporate Events','Product Shoots','Promotional Shoots','Model Shoots','Social Media Content','Digital Marketing'].map(s => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                  <label>Service Required</label>
                  {errors.service && <span className="field-error">{errors.service}</span>}
                </div>
              </div>
              <div className="form-group full-width">
                <textarea name="message" rows="5" placeholder=" " value={form.message} onChange={handleChange} required></textarea>
                <label>Requirements</label>
                {errors.message && <span className="field-error">{errors.message}</span>}
              </div>
              {errors.submit && (
                <div className="form-submit-error">
                  <i className="fas fa-exclamation-circle"></i> {errors.submit}
                </div>
              )}
              <button type="submit" className="btn btn-primary btn-full" disabled={loading}>
                {loading ? <><i className="fas fa-spinner fa-spin"></i> Sending...</> : <>Send Message <i className="fas fa-paper-plane"></i></>}
              </button>
              {success && (
                <div className="form-success">
                  <i className="fas fa-check-circle"></i> Thank you! We'll be in touch shortly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
