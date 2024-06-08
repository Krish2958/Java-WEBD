import { useContext } from 'react';
import PropTypes from 'prop-types';
import { isNull } from 'lodash';
import { UserRole } from '../../api';
import { GlobalContext } from '../../context';
import { isAuthenticated } from '../auth-helpers';

export const HasPermission = ({ requiredRole, children }) => {
  // Context.
  const { loggedInUser } = useContext(GlobalContext);

  // Return null if user is not logged-in.
  if (isNull(loggedInUser) || !isAuthenticated()) {
    return null;
  }

  if (loggedInUser.role === UserRole.SUPPORT) {
    return children;
  }

  if (requiredRole === UserRole.ADMIN && loggedInUser.role === UserRole.ADMIN) {
    return children;
  }

  return null;
};

HasPermission.propTypes = {
  requiredRole: PropTypes.oneOf(Object.values(UserRole)).isRequired,
  children: PropTypes.node.isRequired,
};
