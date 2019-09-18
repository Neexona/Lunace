module.exports = class {
  constructor(bot) {
    this.bot = bot;
  }

  async run() {
    await this.bot.wait(1000);

    this.bot.appInfo = await this.bot.fetchApplication();
    setInterval(async () => {
      this.bot.appInfo = await this.bot.fetchApplication();
    }, 60000);

    this.bot.user.setActivity("p!help pour plus d'informations !");

    this.bot.logger.log(`${this.bot.user.username} est prêt !`, "ready");
  }
};
