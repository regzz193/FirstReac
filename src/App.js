import Expenses from "./components/Expences/Expenses";
import React from "react";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
    const expenses = [
        {title: 'Rent', amount: 300.67, date: new Date(2021, 4, 21)},
        {title: 'Water', amount: 1500.67, date: new Date(2022, 5, 22)},
        {title: 'Tuition', amount: 400.67, date: new Date(2020, 6, 23)},
        {title: 'Food', amount: 600.67, date: new Date(2019, 7, 24)}
    ];
    /*return React.createElement(
        'div',
        {},
        React.createElement(
            'h2',
            {},
            'Lets get Started'),
        React.createElement(Expenses,{items:expenses})
    );*/
    return (
        <div>
            <NewExpense/>
            <Expenses items={expenses}/>

        </div>
    );
}

export default App;
