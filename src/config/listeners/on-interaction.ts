import { OnInteractionHandlers as Handlers } from 'commands';
import { Interaction } from 'discord.js';
import client from 'shared/client';

export const onInteraction = async (interaction: Interaction) => {
  if (interaction.isCommand()) Handlers[interaction.commandName](interaction);
};

client.on('interactionCreate', onInteraction);
