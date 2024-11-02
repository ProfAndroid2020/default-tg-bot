import { Bot } from 'grammy';

const BOT_TOKEN = 'ЗАПОЛНИТЬ: токен бота';

export const bot = new Bot(BOT_TOKEN);

bot.api.setMyCommands([{ command: 'start', description: 'Запустить бота' }]);

bot.command('start', async (ctx) => {
  await ctx.reply('Бот запущен');
});
