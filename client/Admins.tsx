import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAdmins } from './actions';
import requireAuth from './hocs/requireAuth';

interface IAdminProps {
  admins: Array<{ id: number, name: string }>,
  fetchAdmins: () => void
}

class Admins extends Component<IAdminProps> {
  componentDidMount() {
    this.props.fetchAdmins();
  }

  private renderList() {
    return this.props.admins?.map(admin => {
      return (<li key={admin.id}>{admin.name}</li>);
    });
  }

  render() {
    return (
      <div>
        <h3>Protected list of Admins</h3>
        <ul>{this.renderList()}</ul>
      </div>
    );
  }
}

const mapStateToProps = ({ admins }) => ({ admins });

export default {
  component: connect(mapStateToProps, { fetchAdmins })(requireAuth(Admins)),
  loadData: ({ dispatch }) => dispatch(fetchAdmins())
}