import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
function IncomeExpense() {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const incomes = amounts.filter((amount) => amount > 0);
  const expenses = amounts.filter((amount) => amount < 0);
  const totalIncome = incomes.reduce((acc, item) => (acc += item), 0);
  const totalExpense = expenses.reduce((acc, item) => (acc += item), 0);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          +${Math.abs(totalIncome)}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          -${Math.abs(totalExpense)}
        </p>
      </div>
    </div>
  );
}

export default IncomeExpense;
