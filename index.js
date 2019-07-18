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
      const scenario = scenarios[answers.scenario]

      // see if the scenario has listeners defined
      if (scenario.listeners && scenario.scenario) {
        runner.listen(scenario.listeners, () => {
          runner.run(scenario.scenario, prompt)
        })
      } else {
        runner.run(scenario, prompt)
      }
    })
}

prompt()
