
/*
function updatePokemonData(pokemonIndex) {
    const pokemonName = document.getElementById(`slot${pokemonIndex}`).querySelector("input").value;
    const pokemon = pokemonData[pokemonName];
    const Nature = document.getElementById("NatureSelect").value;
    // 最大所持数の計算
    let maxPossessions = pokemon.possessions;
    
    // サブスキルによる最大所持数の補正
    const subskills = [
        document.getElementById(`subskillSelect1`).value,
        document.getElementById(`subskillSelect2`).value,
        document.getElementById(`subskillSelect3`).value,
        document.getElementById(`subskillSelect4`).value,
        document.getElementById(`subskillSelect5`).value,
    ];

    subskills.forEach(skill => {
        if (subskillData[skill]) {
            if (skill === "最大所持数アップL" || skill === "最大所持数アップM" || skill === "最大所持数アップS") {
                maxPossessions += subskillData[skill];
            }
        }
    });

    // 更新された最大所持数を表示
    document.getElementById(`possessionsLabel${pokemonIndex}`).textContent = `最大所持数: ${maxPossessions}`;


    // スキル確率と食材確率の計算
    let skillProbability = (pokemon.skill.probability);
    let ingredientRatio = (pokemon.ratio);

    subskills.forEach(skill => {
        if (subskillData[skill]) {
            if (skill === "スキル確率アップM" || skill === "スキル確率アップS") {
                skillProbability *= (1+subskillData[skill]);
            }
            if (skill === "食材確率アップM" || skill === "食材確率アップS") {
                ingredientRatio *= (1+subskillData[skill]);
            }
        }
    });

    // 性格補正を適用
    if (NatureData[Nature]) {
        if (Nature === "ひかえめ(食材∧:おてスピ∨)") {
            ingredientRatio *= NatureData[Nature][0]; // 1つ目の補正値
        } else if (Nature === "おっとり(食材∧:元気∨)") {
            ingredientRatio *= NatureData[Nature][0]; // 1つ目の補正値
        } else if (Nature === "うっかりや(食材∧:スキル∨)") {
            ingredientRatio *= NatureData[Nature][0]; // 1つ目の補正値
        } else if (Nature === "れいせい(食材∧:EXP∨)") {
            ingredientRatio *= NatureData[Nature][0]; // 1つ目の補正値
        } else if (Nature === "いじっぱり(おてスピ∧:食材∨)") {
            ingredientRatio *= NatureData[Nature][1]; // 1つ目の補正値
        } else if (Nature === "わんぱく(元気∧:食材∨)") {
            ingredientRatio *= NatureData[Nature][1]; // 1つ目の補正値
        } else if (Nature === "しんちょう(スキル∧:食材∨)") {
            ingredientRatio *= NatureData[Nature][1]; // 1つ目の補正値
        } else if (Nature === "ようき(EXP∧:食材∨)") {
            ingredientRatio *= NatureData[Nature][1]; // 1つ目の補正値
        } else if (Nature === "おだやか(スキル∧:おてスピ∨)") {
            skillProbability *= NatureData[Nature][0]; // 1つ目の補正値
        } else if (Nature === "(おとなしい(スキル∧:元気∨)") {
            skillProbability *= NatureData[Nature][0]; // 1つ目の補正値
        } else if (Nature === "しんちょう(スキル∧:食材∨)") {
            skillProbability *= NatureData[Nature][0]; // 1つ目の補正値
        } else if (Nature === "なまいき(スキル∧:EXP∨)") {
            skillProbability *= NatureData[Nature][0]; // 1つ目の補正値
        } else if (Nature === "やんちゃ(おてスピ∧:スキル∨)") {
            skillProbability *= NatureData[Nature][1]; // 1つ目の補正値
        } else if (Nature === "のうてんき(元気∧:スキル∨)") {
            skillProbability *= NatureData[Nature][1]; // 1つ目の補正値
        } else if (Nature === "うっかりや(食材∧:スキル∨)") {
            skillProbability *= NatureData[Nature][1]; // 1つ目の補正値
        } else if (Nature === "むじゃき(EXP∧:スキル∨)") {
            skillProbability *= NatureData[Nature][1]; // 1つ目の補正値
        }
    }

    // 更新された確率を表示
    document.getElementById(`skillProbabilityLabel${pokemonIndex}`).textContent = `スキル確率: ${(skillProbability * 100).toFixed(2)}%`;
    document.getElementById(`ingredientRatioLabel${pokemonIndex}`).textContent = `食材確率: ${(ingredientRatio * 100).toFixed(2)}%`;
}
*/
// ポケモン名が変更されたときに最大所持数と確率を更新
function initializePokemonSelect(pokemonIndex) {
    const pokemonSelect = document.getElementById(`slot${pokemonIndex}`).querySelector("input");
    pokemonSelect.addEventListener("change", function() {
        updatePokemonData(pokemonIndex); // ポケモン名が変更された時に最大所持数と確率を更新
    });
}

// サブスキル変更時に最大所持数と確率を更新
function initializeSubskillChangeListener() {
    const subskillSelectors = [
        "subskillSelect1", "subskillSelect2", "subskillSelect3",
        "subskillSelect4", "subskillSelect5"
    ];

    subskillSelectors.forEach((selectorId) => {
        const subskillSelect = document.getElementById(selectorId);
        subskillSelect.addEventListener("change", function() {
            updatePokemonData(1); // サブスキル変更後に最大所持数と確率を更新
        });
    });
}


function updatePokemonData(pokemonIndex) {
    const pokemonName = document.getElementById(`slot${pokemonIndex}`).querySelector("input").value;
    const pokemon = pokemonData[pokemonName];
    const Nature = document.getElementById("NatureSelect").value;
    
    // 最大所持数の計算
    let maxPossessions = pokemon.possessions;
    
    // サブスキルによる最大所持数の補正
    const subskills = [
        document.getElementById(`subskillSelect1`).value,
        document.getElementById(`subskillSelect2`).value,
        document.getElementById(`subskillSelect3`).value,
        document.getElementById(`subskillSelect4`).value,
        document.getElementById(`subskillSelect5`).value,
    ];

    subskills.forEach(skill => {
        if (subskillData[skill]) {
            if (skill === "最大所持数アップL" || skill === "最大所持数アップM" || skill === "最大所持数アップS") {
                maxPossessions += subskillData[skill];
            }
        }
    });

    // きのみの数Sの追加
    let berryCount = pokemon.berrys; // 初期きのみ数
    subskills.forEach(skill => {
        if (subskillData[skill] && skill === "きのみの数S") {
            berryCount += 1; // きのみの数Sを選択している場合、きのみ数を増加
        }
    });

    // 更新された最大所持数ときのみ数を表示
    document.getElementById(`possessionsLabel${pokemonIndex}`).textContent = `最大所持数: ${maxPossessions}`;
    document.getElementById(`berrysLabel${pokemonIndex}`).textContent = `きのみ数: ${berryCount}`;

    // スキル確率と食材確率の計算
    let skillProbability = (pokemon.skill.probability);
    let ingredientRatio = (pokemon.ratio);

    subskills.forEach(skill => {
        if (subskillData[skill]) {
            if (skill === "スキル確率アップM" || skill === "スキル確率アップS") {
                skillProbability *= (1 + subskillData[skill]);
            }
            if (skill === "食材確率アップM" || skill === "食材確率アップS") {
                ingredientRatio *= (1 + subskillData[skill]);
            }
        }
    });

    // 性格補正を適用
    if (NatureData[Nature]) {
        if (Nature === "ひかえめ(食材∧:おてスピ∨)") {
            ingredientRatio *= NatureData[Nature][0]; // 1つ目の補正値
        } else if (Nature === "おっとり(食材∧:元気∨)") {
            ingredientRatio *= NatureData[Nature][0]; // 1つ目の補正値
        } else if (Nature === "うっかりや(食材∧:スキル∨)") {
            ingredientRatio *= NatureData[Nature][0]; // 1つ目の補正値
        } else if (Nature === "れいせい(食材∧:EXP∨)") {
            ingredientRatio *= NatureData[Nature][0]; // 1つ目の補正値
        } else if (Nature === "いじっぱり(おてスピ∧:食材∨)") {
            ingredientRatio *= NatureData[Nature][1]; // 1つ目の補正値
        } else if (Nature === "わんぱく(元気∧:食材∨)") {
            ingredientRatio *= NatureData[Nature][1]; // 1つ目の補正値
        } else if (Nature === "しんちょう(スキル∧:食材∨)") {
            ingredientRatio *= NatureData[Nature][1]; // 1つ目の補正値
        } else if (Nature === "ようき(EXP∧:食材∨)") {
            ingredientRatio *= NatureData[Nature][1]; // 1つ目の補正値
        } else if (Nature === "おだやか(スキル∧:おてスピ∨)") {
            skillProbability *= NatureData[Nature][0]; // 1つ目の補正値
        } else if (Nature === "おとなしい(スキル∧:元気∨)") {
            skillProbability *= NatureData[Nature][0]; // 1つ目の補正値
        } else if (Nature === "しんちょう(スキル∧:食材∨)") {
            skillProbability *= NatureData[Nature][0]; // 1つ目の補正値
        } else if (Nature === "なまいき(スキル∧:EXP∨)") {
            skillProbability *= NatureData[Nature][0]; // 1つ目の補正値
        } else if (Nature === "やんちゃ(おてスピ∧:スキル∨)") {
            skillProbability *= NatureData[Nature][1]; // 1つ目の補正値
        } else if (Nature === "のうてんき(元気∧:スキル∨)") {
            skillProbability *= NatureData[Nature][1]; // 1つ目の補正値
        } else if (Nature === "うっかりや(食材∧:スキル∨)") {
            skillProbability *= NatureData[Nature][1]; // 1つ目の補正値
        } else if (Nature === "むじゃき(EXP∧:スキル∨)") {
            skillProbability *= NatureData[Nature][1]; // 1つ目の補正値
        }
    }

    // 更新された確率を表示
    document.getElementById(`skillProbabilityLabel${pokemonIndex}`).textContent = `スキル確率: ${(skillProbability * 100).toFixed(2)}%`;
    document.getElementById(`ingredientRatioLabel${pokemonIndex}`).textContent = `食材確率: ${(ingredientRatio * 100).toFixed(2)}%`;
}

// 初期化処理
initializeSubskillChangeListener();  // サブスキル変更時に最大所持数と確率を更新
initializePokemonSelect(1);  // 1番目のポケモン
initializePokemonSelect(2);  // 2番目のポケモン（必要に応じて追加）

