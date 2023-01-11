import "./App.css";
import { useEffect, useState } from "react";
import Bootcamp from "./Components/Bootcamp";
import styled from "styled-components";
import Form from "./Components/Form";
import Filter from "./Components/Filter";

function App() {
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);

  async function getData() {
    const response = await fetch("http://localhost:3001/bootcamps");
    const data = await response.json();
    setData(data);
  }

  useEffect(() => {
    getData();
  }, []);

  async function handleSubmit(firstName, lastName, bootcamp) {
    const name = firstName + " " + lastName;

    const response = await fetch(
      `http://localhost:3001/bootcamps/${bootcamp}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      }
    );

    const data = await response.json();
    console.log("added the following person: ", data);
    getData();
  }

  function handleFilter(filter) {
    if (filter === "all") setFilteredData(data);
    else setFilteredData(data.filter((data) => data.bootcamp === filter));
  }

  async function handleDelete(bootcamp, devId) {
    await fetch(
      `http://localhost:3001/bootcamps/${bootcamp}/developers/${devId}`,
      {
        method: "DELETE",
      }
    );
    getData();
  }

  return (
    <>
      <Form onSubmit={handleSubmit}></Form>
      <Filter onFilter={handleFilter}></Filter>

      <BootcampList>
        {filteredData !== null
          ? filteredData.map((bootcamp) => (
              <Bootcamp
                className="gallery"
                key={bootcamp.bootcamp}
                data={bootcamp}
                onDeleteDeveloper={handleDelete}
              />
            ))
          : data?.map((bootcamp) => (
              <Bootcamp
                className="gallery"
                key={bootcamp.bootcamp}
                data={bootcamp}
                onDeleteDeveloper={handleDelete}
              />
            ))}
      </BootcampList>
    </>
  );
}

export default App;

const BootcampList = styled.ul`
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.3rem;
  width: 100vw;
`;
