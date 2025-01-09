import { useState, useEffect } from 'react';
import { MenuItem } from './MegaMenu';
import cx from 'classnames';

type SubMenuProps = {
  data: MenuItem[];
};

function MobileSubMenu({ data }: SubMenuProps) {
  const [selectedMenu, setSelectedMenu] = useState<MenuItem>(data[0]);

  useEffect(() => {
    setSelectedMenu(data[0]);
  }, [data]);

  const handleOnSelect = (item: MenuItem) => () => {
    setSelectedMenu(item);
  };

  return (
    <div className="pl-6">
      {data.map((item) => {
        const isSelected = item.label === selectedMenu?.label;
        return (
          <div>
            <div
              key={item.label}
              className={cx('px-4 py-4 flex-1 cursor-pointer', {
                'md:bg-purple-100': isSelected,
              })}
              onClick={handleOnSelect(item)}
            >
              <p className="font-semibold">{item.label}</p>
            </div>
            {isSelected && <MobileSubMenu data={selectedMenu.children} />}
          </div>
        );
      })}
    </div>
  );
}

export default MobileSubMenu;
