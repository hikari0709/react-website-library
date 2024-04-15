export default function Layout({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <section>
      <h1>{title}</h1>
      {children}
    </section>
  );
}
