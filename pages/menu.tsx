import Menu from '@/components/elemets/menu/menu';

const MenuView = () => {
  return (
    <main>
      <h1>Menu</h1>
      <Menu menuItem={[{ text: 'test1', href: 'text' }, { text: 'test2' }]} />
    </main>
  );
};

export default MenuView;
