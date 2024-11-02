import { webhookCallback } from 'grammy';
import { bot } from './main';

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    return webhookCallback(bot, 'cloudflare-mod')(request);
  },
};
