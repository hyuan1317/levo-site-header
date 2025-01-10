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

  const renderContent = (item: MenuItem) => {
    const hasSubMenu = item.children.length > 0;
    const isSelected = item.label === selectedMenu?.label;

    if (hasSubMenu) {
      return (
        <button
          role="menuitem"
          aria-haspopup="true"
          aria-expanded={isSelected ? 'true' : 'false'}
          className={cx(
            'px-4 py-4 flex flex-1 items-center cursor-pointer font-semibold',
            {
              'md:bg-purple-100': isSelected,
            },
          )}
          onClick={handleOnSelect(item)}
        >
          {item.label}
          {item.children.length > 0 && (
            <img
              src={arrowDownIcon}
              alt={isSelected ? 'Expanded icon' : 'Collasped icon'}
              className={cx('ml-4 w-3 h-3', {
                'rotate-180': isSelected,
              })}
            />
          )}
        </button>
      );
    }

    return (
      <a
        role="menuitem"
        className="block px-4 py-4 cursor-pointer font-semibold w-full"
        href="#"
      >
        {item.label}
      </a>
    );
  };

  return (
    <div className="pl-6">
      {data.map((item) => {
        const isSelected = item.label === selectedMenu?.label;
        return (
          <ul role="menu" key={item.label}>
            <li role="none">{renderContent(item)}</li>
            {isSelected && <MobileSubMenu data={selectedMenu.children} />}
          </ul>
        );
      })}
    </div>
  );
}

export default MobileSubMenu;
