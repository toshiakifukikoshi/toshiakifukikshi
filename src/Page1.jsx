import { Link } from "react-router-dom";

export const Page1 = () => {
  return (
    <div>
      <h1>ページ１です</h1>
      <Link to="/page1/DetailA">DetailA</Link>

      {/* <Link to="/page1/detailA">DetailA</Link> */}
      <br />
      <Link to="/page1/DetailB">DetailB</Link>
      {/* <Link to="/page1/detailB">DetailB</Link> */}
      <br />
    </div>
  );
};
