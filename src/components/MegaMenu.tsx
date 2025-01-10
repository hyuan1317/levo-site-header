import { ReactNode, useEffect, useState } from 'react';
import cx from 'classnames';
import MobileSubMenu from './MobileSubMenu';
import DesktopSubMenu from './DesktopSubMenu';

type MegaMenuProps = {
  data: MenuItem[];
};

export type MenuItem = {
  label: string;
  content?: ReactNode;
  children: MenuItem[];
};

function MegaMenu({ data }: MegaMenuProps) {
  const [selectedMenu, setSelectedMenu] = useState<MenuItem>();

  useEffect(() => {
    const keyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleOnCloseMenu();
      }
    };
    document.addEventListener('keydown', keyPress);
    return () => {
      document.removeEventListener('keydown', keyPress);
    };
  }, []);

  const handleOnCloseMenu = () => {
    setSelectedMenu(undefined);
  };

  const handleOnSelect = (item: MenuItem) => () => {
    if (item.label === selectedMenu?.label) {
      setSelectedMenu(undefined);
    } else {
      setSelectedMenu(item);
    }
  };

  return (
    <nav aria-label="Main Menu" className="w-full">
      <ul
        role="menubar"
        className="flex flex-col md:flex-row md:items-center relative"
      >
        {data.map((item) => {
          const isSelected = item.label === selectedMenu?.label;
          return (
            <li role="none" key={item.label} className="z-10">
              <button
                role="menuitem"
                aria-haspopup="true"
                aria-expanded={isSelected ? 'true' : 'false'}
                className={cx(
                  'px-4 py-4 w-full cursor-pointer md:border-b-4 md:bg-transparent',
                  {
                    'border-purple-500': isSelected,
                    'border-transparent': !isSelected,
                    'bg-purple-300': isSelected,
                  },
                )}
                onClick={handleOnSelect(item)}
              >
                <p className="font-semibold text-left">{item.label}</p>
              </button>
              {isSelected && (
                <div
                  className={cx('w-full md:hidden', {
                    'bg-purple-100': isSelected,
                  })}
                >
                  <MobileSubMenu data={selectedMenu.children} />
                </div>
              )}
            </li>
          );
        })}
        {selectedMenu && (
          <>
            <div
              className="hidden md:block fixed top-0 bottom-0 left-0 right-0 z-0"
              onClick={handleOnCloseMenu}
            />
            <div
              key={selectedMenu.label}
              className="hidden absolute top-full left-0 w-full md:flex border z-10"
            >
              <DesktopSubMenu data={selectedMenu.children} />
            </div>
          </>
        )}
      </ul>
    </nav>
  );
}

export default MegaMenu;
