import styled from "styled-components";
import Developer from "./Developer";

export default function Bootcamp({ data, onDeleteDeveloper }) {
  const { bootcamp, instructors, developers } = data;

  return (
    <Bootcamps className="bootcamp">
      <h2>{bootcamp}</h2>
      <h3>instructors</h3>
      <List>
        {instructors.map((instructor) => {
          return <li key={instructor.name}>{instructor.name}</li>;
        })}
      </List>
      <h3>developers</h3>
      <List className="cardList --dev">
        {developers.map((dev) => {
          return (
            //hier eine Komponente draus machen, damit man jeden einzelnen dev ancklicken kann
            <Developer
              key={dev.id}
              developer={dev}
              onDeleteDeveloper={onDeleteDeveloper}
              bootcamp={bootcamp}
            ></Developer>
          );
        })}
      </List>
    </Bootcamps>
  );
}

const Bootcamps = styled.li`
  list-style: none;
  border: 1px solid black;
  padding: 1rem;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;
