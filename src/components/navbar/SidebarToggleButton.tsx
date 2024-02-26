import styled from "styled-components";
import { IoMenu } from "react-icons/io5";

interface SidebarToggleButtonProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleButtonRef: React.RefObject<HTMLButtonElement>;
}

const SidebarToggleButton = ({
  open,
  setOpen,
  toggleButtonRef,
}: SidebarToggleButtonProps) => {
  return (
    <ToggleSidebar
      ref={toggleButtonRef}
      $open={open}
      onClick={() => {
        setOpen((prev) => !prev);
      }}
    >
      <IoMenu />
    </ToggleSidebar>
  );
};

const ToggleSidebar = styled.button<{ $open: boolean }>`
  cursor: pointer;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  border-radius: 50%;
  border: none;
  transition: background-color 0.2s ease;
  background-color: ${({ $open, theme }) =>
    $open ? theme.colors.bg[200] : "transparent"};
  color: ${({ theme }) => theme.colors.text[100]};

  &:hover {
    background-color: ${({ theme }) => theme.colors.bg[200]};
  }
`;

export default SidebarToggleButton;
