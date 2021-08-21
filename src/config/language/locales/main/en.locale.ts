import chalk from 'chalk';
export default {
  messages: {
    ready: chalk.green('Ready!'),
    loggingIn: chalk.yellow('Logging in...'),
    loggedIn: chalk.green('Logged in!'),
    loggingInFailed: chalk.red('Logging in Failed.'),
    startup: chalk.blueBright('Getting Started'),
    shutdown: chalk.red('Shutting down...'),
    setup: {
      testingChannel: chalk.gray('Testing channel set up.'),
    },
    cleanupCommands: chalk.gray('Removed all current commands'),
    logtype: {
      listener: chalk.magenta('Listener'),
      warning: chalk.yellow('Warning'),
      approval: chalk.green('Approval'),
      notice: chalk.gray('Notice'),
      error: chalk.red('Error'),
    },
  },
};
