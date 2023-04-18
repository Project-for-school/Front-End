import { useEffect, useState } from "react";
import { DemoApi } from "../../api/apiRequest";

const Demo = () => {
  const [title, setTitle] = useState([]);
  useEffect(() => {
    async function showData() {
      const res = await DemoApi.getData();
      return res;
    }
    showData()
      .then((res) => setTitle(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <ul>
        {title.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </>
  );
};

export default Demo;
