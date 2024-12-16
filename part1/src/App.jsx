const Header = ({ course }) => {
  return <h1>{course}</h1>;
};

const Content = ({
  exercises1,
  exercises2,
  exercises3,
  part1,
  part2,
  part3,
}) => {
  return (
    <div>
      <Part part={part1} exercise={exercises1}></Part>
      <Part part={part2} exercise={exercises2}></Part>
      <Part part={part3} exercise={exercises3}></Part>
    </div>
  );
};
const Part = ({ part, exercise }) => {
  return (
    <p>
      {part} {exercise}
    </p>
  );
};
const Total = ({ value }) => {
  return (
    <div>
      <p>Number of exercises {value}</p>
    </div>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;
  const tot = exercises1 + exercises2 + exercises3;
  return (
    <div>
      <Header course={course} />
      <Content
        exercises1={exercises1}
        part1={part1}
        exercises2={exercises2}
        part2={part2}
        exercises3={exercises3}
        part3={part3}
      />
      <Total tot={tot} />
    </div>
  );
};

export default App;
