import React from 'react';
import {connect} from 'react-redux';
import {getAllProjectsThunk, addProjectThunk} from '../store/projects';
import AddProject from './AddProject';

class Projects extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }
  componentDidMount() {
    this.props.getAllProjects()
  }
  renderTableData() {
    const projects = this.props.projects;
    return projects.map((project, index) => {
      const { name, hours, client, billableAmount, billableHours, percent} = project;

      return (
        <tr key={name}>
          <td>{name}</td>
          <td>{client}</td>
          <td>{hours}</td>
          <td>{billableHours} {percent}</td>
          <td>{billableAmount}</td>
        </tr>
       )
    })
  }
  renderTableHeader() {
    let header = ["Name", "Clients", "Hours", "Billable Hours", "Billable Amount"];
    return header.map((key, index) => {
       return <th key={index}>{key}</th>
    })
 }
  render() {
    return (
      <div>
        <table id='students'>
          <tbody>
            <tr>{this.renderTableHeader()}</tr>
            {this.renderTableData()}
          </tbody>
        </table>
        <AddProject addProject={this.props.addProject}/>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    projects: state.projects,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getAllProjects: () => dispatch(getAllProjectsThunk()),
    addProject: (project) => dispatch(addProjectThunk(project)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Projects);
