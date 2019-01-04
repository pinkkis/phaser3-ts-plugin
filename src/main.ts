export default class PluginTemplate extends Phaser.Plugins.BasePlugin {


	/**
	 * Plugin constructor
	 */
	constructor(pluginManager: Phaser.Plugins.PluginManager) {
		super(pluginManager);
	}

	init() {
		console.log('PluginTemplate plugin is initialized');
	}
}
