import { InteractionHandlers, ButtonHandlers, SelectHandlers } from 'commands';
import {
  SelectMenuInteraction,
  ButtonInteraction,
  CommandInteraction,
  Interaction,
} from 'discord.js';
import client from 'shared/client';

const handleCommand = (interaction: CommandInteraction) => {
  const command = interaction.commandName;
  InteractionHandlers[command](interaction);
};
const handleButton = (interaction: ButtonInteraction) => {
  const command = interaction.customId.split('-')[0];
  ButtonHandlers[command](interaction);
};
const handleSelect = (interaction: SelectMenuInteraction) => {
  const command = interaction.customId.split('-')[0];
  SelectHandlers[command](interaction);
};

export const handleInteractions = async (interaction: Interaction) => {
  if (interaction.isCommand()) return handleCommand(interaction);
  if (interaction.isButton()) return handleButton(interaction);
  if (interaction.isSelectMenu()) return handleSelect(interaction);
};

client.on('interactionCreate', handleInteractions);
