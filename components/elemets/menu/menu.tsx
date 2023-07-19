interface item {
  text: string;
  href?: string;
}

type Props = {
  menuItem: item[];
};

const Menu = ({ menuItem }: Props) => {
  function generateItem(item: item, index: number) {
    if (item.href) {
      return (
        <li key={`item${index}`}>
          <a href={item.href}>{item.text}</a>
        </li>
      );
    } else {
      return <li key={`item${index}`}>{item.text}</li>;
    }
  }

  return (
    <menu>
      <ul className="flex">
        {menuItem.map((item, itemIndex) => generateItem(item, itemIndex))}
      </ul>
    </menu>
  );
};

export default Menu;
