import React, { Component } from "react";

class AddProject extends Component {
  constructor() {
    super();
    this.state = {
      date: "",
      client: "",
      project: "",
      project_code: "",
      hours: "",
      billable: "",
      first_name: "",
      last_name: "",
      billable_rate: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value});
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addProject(this.state);
    this.setState({
      date: "",
      client: "",
      project: "",
      project_code: "",
      hours: "",
      billable: "",
      first_name: "",
      last_name: "",
      billable_rate: ""
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Add new project form</h1>
          <div>
            <input
              className="input"
              placeholder="Date"
              type="text"
              name="date"
              onChange={this.handleChange}
              value={this.state.date}
            />
          </div>
          <div>
            <input
              className="input"
              placeholder="Client"
              type="text"
              name="client"
              onChange={this.handleChange}
              value={this.state.client}
            />
          </div>
          <div>
            <input
              className="input"
              placeholder="Project"
              type="text"
              name="project"
              onChange={this.handleChange}
              value={this.state.project}
            />
          </div>
          <div>
            <input
              className="input"
              placeholder="Project Code"
              type="text"
              name="project_code"
              onChange={this.handleChange}
              value={this.state.project_code}
            />
          </div>
          <div>
            <input
              className="input"
              placeholder="Hours"
              type="text"
              name="hours"
              onChange={this.handleChange}
              value={this.state.hours}
            />
          </div>
          <div>
            <label>
              Is it billable?
              <select
                onChange={this.handleChange}
                value={this.state.billable}
                name="billable"
              >
                <option value=""></option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </label>
          </div>
          <div>
            <input
              className="input"
              placeholder="First Name"
              type="text"
              name="first_name"
              onChange={this.handleChange}
              value={this.state.first_name}
            />
          </div>
          <div>
            <input
              className="input"
              placeholder="Last Name"
              type="text"
              name="last_name"
              onChange={this.handleChange}
              value={this.state.last_name}
            />
          </div>
          <div>
            <input
              className="input"
              placeholder="Billable Rate"
              type="text"
              name="billable_rate"
              onChange={this.handleChange}
              value={this.state.billable_rate}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default AddProject;
