'use strict';

const Homey = require('homey');

class SlimmeLezerApp extends Homey.App {

  /**
   * onInit is called when the app is initialized.
   */
  async onInit() {
    this.log('SlimmeLezer app has been initialized');
  }

}

module.exports = SlimmeLezerApp;
