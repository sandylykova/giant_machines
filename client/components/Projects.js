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
    return projects.map((project) => {
      const { name, hours, client, billableAmount, billableHours, percent} = project;
      return (
        <tr key={name}>
          <td className="steelblueLeft">{name}</td>
          <td className="steelblueLeft">{client}</td>
          <td className="steelblueRight">{hours}</td>
          <td className="blackRight">{billableHours}</td>
          <td className="greyRight">{percent}</td>
          <td className="blackRightBold">{billableAmount}</td>
        </tr>
       )
    })
  }
  render() {
    const projects = this.props.projects;
    let totalHours = projects.length > 0 ? projects[projects.length - 1].totalHours : 0;
    let totalBillableAmount = projects.length > 0 ? projects[projects.length - 1].totalBillableAmount : 0;
    const hoursWithFixed = totalHours ? totalHours.toFixed(2) : 0;
    const totalBillableAmountWithLocaleString = totalBillableAmount ? `$${totalBillableAmount.toLocaleString()}.00` : 0;
    return (
      <div>
        <div className="totalsBox">
          <div style={{float: "left"}}>
            <div style={{color: "dimgrey"}}>Hours Tracked</div>
            <div className="totalsNumbers">{hoursWithFixed}</div>
          </div>
          <div style={{float: "right"}}>
            <div style={{color: "dimgrey"}}>Billable Amount</div>
            <div className="totalsNumbers">{totalBillableAmountWithLocaleString}</div>
          </div>
        </div>
        <table>
          <tbody>
            <tr className = "header">
              <th className = "headerLeft">Name</th>
              <th className = "headerLeft">Clients</th>
              <th className = "headerRight">Hours</th>
              <th className = "headerRight" colSpan={2}>Billable Hours</th>
              <th className = "headerRight">Billable Amount</th>
            </tr>
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
