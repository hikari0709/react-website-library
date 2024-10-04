import { Anchor } from "@/components/ui-components/Anchor";

const Page = () => {
  return (
    <main>
      <h1>Anchor</h1>
      <Anchor
        url="https://hikkoshizamurai.jp/estimate/simulator/"
        external={true}
        supplementText={true}
      >
        anchor
      </Anchor>
    </main>
  );
};

export default Page;
