const Layout = ({ children }) => {
  return (
    <div className="flex justify-center">
      <div className="w-10/12">{children}</div>
    </div>
  );
};

export default Layout;
