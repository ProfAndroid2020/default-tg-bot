import { Bot } from 'grammy';

const BOT_TOKEN = '7867964761:AAHKhp8x4HCO2O48G0QDz6UA8FEfifQXTok';

export const bot = new Bot(BOT_TOKEN);

bot.api.setMyCommands([{ command: 'start', description: 'Запустить бота' }]);

bot.command('start', async (ctx) => {
  await ctx.reply('Бот запущен');
});
