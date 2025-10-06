import { useState, useRef, useCallback } from "react";
import { DropdownMenuContainer, MenuContent } from "./dropdownMenu.styles";
import DropdownButton from "./dropdownButton/dropdownButton";
import DropdownLink from "./dropdownLink/dropdownLink";
import ArrowRight from "../../assets/icon/ArrowRight.svg?react";
import { useOutsideClick } from "../../util/hooks/useOutsideHook";

type Link = {
  to: string;
  label?: string;
};

type DropdownMenuProps = {
  links?: Link[];
  leagues?: Link[];
  menuLabel?: string;
};

const DropdownMenu = ({ links, leagues, menuLabel }: DropdownMenuProps) => {
  const [open, setOpen] = useState(false);
  const [openLeague, setOpenLeague] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const insideMenu = leagues && leagues.length > 0;

  const close = useCallback(() => {
    setOpen(false);
    setOpenLeague(false);
  }, []);

  // Close on outside click
  useOutsideClick(ref, close);

  // Reset openLeague when main menu is closed
  const toggle = () => {
    setOpen((prev) => {
      const newState = !prev;
      if (!newState) setOpenLeague(false);
      return newState;
    });
  };

  const toggleLeague = () => setOpenLeague((prev) => !prev);


  return (
    <DropdownMenuContainer ref={ref} style={{ width: insideMenu ? "100%" : "auto" }}>
      <DropdownButton label={menuLabel} onClick={toggle} isOpen={open} />
      {open && (
        <MenuContent>
          {links?.map((link, index) => (
            <DropdownLink key={index} to={link.to} label={link.label} />
          ))}
          {insideMenu && (
            <DropdownMenuContainer>
              <DropdownButton
                label={"Leagues"}
                onClick={toggleLeague}
                isOpen={openLeague}
                insideMenu={insideMenu}
              />
              {openLeague && (
                <>
                  {leagues.map((league, idx) => (
                    <DropdownLink
                      key={idx}
                      to={league.to}
                      label={league.label}
                      icon={<ArrowRight width={16} height={16} />}
                    />
                  ))}
                </>
              )}
            </DropdownMenuContainer>
          )}
        </MenuContent>
      )}
    </DropdownMenuContainer>
  );
};

export default DropdownMenu;
