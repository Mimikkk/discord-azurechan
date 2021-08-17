import { Client, ClientOptions } from '@typeit/discord';
import { config } from 'dotenv';
import { Intents } from 'discord.js';
import chalk from 'chalk';

config();
export abstract class Main {
  private static readonly options: ClientOptions = {
    intents: [
      Intents.FLAGS.GUILDS,
      Intents.FLAGS.GUILD_MESSAGES,
      Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
      Intents.FLAGS.GUILD_PRESENCES,
      Intents.FLAGS.GUILD_WEBHOOKS,
    ],
    classes: [`${__dirname}/*.discord.ts`, `${__dirname}/*.discord.js`],
    silent: false,
  };
  public static readonly client: Client = new Client(Main.options);

  public static async start() {
    this.startMessage();
    await this.login();
  }
  public static shutdown() {
    console.log(`${chalk.blue('Discord')}: ${chalk.red('Shutting Down...')}`);
    this.client.destroy();
    process.exit();
  }

  private static startMessage() {
    console.log(
      `${chalk.blue('Discord')}: ${chalk.green('Getting started...')}`,
    );
  }
  private static async login() {
    await this.client.login(process.env.TOKEN!).catch(this.handleError);
  }
  private static handleError(error?: string) {
    if (error) console.error(error);
    this.shutdown();
  }
}

Main.start().catch(console.error);
