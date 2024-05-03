import inquirer from "inquirer";
import chalk from "chalk";
let todolist = [];
let condition = true;
console.log(chalk.magenta.bold("\nTODO List Application\n"));
let main = async () => {
    while (condition) {
        let option = await inquirer.prompt([
            {
                name: "op",
                type: "list",
                message: "Select an option you want to perform :",
                choices: ["AddTask", "DeleteTask", "UpdateTask", "View List", "Exist"]
            }
        ]);
        if (option.op === "AddTask") {
            await addtask();
        }
        else if (option.op === "DeleteTask") {
            await deletetask();
        }
        else if (option.op === "UpdateTask") {
            await updateindex();
        }
        else if (option.op === "View List") {
            await viewtask();
        }
        else if (option.op === "Exist") {
            condition = false;
        }
    }
};
// function to add a new task in list
let addtask = async () => {
    let newtask = await inquirer.prompt([{
            name: "task",
            type: "input",
            message: (chalk.green("Enter Your New Task :"))
        }]);
    todolist.push(newtask.task);
    console.log(`\n ${newtask.task} task added successfully in your TODO-List`);
};
// function to view todo-list
let viewtask = () => {
    console.log(chalk.green("\nYour TODO-List is :"));
    todolist.forEach((task, index) => {
        console.log(`${index + 1}:${task}`);
    });
};
// funtion to delete task in todo-list
let deletetask = async () => {
    await viewtask();
    let taskindex = await inquirer.prompt([{
            name: "index",
            type: "number",
            message: "Select the 'index.no' of the task you want to delete :",
        }]);
    let deletetask = todolist.splice(taskindex.index - 1, 1);
    console.log(`\n ${deletetask} this task has been deleted successfully from your TODO-List`);
};
// function to update TODO-list
let updateindex = async () => {
    await viewtask();
    let updatetask = await inquirer.prompt([
        {
            name: "index",
            type: "input",
            message: " Select the 'index no.' you want to update :",
        },
        {
            name: "newtask",
            type: "input",
            message: " Now enter new task name :",
        }
    ]);
    todolist[updatetask.index - 1] = updatetask.newtask;
    console.log(`Task at 'index no. ${updatetask.index - 1} updated successfully[for update list check option:veiw list]`);
};
main();
