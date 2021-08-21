import chalk from 'chalk';
export default {
  messages: {
    ready: chalk.green('Ready!'),
    loggingIn: chalk.yellow('Logging in...'),
    loggedIn: chalk.green('Logged in!'),
    loggingInFailed: chalk.red('Logging in Failed.'),
    startup: chalk.blueBright('Getting Started.'),
    shutdown: chalk.red('Shutting down...'),
    setup: {
      channels: {
        clear: chalk.gray('Channel messages cleared:'),
        create: chalk.gray('Channel created:'),
      },
      commands: {
        guild: chalk.yellow('Creating commands for:'),
        start: chalk.magenta('Started adding commands to servers.'),
        create: chalk.gray('Creating command:'),
        finish: chalk.gray('Finished adding commands to servers.'),
        cleanup: chalk.gray('Removed all current commands.'),
      },
    },
    logtype: {
      listener: chalk.magenta('Listener'),
      warning: chalk.yellow('Warning'),
      approval: chalk.green('Approval'),
      notice: chalk.gray('Notice'),
      error: chalk.red('Error'),
    },
    errorEncountered: 'Error Encountered!:',
  },
  discord: chalk.blue('Discord'),
};
