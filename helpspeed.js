function applySubskillModifiers(helpSpeed, pokemonIndex) {
    const subskill1 = document.getElementById("subskillSelect1").value;
    const subskill2 = document.getElementById("subskillSelect2").value;
    const subskill3 = document.getElementById("subskillSelect3").value;
    const subskill4 = document.getElementById("subskillSelect4").value;
    const subskill5 = document.getElementById("subskillSelect5").value;
    const Nature = document.getElementById("NatureSelect").value;
    const bonus = document.getElementById("bonusSelct1").value;
    const hitpointSelect = document.getElementById("hitpointSelect1").value; // 元気の選択肢
    const subskills = [subskill1, subskill2, subskill3, subskill4, subskill5];
    
    // サブスキルによる短縮（おてつだいスピードM, おてつだいスピードS）
    let subskillReduction = 0;
    subskills.forEach(skill => {
        if (subskillData[skill]) {
            if (skill === "おてつだいスピードM") {
                subskillReduction += subskillData[skill]; // 14%短縮など
            } else if (skill === "おてつだいスピードS") {
                subskillReduction += subskillData[skill]; // 5%短縮など
            }
        }
    });

    // お手伝いボーナスによる補正（最大5個選択可能）
    let bonusCount = 0;
    if (bonus === "おてつだいボーナスX1") bonusCount = 1;
    if (bonus === "おてつだいボーナスX2") bonusCount = 2;
    if (bonus === "おてつだいボーナスX3") bonusCount = 3;
    if (bonus === "おてつだいボーナスX4") bonusCount = 4;
    if (bonus === "おてつだいボーナスX5") bonusCount = 5;

    // お手伝いボーナスによる短縮
    let bonusReduction = bonusCount * 0.05; // 5%ずつ短縮
    subskillReduction += bonusReduction; // サブスキルの短縮とボーナスの短縮を合計

    // 最大35%の短縮に制限
    if (subskillReduction > 0.35) {
        subskillReduction = 0.35; // 最大35%
    }

    // サブスキルとお手伝いボーナスによる短縮を適用
    helpSpeed *= (1 - subskillReduction);
    // 元気による補正を適用
    let hitpointReduction = 1;
    switch (hitpointSelect) {
    case "0%":
        hitpointReduction = 1; // 0%の場合、補正なし
        break;
    case "1%~40%":
        hitpointReduction = 1 / 1.515; // 1%~60%の場合
        break;
    case "41%~60%":
        hitpointReduction = 1 / 1.724; // 1%~60%の場合
        break;
    case "61%~80%":
        hitpointReduction = 1 / 1.923; // 60%~80%の場合
        break;
    case "81%~150%":
        hitpointReduction = 1 / 2.222; // 81%~150%の場合
        break;
    }
    helpSpeed *= hitpointReduction; // 元気による補正を適用

    // 性格補正を適用
    if (NatureData[Nature]) {
        if (Nature === "さみしがり(おてスピ∧:元気∨)") {
            helpSpeed *= NatureData[Nature][0]; // 1つ目の補正値
        } else if (Nature === "いじっぱり(おてスピ∧:食材∨)") {
            helpSpeed *= NatureData[Nature][0]; // 1つ目の補正値
        } else if (Nature === "やんちゃ(おてスピ∧:スキル∨)") {
            helpSpeed *= NatureData[Nature][0]; // 1つ目の補正値
        } else if (Nature === "ゆうかん(おてスピ∧:EXP∨)") {
            helpSpeed *= NatureData[Nature][0]; // 1つ目の補正値
        } else if (Nature === "ずぶとい(元気∧:おてスピ∨)") {
            helpSpeed *= NatureData[Nature][0]; // 1つ目の補正値
        } else if (Nature === "ひかえめ(食材∧:おてスピ∨)") {
            helpSpeed *= NatureData[Nature][0]; // 1つ目の補正値
        } else if (Nature === "おだやか(スキル∧:おてスピ∨)") {
            helpSpeed *= NatureData[Nature][0]; // 1つ目の補正値
        } else if (Nature === "おくびょう(EXP∧:おてスピ∨)") {
            helpSpeed *= NatureData[Nature][1]; // 2つ目の補正値
        }
    }

    return helpSpeed;
}



// ページ初期化
function initializePage() {
    // 各ポケモンの初期化
    for (let pokemonIndex = 1; pokemonIndex <= 2; pokemonIndex++) {
        initializePokemonSelect(pokemonIndex);
    }
    initializeNatureChangeListener();
}

document.addEventListener("DOMContentLoaded", initializePage);

