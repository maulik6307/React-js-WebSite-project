import React from "react";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h1>TechYouth</h1>
        <p>@All Rights Reserved</p>
      </div>

      <div>
        <h2>Follow Me</h2>
        <div>
          <a href="https://github.com/maulik6307" target={"blank"}>
            <AiFillGithub />
            Github
          </a>
          <a
            href="https://www.instagram.com/accounts/suspended/?next=https%3A%2F%2Fwww.instagram.com%2Fsem%2Fcampaign%2Femailsignup%2F%3Fcampaign_id%3D13530338610%26extra_1%3Ds%257Cc%257C547419127631%257Ce%257Cinstagram%2B%2527%257C%26placement%26creative%3D547419127631%26keyword%3Dinstagram%2B%2527%26partner_id%3Dgooglesem%26extra_2%3Dcampaignid%253D13530338610%2526adgroupid%253D126262414014%2526matchtype%253De%2526network%253Dg%2526source%253Dnotmobile%2526search_or_content%253Ds%2526device%253Dc%2526devicemodel%253D%2526adposition%253D%2526target%253D%2526targetid%253Dkwd-1321618851291%2526loc_physical_ms%253D9300643%2526loc_interest_ms%253D%2526feeditemid%253D%2526param1%253D%2526param2%253D%26gad_source%3D1%26gclid%3DCj0KCQjwhtWvBhD9ARIsAOP0GogvaAKhJd-VzUOWwS9mpWjtClJfsQLmSY-GvucvhjXz-a-p2JWuSyIaAqCKEALw_wcB%26__coig_ufac%3D1"
            target={"blank"}
          >
            <AiFillInstagram />
            Instagram
          </a>
          <a href="https://twitter.com/?lang=en" target={"blank"}>
            <AiFillTwitterCircle />X
          </a>
          <a href="https://www.facebook.com/" target={"blank"}>
            <AiFillFacebook />
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
