import { randomInt } from 'crypto';
import { CommandInteraction, MessageEmbed } from 'discord.js';
import { AzureService } from 'services';

const handleRandom = async (interaction: CommandInteraction) => {
  const ship =
    AzureService.ships.raw[randomInt(0, AzureService.ships.raw.length)];

  console.log(ship);

  const chibi = ship.skins[randomInt(0, ship.skins.length)].chibi;
  const embed = new MessageEmbed({
    description: `chibi+${ship.names.en}`,
  }).setImage(chibi);
  await interaction.reply({ embeds: [embed] });
};

const handleNamed = async (interaction: CommandInteraction) => {
  const name = interaction.options.getString('name');

  const ships = AzureService.ships.fuse.search(name);
  const shipFuse = ships.shift();

  if (shipFuse) {
    const ship = shipFuse.item;
    console.log(ship);

    const chibi = ship.skins[randomInt(0, ship.skins.length)].chibi;
    const embed = new MessageEmbed({
      description: `chibi+${ship.names.en}`,
    }).setImage(chibi);
    await interaction.reply({ embeds: [embed] });
  } else {
    const embed = new MessageEmbed({ description: `chibi+${name}+'NotFound'` });
    await interaction.reply({ embeds: [embed] });
  }
};

export const handleChibi = async (interaction: CommandInteraction) => {
  switch (interaction.options.getSubcommand()) {
    case 'random':
      return await handleRandom(interaction);
    case 'named':
      return await handleNamed(interaction);
  }
};
