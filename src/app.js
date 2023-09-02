import PubSub from "pubsub-js";
import { navBarItems } from "./properties";

function updateHeader(msg, data) {
  if (!navBarItems[data]) {
    // eslint-disable-next-line no-console
    console.error(
      `ReferenceError: "${data}" does not exist as a navlink option.`
    );
    return;
  }

  const mainHeaderDiv = document.querySelector(".main-header");
  const headerIcon = mainHeaderDiv.querySelector(".main-header-icon");
  const headerText = mainHeaderDiv.querySelector(".main-header-text");

  headerIcon.src = navBarItems[data].iconSrc;
  headerIcon.alt = navBarItems[data].iconAltText;
  headerText.textContent = navBarItems[data].text;
}

export default function appInit() {
  PubSub.subscribe("navlink-active", updateHeader);
}
