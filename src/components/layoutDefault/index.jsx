import Header from "./header/header";
import Footer from "./footer/footer";
const layoutDefault = (props) => {
  return (
    <>
      <Header />
      <div className={props.className}>{props.children}</div>
      <Footer />
    </>
  );
};

export default layoutDefault;
