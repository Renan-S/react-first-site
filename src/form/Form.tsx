import Button from "./Button";
import Input from "./Input";

const Form = () => {
  return (
    <form>
      <Input
        id="email"
        name="Email"
        placeholder="Please, write your email here"
        required
      ></Input>
      <Input
        id="password"
        name="Password"
        placeholder="Please, write your password here"
        type="password"
        required
      ></Input>
      <Button></Button>
    </form>
  );
};

export default Form;
