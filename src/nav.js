import PubSub from "pubsub-js";

function markNavlinkActive(navlink) {
  if (!navlink.classList.contains("navlink-active")) {
    navlink.classList.add("navlink-active");
  }
}

function clearNavlinkHighlights(navlinkNodeList) {
  navlinkNodeList.forEach((navlink) => {
    navlink.classList.remove("navlink-active");
  });
}

function addNavlinksClickEvent(navlinkNodeList) {
  navlinkNodeList.forEach((navlink) => {
    navlink.addEventListener("click", () => {
      PubSub.publish("navlink-active", navlink.dataset.navlink);
      clearNavlinkHighlights(navlinkNodeList);
      markNavlinkActive(navlink);
    });
  });
}

function loadDefaultNavlink(navlinkNodeList) {
  // Loads first navlink (Inbox) by default to reduce error possibility.
  if (navlinkNodeList[0]) {
    PubSub.publish("navlink-active", navlinkNodeList[0].dataset.navlink);
    markNavlinkActive(navlinkNodeList[0]);
  }
}

function initTestParagraph() {
  const app = document.getElementById("app");

  const sampleOutput = document.createElement("p");
  app.appendChild(sampleOutput);

  const changePara = (msg, data) => {
    sampleOutput.textContent = `${msg}: ${data}`;
  };
  PubSub.subscribe("navlink-active", changePara);
}

export default function navInit() {
  const navlinks = document.querySelectorAll("[data-navlink]");

  initTestParagraph();
  loadDefaultNavlink(navlinks);
  addNavlinksClickEvent(navlinks);
}
