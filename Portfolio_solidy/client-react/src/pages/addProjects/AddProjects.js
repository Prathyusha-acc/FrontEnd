import { Input, Form, Button } from "semantic-ui-react";
import "./addProjects.css";

const AddProjects = ({ state }) => {
  const { contract, web3 } = state;

  const onSubmit = async () => {
    try {
      const accounts = await web3.eth.getAccounts();
      const name = document.querySelector("#name").value;
      const imageLink = document.querySelector("#imageUrl").value;
      const githubLink = document.querySelector("#githubUrl").value;
      await contract.methods
        .insertProject(name, imageLink, githubLink)
        .send({ from: accounts[0], gas: "500000" });
    } catch (error) {
      alert(error);
    }
  };
  const onChange = async () => {
    try {
      const accounts = await web3.eth.getAccounts();
      const index = document.querySelector("#index").value;
      const name = document.querySelector("#c_name").value;
      const imageLink = document.querySelector("#c_imageUrl").value;
      const githubLink = document.querySelector("#c_githubUrl").value;
      await contract.methods
        .changeProject(name, imageLink, githubLink, index)
        .send({ from: accounts[0], gas: "500000" });
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div id="addProjects">
      <h1>ADD Projects</h1>
      <Form id="container" onSubmit={contract && onSubmit}>
        <Form.Field>
          <label>Project Name</label>
          <Input id="name" type="text" placeholder="name" />
        </Form.Field>
        <Form.Field>
          <label>Image Url</label>
          <Input id="imageUrl" type="text" placeholder="imageUrl" />
        </Form.Field>
        <Form.Field>
          <label>GitHub Url</label>
          <Input id="githubUrl" type="text" placeholder="githubUrl" />
        </Form.Field>
        <Form.Field>
          <Button>Submit</Button>
        </Form.Field>
      </Form>
      <br></br>
      <h1>Change Projects</h1>
      <Form id="container" onSubmit={contract && onChange}>
        <Form.Field>
          <label>Index</label>
          <Input id="index" type="text" placeholder="index" />
        </Form.Field>
        <Form.Field>
          <label>Project Name</label>
          <Input id="c_name" type="text" placeholder="name" />
        </Form.Field>
        <Form.Field>
          <label>Image Url</label>
          <Input id="c_imageUrl" type="text" placeholder="imageUrl" />
        </Form.Field>
        <Form.Field>
          <label>GitHub Url</label>
          <Input id="c_githubUrl" type="text" placeholder="githubUrl" />
        </Form.Field>
        <Form.Field>
          <Button>Submit</Button>
        </Form.Field>
      </Form>
    </div>
  );
};
export default AddProjects;
