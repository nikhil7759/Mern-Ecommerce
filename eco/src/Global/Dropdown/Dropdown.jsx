import Dropdown from "react-bootstrap/Dropdown";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { NavLink } from "react-router-dom";

import { useUser } from "../../context/authContext";

function Dropdownmenu() {
  const { user, logout } = useUser();

  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle id="dropdown-basic">
          <AccountCircleIcon id="dropdown-basic" />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {user ? (
            <>
              <Dropdown.Item onClick={logout}>Log Out</Dropdown.Item>
            </>
          ) : (
            <Dropdown.Item as={NavLink} to="/login">
              Login/Signup
            </Dropdown.Item>
          )}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default Dropdownmenu;
