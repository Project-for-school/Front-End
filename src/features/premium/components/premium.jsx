import { useEffect, useState } from "react";

import "./premium.scss";
import { PremiumPageApi } from "../../../api/apiRequest";

const PremiumPage = () => {
  const [dataPremium, setDataPremium] = useState([]);
  useEffect(() => {
    async function getData() {
      const res = await PremiumPageApi.getPackage();
      return res;
    }
    getData()
      .then((res) => setDataPremium(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div id="slider">
        <div className="container">
          <div className="col-md-12 d-flex justify-content-center slider-inner">
            <div className="slider-logo mt-4 mb-4">
              <img
                src="https://assets.leetcode.com/static_assets/public/webpack_bundles/images/logo.c36eaf5e6.svg"
                alt=""
              />
            </div>
            <div className="slider-title">
              <h1>Pemium</h1>
            </div>
            <div className="slider-introduce">
              <h4>
                Get started with a LeetCode Subscription that works for you.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PremiumPage;
