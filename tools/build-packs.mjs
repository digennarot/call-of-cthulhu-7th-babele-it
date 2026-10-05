// Compiles the module's own compendiums from src/packs/<name>/*.json into packs/<name> (LevelDB).
import { compilePack } from '@foundryvtt/foundryvtt-cli';
import { readdirSync } from 'node:fs';

for (const name of readdirSync('src/packs')) {
	await compilePack(`src/packs/${name}`, `packs/${name}`, { log: true });
}
