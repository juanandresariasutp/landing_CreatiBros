export default function PortafolioTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="page-transition-enter">{children}</div>;
}
