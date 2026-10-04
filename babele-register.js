Hooks.once('babele.init', (babele) => {
	// CoC7 rebuilds skill names from these fields, so they must be translated together with the name.
	babele.registerMapping({
		'Item.skill': {
			skillName: 'system.skillName',
			specialization: 'system.specialization'
		}
	});

	babele.register({
		module: 'call-of-cthulhu-7th-babele-it',
		lang: 'it',
		dir: 'compendium'
	});
});
