import Menu from '@/components/elemets/menu/menu';

const MenuView = () => {
  return (
    <Menu menuItem={[{ text: 'test1', href: 'text' }, { text: 'test2' }]} />
  );
};

export default MenuView;
