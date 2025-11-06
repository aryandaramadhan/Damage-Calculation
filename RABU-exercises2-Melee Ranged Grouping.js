


    function meleeRangedGrouping(str){ //membuat fungsi dengan nama meleeRangedGrouping dengan satu parameter STR.
        if(str.length === 0) // jika tidak ada input / 0
            return []; // maka kembalikan nilai kosong.

            let heroes = str.split(','); // memecah str bedasarkan koma
            let ranged = []; // buat wadah kosong untuk type heroes ranged
            let melee = []; // buat wadah kosong untuk type heroes melee

            for( let i = 0; i < heroes.length; i++){ // loop, untuk perikasa setiap heroes dalam array.
                let [name, type] = heroes[i].split('-'); //memisahkan data hero menjadi nama dan tipe
                if(type === 'Ranged'){ // apabila type sama dengan Ranged
                    ranged.push(name); // maka akan masuk ke dalam grup Ranged.
                } else if (type === 'Melee'){ // apabila type sama dengan Melee
                    melee.push(name); // maka akan masuk dalam grup melee
                }
            }
        return [ranged, melee]; // kembalikan nilai ranged & melee 
    }
    console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));