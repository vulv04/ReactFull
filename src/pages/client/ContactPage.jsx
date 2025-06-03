import React from "react";

const ContactPage = () => {
  return (
    <section className="container my-5">
      <h1 className="mb-4 text-center">Contact Us</h1>
      <p className="lead text-center mb-5">
        Have a question or need help? Get in touch with us!
      </p>

      <div className="row">
        {/* Thông tin liên hệ */}
        <div className="col-md-5 mb-4">
          <h4>Our Office</h4>
          <p>🏢 Số 4 Tân Mỹ, Mỹ Đình 2, Nam Từ Liêm, Hà Nội Vietnam</p>
          <p>
            📞 Phone: <a href="tel:+84987654321">+84 866501234</a>
          </p>
          <p>
            📧 Email:{" "}
            <a href="mailto:support@yourcompany.com">support@vukibo.com</a>
          </p>
          <p>🕒 Hours: Mon - Fri, 9:00 AM - 6:00 PM</p>

          <h5 className="mt-4">Follow Us</h5>
          <div className="d-flex gap-3">
            <a href="#" target="_blank" rel="noreferrer">
              🌐 Facebook
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              🐦 Twitter
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              📸 Instagram
            </a>
          </div>
        </div>

        {/* Form liên hệ */}
        <div className="col-md-7">
          <h4>Send us a message</h4>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Your Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                placeholder="Họ và tên"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Your Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                required
                placeholder="Email@example.com"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="5"
                required
                placeholder="Your message..."
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary px-4">
              Send
            </button>
          </form>
        </div>
      </div>

      {/* Google Maps */}
      <div className="mt-5">
        <h4 className="mb-3">Find us on the map</h4>
        <div className="ratio ratio-16x9">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.438625938375!2d106.70042487579893!3d10.776374389379732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1fae0c2d4d%3A0xa0f58d71b9a7ec7b!2zQ8O0bmcgdmnDqm4gS2ltIE5naMSp!5e0!3m2!1svi!2s!4v1717425555555"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
