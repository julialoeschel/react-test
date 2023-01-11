import styled from "styled-components";

export default function Filter({ onFilter }) {
  function handleChange(event) {
    onFilter(event.target.value);
  }

  return (
    <Section>
      <Heading htmlFor="bootcamps">select yout bootcamp</Heading>
      <Select
        className="selectBootcamp"
        name="bootcamps"
        id="bootcamps"
        onChange={handleChange}
      >
        <option value="all">all</option>
        <option value="jsfs">jsfs</option>
        <option value="jfs">jfs</option>
        <option value="dnfs">dnfs</option>
      </Select>
    </Section>
  );
}

const Select = styled.select`
  margin: 1rem;
`;

const Section = styled.section`
  display: grid;
`;

const Heading = styled.label`
  margin: 0;
  margin-left: 1rem;
`;
