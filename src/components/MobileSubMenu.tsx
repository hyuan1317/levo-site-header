import { useState } from 'react';
import { MenuItem } from './MegaMenu';
import arrowDownIcon from '../assets/arrow-down.png';
import cx from 'classnames';

type SubMenuProps = {
  data: MenuItem[];
};

function MobileSubMenu({ data }: SubMenuProps) {
  const [selectedMenu, setSelectedMenu] = useState<MenuItem>();

  const handleOnSelect = (item: MenuItem) => () => {
    if (item.label === selectedMenu?.label) {
      setSelectedMenu(undefined);
    } else {
      setSelectedMenu(item);
    }
  };

  return (
    <div className="pl-6">
      {data.map((item) => {
        const isSelected = item.label === selectedMenu?.label;
        return (
          <div key={item.label}>
            <div
              className={cx(
                'px-4 py-4 flex flex-1 items-center cursor-pointer',
                {
                  'md:bg-purple-100': isSelected,
                },
              )}
              onClick={handleOnSelect(item)}
            >
              <p className="font-semibold">{item.label}</p>
              {item.children.length > 0 && (
                <img
                  src={arrowDownIcon}
                  className={cx('ml-4 w-3 h-3', {
                    'rotate-180': isSelected,
                  })}
                />
              )}
            </div>
            {isSelected && <MobileSubMenu data={selectedMenu.children} />}
          </div>
        );
      })}
    </div>
  );
}

export default MobileSubMenu;
