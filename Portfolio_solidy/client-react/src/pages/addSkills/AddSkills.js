import { Input, Form, Button } from "semantic-ui-react";
import "./addSkills.css";

const AddSkills = ({ state }) => {
  const { contract, web3 } = state;

  const onSubmit = async () => {
    try {
      const accounts = await web3.eth.getAccounts();
      const name = document.querySelector("#name").value;
      const percentage = document.querySelector("#percentage").value;
      await contract.methods
        .insertSkill(name, percentage)
        .send({ from: accounts[0], gas: "500000" });
      // await contract.methods
      //   .changeSkill(name, percentage, 0)
      //   .send({ from: accounts[0], gas: "500000" });
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div id="addSkills">
      <h1>ADD SKILLS</h1>
      <Form id="container" onSubmit={contract && onSubmit}>
        <Form.Field>
          <label>Name</label>
          <Input id="name" type="text" placeholder="name" />
        </Form.Field>
        <Form.Field>
          <label>percentage</label>
          <Input id="percentage" placeholder="percentage" />
        </Form.Field>
        <Form.Field>
          <Button>Submit</Button>
        </Form.Field>
      </Form>
    </div>
  );
};
export default AddSkills;
