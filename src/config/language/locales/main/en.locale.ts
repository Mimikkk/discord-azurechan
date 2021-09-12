import chalk from 'chalk';
export default {
  messages: {
    ready: chalk.green('Ready!'),
    loggingIn: chalk.yellow('Logging in...'),
    loggedIn: chalk.green('Logged in!'),
    loggingInFailed: chalk.red('Logging in Failed.'),
    startStartup: chalk.blueBright('Getting Ready.'),
    finishStartup: chalk.blueBright('Finished Startup!'),
    shutdown: chalk.red('Shutting down...'),
    invite: chalk.green(`Invitation Link: {{invite}}`),
    setup: {
      guilds: {
        linkStarted: chalk.magenta('Linking servers...'),
        link: chalk.magenta(`Linked: ${chalk.blue('{{name}}')}`),
        total: chalk.magenta(
          `Linked total of ${chalk.blue('{{total}}')} guilds.`,
        ),
        linkFinished: chalk.magenta('Linked servers.'),
      },
      channels: {
        startClear: chalk.gray(
          `Clearing channel messages: ${chalk.blue('{{name}}')}`,
        ),
        finishClear: chalk.gray('Channel messages were cleared.'),
        countClear: chalk.gray(
          `Deleted total of  ${chalk.blue('{{total}}')} messages.`,
        ),
        startCreate: chalk.gray(`Creating channel:  ${chalk.blue('{{name}}')}`),
        finishCreate: chalk.gray('Channel creation finished.'),
      },
      commands: {
        clear: {
          start: chalk.gray('Removing all current commands...'),
          from: chalk.gray(`Removing commands for ${chalk.blue('{{name}}')}`),
          finish: chalk.gray('Removed all current commands.'),
        },
        add: {
          start: chalk.magenta('Started adding commands to servers.'),
          for: chalk.yellow(`Creating commands for ${chalk.blue('{{name}}')}`),
          create: chalk.gray(`Creating command ${chalk.blue('{{name}}')}`),
          finish: chalk.gray('Finished adding commands to servers.'),
        },
      },
    },
    logtype: {
      listener: chalk.magenta('Listener'),
      warning: chalk.yellow('Warning'),
      approval: chalk.green('Approval'),
      notice: chalk.gray('Notice'),
      error: chalk.red('Error'),
    },
    errorEncountered: chalk.red(
      `Error Encountered!: ${chalk.redBright(
        `${chalk.bold.white('{{name}}')} with ${chalk.yellow('{{message}}')}`,
      )}`,
    ),
  },
  discord: chalk.blue('Discord'),
};
