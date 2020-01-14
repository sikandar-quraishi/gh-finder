import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
/*--------------class base Component-------------*/

// class UserItem extends Component {
//   render() {
//     const { login, avatar_url, html_url } = this.props.user;
//     return (
//       <div className="card text-center">
//         <img
//           src={avatar_url}
//           alt=""
//           className="round-img"
//           style={{ width: "60px" }}
//         />
//         <h3>{login}</h3>

//         <div>
//           <a href={html_url} className="btn btn-dark btm-sm my-1">
//             More
//           </a>
//         </div>
//       </div>
//     );
//   }
// }

/*--------------function base Component-------------*/
                                /*   _____________________(this is a second way of "DESTRUCTION" in functionBase Component inside "()" )
                                    |
                                    |
                                    |
                                    |
                                    |  */
const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  //   const { login, avatar_url, html_url } = props.user;
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt=""
        className="round-img"
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>

      <div>
        <Link to={`/user/${login}`} className="btn btn-dark btm-sm my-1">
          More
        </Link>
      </div>
    </div>
  );
};

UserItem.prototype = {
  user: PropTypes.object.isRequired
};

export default UserItem;
