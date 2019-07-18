import inquirer from 'inquirer'
import runner from './src/runner'
import scenarios from './scenarios'

const prompt = () => {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'scenario',
        message: 'Choose a scenario to run',
        choices: Object.keys(scenarios),
      },
    ])
    .then(answers => {
      runner(scenarios[answers.scenario], prompt)
    })
}

prompt()
