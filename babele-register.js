Hooks.once('babele.init', (babele) => {
	// Babele drops plain array translations, so biography sections are translated by position:
	// the translation is a list of titles applied to strings or to the title of {title, value} sections.
	babele.registerConverters({
		sectionTitles: (sections, titles) => {
			if (!Array.isArray(sections) || !Array.isArray(titles)) return sections;
			return sections.map((section, i) => {
				if (typeof titles[i] !== 'string') return section;
				return typeof section === 'string' ? titles[i] : { ...section, title: titles[i] };
			});
		},
		// Spell cost steps keep their texts inside a JSON config: the translation maps each English
		// prompt (or casting time value) to its Italian text, leaving variables and formulas untouched.
		costListTexts: (costs, texts) => {
			if (!Array.isArray(costs) || !texts || typeof texts !== 'object') return costs;
			return costs.map((cost) => {
				const isString = typeof cost?.config === 'string';
				let config;
				try {
					config = isString ? JSON.parse(cost.config) : cost?.config;
				} catch {
					return cost;
				}
				if (!config || typeof config !== 'object') return cost;
				const translated = { ...config };
				if (typeof texts[config.prompt] === 'string') translated.prompt = texts[config.prompt];
				if (cost.type === 'castingTime' && typeof texts[config.value] === 'string') translated.value = texts[config.value];
				return { ...cost, config: isString ? JSON.stringify(translated) : translated };
			});
		}
	});

	// CoC7 rebuilds skill names from these fields, so they must be translated together with the name.
	babele.registerMapping({
		'Item.skill': {
			skillName: 'system.skillName',
			specialization: 'system.specialization'
		},
		'Item.weapon': {
			special: 'system.description.special'
		},
		'Actor.character': {
			biography: { path: 'system.biography', converter: 'sectionTitles' }
		},
		'Actor.npc': {
			occupation: 'system.infos.occupation'
		},
		'Actor.creature': {
			creatureType: 'system.infos.type',
			personalDescription: 'system.biography.personalDescription.value'
		}
	});

	babele.register({
		module: 'call-of-cthulhu-7th-babele-it',
		lang: 'it',
		dir: 'compendium'
	});
});
