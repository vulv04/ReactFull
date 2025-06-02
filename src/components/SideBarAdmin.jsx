import styled from "@emotion/styled";
import {
  FiChevronLeft,
  FiChevronRight,
  FiUser,
  FiBox,
  FiSettings,
  FiHome,
} from "react-icons/fi";
import { NavLink } from "react-router-dom";

const SidebarWrapper = styled.div`
  width: ${(props) => (props.collapsed ? "80px" : "240px")};
  transition: width 0.3s ease;
  background-color: #2c3e50;
  color: white;
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100vh;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  margin-bottom: 24px;
  font-size: 20px;
  align-self: ${(props) => (props.collapsed ? "center" : "flex-end")};
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const MenuItem = styled(NavLink)`
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
  padding: 10px 14px;
  border-radius: 8px;
  transition: background 0.2s, color 0.2s;
  font-weight: 500;

  &:hover {
    background-color: #34495e;
  }

  &.active {
    background-color: #1abc9c;
    color: #fff;
  }

  i {
    font-size: 20px;
    margin-right: ${(props) => (props.collapsed ? "0" : "12px")};
  }

  span {
    display: ${(props) => (props.collapsed ? "none" : "inline")};
    transition: opacity 0.2s ease;
  }
`;

const SiderBarAdmin = ({ collapsed, onToggle }) => {
  return (
    <SidebarWrapper collapsed={collapsed}>
      <ToggleButton collapsed={collapsed} onClick={onToggle}>
        {collapsed ? <FiChevronRight /> : <FiChevronLeft />}
      </ToggleButton>

      <Menu>
        <MenuItem to="" collapsed={collapsed}>
          <i>
            <FiHome />
          </i>
          <span>Dashboard</span>
        </MenuItem>
        <MenuItem to="users" collapsed={collapsed}>
          <i>
            <FiUser />
          </i>
          <span>Users</span>
        </MenuItem>
        <MenuItem to="products" collapsed={collapsed}>
          <i>
            <FiBox />
          </i>
          <span>Products</span>
        </MenuItem>
        <MenuItem to="settings" collapsed={collapsed}>
          <i>
            <FiSettings />
          </i>
          <span>Settings</span>
        </MenuItem>
      </Menu>
    </SidebarWrapper>
  );
};

export default SiderBarAdmin;
