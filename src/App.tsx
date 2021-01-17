import Form from "./form/Form";

const Title = ({ propColor, propText }: Title) => {
  return <h1 style={{ color: propColor }}>{propText}</h1>;
};

const App = () => {
  return (
    <section>
      <Title propText="My first Title!" propColor="red" />
      <Title propText="My second Title!" propColor="blue" />
      <Form></Form>
    </section>
  );
};

type Title = {
  propColor: string;
  propText: string;
};

export default App;
