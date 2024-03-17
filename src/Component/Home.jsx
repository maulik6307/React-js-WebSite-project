import React from "react";
import vg from "../Assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechYouth</h1>
          <p>Solution For all Youth Problem is Here!!</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            aperiam eum molestias est a sequi necessitatibus laboriosam, iure
            voluptatibus tenetur fugiat pariatur nihil praesentium laudantium
            impedit nesciunt optio quidem fugit magni numquam, sit tempora.
            Eligendi quae autem, repudiandae assumenda cum corporis rerum
            inventore. Delectus numquam unde labore? Cum, libero facere?
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who We Are??</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
            minus officia, voluptas in dicta aliquam adipisci quasi voluptatem
            obcaecati nulla suscipit quidem exercitationem provident aperiam
            expedita veniam voluptates numquam dolore ducimus architecto
            dignissimos facilis ipsa quae. Facilis vel sapiente voluptate
            veritatis dolor ipsam quae commodi illo minus dignissimos ipsa alias
            et itaque, tenetur ad. Ea consectetur odio reiciendis quos ducimus,
            aliquid quasi veniam tenetur autem? Deserunt, reiciendis harum saepe
            nulla velit sunt in porro ratione quos unde magnam, pariatur nostrum
            laudantium reprehenderit libero distinctio consectetur consequatur
            eius corrupti tenetur quia natus beatae. Vero dolorem, ut
            repellendus quis praesentium ab distinctio.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay: "0.5s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div style={{ animationDelay: "0.7s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div style={{ animationDelay: "0.9s" }}>
              <AiFillYoutube />
              <p>YouTube</p>
            </div>

            <div style={{ animationDelay: "1.1s" }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
