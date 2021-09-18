import { Awaited } from 'discord.js';

export type AsyncFn<Input = undefined, Output = void> = (
  Input?: Input,
) => Awaited<Output> | Promise<Output>;
