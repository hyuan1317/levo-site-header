import { useState } from 'react';
import { MenuItem } from './MegaMenu';
import cx from 'classnames';

type SubMenuProps = {
  data: MenuItem[];
};

function DesktopSubMenu({ data }: SubMenuProps) {
  const [selectedMenu, setSelectedMenu] = useState<MenuItem>();

  const handleOnSelect = (item: MenuItem) => () => {
    setSelectedMenu(item);
  };

  return (
    <>
      <div>
        {data.map((item) => {
          const isSelected = item.label === selectedMenu?.label;
          return (
            <div
              key={item.label}
              className={cx('flex flex-1 px-4 py-4 cursor-pointer', {
                'md:bg-purple-100': isSelected,
              })}
              onClick={handleOnSelect(item)}
            >
              <p className="font-semibold">{item.label}</p>
              {item.children.length > 0 && !isSelected && (
                <p className="font-bold ml-4">{`>`}</p>
              )}
            </div>
          );
        })}
      </div>
      {selectedMenu && <DesktopSubMenu data={selectedMenu.children} />}
    </>
  );
}

export default DesktopSubMenu;
