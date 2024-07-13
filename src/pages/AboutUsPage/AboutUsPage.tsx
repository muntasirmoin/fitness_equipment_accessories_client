import React from "react";
import { Helmet } from "react-helmet-async";

const AboutUsPage = () => {
  return (
    <div className="mt-15 mb-5">
      <Helmet>
        <title>About | FitZone</title>
      </Helmet>
      <div className="pt-12">
        <br />
      </div>
      <div
        className="p-4"
        style={{
          border: "1px solid black",
          backgroundColor: "white",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        }}
      >
        <h2 className="font-bold text-4xl mb-2 text-center text-green-500">
          About Us
        </h2>
        {/* vision,mission */}
        <div>
          <div className="chat chat-start">
            <div className="chat-bubble chat-bubble-primary">History</div>
          </div>
          <div className="chat chat-start">
            <div className="chat-bubble chat-bubble-success">
              <p>
                Gym Fitness Equipment and Accessories was founded in 2023 with
                the goal of providing high-quality fitness equipment and
                accessories to enthusiasts and professionals alike. Starting as
                a small local store, the company has grown into a renowned brand
                recognized for its commitment to innovation, quality, and
                customer satisfaction. Over the years, it has expanded its
                product line to include a wide range of fitness solutions, from
                basic gym accessories to advanced exercise machines, catering to
                diverse fitness needs and preferences.
              </p>
            </div>
          </div>

          <div className="chat chat-end">
            <div className="chat-bubble chat-bubble-primary">Vision</div>
          </div>
          <div className="chat chat-end">
            <div className="chat-bubble chat-bubble-success">
              <p>
                Our vision is to become a global leader in the fitness equipment
                industry, recognized for our innovative products, exceptional
                customer service, and commitment to improving the health and
                well-being of our customers. We aim to inspire a fitness
                revolution, where our equipment and accessories play a pivotal
                role in helping people lead healthier, happier, and more active
                lives. We envision a future where everyone has access to the
                best fitness solutions, enabling them to achieve their fitness
                goals and transform their lives.
              </p>
            </div>
          </div>

          <div className="chat chat-start">
            <div className="chat-bubble chat-bubble-primary">Mission</div>
          </div>
          <div className="chat chat-start">
            <div className="chat-bubble chat-bubble-success">
              <p>
                Our mission is to empower individuals to achieve their fitness
                goals by providing top-notch equipment and accessories. We are
                dedicated to enhancing the fitness journey of our customers by
                offering reliable, durable, and affordable products that promote
                a healthy and active lifestyle. We strive to be a trusted
                partner in our customers' fitness endeavors, ensuring that they
                have access to the best tools to reach their full potential.
              </p>
            </div>
          </div>
        </div>
        {/*  */}
        <div>
          <br />
          <hr
            style={{
              border: "none",
              height: "2px",
              backgroundImage: "linear-gradient(to right, #FFD700, #FF8C00)", // Replace colors with your gradient
              margin: "20px 0", // Adjust margin as needed
            }}
          />
          <h2 className="font-bold text-4xl mb-2 text-center text-green-500">
            Our Team
          </h2>

          <div className="flex flex-col my-5">
            <div className="flex flex-wrap justify-between gap-4 my-5">
              {/* Card 1 */}
              <div className="card glass w-80">
                <figure>
                  <img
                    src="https://i.ibb.co/VBrBYyB/logan-weaver-lgnwvr-MXnk-Wolg3-Ug-unsplash.jpg"
                    alt="car!"
                    style={{ width: 350, height: 300 }}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title"> Founder & CEO</h2>
                  <h2>
                    Visionary behind Gym Fitness Equipment and Accessories. With
                    a background in sports science and business management and
                    established a strong market presence
                  </h2>

                  <div className="card-actions justify-end"></div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="card glass w-80">
                <figure>
                  <img
                    src="https://i.ibb.co/f0F8n3h/f1.jpg"
                    alt="car!"
                    style={{ width: 350, height: 300 }}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Chief Operating Officer</h2>
                  <h2>
                    The daily operations at Gym Fitness Equipment and
                    Accessories, ensuring efficiency and excellence in every
                    aspect of the business. With over 15 years of experience in
                    operations management.
                  </h2>

                  <div className="card-actions justify-end"></div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="card glass w-80">
                <figure>
                  <img
                    src="https://i.ibb.co/0Jb3JfQ/g1.jpg"
                    alt="car!"
                    style={{ width: 350, height: 300 }}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Head of Product Development</h2>
                  <h2>
                    The product development team, focusing on innovation and
                    quality. With a degree in mechanical engineering and over a
                    decade of experience.
                  </h2>

                  <div className="card-actions justify-end"></div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <hr
            style={{
              border: "none",
              height: "2px",
              backgroundImage: "linear-gradient(to left, #FFD700, #FF8C00)", // Replace colors with your gradient
              margin: "20px 0", // Adjust margin as needed
            }}
          />
        </div>
        {/*  */}

        <div>
          <h2 className="font-bold mt-2 text-4xl mb-2 text-center text-green-500">
            Customer feedback
          </h2>
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="https://i.ibb.co/QmCMKjx/download-3.jpg"
                />
              </div>
            </div>
            <div className="chat-header">
              Arif
              <time className="text-xs opacity-50">12:45</time>
            </div>
            <div className="chat-bubble">
              "I've been using Gym Fitness Equipment and Accessories for over
              years, and their products have never disappointed me!
            </div>
          </div>
          <div className="chat chat-end">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="https://i.ibb.co/R781bkw/download-2.jpg"
                />
              </div>
            </div>
            <div className="chat-header">
              Rahim
              <time className="text-xs opacity-50">1:45</time>
            </div>
            <div className="chat-bubble">
              "As a personal trainer, I need reliable and efficient equipment
              for my clients. Gym Fitness Equipment
            </div>
          </div>
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="https://i.ibb.co/PQ3PpFk/download-1.jpg"
                />
              </div>
            </div>
            <div className="chat-header">
              Karim
              <time className="text-xs opacity-50">14:05</time>
            </div>
            <div className="chat-bubble">
              I recently purchased a home gym setup from Gym Fitness Equipment
              and Accessories, and it has completely transformed my workout
              routine.
            </div>
          </div>
        </div>
        {/*  */}

        <div className="mt-5">
          <br />
          <hr
            style={{
              border: "none",
              height: "2px",
              backgroundImage: "linear-gradient(to right, #FFD700, #FF8C00)", // Replace colors with your gradient
              margin: "20px 0", // Adjust margin as needed
            }}
          />
          <h2 className="font-bold text-4xl mb-2 text-center text-green-500">
            Contact With Us
          </h2>
          <div className="min-h-screen bg-base-200 flex items-center justify-center">
            <div className="card w-full max-w-lg shadow-2xl bg-base-100">
              <div className="card-body">
                <p className="text-center mb-4">
                  We would love to hear from you! Whether you have questions,
                  feedback, or need assistance with our products, feel free to
                  reach out to us. Here’s how you can get in touch
                </p>
                <form>
                  <div className="form-control mb-4">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control mb-4">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control mb-4">
                    <label className="label">
                      <span className="label-text">Phone Number</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="Your Phone Number"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control mb-4">
                    <label className="label">
                      <span className="label-text">Message</span>
                    </label>
                    <textarea
                      placeholder="Your Message"
                      className="textarea textarea-bordered"
                    ></textarea>
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-success btn-outline">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
