#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"

console.log(chalk.bgYellow.underline.black("WELCOME TO CURRENCY CONVERTER APP"))
const currency:any =
{
    USD: 1, //base currency
    EUR: 0.91,
    GBP: 0.76,
    iNR: 74.57,
    PKR: 280
};

let userAnswer = await inquirer.prompt(
    [
        {
            name: "from",
            type: "list",
            message: (chalk.red.underline("Enter from Currency:")),
            choices: ["USD", "EUR", "GBP", "INR", "PKR"]
        },
        {
            name: "to",
            type: "list",
            message: (chalk.green.underline("Enter to Currency:")),
            choices: ["USD", "EUR", "GBP", "INR", "PKR"]
        },
        {
            name: "amount",
            type: "number",
            message: (chalk.magenta.underline("Enter Your Amount:"))
        }
    ]
)

let fromAmount = currency[userAnswer.from] //exchange rate
let toAmount = currency[userAnswer.to] //exchange rate
let amount = userAnswer.amount
let baseAmount = amount / fromAmount //USD base currency // 4
let convertedAmount = baseAmount * toAmount
console.log(convertedAmount);