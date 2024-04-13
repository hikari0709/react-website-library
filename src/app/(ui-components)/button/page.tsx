import { Button } from '@/src/app/components/ui-components/Button/';

const ButtonView = () => {
  return (
    <main>
      <h1>Button</h1>
      <Button>
        <a href="https://www.google.com/search?q=%E5%BC%95%E8%B6%8A%E3%81%97&oq=%E5%BC%95%E8%B6%8A%E3%81%97&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIJCAEQIxgnGIoFMgkIAhAAGEMYigUyDggDEAAYBBglGLEDGIAEMg4IBBAAGAQYJRixAxiABDIGCAUQRRg9MgYIBhBFGD0yBggHEEUYPdIBCDMwNzZqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8">
          「引越し」で検索した時のGoogleの検索結果
        </a>
      </Button>
    </main>
  );
};

export default ButtonView;
