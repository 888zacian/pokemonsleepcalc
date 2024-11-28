function fetchPokemonData(pokemonIndex) {
  // ポケモン名を取得
  const pokemonName = document.getElementById(`slot${pokemonIndex}`).querySelector("input").value.trim();
  const pokemon = pokemonData[pokemonName]; // ポケモンデータから取得

  // 表示エリアのクリア
const berryLabel = document.getElementById(`berryLabel${pokemonIndex}`);
const berryEnergyLabel = document.getElementById(`berryEnergyLabel${pokemonIndex}`);

// ラベルのテキストのみクリア（削除ではなく内容の初期化）
if (berryLabel) berryLabel.textContent = 'きのみ: -';
if (berryEnergyLabel) berryEnergyLabel.textContent = '獲得エナジー: -';

  if (pokemon) {
    // ポケモンの画像を更新
    document.getElementById(`img${pokemonIndex}`).src = pokemon.imageUrl;

    // メインスキルを表示
    const skill = pokemon.skill;
    const skillLevel = parseInt(document.getElementById(`skillLevelInput${pokemonIndex}`).value, 10) || 1;

    // スキル数値を計算
    const skillValueElement = document.getElementById(`skillValue${pokemonIndex}`);
    const skillName = skill.name;
    const skillData = skillEnergyMap[skillName];
    let skillValue = "スキル情報が見つかりません";

    if (skillData && skillData[skillLevel - 1]) {
      skillValue = skillData[skillLevel - 1][1]; // レベルに対応するスキル数値を取得
    }

    // メインスキル名と数値を表示
    const skillLabelElement = document.getElementById(`skillLabel${pokemonIndex}`);
    skillLabelElement.textContent = `メインスキル: ${skillName} ${skillValue}`;

    document.getElementById(`helpSpeedLabel${pokemonIndex}`).textContent = `お手伝いスピード: ${pokemon.helpSpeed}`;
    // レベルに応じた食材の初期表示を更新
    updateIngredientsDisplay(pokemonIndex);
    // きのみ数を表示
    const berrysLabel = document.getElementById(`berrysLabel${pokemonIndex}`);
    berrysLabel.textContent = `きのみ数: ${pokemon.berrys}`;


    // 食材リストを更新
    updateIngredientsList(pokemonIndex, pokemon.ingredients);

    // きのみ情報を生成して表示
    const berryName = pokemon.berry;
    const level = parseInt(document.getElementById(`levelValue${pokemonIndex}`).textContent, 10) || 1;
    const baseEnergy = berryEnergyMap[berryName] || 0;

    // エナジー計算
    const energyFromLinear = baseEnergy + (level - 1);
    const energyFromExponential = baseEnergy * Math.pow(1.025, level - 1);
    const energy = Math.max(energyFromLinear, energyFromExponential).toFixed(2);

    const berry = document.getElementById(`berryLabel${pokemonIndex}`);
    const berryEnergy = document.getElementById(`berryEnergyLabel${pokemonIndex}`);
    
    if (berry) {
      berry.textContent = `きのみ: ${berryName}`;
    }
    
    if (berryEnergy) {
      berryEnergy.textContent = `獲得エナジー: ${energy}`;
    }

  } else {
    // ポケモンが見つからなかった場合、初期化
    document.getElementById(`img${pokemonIndex}`).src = ''; // 画像を初期化
    document.getElementById(`skillLabel${pokemonIndex}`).textContent = 'メインスキル: 未入力'; // スキル名を初期化
    document.getElementById(`skillValue${pokemonIndex}`).textContent = '-'; // 数値を初期化
    const berrysLabel = document.getElementById(`berrysLabel${pokemonIndex}`);
    berrysLabel.textContent = `きのみ数: -`; // きのみ数を初期化

    // 食材リストを初期化
    const ingredientSelect = document.getElementById(`ingredientSelect${pokemonIndex}`);
    if (ingredientSelect) ingredientSelect.innerHTML = "<option>食材が見つかりません</option>";
  }
}


function updateIngredientsList(pokemonIndex, ingredients) {
  const ingredientSelect = document.getElementById(`ingredientSelect${pokemonIndex}`);
  if (!ingredientSelect) {
    console.error(`ingredientSelect${pokemonIndex} が見つかりません。`);
    return;
  }

  ingredientSelect.innerHTML = ""; // 既存の選択肢をクリア

  // 食材の組み合わせ
  const combinations = [
    [ingredients[0], ingredients[1], ingredients[3]],
    [ingredients[0], ingredients[2], ingredients[3]],
    [ingredients[0], ingredients[1], ingredients[4]],
    [ingredients[0], ingredients[2], ingredients[4]],
    [ingredients[0], ingredients[1], ingredients[5]],
    [ingredients[0], ingredients[2], ingredients[5]],
  ];

  // 各組み合わせを選択肢として追加
  combinations.forEach((combination, index) => {
    const option = document.createElement("option");
    option.value = combination.map(item => item[0]).join(", ");
    option.textContent = combination.map(item => `${item[0]} (${item[1]}個)`).join(" + ");
    ingredientSelect.appendChild(option);
  });
}


function updateSkillLevel(pokemonIndex, skillLevel) {
  // スキル名を取得
  const skillName = document.getElementById(`skillLabel${pokemonIndex}`).textContent.replace('メインスキル: ', '').split(' ')[0];
  
  // スキルレベルの表示を更新
  document.getElementById(`skillLevelValue${pokemonIndex}`).textContent = skillLevel;
  
  // スキル数値の更新
  updateSkillValue(pokemonIndex, skillName, skillLevel);
}

function updateSkillValue(pokemonIndex, skillName, skillLevel) {
  const skillValueElement = document.getElementById(`skillValue${pokemonIndex}`);
  const skillLevels = skillEnergyMap[skillName];

  // スライダーや数値入力の値を同期
  document.getElementById(`skillLevelInput${pokemonIndex}`).value = skillLevel;
  document.getElementById(`skillLevelRange${pokemonIndex}`).value = skillLevel;

  // スキルレベルに対応する値を表示
  let skillValue = "スキル情報が見つかりません";
  if (skillLevels && skillLevels[skillLevel - 1]) {
    skillValue = skillLevels[skillLevel - 1][1]; // スキルレベルの値を取得
  }

  // メインスキル名とスキル数値を更新
  const skillLabelElement = document.getElementById(`skillLabel${pokemonIndex}`);
  skillLabelElement.textContent = `メインスキル: ${skillName} ${skillValue}`;
}

/*
function updateLevel(pokemonIndex, level) {
  const pokemonName = document.getElementById(`slot${pokemonIndex}`).querySelector("input").value.trim();
  const pokemon = pokemonData[pokemonName];
  if (!pokemon) return; // ポケモンが見つからなければ何もしない

  const berryName = pokemon.berry;
  const baseEnergy = berryEnergyMap[berryName] || 0;

  // エナジー計算
  const energyFromLinear = baseEnergy + (level - 1);
  const energyFromExponential = baseEnergy * Math.pow(1.025, level - 1);
  const energy = Math.max(energyFromLinear, energyFromExponential).toFixed(2);
  // カビゴンの好物が「好きなきのみ」の場合、獲得エナジーを2倍に
  const favoriteSelect = document.getElementById(`favoriteSelct1`).value;
  if (favoriteSelect === "好きなきのみ") {
    energy = (parseFloat(energy) * 2).toFixed(2); // エナジーを2倍に
  }

  const berryEnergyLabel = document.getElementById(`berryEnergyLabel${pokemonIndex}`);
  if (berryEnergyLabel) {
    berryEnergyLabel.textContent = `獲得エナジー: ${energy}`;
  }

  // レベルに基づくお手伝いスピード計算
  let helpSpeed = pokemon.helpSpeed * (1 - 0.002 * (level - 1)); // レベルによる補正

  // サブスキルや性格の補正を適用
  helpSpeed = applySubskillModifiers(helpSpeed);

  // お手伝いスピードの表示を更新
  const helpSpeedLabel = document.getElementById(`helpSpeedLabel${pokemonIndex}`);
  if (helpSpeedLabel) {
    helpSpeedLabel.textContent = `お手伝いスピード: ${helpSpeed.toFixed(0)}`;
  }

  // レベルの表示を更新
  const levelValue = document.getElementById(`levelValue${pokemonIndex}`);
  if (levelValue) {
    levelValue.textContent = level; // レベル表示を更新
  }
  updateIngredientsDisplay(pokemonIndex); // 食材表示の更新

  // レベルの入力フィールドとスライダーの値も更新
  const levelInput = document.getElementById(`levelInput${pokemonIndex}`);
  if (levelInput) {
    levelInput.value = level;
  }
  const levelRange = document.getElementById(`levelRange${pokemonIndex}`);
  if (levelRange) {
    levelRange.value = level;
  }
}
*/
// updateLevel関数
function updateLevel(pokemonIndex, level) {
  const pokemonName = document.getElementById(`slot${pokemonIndex}`).querySelector("input").value.trim();
  const pokemon = pokemonData[pokemonName];
  if (!pokemon) return; // ポケモンが見つからなければ何もしない

  const berryName = pokemon.berry;
  const baseEnergy = berryEnergyMap[berryName] || 0;

  // エナジー計算
  const energyFromLinear = baseEnergy + (level - 1);
  const energyFromExponential = baseEnergy * Math.pow(1.025, level - 1);
  let energy = Math.max(energyFromLinear, energyFromExponential).toFixed(2);

  // 「好きなきのみ」の選択状態を確認してエナジーを2倍にする
  const favoriteSelect = document.getElementById(`favoriteSelct1`).value;
  if (favoriteSelect === "好きなきのみ") {
    energy = (parseFloat(energy) * 2).toFixed(2); // エナジーを2倍に
  }

  // エナジー表示を更新
  const berryEnergyLabel = document.getElementById(`berryEnergyLabel${pokemonIndex}`);
  if (berryEnergyLabel) {
    berryEnergyLabel.textContent = `獲得エナジー: ${energy}`;
  }

  // レベルに基づくお手伝いスピード計算
  let helpSpeed = pokemon.helpSpeed * (1 - 0.002 * (level - 1)); // レベルによる補正

  // サブスキルや性格の補正を適用
  helpSpeed = applySubskillModifiers(helpSpeed, pokemonIndex);

  // お手伝いスピードの表示を更新
  const helpSpeedLabel = document.getElementById(`helpSpeedLabel${pokemonIndex}`);
  if (helpSpeedLabel) {
    helpSpeedLabel.textContent = `お手伝いスピード: ${helpSpeed.toFixed(0)}`;
  }

  // レベルの表示を更新
  const levelValue = document.getElementById(`levelValue${pokemonIndex}`);
  if (levelValue) {
    levelValue.textContent = level; // レベル表示を更新
  }

  // レベルの入力フィールドとスライダーの値も更新
  const levelInput = document.getElementById(`levelInput${pokemonIndex}`);
  if (levelInput) {
    levelInput.value = level;
  }
  const levelRange = document.getElementById(`levelRange${pokemonIndex}`);
  if (levelRange) {
    levelRange.value = level;
  }

  updateIngredientsDisplay(pokemonIndex); // 食材表示の更新
}

// 「好きなきのみ」が選ばれた時にエナジーを更新する
function updateFavoriteSelect(pokemonIndex) {
  const level = document.getElementById(`levelInput${pokemonIndex}`).value;
  updateLevel(pokemonIndex, level); // レベルと共にエナジーを再計算
}

// イベントリスナーを追加して「好きなきのみ」が選ばれた場合にもエナジーが更新されるようにする
document.getElementById('favoriteSelct1').addEventListener('change', function() {
  updateFavoriteSelect(1); // pokemonIndexが1の場合
});

// レベルの変更時にもエナジーが更新されるようにする
document.getElementById('levelInput1').addEventListener('input', function() {
  updateLevel(1, this.value); // pokemonIndexが1の場合
});
document.getElementById('levelRange1').addEventListener('input', function() {
  updateLevel(1, this.value); // pokemonIndexが1の場合
});
