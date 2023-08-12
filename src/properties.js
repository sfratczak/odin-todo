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
};

export const DueDate = (() => {})();
