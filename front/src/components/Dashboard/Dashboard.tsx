import React, { useState } from "react";
import { getAllDamagedDefects, sendEmail } from "../../API";
import { VendorChart } from './VendorChart'

type VendorInfo = {
  name: string;
  levelOneCount: number;
  levelTwoCount: number;
  levelThreeCount: number;
};

const Dashboard = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [damageData, setDamageData] = useState<Array<object>>();
  const [vendorData, setVendorData] = useState<VendorInfo[]>();

  const doFetch = async () => {
    setLoading(true);
    const data = await getAllDamagedDefects();
    let jsonData = JSON.parse(JSON.stringify(data.data));
    console.log(jsonData);
    setDamageData(jsonData.damagedDefects);
    setVendorData(getVendorData(jsonData.damagedDefects))
    console.log(getVendorData(jsonData.damagedDefects))
    setLoading(false);
  };

  const getVendorData = (data: Array<object>) => {
    let vendorData: Array<VendorInfo> = [];
    for (let i = 0; i < data.length; i++) {
      let ticket = JSON.parse(JSON.stringify(data[i]));
      let vendor = ticket.vendor;
      if (!vendor) { continue; }
      let damageLevel = ticket.damageLevel;

      let index = vendorData.findIndex(
        (thisVendor) => thisVendor.name === vendor
      );
      if (index === -1) {
        const thisVendorInfo: VendorInfo = {
          name: vendor,
          levelOneCount: 0,
          levelTwoCount: 0,
          levelThreeCount: 0,
        };
        switch (damageLevel) {
          case "Level 1":
            thisVendorInfo.levelOneCount += 1;
            break;
          case "Level 2":
            thisVendorInfo.levelTwoCount += 1;
            break;
          case "Level 3":
            thisVendorInfo.levelThreeCount += 1;
            break;
        }
        vendorData.push(thisVendorInfo);
      } else {
        let thisVendorInfo = vendorData[index];
        switch (damageLevel) {
          case "Level 1":
            thisVendorInfo.levelOneCount += 1;
            break;
          case "Level 2":
            thisVendorInfo.levelTwoCount += 1;
            break;
          case "Level 3":
            thisVendorInfo.levelThreeCount += 1;
            break;
        }
      }
    }
    return vendorData
  };
  const handleClick = () => {
    doFetch();
  };

  const doSendEmail = async (event: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    const email = await sendEmail();
    let jsonData = JSON.parse(JSON.stringify(email.data));
    console.log(jsonData);
  }

  return (
    <div>
      {/* <button onClick={handleClick}>Get DD Forms</button>
      <div>
        {damageData?.map((ticket) => (
          <h5 key={JSON.parse(JSON.stringify(ticket))._id}>
            {JSON.parse(JSON.stringify(ticket)).vendor}
          </h5>
        ))}
      </div> */}
      <button onClick={doSendEmail}> Send Email! </button>
      <VendorChart />

    </div>
  );
};

export default Dashboard;
