// ==============================
// Componente Layout
// ==============================
function Layout({ header, content, footer }) {
  return (
    <>
      <header>{header}</header>
      <main>{content}</main>
      <footer>{footer}</footer>
    </>
  );
}

export default Layout;
