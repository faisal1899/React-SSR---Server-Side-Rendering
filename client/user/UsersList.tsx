import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';


interface IComponentProps {
  users: Array<{ id: number, name: string }>,
  fetchUsers: () => void
}


class UsersList extends Component<IComponentProps> {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props?.users?.map(user => {
      return <li key={user.id}>{user.name}</li>
    })
  }

  renderHead() {
    return (
      <Helmet>
        <title>{`${this.props?.users?.length} Users Loaded`}</title>
        <meta property="og:title" content="Users App" />
      </Helmet>
    );
  }

  render() {
    return (
      <div>
        {this.renderHead()}
        Users List Component
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

function loadData(store) {
  console.log('Load data called.');
  return store.dispatch(fetchUsers());
}

const mapStateToProps = ({ users}) => ({ users });

export default {
  component: connect(mapStateToProps, { fetchUsers })(UsersList),
  loadData,
}

