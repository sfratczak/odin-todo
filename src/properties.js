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
  inbox: {
    text: "Inbox",
    iconSrc: "../src/img/Inbox.svg",
    iconAltText: "Inbox icon",
  },
  "deadline-today": {
    text: "Today",
    iconSrc: "../src/img/Today.svg",
    iconAltText: "Deadline today icon",
  },
  "deadline-upcoming": {
    text: "Upcoming",
    iconSrc: "../src/img/Upcoming.svg",
    iconAltText: "Deadline upcoming icon",
  },
  "deadline-anytime": {
    text: "Anytime",
    iconSrc: "../src/img/Anytime.svg",
    iconAltText: "Deadline anytime icon",
  },
  "deadline-someday": {
    text: "Someday",
    iconSrc: "../src/img/Someday.svg",
    iconAltText: "Deadline someday icon",
  },
  priorityboard: {
    text: "Priority Board",
    iconSrc: "../src/img/PriorityBoard.svg",
    iconAltText: "Priority board icon",
  },
  logbook: {
    text: "Logbook",
    iconSrc: "../src/img/Logbook.svg",
    iconAltText: "Logbook icon",
  },
  project: {
    text: "Sample Project",
    iconSrc: "../src/img/Project.svg",
    iconAltText: "Project icon",
  },
};

export const DueDate = (() => {})();
