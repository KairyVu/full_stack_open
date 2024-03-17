/* eslint-disable react/prop-types */
const Persons = ({ persons, onDisplay, handleDelete }) => (
  <>
    {persons
      .filter((person) => onDisplay(person))
      .map((person) => (
        <div key={person.id}>
          {person.name} {person.number}
          <button type="button" onClick={() => handleDelete(person)}>
            Delete
          </button>
        </div>
      ))}
  </>
);

export default Persons;
