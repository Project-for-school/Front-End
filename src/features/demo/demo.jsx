import { useEffect, useState } from "react";
import { PremiumPageApi } from "../../api/apiRequest";

const Demo = () => {
  const [title, setTitle] = useState([]);
  useEffect(() => {
    async function getData() {
      const res = await PremiumPageApi.getPackage();
      return res;
    }
    getData().then((res) => console.log(res));
  });
  return (
    <>
      <h1>Page demo</h1>
    </>
  );
};

export default Demo;
