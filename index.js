require('dotenv').config();

const Telegraf = require('telegraf');
const transformString = require('./transform-string');

const bot = new Telegraf(process.env.CANAALIP_BOT_TOKEN);

bot.command('/start', ctx => {
  ctx.reply(
    'Бұл бот сіздің жазғаныңызды Жаңа әліптің емлесіне сай етіп береді.\nАуторы: @sadykuly_almas,
  );
});

bot.on('text', ({ message, replyWithMarkdown }) => {
  const reply = `${transformString(message.text)}`;
  replyWithMarkdown(reply);
});

bot.on('inline_query', ({ inlineQuery, answerInlineQuery }) => {
  if (inlineQuery.query && inlineQuery.query.length) {
    const answer = transformString(inlineQuery.query);
    answerInlineQuery([
      {
        id: '1',
        type: 'article',
        title: answer,
        input_message_content: {
          message_text: `${answer}`,
          parse_mode: 'Markdown',
          disable_web_page_preview: true,
        },
      },
    ]);
  }
});

bot.startPolling();

module.exports = bot;
