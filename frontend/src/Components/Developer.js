import { useState } from "react";

export default function Developer({ developer, onDeleteDeveloper, bootcamp }) {
  const [deleteOption, setDeleteOption] = useState(false);
  //console.log(bootcamp);

  return (
    <>
      {deleteOption ? (
        <li className="card toggled" onClick={() => setDeleteOption(false)}>
          {developer.name}
          <button
            className="deleteBtn"
            onClick={() => onDeleteDeveloper(bootcamp, developer.id)}
          >
            delete
          </button>
        </li>
      ) : (
        <li className="card " onClick={() => setDeleteOption(true)}>
          {developer.name}
        </li>
      )}
    </>
  );
}
