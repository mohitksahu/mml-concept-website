import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubjectSelect = (subject) => {
    setFormData(prev => ({
      ...prev,
      subject: subject
    }));
    setIsDropdownOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <>
      {/* Coming Soon Section */}
      <section className="relative py-16" style={{
        backgroundImage: "url('/images/img_image_20.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="flex justify-center">
          <div className="relative w-[637px] h-[69px]">
            <div className="w-[633px] h-[64px] bg-card-hover border border-black/60 rounded-md shadow-[0px_4px_4px_#888888ff]"></div>
            <div className="absolute top-[4px] left-[4px] w-[633px] h-[64px] flex items-center justify-center" style={{
              backgroundImage: "url('/images/img_rectangle_119.svg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
              <h2 className="text-3xl font-k2d font-normal leading-[42px] text-white">
                Coming Soon . . .
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative py-16">
        <div className="max-w-5xl mx-auto px-8">
          {/* Section Title */}
          <div className="text-center mb-16">
            <div className="relative inline-block">
              <div className="w-[554px] h-[76px]" style={{
                backgroundImage: "url('/images/img_image_5.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-5xl font-balsamiq-sans font-normal leading-[58px] text-white">
                  Leave a message
                </h2>
              </div>
            </div>
          </div>

          {/* Form Container */}
          <div className="relative">
            <img
              src="/images/img_image_5.png"
              alt="Form Background"
              className="w-full max-w-[971px] h-[616px] rounded-[25px] object-cover mx-auto"
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full max-w-[853px] px-8 relative" style={{
                backgroundImage: "url('/images/img_61d446190afc4863a3a6e228820af569jpegremovebgpreview_2.png')",
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'local'
              }}>
                {/* Watermark Logo */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                  <img
                    src="/images/img_61d446190afc4863a3a6e228820af569jpegremovebgpreview_2.png"
                    alt="Watermark Logo"
                    className="w-64 h-64 opacity-10 object-contain"
                  />
                </div>
                <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-2xl font-balsamiq-sans font-normal leading-[29px] text-white mb-4">
                        YOUR NAME
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-[333px] h-[64px] bg-accent border border-white rounded-l-[25px] px-4 text-white text-2xl font-balsamiq-sans focus:outline-none focus:ring-2 focus:ring-white"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-2xl font-balsamiq-sans font-normal leading-[29px] text-white mb-4">
                        YOUR EMAIL
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-[333px] h-[64px] bg-accent border border-white rounded-l-[25px] px-4 text-white text-2xl font-balsamiq-sans focus:outline-none focus:ring-2 focus:ring-white"
                        required
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-2xl font-balsamiq-sans font-normal leading-[29px] text-white mb-4">
                      SUBJECT
                    </label>
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="w-[554px] h-[64px] bg-accent border border-white rounded-l-[25px] px-4 text-white text-2xl font-balsamiq-sans text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-white"
                      >
                        <span>{formData.subject || 'Select a Subject *'}</span>
                        <img
                          src="/images/img_polygon_1.svg"
                          alt="Dropdown Arrow"
                          className="w-[30px] h-[28px]"
                        />
                      </button>
                      {isDropdownOpen && (
                        <div className="absolute top-full left-0 w-full bg-accent border border-white rounded-b-[25px] z-10">
                          {['General Inquiry', 'Project Quote', 'Support', 'Partnership'].map((subject) => (
                            <button
                              key={subject}
                              type="button"
                              onClick={() => handleSubjectSelect(subject)}
                              className="w-full px-4 py-3 text-left text-white hover:bg-card transition-colors"
                            >
                              {subject}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-2xl font-balsamiq-sans font-normal leading-[29px] text-white mb-4">
                      YOUR MESSAGE
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Enter your Message *"
                      rows={6}
                      className="w-[887px] h-[197px] bg-accent border border-white rounded-l-[25px] px-4 py-4 text-white text-2xl font-balsamiq-sans resize-none focus:outline-none focus:ring-2 focus:ring-white"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="text-center">
                    <button
                      type="submit"
                      className="w-[388px] h-[76px] bg-accent border border-white rounded-[25px] text-white text-4xl font-quicksand font-normal leading-[45px] hover:bg-card transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                    >
                      SUBMIT
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;