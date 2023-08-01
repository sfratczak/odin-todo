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

  returnObject = { getID, getTitle, setTitle, addNotes, addPriority };
  return returnObject;
}

/* export function addNotes(target, notes) {
  const notesObject = {
    notes,
    getNotes: () => this.notes,
    setNotes(newNotes) {
      this.notes = newNotes;
    },
  };

  Object.assign(target, notesObject);
}
 */
