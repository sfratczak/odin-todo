// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as uuidv4 } from "uuid";

export default function todoItemCreator(todoTitle) {
  const id = uuidv4();

  let title = todoTitle;
  /*   let deadlineType = null;
  let dueDate = null;

  let priority = 0;

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
      getNotes: () => this.notes,
      setNotes(newNotes) {
        this.notes = newNotes;
      },
    };

    Object.assign(returnObject, notesModule);
  };

  const returnObject = { getID, getTitle, setTitle, addNotes };
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
