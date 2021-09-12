import { InviteGenerationOptions } from 'discord.js';
import client from 'shared/client';
import { deblog } from 'shared/utils';

const inviteData: InviteGenerationOptions = {
  scopes: ['bot', 'applications.commands'],
  permissions: ['ADMINISTRATOR'],
};

export const generateInvite = async () => {
  const invite = client.generateInvite(inviteData);
  deblog('approval', 'invite', { invite });
};
