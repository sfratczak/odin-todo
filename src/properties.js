export const priority = {
  critical: { priorityName: "Critical", priorityLevel: 0 },
  high: { priorityName: "High", priorityLevel: 1 },
  medium: { priorityName: "Medium", priorityLevel: 2 },
  low: { priorityName: "Low", priorityLevel: 3 },
};

export const deadlineType = {
  dueDateSet: { deadlineTypeName: "Due Date" },
  anytime: { deadlineTypeName: "Anytime" },
  sometime: { deadlineTypeName: "Sometime" },
};

export const navBarItems = {
  "nav-ul-inbox": [
    {
      itemText: "Inbox",
      itemClassName: "li-inbox",
      itemLink: "#",
      itemLinkClassName: "a-inbox",
      itemIconSrc: "../src/img/Inbox.svg",
      iconAltText: "Inbox icon",
    },
  ],
  "nav-ul-deadline": [
    {
      itemText: "Today",
      itemClassName: "li-today",
      itemLink: "#",
      itemLinkClassName: "a-today",
      itemIconSrc: "../src/img/Today.svg",
      iconAltText: "Today icon",
    },
    {
      itemText: "Upcoming",
      itemClassName: "li-upcoming",
      itemLink: "#",
      itemLinkClassName: "a-upcoming",
      itemIconSrc: "../src/img/Upcoming.svg",
      iconAltText: "Upcoming icon",
    },
    {
      itemText: "Anytime",
      itemClassName: "li-anytime",
      itemLink: "#",
      itemLinkClassName: "a-anytime",
      itemIconSrc: "../src/img/Anytime.svg",
      iconAltText: "Anytime icon",
    },
    {
      itemText: "Someday",
      itemClassName: "li-someday",
      itemLink: "#",
      itemLinkClassName: "a-someday",
      itemIconSrc: "../src/img/Someday.svg",
      iconAltText: "Someday icon",
    },
  ],
};

export const DueDate = (() => {})();
