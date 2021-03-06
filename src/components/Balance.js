import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function Balance() {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  return (
    <div>
      <h4>Your Balance</h4>
      <h1 id="balance">{amounts.reduce((acc, item) => (acc += item), 0)}</h1>
    </div>
  );
}
