import {loadJSON, saveJSON, buildLookup} from './helpers';

export default async function() {

    const data = await loadJSON('data/railways.json'),
        lookup = buildLookup(data);

    saveJSON('build/data/railways.json.gz', data.filter(({del}) => !del));

    console.log('Railway data was loaded');

    return lookup;

}
