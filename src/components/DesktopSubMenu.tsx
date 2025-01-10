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

  const renderContent = (item: MenuItem) => {
    const hasSubMenu = item.children.length > 0;
    const isSelected = item.label === selectedMenu?.label;

    if (hasSubMenu) {
      return (
        <button
          role="menuitem"
          aria-haspopup="true"
          aria-expanded={isSelected ? 'true' : 'false'}
          className={cx('flex w-full px-4 py-4 cursor-pointer font-semibold', {
            'md:bg-purple-100': isSelected,
          })}
          onClick={handleOnSelect(item)}
        >
          {item.label}
          <p
            className={cx('font-bold ml-4', {
              visible: item.children.length > 0 && !isSelected,
            })}
          >{`>`}</p>
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
    <>
      <ul role="menu" className="border-r-2 border-gray-100">
        {data.map((item) => (
          <li role="none" key={item.label}>
            {renderContent(item)}
          </li>
        ))}
      </ul>
      {selectedMenu && <DesktopSubMenu data={selectedMenu.children} />}
    </>
  );
}

export default DesktopSubMenu;
