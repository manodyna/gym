import axios from 'axios';
onSubmit(e); {
  e.preventDefault();

  // When post request is sent to the create url, axios will add a new record(newperson) to the database.
  const newperson = {
    person_name: this.state.person_name,
    person_age: this.state.person_age,
    person_level: this.state.person_level,
  };

  axios
    .post("http://localhost:5000/record/add", newperson)
    .then((res) => console.log(res.data));

  // We will empty the state after posting the data to the database
  this.setState({
    person_name: "",
    person_age: "",
    person_level: "",
  });
}