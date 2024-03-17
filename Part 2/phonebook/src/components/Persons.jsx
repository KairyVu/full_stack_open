/* eslint-disable react/prop-types */
const Persons = ({ persons, onDisplay }) => (
  <>
    {persons
      .filter((person) => onDisplay(person))
      .map((person) => (
        <div key={person.id}>
          {person.name} {person.number}
        </div>
      ))}
  </>
);

export default Persons;
