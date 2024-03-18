import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: " enter your first number", type: "number", name: "firstnumber" },
    { message: "enter your  second number", type: "number", name: "secondnumber" },
    {
        message: "select  one of operator to perform action",
        type: "list",
        name: "operator",
        choices: ["ADDITION", "SUBTRACTION", "MULTIPLICATION", "DIVISON"],
    },
]);
//   conditional statment
if (answer.operator === "ADDITION") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operator === "SUBTRACTION") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operator === "MULTIPLICATION") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operator === "DIVISON") {
    console.log(answer.firstnumber / answer.secondnumber);
}
else {
    "please select valid operator";
}
