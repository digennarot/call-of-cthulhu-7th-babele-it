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
		}
	});

	// CoC7 rebuilds skill names from these fields, so they must be translated together with the name.
	babele.registerMapping({
		'Item.skill': {
			skillName: 'system.skillName',
			specialization: 'system.specialization'
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
