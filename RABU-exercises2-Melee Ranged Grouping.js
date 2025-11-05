function meleRangedGrouping(str){
    if(str.length === 0)
        return [];
        let heroes = str.split(',');
        let ranged = [];
        let melee = [];
    for(let i = 0; i < heroes.length; i++){
        let [name, type] = heroes[i].split(',');
        if(type === 'ranged'){
            ranged.push(name);
        } else if(type === 'melee') {
            melee.push(name);
        }

        }
        return [ranged, melee];
    }
