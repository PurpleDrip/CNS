import TitleBar from "./TitleBar";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Facts from "./Facts";
import SectionWithImage from "./SectionWithImage";

const UserHome = () => {
  const DEMO_LIST = [
    {
      id: 1,
      name: "John Doe",
      review: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores officia excepturi laudantium nobis illum ipsum ad ullam impedit iste, vitae dolor pariatur aliquam, tempore voluptas sint fugit soluta maxime inventore!
                Fugiat officia, molestias quo, est placeat debitis perferendis ipsam tempora excepturi tenetur explicabo omnis quae reprehenderit ad eum necessitatibus incidunt illo vitae nesciunt recusandae? Soluta iste ratione optio repellat nam?
                Consectetur nostrum dignissimos eaque officia. Laudantium aut in vel! Magnam perferendis deserunt, sunt aut quibusdam, accusantium culpa ea magni ducimus tempora harum molestias quisquam, saepe mollitia nobis odit fuga sint.
                Excepturi optio omnis tempore cum cupiditate at aspernatur delectus deserunt vitae unde eos ipsum, quam tenetur quis voluptates magnam error cumque autem labore dignissimos nam magni velit. Facilis, id temporibus!
                Iure, neque! Sequi ab repellat minus itaque delectus vitae et non nesciunt! Nisi quam ducimus eum temporibus expedita. Similique aliquam accusamus mollitia necessitatibus modi a nostrum nobis. Quisquam, vero minus.`,
      image:
        "https://www.google.com/imgres?q=image&imgurl=https%3A%2F%2Fgratisography.com%2Fwp-content%2Fuploads%2F2024%2F03%2Fgratisography-funflower-800x525.jpg&imgrefurl=https%3A%2F%2Fgratisography.com%2F&docid=YAe2I9AqIHgndM&tbnid=5RFroDSkyf1y6M&vet=12ahUKEwjevM2t9eeIAxXFwjgGHQo7MU0QM3oECBkQAA..i&w=800&h=525&hcb=2&itg=1&ved=2ahUKEwjevM2t9eeIAxXFwjgGHQo7MU0QM3oECBkQAA",
    },
    {
      id: 2,
      name: "John Doe",
      review: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores officia excepturi laudantium nobis illum ipsum ad ullam impedit iste, vitae dolor pariatur aliquam, tempore voluptas sint fugit soluta maxime inventore!
                    Fugiat officia, molestias quo, est placeat debitis perferendis ipsam tempora excepturi tenetur explicabo omnis quae reprehenderit ad eum necessitatibus incidunt illo vitae nesciunt recusandae? Soluta iste ratione optio repellat nam?
                    Consectetur nostrum dignissimos eaque officia. Laudantium aut in vel! Magnam perferendis deserunt, sunt aut quibusdam, accusantium culpa ea magni ducimus tempora harum molestias quisquam, saepe mollitia nobis odit fuga sint.
                    Excepturi optio omnis tempore cum cupiditate at aspernatur delectus deserunt vitae unde eos ipsum, quam tenetur quis voluptates magnam error cumque autem labore dignissimos nam magni velit. Facilis, id temporibus!
                    Iure, neque! Sequi ab repellat minus itaque delectus vitae et non nesciunt! Nisi quam ducimus eum temporibus expedita. Similique aliquam accusamus mollitia necessitatibus modi a nostrum nobis. Quisquam, vero minus.`,
      image:
        "https://www.google.com/imgres?q=image&imgurl=https%3A%2F%2Fgratisography.com%2Fwp-content%2Fuploads%2F2024%2F03%2Fgratisography-funflower-800x525.jpg&imgrefurl=https%3A%2F%2Fgratisography.com%2F&docid=YAe2I9AqIHgndM&tbnid=5RFroDSkyf1y6M&vet=12ahUKEwjevM2t9eeIAxXFwjgGHQo7MU0QM3oECBkQAA..i&w=800&h=525&hcb=2&itg=1&ved=2ahUKEwjevM2t9eeIAxXFwjgGHQo7MU0QM3oECBkQAA",
    },
    {
      id: 3,
      name: "John Doe",
      review: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores officia excepturi laudantium nobis illum ipsum ad ullam impedit iste, vitae dolor pariatur aliquam, tempore voluptas sint fugit soluta maxime inventore!
                Fugiat officia, molestias quo, est placeat debitis perferendis ipsam tempora excepturi tenetur explicabo omnis quae reprehenderit ad eum necessitatibus incidunt illo vitae nesciunt recusandae? Soluta iste ratione optio repellat nam?
                Consectetur nostrum dignissimos eaque officia. Laudantium aut in vel! Magnam perferendis deserunt, sunt aut quibusdam, accusantium culpa ea magni ducimus tempora harum molestias quisquam, saepe mollitia nobis odit fuga sint.
                Excepturi optio omnis tempore cum cupiditate at aspernatur delectus deserunt vitae unde eos ipsum, quam tenetur quis voluptates magnam error cumque autem labore dignissimos nam magni velit. Facilis, id temporibus!
                Iure, neque! Sequi ab repellat minus itaque delectus vitae et non nesciunt! Nisi quam ducimus eum temporibus expedita. Similique aliquam accusamus mollitia necessitatibus modi a nostrum nobis. Quisquam, vero minus.`,
      image:
        "https://www.google.com/imgres?q=image&imgurl=https%3A%2F%2Fgratisography.com%2Fwp-content%2Fuploads%2F2024%2F03%2Fgratisography-funflower-800x525.jpg&imgrefurl=https%3A%2F%2Fgratisography.com%2F&docid=YAe2I9AqIHgndM&tbnid=5RFroDSkyf1y6M&vet=12ahUKEwjevM2t9eeIAxXFwjgGHQo7MU0QM3oECBkQAA..i&w=800&h=525&hcb=2&itg=1&ved=2ahUKEwjevM2t9eeIAxXFwjgGHQo7MU0QM3oECBkQAA",
    },
    {
      id: 4,
      name: "John Doe",
      review: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores officia excepturi laudantium nobis illum ipsum ad ullam impedit iste, vitae dolor pariatur aliquam, tempore voluptas sint fugit soluta maxime inventore!
                Fugiat officia, molestias quo, est placeat debitis perferendis ipsam tempora excepturi tenetur explicabo omnis quae reprehenderit ad eum necessitatibus incidunt illo vitae nesciunt recusandae? Soluta iste ratione optio repellat nam?
                Consectetur nostrum dignissimos eaque officia. Laudantium aut in vel! Magnam perferendis deserunt, sunt aut quibusdam, accusantium culpa ea magni ducimus tempora harum molestias quisquam, saepe mollitia nobis odit fuga sint.
                Excepturi optio omnis tempore cum cupiditate at aspernatur delectus deserunt vitae unde eos ipsum, quam tenetur quis voluptates magnam error cumque autem labore dignissimos nam magni velit. Facilis, id temporibus!
                Iure, neque! Sequi ab repellat minus itaque delectus vitae et non nesciunt! Nisi quam ducimus eum temporibus expedita. Similique aliquam accusamus mollitia necessitatibus modi a nostrum nobis. Quisquam, vero minus.`,
      image:
        "https://www.google.com/imgres?q=image&imgurl=https%3A%2F%2Fgratisography.com%2Fwp-content%2Fuploads%2F2024%2F03%2Fgratisography-funflower-800x525.jpg&imgrefurl=https%3A%2F%2Fgratisography.com%2F&docid=YAe2I9AqIHgndM&tbnid=5RFroDSkyf1y6M&vet=12ahUKEwjevM2t9eeIAxXFwjgGHQo7MU0QM3oECBkQAA..i&w=800&h=525&hcb=2&itg=1&ved=2ahUKEwjevM2t9eeIAxXFwjgGHQo7MU0QM3oECBkQAA",
    },
    {
      id: 5,
      name: "John Doe",
      review: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores officia excepturi laudantium nobis illum ipsum ad ullam impedit iste, vitae dolor pariatur aliquam, tempore voluptas sint fugit soluta maxime inventore!
                Fugiat officia, molestias quo, est placeat debitis perferendis ipsam tempora excepturi tenetur explicabo omnis quae reprehenderit ad eum necessitatibus incidunt illo vitae nesciunt recusandae? Soluta iste ratione optio repellat nam?
                Consectetur nostrum dignissimos eaque officia. Laudantium aut in vel! Magnam perferendis deserunt, sunt aut quibusdam, accusantium culpa ea magni ducimus tempora harum molestias quisquam, saepe mollitia nobis odit fuga sint.
                Excepturi optio omnis tempore cum cupiditate at aspernatur delectus deserunt vitae unde eos ipsum, quam tenetur quis voluptates magnam error cumque autem labore dignissimos nam magni velit. Facilis, id temporibus!
                Iure, neque! Sequi ab repellat minus itaque delectus vitae et non nesciunt! Nisi quam ducimus eum temporibus expedita. Similique aliquam accusamus mollitia necessitatibus modi a nostrum nobis. Quisquam, vero minus.`,
      image:
        "https://www.google.com/imgres?q=image&imgurl=https%3A%2F%2Fgratisography.com%2Fwp-content%2Fuploads%2F2024%2F03%2Fgratisography-funflower-800x525.jpg&imgrefurl=https%3A%2F%2Fgratisography.com%2F&docid=YAe2I9AqIHgndM&tbnid=5RFroDSkyf1y6M&vet=12ahUKEwjevM2t9eeIAxXFwjgGHQo7MU0QM3oECBkQAA..i&w=800&h=525&hcb=2&itg=1&ved=2ahUKEwjevM2t9eeIAxXFwjgGHQo7MU0QM3oECBkQAA",
    },
    {
      id: 6,
      name: "John Doe",
      review: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores officia excepturi laudantium nobis illum ipsum ad ullam impedit iste, vitae dolor pariatur aliquam, tempore voluptas sint fugit soluta maxime inventore!
                Fugiat officia, molestias quo, est placeat debitis perferendis ipsam tempora excepturi tenetur explicabo omnis quae reprehenderit ad eum necessitatibus incidunt illo vitae nesciunt recusandae? Soluta iste ratione optio repellat nam?
                Consectetur nostrum dignissimos eaque officia. Laudantium aut in vel! Magnam perferendis deserunt, sunt aut quibusdam, accusantium culpa ea magni ducimus tempora harum molestias quisquam, saepe mollitia nobis odit fuga sint.
                Excepturi optio omnis tempore cum cupiditate at aspernatur delectus deserunt vitae unde eos ipsum, quam tenetur quis voluptates magnam error cumque autem labore dignissimos nam magni velit. Facilis, id temporibus!
                Iure, neque! Sequi ab repellat minus itaque delectus vitae et non nesciunt! Nisi quam ducimus eum temporibus expedita. Similique aliquam accusamus mollitia necessitatibus modi a nostrum nobis. Quisquam, vero minus.`,
      image:
        "https://www.google.com/imgres?q=image&imgurl=https%3A%2F%2Fgratisography.com%2Fwp-content%2Fuploads%2F2024%2F03%2Fgratisography-funflower-800x525.jpg&imgrefurl=https%3A%2F%2Fgratisography.com%2F&docid=YAe2I9AqIHgndM&tbnid=5RFroDSkyf1y6M&vet=12ahUKEwjevM2t9eeIAxXFwjgGHQo7MU0QM3oECBkQAA..i&w=800&h=525&hcb=2&itg=1&ved=2ahUKEwjevM2t9eeIAxXFwjgGHQo7MU0QM3oECBkQAA",
    },
    {
      id: 7,
      name: "John Doe",
      review: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores officia excepturi laudantium nobis illum ipsum ad ullam impedit iste, vitae dolor pariatur aliquam, tempore voluptas sint fugit soluta maxime inventore!
                Fugiat officia, molestias quo, est placeat debitis perferendis ipsam tempora excepturi tenetur explicabo omnis quae reprehenderit ad eum necessitatibus incidunt illo vitae nesciunt recusandae? Soluta iste ratione optio repellat nam?
                Consectetur nostrum dignissimos eaque officia. Laudantium aut in vel! Magnam perferendis deserunt, sunt aut quibusdam, accusantium culpa ea magni ducimus tempora harum molestias quisquam, saepe mollitia nobis odit fuga sint.
                Excepturi optio omnis tempore cum cupiditate at aspernatur delectus deserunt vitae unde eos ipsum, quam tenetur quis voluptates magnam error cumque autem labore dignissimos nam magni velit. Facilis, id temporibus!
                Iure, neque! Sequi ab repellat minus itaque delectus vitae et non nesciunt! Nisi quam ducimus eum temporibus expedita. Similique aliquam accusamus mollitia necessitatibus modi a nostrum nobis. Quisquam, vero minus.`,
      image:
        "https://www.google.com/imgres?q=image&imgurl=https%3A%2F%2Fgratisography.com%2Fwp-content%2Fuploads%2F2024%2F03%2Fgratisography-funflower-800x525.jpg&imgrefurl=https%3A%2F%2Fgratisography.com%2F&docid=YAe2I9AqIHgndM&tbnid=5RFroDSkyf1y6M&vet=12ahUKEwjevM2t9eeIAxXFwjgGHQo7MU0QM3oECBkQAA..i&w=800&h=525&hcb=2&itg=1&ved=2ahUKEwjevM2t9eeIAxXFwjgGHQo7MU0QM3oECBkQAA",
    },
  ];
  return (
    <div className="min-h-screen ">
      <TitleBar />
      <div className="typo h-[80vh] flex items-center justify-center border pt-20 m-8 text-base-300">
        Fam Fusion
      </div>
      <Facts />
      <SectionWithImage
        title="About Us"
        paragraphs={[
          `Fam Fusion is dedicated to building meaningful connections between
              families and individuals through innovative solutions. Our mission
              is to simplify and streamline processes to create a supportive and
              inclusive environment. We believe in fostering a sense of
              community and belonging for everyone we serve.`,
          `Our platform is built on principles of transparency, inclusivity,
              and collaboration. Whether you're seeking support, resources, or a
              community to call your own, Fam Fusion is here to help. We take
              pride in fostering a safe and supportive environment where
              relationships can thrive, and dreams can take flight.`,
          `By prioritizing user satisfaction and feedback, we continuously
              refine our offerings to ensure an exceptional experience for every
              visitor. Join us on this journey of growth and discovery, as we
              work together to build a brighter, more connected future.`,
        ]}
        imgSrc="https://picsum.photos/320"
      />
      <SectionWithImage
        title="Our Vision"
        paragraphs={[
          `At Fam Fusion, we envision a world where technology bridges gaps
              and builds stronger, more resilient communities. Our goal is to
              empower individuals and families by providing them with tools that
              prioritize transparency, accessibility, and innovation. Together,
              we aim to shape a future where every connection made leads to a
              positive and lasting impact.`,
          ` We believe in a future where every individual feels seen, heard,
              and valued. Our commitment to excellence drives us to constantly
              innovate and improve our services, ensuring that we stay ahead of
              the curve and deliver lasting value to our users.`,
          `Together, we can build a world where technology serves as a
              catalyst for positive change, strengthening communities and
              inspiring generations to come.`,
        ]}
        imageSrc="https://picsum.photos/320"
        reverse
      />
      <SectionWithImage
        title="How Things Are Done Inside Fam Fusion"
        paragraphs={[
          `Fam Fusion employs cutting-edge technology and a user-centric
              approach to ensure smooth and efficient operations. From
              personalized user interfaces to robust backend support, we
              prioritize user satisfaction and data security.`,
          `From seamless navigation to robust backend systems, we prioritize
              functionality and security at every step. Our platform is built
              with scalability in mind, allowing us to adapt to the evolving
              demands of our users. Every enhancement is aimed at improving the
              overall experience and providing value to our community.`,
          `Collaboration lies at the heart of everything we do. By fostering
              partnerships with like-minded organizations and individuals, we
              amplify our impact and create a network of support for those who
              need it most.`,
        ]}
        imgSrc="https://picsum.photos/320"
      />
      <div className="comments-title min-h-[20vh] max-w-[80vw] mx-auto z-0 text-[11rem]">
        <h1 className="text-center">Hear From Our Satisfied Users</h1>
      </div>
      <div className="review-section h-[80vh]">
        <div className="reviews">
          {DEMO_LIST.map((item) => (
            <div
              className="card bg-accent text-secondary-content"
              id={item.id}
              key={item.id}
              style={{ "--pos": item.id - 1 }}
            >
              <div className="profile-pic h-[10rem] w-[10rem] m-0 mx-auto">
                <img
                  src="https://picsum.photos/160"
                  className="rounded-badge"
                />
              </div>
              <h2 className="text-2xl mx-0">{item.name}</h2>
              <p>{item.review}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="last-section p-8 z-50 min-h-[80vh] ">
        <h1 className="text-left text-[6rem]">Connect with us</h1>
        <div className="connect-form bg-accent mx-24 h-[80vh] mt-16 rounded-t-[8rem] flex gap-16 justify-evenly items-center">
          <div className="left-links flex flex-col gap-16">
            <div className="left-top-links flex flex-col gap-4 text-accent-content">
              <h6 className="footer-title text-2xl">Services</h6>
              <a className="link link-hover">Branding</a>
              <a className="link link-hover">Design</a>
              <a className="link link-hover">Marketing</a>
              <a className="link link-hover">Advertisement</a>
            </div>
            <div className="left-down-links flex flex-col gap-4 text-accent-content">
              <h6 className="footer-title text-2xl">Apps</h6>
              <a className="link link-hover">Mac</a>
              <a className="link link-hover">Windows</a>
              <a className="link link-hover">iPhone</a>
              <a className="link link-hover">Android</a>
            </div>
          </div>
          <div className="right-links flex flex-col gap-16">
            <div className="right-top-links flex flex-col gap-4 text-accent-content">
              <h6 className="footer-title text-2xl">Explore</h6>
              <a className="link link-hover">Features</a>
              <a className="link link-hover">Enterprise</a>
              <a className="link link-hover">Security</a>
              <a className="link link-hover">Pricing</a>
            </div>
            <div className="right-down-links flex flex-col gap-4 text-accent-content">
              <h6 className="footer-title text-2xl">Legal</h6>
              <a className="link link-hover">Terms of use</a>
              <a className="link link-hover">Privacy policy</a>
              <a className="link link-hover">Cookie policy</a>
              <a className="link link-hover">Local Storage </a>
            </div>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col w-[20rem] gap-4 text-accent-content bg-[#747bff] p-8 rounded-3xl"
          >
            <h1 className="text-4xl pl-4 font-mono font-bold">
              Ask us anything.
            </h1>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text pl-4">Name</span>
              </div>
              <input
                type="text"
                placeholder="Vini Jr"
                className="input input-bordered w-full max-w-xs bg-gray-100"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label pl-4">
                <span className="label-text">Email</span>
              </div>
              <input
                type="email"
                placeholder="vinijr@gmail.com"
                className="input input-bordered w-full max-w-xs bg-gray-100"
              />
            </label>

            <label className="form-control">
              <div className="label pl-4">
                <span className="label-text">Your Message</span>
              </div>
              <textarea
                className="textarea textarea-bordered h-24 bg-gray-100"
                placeholder="I think my Ballon d'or is stolen."
              ></textarea>
            </label>
            <button type="submit" className="btn btn-long btn-outline ">
              Submit
            </button>
          </form>
        </div>
        <footer className="footer bg-base text-base-content border-none border-t px-10 rounded-full py-4 bg-white">
          <aside className="grid-flow-col items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              className="fill-current"
            >
              <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
            </svg>
            <p>
              Fam Fusion
              <br />
              Providing reliable tech since 1992
            </p>
          </aside>
          <nav className="md:place-self-center md:justify-self-end">
            <div className="grid grid-flow-col gap-4">
              <a className="link link-hover">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a className="link link-hover">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a className="link link-hover">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default UserHome;
