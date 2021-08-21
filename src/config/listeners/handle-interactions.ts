import { Handlers as InteractionHandlers } from 'commands/interactions';
import { Interaction } from 'discord.js';
import client from 'shared/client';

export const handleInteractions = (interaction: Interaction) => {
  if (interaction.isCommand())
    InteractionHandlers[interaction.commandName](interaction);
};

client.on('interactionCreate', handleInteractions);
