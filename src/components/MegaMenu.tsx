import { ReactNode, useState } from 'react';
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

  const handleOnSelect = (item: MenuItem) => () => {
    setSelectedMenu(item);
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center relative w-full">
      {data.map((item) => {
        const isSelected = item.label === selectedMenu?.label;
        return (
          <>
            <div
              key={item.label}
              className={cx(
                'px-4 py-4 cursor-pointer md:border-b-4 md:bg-transparent',
                {
                  'border-purple-500': isSelected,
                  'border-transparent': !isSelected,
                  'bg-purple-300': isSelected,
                },
              )}
              onClick={handleOnSelect(item)}
            >
              <p className="font-semibold">{item.label}</p>
            </div>
            {isSelected && (
              <div
                className={cx('w-full md:hidden', {
                  'bg-purple-100': isSelected,
                })}
              >
                <MobileSubMenu data={selectedMenu.children} />
              </div>
            )}
          </>
        );
      })}
      {selectedMenu && (
        <div className="hidden absolute top-full left-0 w-full md:flex border">
          <DesktopSubMenu data={selectedMenu.children} />
        </div>
      )}
    </div>
  );
}

export default MegaMenu;
