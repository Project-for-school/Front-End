import Header from "./header/header";
import Footer from "./footer/footer";

function LayoutInner(props) {
  return (
    <div className="d-flex" style={{Height: '100vh', flexDirection: "column"}}>
      <Header />
      <div className={props.className}>{props.children}</div>
      <Footer />
    </div>
  );
}

export default LayoutInner;
