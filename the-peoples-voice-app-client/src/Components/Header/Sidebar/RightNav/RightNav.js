import React from "react";
import "./Right.css";
import {
  FaFacebook,
  FaYoutube,
  FaWhatsapp,
  FaTwitter,
  FaDiscord,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const RightNav = () => {
  return (
    <div className="right-sidebar">
      <aside class="list-group" id="scollbar">
        <h4 className="text-info text-center">Find Us ON</h4>
        <Link
          type="button"
          class="list-group-item list-group-item-action"
          aria-current="true"
        >
          <FaFacebook className="mx-3 icon" /> Facebook
        </Link>
        <Link type="button" class="list-group-item list-group-item-action">
          <FaYoutube className="mx-3 icon" /> Youtube
        </Link>
        <Link type="button" class="list-group-item list-group-item-action">
          <FaTwitter className="mx-3 icon" /> Twitter
        </Link>
        <Link type="button" class="list-group-item list-group-item-action">
          <FaWhatsapp className="mx-3 icon" /> WhatsApp
        </Link>
        <Link type="button" class="list-group-item list-group-item-action">
          <FaDiscord className="mx-3 icon" /> Discord
        </Link>
        <h6 className="text-center border-bottom">Top News </h6>
        <p className="text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker includinrelease of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          includinrelease of Letraset sheets containing Lorem Ipsum passages,
          and more recently with desktop publishing software like Aldus
          PageMaker including versions of of type and scrambled it to make a
          type specimen book. It has survived not only five centuries, but also
          the leap into electronic typesetting, remaining essentially unchanged.
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker includinrelease of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of{" "}
        </p>
      </aside>
    </div>
  );
};

export default RightNav;
