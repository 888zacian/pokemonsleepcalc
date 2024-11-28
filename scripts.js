function updateIngredientsDisplay(pokemonIndex) {
  const level = parseInt(document.getElementById(`levelValue${pokemonIndex}`).textContent, 10) || 1;

  // ポケモンデータの取得
  const pokemonName = document.getElementById(`slot${pokemonIndex}`).querySelector("input").value.trim();
  const pokemon = pokemonData[pokemonName]; // ポケモンデータから取得

  if (!pokemon || !pokemon.ingredients) {
    console.error(`ポケモン ${pokemonName} の食材データが見つかりません`);
    return;
  }

  // 食材リスト
  const ingredients = pokemon.ingredients;
  let ingredientsToDisplay = [];

  // レベルに応じて表示する食材数を決定
  if (level >= 1 && level <= 29) {
    ingredientsToDisplay = [ingredients[0]]; // レベル1-29は最初の食材1つ
  } else if (level >= 30 && level <= 59) {
    ingredientsToDisplay = [ingredients[0], ingredients[1]]; // レベル30-59は最初の2つ
  } else if (level >= 60 && level <= 100) {
    ingredientsToDisplay = [ingredients[0], ingredients[1], ingredients[2]]; // レベル60-100は最初の3つ
  }

  // 食材表示用のHTMLを更新
  const ingredientsLabel = document.getElementById(`ingredients${pokemonIndex}`);
  ingredientsLabel.textContent = `食材: ${ingredientsToDisplay.map(item => `${item[0]} (${item[1]}個)`).join(" + ")}`;
}


// 数値入力でレベルを変更したときにスライダーも更新
function updateLevelFromInput(pokemonIndex, level) {
  const levelRange = document.getElementById(`levelRange${pokemonIndex}`);
  levelRange.value = level;  // スライダーを更新
  updateLevel(pokemonIndex, level);  // スライダーと数値入力を同期
  updateIngredientsDisplay(pokemonIndex); // 食材表示の更新
}

// スキルレベルを更新する関数
function updateSkillLevel(pokemonIndex, skillLevel) {
  const skillLevelValue = document.getElementById(`skillLevelValue${pokemonIndex}`);
  const skillLevelInput = document.getElementById(`skillLevelInput${pokemonIndex}`);
  const skillLevelRange = document.getElementById(`skillLevelRange${pokemonIndex}`);

  // スライダーと数値入力を同期
  skillLevelValue.textContent = skillLevel;
  skillLevelInput.value = skillLevel;
  skillLevelRange.value = skillLevel;

  // スキルに応じた他の更新処理を記述（必要に応じて）
}
function updateSkillLevelFromInput(pokemonIndex, skillLevel) {
  const skillLevelRange = document.getElementById(`skillLevelRange${pokemonIndex}`);
  skillLevelRange.value = skillLevel; // 数値入力でスライダーも更新
  updateSkillLevel(pokemonIndex, skillLevel);
}

// 計算を行う関数
function calculateTotal() {
  let totalBerryEnergy = 0;
  let totalIngredientCount = 0;
  let totalIngredientEnergy = 0;
  let totalSkillProbability = 0;

  for (let i = 1; i <= 5; i++) {
      const pokemonName = document.querySelector(`#slot${i} input`).value;
      if (pokemonData[pokemonName]) {
          const data = pokemonData[pokemonName];
          const level = document.getElementById(`levelValue${i}`).textContent;
          const skillLevel = document.getElementById(`skillLevelValue${i}`).textContent;
          const berryEnergy = berryEnergyMap[data.berry] || 0;
          const ingredients = data.ingredients;
          const skillProbability = data.skill.probability;

          totalBerryEnergy += berryEnergy * level;
          totalIngredientCount += ingredients.reduce((acc, curr) => acc + curr[1], 0);
          totalIngredientEnergy += ingredients.reduce((acc, curr) => acc + (ingredientEnergyMap[curr[0]] || 0) * curr[1], 0);
          totalSkillProbability += skillProbability * skillLevel; // スキル確率をスキルレベルで調整
      }
  }

  document.getElementById("total").innerHTML = `
      総エナジー: ${totalBerryEnergy}<br>
      食材の合計数: ${totalIngredientCount}<br>
      食材の総エナジー: ${totalIngredientEnergy}<br>
      スキル確率の合計: ${totalSkillProbability}
  `;
}

// 予測変換機能
function showSuggestions(slot) {
  // ここに予測変換のロジックを実装します
}

// fetchPokemonData関数の中で情報表示処理の後に追加
window.scrollTo({ top: 0, behavior: 'smooth' });
/*
function fetchPokemonData(pokemonIndex) {
  const pokemonName = document.getElementById(`slot${pokemonIndex}`).querySelector("input").value;
  const pokemon = pokemonData[pokemonName];
  
  if (pokemon) {
    updateIngredientsList(pokemonIndex, pokemon.ingredients);
    updateHelpSpeed(pokemonIndex, pokemon);
  }
}

// 食材の組み合わせを動的に更新
function updateIngredientsList(pokemonIndex, ingredients) {
  const ingredientSelect = document.getElementById(`ingredientSelect${pokemonIndex}`);
    // 該当要素が存在しない場合のエラーチェック
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
    [ingredients[0], ingredients[2], ingredients[5]]
  ];

  // 各組み合わせを選択肢として追加
  combinations.forEach((combination, index) => {
    const option = document.createElement("option");
    option.value = combination.map(item => item[0]).join(", ");
    option.textContent = combination.map(item => `${item[0]} (${item[1]}個)`).join(" + ");
    ingredientSelect.appendChild(option);
  });
}
*/

function initializeSubskillsList() {
  for (let i = 1; i <= 5; i++) {
    const subskillSelect = document.getElementById(`subskillSelect${i}`);

    // セレクトボックスを初期化
    subskillSelect.innerHTML = "";

    // サブスキル選択肢を動的に追加
    Object.keys(subskillData).forEach(function(subskill) {
      const option = document.createElement("option");
      option.value = subskill;
      option.textContent = subskill;  // サブスキル名
      subskillSelect.appendChild(option);
    });
  }
}

document.addEventListener("DOMContentLoaded", function() {
  initializeSubskillsList();
});

function initializeNatureList() {
  const NatureSelect = document.getElementById("NatureSelect"); // 1つの性格選択肢のID

  if (!NatureSelect) {
    console.log("性格選択タグが見つかりません");
    return;
  }
 // 既存の選択肢をクリア
  NatureSelect.innerHTML = "";
  // 性格選択肢を動的に追加
  Object.keys(NatureData).forEach(function(Nature) {
    const option = document.createElement("option");
    option.value = Nature;
    option.textContent = Nature;  // 性格名
    NatureSelect.appendChild(option);
  });
}

document.addEventListener("DOMContentLoaded", function() {
  initializeNatureList();
});

function clearInput(slotIndex) {
  // 該当スロット内のinput要素を取得
  const inputField = document.querySelector(`#slot${slotIndex} input`);
  
  if (inputField) {
    inputField.value = ""; // 入力をクリア
    console.log(`Cleared input for slot${slotIndex}`); // デバッグログ
  } else {
    console.error(`Input field for slot${slotIndex} not found.`);
  }
}

/*

function calculateHelpCount(hours) {
  const helpSpeedLabel = document.getElementById("helpSpeedLabel1");
  const totalDiv = document.getElementById("total");
  
  // お手伝いスピードを取得
  const helpSpeedText = helpSpeedLabel.textContent;
  const helpSpeed = parseFloat(helpSpeedText.split(": ")[1]); // "お手伝いスピード: X" のXを取得
  
  if (helpSpeed <= 0) {
    totalDiv.textContent = "お手伝いスピードが0または不正です。計算できません。";
    return;
  }

  // 時間を秒に変換してお手伝い回数を計算
  const unitTime = hours * 3600; // 時間を秒に変換
  const helpCount = (unitTime / helpSpeed).toFixed(2); // 結果を小数点2桁に丸める

  // 結果を表示
  totalDiv.textContent = `お手伝い回数: ${helpCount}回`;
}



// ボタンイベントの設定
function calculate1h() {
  calculateHelpCount(1); // 1時間の計算
}

function calculate15h() {
  calculateHelpCount(15); // 15時間の計算
}

function calculate24h() {
  calculateHelpCount(24); // 24時間の計算
}
*/
function calculateHelpCount(hours) {
  const helpSpeedLabel = document.getElementById("helpSpeedLabel1");
  const totalDiv = document.getElementById("total");
  const helpCountLabel = document.getElementById("helpCountLabel");
  
  const helpSpeedText = helpSpeedLabel.textContent;
  const helpSpeed = parseFloat(helpSpeedText.split(": ")[1]);
  
  if (helpSpeed <= 0) {
    totalDiv.textContent = "お手伝いスピードが0または不正です。計算できません。";
    return;
  }

  const unitTime = hours * 3600;
  const helpCount = (unitTime / helpSpeed).toFixed(2);
  helpCountLabel.textContent = `お手伝い回数: ${helpCount}回`;

  calculateEnergyResults(helpCount);
}

function calculateEnergyResults(helpCount) {
  const berryCount = parseInt(document.getElementById("berrysLabel1").textContent.split(": ")[1]) || 0;
  const berryEnergy = parseFloat(document.getElementById("berryEnergyLabel1").textContent.split(": ")[1]) || 0;
  const ingredientProbability = parseFloat(document.getElementById("ingredientRatioLabel1").textContent.split(": ")[1]) || 0;
  const skillProbability = parseFloat(document.getElementById("skillProbabilityLabel1").textContent.split(": ")[1]) || 0;
  const skillValueText = document.getElementById("skillLabel1").textContent.split(": ")[1] || "";
  const skillValue = parseFloat(skillValueText.replace(/\D/g, '')) || 0;



  const level = parseInt(document.getElementById("levelValue1").textContent) || 1;
  const levelCoefficient = level < 30 ? 1 : (level < 60 ? 0.5 : 0.333);

  // (1) きのみエナジーの計算
  const berryEnergyResult = (berryCount * berryEnergy * (1 - (ingredientProbability/100)) * helpCount).toFixed(2);

  // (2) 食材数と (3) 食材エナジーの計算
  const ingredientsLabel = document.getElementById("ingredients1").textContent.trim().replace("食材: ", "");
  if (!ingredientsLabel) {
    console.error("食材が選択されていません");
    return;
  }

  // 食材のパース
  const ingredientEntries = ingredientsLabel.split("+").map(entry => {
    const match = entry.trim().match(/^(.+?) \((\d+)個\)$/);
    if (match) {
      const [_, name, baseCount] = match;
      return { name: name.trim(), baseCount: parseInt(baseCount, 10) };
    }
    return null;
  }).filter(Boolean);

  let totalIngredientEnergy = 0;
  let ingredientDetails = [];

  ingredientEntries.forEach(({ name, baseCount }) => {
    const ingredientCount = (helpCount * baseCount * (ingredientProbability/100) * levelCoefficient).toFixed(2);
    const energyPerIngredient = ingredientEnergyMap[name] || 0;
    const ingredientEnergy = (ingredientCount * energyPerIngredient).toFixed(2);

    // 合計エナジーと詳細を記録
    totalIngredientEnergy += parseFloat(ingredientEnergy);
    ingredientDetails.push(`${name} (${ingredientCount}個, エナジー: ${ingredientEnergy})`);
  });

  // (4) スキル回数と効果
  const skillCount = (helpCount * (skillProbability/100)).toFixed(2);
  const skillEffect = (skillCount * skillValue).toFixed(2);

  // 結果をHTMLに反映
  document.getElementById("berryEnergyResult").textContent = `きのみエナジー: ${berryEnergyResult}`;
  document.getElementById("ingredientCountResult").textContent = `食材詳細: ${ingredientDetails.join(" + ")}`;
  document.getElementById("ingredientEnergyResult").textContent = `食材エナジー合計: ${totalIngredientEnergy.toFixed(2)}`;
  document.getElementById("skillCountResult").textContent = `スキル回数: ${skillCount}`;
  document.getElementById("skillEffectResult").textContent = `スキル効果: ${skillEffect}`;
}

// ボタンイベントの設定
function calculate1h() {
  calculateHelpCount(1);
}

function calculate15h() {
  calculateHelpCount(15);
}

function calculate24h() {
  calculateHelpCount(24);
}

let energyChart; // グラフを保持する変数

  function Graph() {
    // 各パラメーターを取得
    const berryEnergy = parseFloat(document.getElementById("berryEnergyResult").textContent.split(": ")[1]) || 0;
    const ingredientEnergy = parseFloat(document.getElementById("ingredientEnergyResult").textContent.split(": ")[1]) || 0;
    const skillEffect = parseFloat(document.getElementById("skillEffectResult").textContent.split(": ")[1]) || 0;

    // グラフが既に存在している場合、破棄して新しいものを作成
    if (energyChart) {
      energyChart.destroy();
    }

    // グラフのデータ
    const data = {
      labels: ['きのみエナジー', '食材エナジー', 'スキル効果'],
      datasets: [{
        label: 'エネルギー分布',
        data: [berryEnergy, ingredientEnergy, skillEffect],
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
        borderWidth: 1
      }]
    };

    // グラフのオプション
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        tooltip: {
          callbacks: {
            label: function(tooltipItem) {
              return tooltipItem.raw.toFixed(2); // 小数点2位まで表示
            }
          }
        }
      },
      scales: {
        r: {
          min: 0,  // 最小値
          max: Math.max(berryEnergy, ingredientEnergy, skillEffect), // 最大値を各エネルギーの最大値に設定
          angleLines: {
            display: true
          },
          ticks: {
            stepSize: 10 // エネルギーの刻み
          }
        }
      }
    };

    // グラフを描画
    const ctx = document.getElementById('energyChart').getContext('2d');
    energyChart = new Chart(ctx, {
      type: 'radar', // レーダーチャート
      data: data,
      options: options
    });
  }
