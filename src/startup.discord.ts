import { Discord, On } from '@typeit/discord';
import chalk from 'chalk';
import { Main } from './app';

@Discord()
abstract class Startup {
  @On('ready')
  private onMessage() {
    console.error(`${chalk.blue('Discord')}: ${chalk.green('Ready!')}`);
    setTimeout(() => Main.shutdown(), 2000);
  }
}
