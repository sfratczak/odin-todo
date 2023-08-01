// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as uuidv4 } from "uuid";

export default function todoItemCreator(todoTitle) {
  let returnObject = {};
  const id = uuidv4();

  let title = todoTitle;
  /*   let deadlineType = null;
  let dueDate = null;

  let completed = false;
  let dateCompleted = null;

  let projectId = null; */

  const getID = () => id;

  const getTitle = () => title;
  const setTitle = (newTitle) => {
    title = newTitle;
  };

  const addNotes = (notes) => {
    const notesModule = {
      notes,
      getNotes: () => returnObject.notes,
      setNotes(newNotes) {
        returnObject.notes = newNotes;
      },
    };

    Object.assign(returnObject, notesModule);
  };

  const addPriority = (priority) => {
    const priorityModule = {
      priority,
      getPriority: () => returnObject.priority,
      setPriority(newPriority) {
        returnObject.priority = newPriority;
      },
    };

    Object.assign(returnObject, priorityModule);
  };

  const addDeadlineType = (deadlineType) => {
    const deadlineTypeModule = {
      deadlineType,
      getDeadlineType: () => returnObject.deadlineType,
      setDeadlineType(newDeadlineType) {
        returnObject.deadlineType = newDeadlineType;
      },
    };

    Object.assign(returnObject, deadlineTypeModule);
  };

  const addDueDate = (dueDate) => {
    const dueDateModule = {
      dueDate,
      getDueDate: () => returnObject.dueDate,
      setDueDate(newDueDate) {
        returnObject.dueDate = newDueDate;
      },
    };

    Object.assign(returnObject, dueDateModule);
  };

  returnObject = {
    getID,
    getTitle,
    setTitle,
    addNotes,
    addPriority,
    addDeadlineType,
    addDueDate,
  };
  return returnObject;
}
