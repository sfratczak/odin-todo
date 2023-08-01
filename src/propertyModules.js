export const Priority = (() => {
  const critical = { priorityName: "Critical", priorityLevel: 0 };
  const high = { priorityName: "High", priorityLevel: 1 };
  const medium = { priorityName: "Medium", priorityLevel: 2 };
  const low = { priorityName: "Low", priorityLevel: 3 };

  return { critical, high, medium, low };
})();

export const DeadlineType = (() => {
  const dueDateSet = "Due Date";
  const anytime = "Anytime";
  const sometime = "Someday";

  return { dueDateSet, anytime, sometime };
})();

export const DueDate = (() => {})();
