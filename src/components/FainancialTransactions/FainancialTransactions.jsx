import React from "react";
import "./FainancialTransactions.css";
import SideBarPanel from "../SideBarPanel/SideBarPanel";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
export default function FainancialTransactions() {
  return (
    <div className="container">
      <div className="row">
        <SideBarPanel />
        <div className="col-9">
          <div className="title-main d-flex ">
            <div className="icon-title-panle">
              <AccountBalanceWalletOutlinedIcon />
            </div>
            <h4 className="me-3 ">تاریخچه تراکنش های من</h4>
          </div>
          <table className="col-12">
            <thead className="">
              <th>شماره پیگیری</th>
              <th>شرح وضعیت</th>
              <th>شرح تراکنش</th>
              <th>مبلغ پرداخت شده</th>
              <th>تاریخ ایجاد شده</th>
            </thead>
            <tbody className="">
              <td>1898856</td>
              <td className="text-success">تکمیل</td>

              <td>
                لورم ایپسوم متن ساختگی با تولید ساد
              </td>
              <td>100000</td>
              <td>1.5.41</td>
            </tbody>
            <tbody>
              <td>1898856</td>
              <td className="text-success">تکمیل</td>
              <td>
                لورم ایپسوم متن است
              </td>
              <td>100000</td>
              <td>1.5.41</td>
            </tbody>
            <tbody>
              <td>1898856</td>
              <td className="text-success">تکمیل</td>

              <td>
                لورم ایپسوم متن ساختگی با  است
              </td>
              <td>100000</td>
              <td>1.5.41</td>
            </tbody>
            <tbody>
              <td>1898856</td>
              <td className="text-success">تکمیل</td>

              <td>
                لورم ایپسوم متن ساختگی  است
              </td>
              <td>100000</td>
              <td>1.5.41</td>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
