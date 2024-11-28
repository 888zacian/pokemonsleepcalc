const pokemonData = {
    フシギダネ: { 
      helpSpeed: 4400,
      berrys:1,
      berry: "ドリのみ", 
      ratio:  0.257,
      possessions:  11,
      ingredients:[["あまいミツ", 2],["あまいミツ", 5],["あんみんトマト", 4],["あまいミツ", 7],["あんみんトマト", 7],["ほっこりポテト",6]], 
      skill: { name: "食材ゲットS", probability: 0.019}, 
      imageUrl: "images/001.png"
    },
    フシギソウ: { 
      helpSpeed: 3300,
      berrys:1,
      berry: "ドリのみ", 
      ratio:  0.255,
      possessions:  14,
      ingredients:[["あまいミツ", 2],["あまいミツ", 5],["あんみんトマト", 4],["あまいミツ", 7],["あんみんトマト", 7],["ほっこりポテト",6]], 
      skill: { name: "食材ゲットS", probability: 0.019}, 
      imageUrl: "images/002.png"
    },
    フシギバナ: { 
      helpSpeed: 2800,
      berrys:1,
      berry: "ドリのみ", 
      ratio:  0.266,
      possessions:  17,
      ingredients:[["あまいミツ", 2],["あまいミツ", 5],["あんみんトマト", 4],["あまいミツ", 7],["あんみんトマト", 7],["ほっこりポテト",6]], 
      skill: { name: "食材ゲットS", probability: 0.021}, 
      imageUrl: "images/003.png"
    },
    ヒトカゲ: { 
      helpSpeed: 3500,
      berrys:1,
      berry: "ヒメリのみ", 
      ratio:  0.201,
      possessions:  12,
      ingredients:[["マメミート", 2],["マメミート", 5],["あったかジンジャー", 4],["マメミート", 7],["あったかジンジャー", 7],["げきからハーブ",6]], 
      skill: { name: "食材ゲットS", probability: 0.011}, 
      imageUrl: "images/004.png"
    },
    リザード: { 
      helpSpeed: 3000,
      berrys:1,
      berry: "ヒメリのみ", 
      ratio:  0.227,
      possessions:  15,
      ingredients:[["マメミート", 2],["マメミート", 5],["あったかジンジャー", 4],["マメミート", 7],["あったかジンジャー", 7],["げきからハーブ",6]], 
      skill: { name: "食材ゲットS", probability: 0.016}, 
      imageUrl: "images/005.png"
    },
    リザードン: { 
      helpSpeed: 2400,
      berrys:1,
      berry: "ヒメリのみ", 
      ratio:  0.224,
      possessions: 19,
      ingredients:[["マメミート", 2],["マメミート", 5],["あったかジンジャー", 4],["マメミート", 7],["あったかジンジャー", 7],["げきからハーブ",6]], 
      skill: { name: "食材ゲットS", probability: 0.067}, 
      imageUrl: "images/006.png"
    },
    ゼニガメ: { 
      helpSpeed: 4500,
      berrys:1,
      berry: "オレンのみ", 
      ratio:  0.271,
      possessions: 10 ,
      ingredients:[["モーモーミルク", 2],["モーモーミルク", 5],["リラックスカカオ", 3],["モーモーミルク", 7],["リラックスカカオ", 5],["マメミート",7]], 
      skill: { name: "食材ゲットS", probability: 0.02}, 
      imageUrl: "images/007.png"
    },
    カメール: { 
      helpSpeed: 3400,
      berrys:1,
      berry: "オレンのみ", 
      ratio:  0.271,
      possessions:  14,
      ingredients:[["モーモーミルク", 2],["モーモーミルク", 5],["リラックスカカオ", 3],["モーモーミルク", 7],["リラックスカカオ", 5],["マメミート",7]], 
      skill: { name: "食材ゲットS", probability: 0.02}, 
      imageUrl: "images/008.png"
    },
    カメックス: { 
      helpSpeed: 2800,
      berrys:1,
      berry: "オレンのみ", 
      ratio: 0.275 ,
      possessions: 17 ,
      ingredients:[["モーモーミルク", 2],["モーモーミルク", 5],["リラックスカカオ", 3],["モーモーミルク", 7],["リラックスカカオ", 5],["マメミート",7]], 
      skill: { name: "食材ゲットS", probability: 0.021}, 
      imageUrl: "images/009.png"
    },
    キャタピー: { 
      helpSpeed:4400 ,
      berrys:2,
      berry: "ラムのみ", 
      ratio:  0.179,
      possessions: 11 ,
      ingredients:[["あまいミツ",1 ],["あまいミツ",2 ],["あんみんトマト",2 ],["あまいミツ",4 ],["あんみんトマト",3 ],["ワカクサ大豆",4]], 
      skill: { name: "食材ゲットS", probability:0.008 }, 
      imageUrl: "images/010.png"
    },
    トランセル: { 
      helpSpeed: 4200,
      berrys:2,
      berry: "ラムのみ", 
      ratio:  0.208,
      possessions:  13,
      ingredients:[["あまいミツ",1 ],["あまいミツ",2 ],["あんみんトマト",2 ],["あまいミツ",4 ],["あんみんトマト",3 ],["ワカクサ大豆",4]], 
      skill: { name: "食材ゲットS", probability:0.018 }, 
      imageUrl: "images/011.png"
    },
    バタフリー: { 
      helpSpeed: 2600,
      berrys:2,
      berry: "ラムのみ", 
      ratio:  0.197,
      possessions: 21 ,
      ingredients:[["あまいミツ",1 ],["あまいミツ",2 ],["あんみんトマト",2 ],["あまいミツ",4 ],["あんみんトマト",3 ],["ワカクサ大豆",4]], 
      skill: { name: "食材ゲットS", probability:0.014 }, 
      imageUrl: "images/012.png"
    },
    コラッタ: { 
      helpSpeed: 4900,
      berrys:2,
      berry: "キーのみ", 
      ratio:  0.237,
      possessions: 10 ,
      ingredients:[["とくせんりんご",1 ],["とくせんりんご",2 ],["ワカクサ大豆",2 ],["とくせんりんご",4 ],["ワカクサ大豆", 3],["マメミート",3]], 
      skill: { name: "げんきチャージS", probability:0.003 }, 
      imageUrl: "images/019.png"
    },
    ラッタ: { 
      helpSpeed: 3200,
      berrys:2,
      berry: "キーのみ", 
      ratio:  0.237,
      possessions: 16 ,
      ingredients:[["とくせんりんご",1 ],["とくせんりんご",2 ],["ワカクサ大豆",2 ],["とくせんりんご",4 ],["ワカクサ大豆", 3],["マメミート",3]], 
      skill: { name: "げんきチャージS", probability: 0.003}, 
      imageUrl: "images/020.png"
    },
    アーボ: { 
      helpSpeed: 5000,
      berrys:2,
      berry: "カゴのみ", 
      ratio:  0.235,
      possessions:  10,
      ingredients:[["マメミート",1 ],["マメミート", 2],["とくせんエッグ",2 ],["マメミート",4 ],["とくせんエッグ", 3],["げきからハーブ",3]], 
      skill: { name: "げんきチャージS", probability: 0.033}, 
      imageUrl: "images/023.png"
    },
    アーボック: { 
      helpSpeed: 3700,
      berrys:2,
      berry: "カゴのみ", 
      ratio:  0.264,
      possessions: 14 ,
      ingredients:[["マメミート",1 ],["マメミート", 2],["とくせんエッグ",2 ],["マメミート",4 ],["とくせんエッグ", 3],["げきからハーブ",3]], 
      skill: { name: "げんきチャージS", probability: 0.057}, 
      imageUrl: "images/024.png"
    },
    ピカチュウ: { 
      helpSpeed: 2700,
      berrys:2,
      berry: "ウブのみ", 
      ratio:  0.207,
      possessions: 17 ,
      ingredients:[["とくせんりんご",1],["とくせんリンゴ", 2],["あったかジンジャー", 2],["とくせんリンゴ", 4],["あったかジンジャー", 3],["とくせんエッグ",3]], 
      skill: { name: "エナジーチャージS", probability: 0.021}, 
      imageUrl: "images/025.png"
    },
    ピカチュウハロウィン: { 
      helpSpeed: 2500,
      berrys:2,
      berry: "ウブのみ", 
      ratio:  0.218,
      possessions:  18,
      ingredients:[["とくせんりんご",1],["とくせんリンゴ", 2],["あったかジンジャー", 2],["とくせんリンゴ", 4],["あったかジンジャー", 3],["とくせんエッグ",3]], 
      skill: { name: "エナジーチャージS", probability: 0.028}, 
      imageUrl: "images/025.png"
    },
    ピカチュウサンタ: { 
      helpSpeed: 2600,
      berrys:1,
      berry: "ウブのみ", 
      ratio: 0.131 ,
      possessions: 16 ,
      ingredients:[["とくせんりんご",1],["とくせんリンゴ", 2],["あったかジンジャー", 2],["とくせんリンゴ", 4],["あったかジンジャー", 3],["とくせんエッグ",3]], 
      skill: { name: "ゆめのかけらゲットS", probability: 0.042}, 
      imageUrl: "images/025.png"
    },
    ライチュウ: { 
      helpSpeed: 2200,
      berrys:2,
      berry: "ウブのみ", 
      ratio:  0.224,
      possessions:  21,
      ingredients:[["とくせんりんご",1],["とくせんリンゴ", 2],["あったかジンジャー", 2],["とくせんリンゴ", 4],["あったかジンジャー", 3],["とくせんエッグ",3]], 
      skill: { name: "エナジーチャージS", probability: 0.032}, 
      imageUrl: "images/026.png"
    },
    ピッピ: { 
      helpSpeed: 4000,
      berrys:2,
      berry: "モモンのみ", 
      ratio: 0.168 ,
      possessions:  16,
      ingredients:[["とくせんリンゴ",1 ],["とくせんリンゴ", 2],["あまいミツ",2 ],["とくせんリンゴ",4 ],["あまいミツ", 3],["ワカクサ大豆",3]], 
      skill: { name: "ゆびをふる", probability: 0.036}, 
      imageUrl: "images/035.png"
    },
    ピクシー: { 
      helpSpeed:2800 ,
      berrys:2,
      berry: "モモンのみ", 
      ratio:  0.168,
      possessions:  24,
      ingredients:[["とくせんリンゴ",1 ],["とくせんリンゴ", 2],["あまいミツ",2 ],["とくせんリンゴ",4 ],["あまいミツ", 3],["ワカクサ大豆",3]], 
      skill: { name: "ゆびをふる", probability:0.036 }, 
      imageUrl: "images/036.png"
    },
    ロコン: { 
      helpSpeed: 4700,
      berrys:2,
      berry: "ヒメリのみ", 
      ratio:  0.168,
      possessions: 13 ,
      ingredients:[["ワカクサ大豆",1 ],["ワカクサ大豆",2 ],["ワカクサコーン",2 ],["ワカクサ大豆",4 ],["ワカクサコーン", 3],["ほっこりポテト",3]], 
      skill: { name: "げんきエールS", probability: 0.027}, 
      imageUrl: "images/037.png"
    },
    キュウコン: { 
      helpSpeed: 2600,
      berrys:2,
      berry: "ヒメリのみ", 
      ratio:  0.164,
      possessions:  23,
      ingredients:[["ワカクサ大豆",1 ],["ワカクサ大豆",2 ],["ワカクサコーン",2 ],["ワカクサ大豆",4 ],["ワカクサコーン", 3],["ほっこりポテト",3]], 
      skill: { name: "げんきエールS", probability:0.025 },  
      imageUrl: "images/038.png"
    },
    プリン: { 
      helpSpeed:3900 ,
      berrys:1,
      berry: "モモンのみ", 
      ratio: 0.182 ,
      possessions:  9,
      ingredients:[["あまいミツ",1 ],["あまいミツ",2 ],["ピュアなオイル", 2],["あまいミツ", 4],["ピュアなオイル", 3],["リラックスカカオ",2]], 
      skill: { name: "げんきオールS", probability:0.043 }, 
      imageUrl: "images/039.png"
    },
    プクリン: { 
      helpSpeed: 2900,
      berrys:1,
      berry: "モモンのみ", 
      ratio:  0.174,
      possessions:  13,
      ingredients:[["あまいミツ",1 ],["あまいミツ",2 ],["ピュアなオイル",2 ],["あまいミツ",4 ],["ピュアなオイル", 3],["リラックスカカオ",2]], 
      skill: { name: "げんきオールS", probability: 0.04}, 
      imageUrl: "images/040.png"
    },
    ディグダ: { 
      helpSpeed: 4300,
      berrys:1,
      berry: "フィラのみ", 
      ratio:  0.192,
      possessions: 10 ,
      ingredients:[["あんみんトマト", 2],["あんみんトマト",5 ],["ふといながねぎ", 3],["あんみんトマト",7 ],["ふといながねぎ", 4],["ワカクサ大豆",8]], 
      skill: { name: "エナジーチャージS", probability: 0.021}, 
      imageUrl: "images/050.png"
    },
    ダグトリオ: { 
      helpSpeed: 2800,
      berrys:1,
      berry: "フィラのみ", 
      ratio:  0.19,
      possessions:  16,
      ingredients:[["あんみんトマト", 2],["あんみんトマト",5 ],["ふといながねぎ", 3],["あんみんトマト", 7],["ふといながねぎ", 4],["ワカクサ大豆",8]], 
      skill: { name: "エナジーチャージS", probability: 0.02}, 
      imageUrl: "images/051.png"
    },
    ニャース: { 
      helpSpeed: 4400,
      berrys:1,
      berry: "キーのみ", 
      ratio:  0.163,
      possessions:  9,
      ingredients:[["モーモーミルク", 1],["モーモーミルク",2 ],["マメミート",2 ],["モーモーミルク", 4],["マメミート",3 ],["",]], 
      skill: { name: "ゆめのかけらゲットS", probability: 0.042}, 
      imageUrl: "images/052.png"
    },
    ペルシアン: { 
      helpSpeed:2800 ,
      berrys:1,
      berry: "キーのみ", 
      ratio:  0.169,
      possessions: 12 ,
      ingredients:[["モーモーミルク",1 ],["モーモーミルク",2 ],["マメミート", 2],["モーモーミルク", 4],["マメミート",3 ],["",]], 
      skill: { name: "ゆめのかけらゲットS", probability: 0.044}, 
      imageUrl: "images/053.png"
    },
    コダック: { 
      helpSpeed: 5400,
      berrys:1,
      berry: "オレンのみ", 
      ratio:  0.138,
      possessions:  8,
      ingredients:[["リラックスカカオ",1 ],["リラックスカカオ", 2],["とくせんリンゴ",4 ],["リラックスカカオ", 4],["とくせんリンゴ", 6],["マメミート",5]], 
      skill: { name: "エナジーチャージS", probability: 0.126}, 
      imageUrl: "images/054.png"
    },
    ゴルダック: { 
      helpSpeed: 3400,
      berrys:1,
      berry: "オレンのみ", 
      ratio:  0.162,
      possessions: 14 ,
      ingredients:[["リラックスカカオ",1 ],["リラックスカカオ",2 ],["とくせんリンゴ", 4],["リラックスカカオ",4 ],["とくせんリンゴ", 6],["マメミート",5]], 
      skill: { name: "エナジーチャージS", probability: 0.125}, 
      imageUrl: "images/055.png"
    },
    マンキー: { 
      helpSpeed: 4200,
      berry: "クラボのみ", 
      ratio:  0.197,
      possessions: 12 ,
      ingredients:[["マメミート",1 ],["マメミート", 2],["あじわいキノコ",1 ],["マメミート", 4],["あじわいキノコ", 2],["あまいミツ",4]], 
      skill: { name: "エナジーチャージS", probability: 0.022}, 
      imageUrl: "images/056.png"
    },
    オコリザル: { 
      helpSpeed: 2800,
      berry: "クラボのみ", 
      ratio:  0.02,
      possessions:  17,
      ingredients:[["マメミート", 1],["マメミート", 2],["あじわいキノコ",1 ],["マメミート", 4],["あじわいキノコ", 2],["あまいミツ",4]], 
      skill: { name: "エナジーチャージS", probability: 0.024}, 
      imageUrl: "images/057.png"
    },
    ガーディ: { 
      helpSpeed: 4300,
      berrys:1,
      berry: "ヒメリのみ", 
      ratio:  0.138,
      possessions:  8,
      ingredients:[["げきからハーブ", 1],["げきからハーブ",2 ],["マメミート", 3],["げきからハーブ",4 ],["マメミート", 5],["モーモーミルク",5]], 
      skill: { name: "おてつだいサポートS", probability: 0.05}, 
      imageUrl: "images/058.png"
    },
    ウインディ: { 
      helpSpeed: 2500,
      berrys:1,
      berry: "ヒメリのみ", 
      ratio:  0.136,
      possessions:  16,
      ingredients:[["げきからハーブ",1 ],["げきからハーブ", 2],["マメミート",3 ],["げきからハーブ",4 ],["マメミート",5 ],["モーモーミルク",5]], 
      skill: { name: "おてつだいサポートS", probability: 0.049}, 
      imageUrl: "images/059.png"
    },
    マダツボミ: { 
      helpSpeed:5200 ,
      berrys:1,
      berry: "ドリのみ", 
      ratio:  0.233,
      possessions:  8,
      ingredients:[["あんみんトマト", 2],["あんみんトマト", 5],["ほっこりポテト",4 ],["あんみんトマト", 7],["ほっこりポテト",6 ],["ふといながねぎ",4]], 
      skill: { name: "げんきチャージS", probability: 0.039}, 
      imageUrl: "images/069.png"
    },
    ウツドン: { 
      helpSpeed: 3800,
      berrys:1,
      berry: "ドリのみ", 
      ratio:  0.235,
      possessions:  12,
      ingredients:[["あんみんトマト",2 ],["あんみんトマト", 5],["ほっこりポテト",4 ],["あんみんトマト", 7],["ほっこりポテト",6 ],["ふといながねぎ",4]], 
      skill: { name: "げんきチャージS", probability: 0.04}, 
      imageUrl: "images/070.png"
    },
    ウツボット: { 
      helpSpeed: 2800,
      berrys:1,
      berry: "ドリのみ", 
      ratio:  0.233,
      possessions:  17,
      ingredients:[["あんみんトマト",2 ],["あんみんトマト",5 ],["ほっこりポテト", 4],["あんみんトマト", 7],["ほっこりポテト", 6],["ふといながねぎ",4]], 
      skill: { name: "げんきチャージS", probability: 0.039}, 
      imageUrl: "images/071.png"
    },
    イシツブテ: { 
      helpSpeed: 5700,
      berrys:1,
      berry: "オボンのみ",
      ratio:  0.281,
      possessions:  9, 
      ingredients:[["ワカクサ大豆",2 ],["ワカクサ大豆",5 ],["ほっこりポテト",4 ],["ワカクサ大豆", 7],["ほっこりポテト", 6],["あじわいキノコ",4]], 
      skill: { name: "エナジーチャージS", probability: 0.052}, 
      imageUrl: "images/074.png"
    },
    ゴローン: { 
      helpSpeed:4000 ,
      berrys:1,
      berry: "オボンのみ", 
      ratio:  0.272,
      possessions:  12,
      ingredients:[["ワカクサ大豆",2 ],["ワカクサ大豆", 5],["ほっこりポテト",4 ],["ワカクサ大豆",7 ],["ほっこりポテト", 6],["あじわいキノコ",4]], 
      skill: { name: "エナジーチャージS", probability: 0.048}, 
      imageUrl: "images/075.png"
    },
    ゴローニャ: { 
      helpSpeed: 3100,
      berrys:1,
      berry: "オボンのみ", 
      ratio:  0.28,
      possessions: 16 ,
      ingredients:[["ワカクサ大豆", 2],["ワカクサ大豆",5 ],["ほっこりポテト",4 ],["ワカクサ大豆",7 ],["ほっこりポテト", 6],["あじわいキノコ",4]], 
      skill: { name: "エナジーチャージS", probability:0.052 }, 
      imageUrl: "images/076.png"
    },
    ヤドン: { 
      helpSpeed: 5700,
      berrys:1,
      berry: "オレンのみ", 
      ratio:  0.151,
      possessions:  9,
      ingredients:[["リラックスカカオ",1 ],["リラックスカカオ",2 ],["おいしいシッポ", 1],["リラックスカカオ", 4],["おいしいシッポ", 2],["あんみんトマト",5]], 
      skill: { name: "げんきエールS", probability: 0.067}, 
      imageUrl: "images/079.png"
    },
    ヤドラン: { 
      helpSpeed: 3800,
      berrys:1,
      berry: "オレンのみ", 
      ratio:  0.197,
      possessions:  16,
      ingredients:[["リラックスカカオ", 1],["リラックスカカオ", 2],["おいしいシッポ",1 ],["リラックスカカオ",4 ],["おいしいシッポ",2 ],["あんみんトマト",5]], 
      skill: { name: "げんきエールS", probability: 0.068}, 
      imageUrl: "images/080.png"
    },
    コイル: { 
      helpSpeed: 5800,
      berrys:1,
      berry: "ベリブのみ", 
      ratio:  0.182,
      possessions: 8 ,
      ingredients:[["ピュアなオイル",1],["ピュアなオイル",2 ],["げきからハーブ",2],["ピュアなオイル", 4],["げきからハーブ", 3],["",]], 
      skill: { name: "料理パワーアップS", probability: 0.064}, 
      imageUrl: "images/081.png"
    },
    レアコイル: { 
      helpSpeed: 4000,
      berrys:1,
      berry: "ベリブのみ", 
      ratio:  0.182,
      possessions: 11 ,
      ingredients:[["ピュアなオイル",1 ],["ピュアなオイル",2 ],["げきからハーブ", 2],["ピュアなオイル",4 ],["げきからハーブ", 3],["",]], 
      skill: { name: "料理パワーアップS", probability:0.063 }, 
      imageUrl: "images/082.png"
    },
    ドードー: { 
      helpSpeed: 3800,
      berrys:2,
      berry: "ドリのみ", 
      ratio:  0.184,
      possessions:  13,
      ingredients:[["ワカクサ大豆", 1],["ワカクサ大豆",2 ],["リラックスカカオ", 1],["ワカクサ大豆", 4],["リラックスカカオ", 2],["マメミート",3]], 
      skill: { name: "げんきチャージS", probability: 0.02}, 
      imageUrl: "images/084.png"
    },
    ドードリオ:{ 
      helpSpeed: 2400,
      berrys:2,
      berry: "ドリのみ", 
      ratio:  0.184,
      possessions: 21,
      ingredients:[["ワカクサ大豆",1 ],["ワカクサ大豆",2 ],["リラックスカカオ",1 ],["ワカクサ大豆",4 ],["リラックスカカオ", 2],["マメミート",3]], 
      skill: { name: "げんきチャージS", probability: 0.02}, 
      imageUrl: "images/085.png"
    },
    ゴース: { 
      helpSpeed: 3800,
      berrys:1,
      berry: "ブリーのみ", 
      ratio:  0.144,
      possessions:  10,
      ingredients:[["げきからハーブ", 2],["げきからハーブ",5 ],["あじわいキノコ",4 ],["げきからハーブ",7 ],["あじわいキノコ",6 ],["ピュアなオイル",8]], 
      skill: { name: "エナジーチャージS", probability: 0.015}, 
      imageUrl: "images/092.png"
    },
    ゴースト:{ 
      helpSpeed: 3000,
      berrys:1,
      berry: "ブリーのみ", 
      ratio: 0.157 ,
      possessions: 14 ,
      ingredients:[["げきからハーブ", 2],["げきからハーブ", 5],["あじわいキノコ",4 ],["げきからハーブ",7 ],["あじわいキノコ", 6],["ピュアなオイル",8]], 
      skill: { name: "エナジーチャージS", probability: 0.022}, 
      imageUrl: "images/093.png"
    },
    ゲンガー: { 
      helpSpeed: 2200,
      berrys:1,
      berry: "ブリーのみ", 
      ratio:  0.161,
      possessions:  18,
      ingredients:[["げきからハーブ", 2],["げきからハーブ", 5],["あじわいキノコ", 4],["げきからハーブ", 7],["あじわいキノコ",6 ],["ピュアなオイル",8]], 
      skill: { name: "エナジーチャージS", probability: 0.024}, 
      imageUrl: "images/094.png"
    },
    イワーク: { 
      helpSpeed: 3100,
      berrys:2,
      berry: "オボンのみ", 
      ratio:  0.132,
      possessions:  22,
      ingredients:[["あんみんトマト", 1],["あんみんトマト",2 ],["マメミート", 2],["あんみんトマト", 4],["マメミート",4 ],["ほっこりポテト",3]], 
      skill: { name: "食材ゲットS", probability: 0.023}, 
      imageUrl: "images/95.png"
    },
    カラカラ: { 
      helpSpeed: 4800,
      berrys:2,
      berry: "フィラのみ", 
      ratio:  0.223,
      possessions: 10 ,
      ingredients:[["あったかジンジャー",1 ],["あったかジンジャー",2 ],["リラックスカカオ",2 ],["あったかジンジャー", 4],["リラックスカカオ",3 ],["",]], 
      skill: { name: "げんきチャージS", probability: 0.044}, 
      imageUrl: "images/104.png"
    },
    ガラガラ: { 
      helpSpeed: 3500,
      berrys:2,
      berry: "フィラのみ", 
      ratio:  0.223,
      possessions: 15 ,
      ingredients:[["あったかジンジャー", 1],["あったかジンジャー", 2],["リラックスカカオ",2 ],["あったかジンジャー",4 ],["リラックスカカオ",3 ],["",]], 
      skill: { name: "げんきチャージS", probability:0.045 }, 
      imageUrl: "images/105.png"
    },
    ガルーラ: { 
      helpSpeed: 2800,
      berrys:1,
      berry: "キーのみ", 
      ratio:  0.222,
      possessions: 18 ,
      ingredients:[["あったかジンジャー", 2],["あったかジンジャー",5 ],["ほっこりポテト",4 ],["あったかジンジャー", 7],["ほっこりポテト",6 ],["ワカクサ大豆",8]], 
      skill: { name: "食材ゲットS", probability: 0.017}, 
      imageUrl: "images/115.png"
    },
    バリヤード: { 
      helpSpeed: 2800,
      berrys:1,
      berry: "マゴのみ", 
      ratio:  0.216,
      possessions: 17 ,
      ingredients:[["あんみんトマト", 2],["あんみんトマト",5 ],["ほっこりポテト", 4],["あんみんトマト", 7],["ほっこりポテト", 6],["ふといながねぎ",4]], 
      skill: { name: "エナジーチャージS", probability: 0.039}, 
      imageUrl: "images/122.png"
    },
    カイロス: { 
      helpSpeed: 2400,
      berrys:1,
      berry: "ラムのみ", 
      ratio:  0.216,
      possessions:  24,
      ingredients:[["あまいミツ", 2],["あまいミツ",5 ],["とくせんリンゴ", 5],["あまいミツ", 7],["とくせんリンゴ",8 ],["マメミート",7]], 
      skill: { name: "エナジーチャージS", probability: 0.031}, 
      imageUrl: "images/127.png"
    },
    メタモン: { 
      helpSpeed: 3500,
      berrys:1,
      berry: "キーのみ", 
      ratio:  0.201,
      possessions:  17,
      ingredients:[["ピュアなオイル", 2],["ピュアなオイル",5 ],["ふといながねぎ", 3],["ピュアなオイル", 7],["ふといながねぎ",5 ],["おいしいシッポ",3]], 
      skill: { name: "エナジーチャージS", probability: 0.036}, 
      imageUrl: "images/132.png"
    },
    イーブイ: { 
      helpSpeed: 3700,
      berrys:1,
      berry: "キーのみ", 
      ratio:  0.192,
      possessions: 12 ,
      ingredients:[["モーモーミルク", 1],["モーモーミルク",2 ],["リラックスカカオ", 1],["モーモーミルク", 4],["リラックスカカオ", 2],["マメミート",3]], 
      skill: { name: "食材ゲットS", probability: 0.055}, 
      imageUrl: "images/133.png"
    },
    シャワーズ: { 
      helpSpeed: 3100,
      berrys:1,
      berry: "オレンのみ", 
      ratio:  0.212,
      possessions:  13,
      ingredients:[["モーモーミルク", 1],["モーモーミルク",2 ],["リラックスカカオ", 1],["モーモーミルク", 4],["リラックスカカオ", 2],["マメミート",3]], 
      skill: { name: "食材ゲットS", probability: 0.061}, 
      imageUrl: "images/134.png"
    },
    サンダース: { 
      helpSpeed: 2200,
      berrys:1,
      berry: "ウブのみ", 
      ratio:  0.151,
      possessions: 17 ,
      ingredients:[["モーモーミルク",1 ],["モーモーミルク",2 ],["リラックスカカオ", 1],["モーモーミルク", 4],["リラックスカカオ", 2],["マメミート",3]], 
      skill: { name: "おてつだいサポートS", probability: 0.039}, 
      imageUrl: "images/135.png"
    },
    ブースター: { 
      helpSpeed:2700 ,
      berrys:1,
      berry: "ヒメリのみ", 
      ratio:  0.185,
      possessions:  14,
      ingredients:[["モーモーミルク", 1],["モーモーミルク",2 ],["リラックスカカオ",1 ],["モーモーミルク", 4],["リラックスカカオ",2 ],["マメミート",3]], 
      skill: { name: "料理パワーアップS", probability: 0.052}, 
      imageUrl: "images/136.png"
    },
    ミニリュウ: { 
      helpSpeed: 5000,
      berrys:1,
      berry: "ヤチェのみ", 
      ratio:  0.25,
      possessions:  9,
      ingredients:[["げきからハーブ",2 ],["げきからハーブ",5 ],["ワカクサコーン",4 ],["げきからハーブ", 7],["ワカクサコーン",7 ],["ピュアなオイル",8]], 
      skill: { name: "げんきチャージS", probability: 0.02}, 
      imageUrl: "images/147.png"
    },
    ハクリュー: { 
      helpSpeed: 3800,
      berrys:1,
      berry: "ヤチェのみ",
      ratio:  0.262,
      possessions:  12, 
      ingredients:[["げきからハーブ",2 ],["げきからハーブ",5 ],["ワカクサコーン", 4],["げきからハーブ", 7],["ワカクサコーン",7 ],["ピュアなオイル",8]], 
      skill: { name: "げんきチャージS", probability: 0.025}, 
      imageUrl: "images/148.png"
    },
    カイリュー: { 
      helpSpeed: 2600,
      berrys:1,
      berry: "ヤチェのみ", 
      ratio:  0.264,
      possessions:  20,
      ingredients:[["げきからハーブ",2 ],["げきからハーブ",5 ],["ワカクサコーン", 4],["げきからハーブ", 7],["ワカクサコーン",7 ],["ピュアなオイル",8]], 
      skill: { name: "げんきチャージS", probability: 0.026}, 
      imageUrl: "images/149.png"
    },
    チコリータ: { 
      helpSpeed: 4400,
      berrys:2,
      berry: "ドリのみ", 
      ratio:  0.169,
      possessions:  12,
      ingredients:[["リラックスカカオ",1 ],["リラックスカカオ",2 ],["あまいミツ",3 ],["リラックスカカオ",4 ],["あまいミツ", 5],["ふといながねぎ",3]], 
      skill: { name: "エナジーチャージS", probability: 0.039}, 
      imageUrl: "images/152.png"
    },
    ベイリーフ:{ 
      helpSpeed: 3300,
      berrys:2,
      berry: "ドリのみ", 
      ratio:  0.168,
      possessions:  17,
      ingredients:[["リラックスカカオ", 1],["リラックスカカオ",2 ],["あまいミツ", 3],["リラックスカカオ", 4],["あまいミツ", 5],["ふといながねぎ",3]], 
      skill: { name: "エナジーチャージS", probability: 0.038}, 
      imageUrl: "images/153.png"
    },
    メガニウム: { 
      helpSpeed: 2800,
      berrys:2,
      berry: "ドリのみ", 
      ratio:  0.175,
      possessions:  20,
      ingredients:[["リラックスカカオ", 1],["リラックスカカオ", 2],["あまいミツ", 3],["リラックスカカオ",4],["あまいミツ",5 ],["ふといながねぎ",3]], 
      skill: { name: "エナジーチャージS", probability: 0.046}, 
      imageUrl: "images/154.png"
    },
    ヒノアラシ: { 
      helpSpeed: 3500,
      berrys:2,
      berry: "ヒメリのみ", 
      ratio:  0.186,
      possessions: 14,
      ingredients:[["あったかジンジャー",1 ],["あったかジンジャー", 2],["げきからハーブ", 2],["あったかジンジャー", 4],["げきからハーブ",3 ],["ピュアなオイル",3]], 
      skill: { name: "エナジーチャージS", probability: 0.021}, 
      imageUrl: "images/155.png"
    },
    マグマラシ: { 
      helpSpeed: 3000,
      berrys:2,
      berry: "ヒメリのみ", 
      ratio:  0.21,
      possessions:  18,
      ingredients:[["あったかジンジャー", 1],["あったかジンジャー",2 ],["げきからハーブ",2 ],["あったかジンジャー", 4],["げきからハーブ", 3],["ピュアなオイル",3]], 
      skill: { name: "エナジーチャージS", probability: 0.041}, 
      imageUrl: "images/156.png"
    },
    バクフーン: { 
      helpSpeed: 2400,
      berrys:2,
      berry: "ヒメリのみ", 
      ratio:  0.208,
      possessions: 23 ,
      ingredients:[["あったかジンジャー",1 ],["あったかジンジャー", 2],["げきからハーブ", 2],["あったかジンジャー", 4],["げきからハーブ",3 ],["ピュアなオイル",3]], 
      skill: { name: "エナジーチャージS", probability: 0.039}, 
      imageUrl: "images/157.png"
    },
    ワニノコ: { 
      helpSpeed: 4500,
      berrys:2,
      berry: "オレンのみ", 
      ratio:  0.253,
      possessions:  11,
      ingredients:[["マメミート",1 ],["マメミート",2 ],["ピュアなオイル",2 ],["マメミート", 4],["ピュアなオイル", 3],["",]], 
      skill: { name: "エナジーチャージS", probability: 0.052}, 
      imageUrl: "images/158.png"
    },
    アリゲイツ: { 
      helpSpeed: 3400,
      berrys:2,
      berry: "オレンのみ", 
      ratio: 0.253 ,
      possessions:  15,
      ingredients:[["マメミート",1 ],["マメミート",2 ],["ピュアなオイル",2 ],["マメミート", 4],["ピュアなオイル",3 ],["",]], 
      skill: { name: "エナジーチャージS", probability: 0.052}, 
      imageUrl: "images/159.png"
    },
    オーダイル: { 
      helpSpeed:2800 ,
      berrys:2,
      berry: "オレンのみ", 
      ratio:  0.253,
      possessions: 19 ,
      ingredients:[["マメミート",1 ],["マメミート", 2],["ピュアなオイル", 2],["マメミート", 4],["ピュアなオイル",3 ],["",]], 
      skill: { name: "エナジーチャージS", probability: 0.055}, 
      imageUrl: "images/160.png"
    },
    ピチュー: { 
      helpSpeed: 4300,
      berrys:2,
      berry: "ウブのみ", 
      ratio:  0.21,
      possessions: 10 ,
      ingredients:[["とくせんリンゴ",1 ],["とくせんリンゴ",2 ],["あったかジンジャー", 2],["とくせんリンゴ",4 ],["あったかジンジャー", 3],["とくせんエッグ",3]], 
      skill: { name: "エナジーチャージS", probability: 0.023}, 
      imageUrl: "images/172.png"
    },
    ピィ: { 
      helpSpeed: 5600,
      berrys:2,
      berry: "モモンのみ", 
      ratio:  0.164,
      possessions:  10,
      ingredients:[["とくせんリンゴ", 1],["とくせんリンゴ",2 ],["あまいミツ",2 ],["とくせんリンゴ", 4],["あまいミツ", 3],["ワカクサ大豆",3]], 
      skill: { name: "ゆびをふる", probability: 0.034}, 
      imageUrl: "images/173.png"
    },
    ププリン: { 
      helpSpeed:5200 ,
      berrys:1,
      berry: "モモンのみ", 
      ratio:  0.17,
      possessions:  8,
      ingredients:[["あまいミツ", 1],["あまいミツ",2 ],["ピュアなオイル", 2],["あまいミツ", 4],["ピュアなオイル", 3],["リラックスカカオ",2]], 
      skill: { name: "げんきオールS", probability: 0.038}, 
      imageUrl: "images/174.png"
    },
    トゲピー: { 
      helpSpeed: 4800,
      berrys:1,
      berry: "モモンのみ", 
      ratio:  0.151,
      possessions:  8,
      ingredients:[["とくせんエッグ",1 ],["とくせんエッグ", 2],["あったかジンジャー",2 ],["とくせんエッグ",4 ],["あったかジンジャー",4 ],["リラックスカカオ",3]], 
      skill: { name: "ゆびをふる", probability: 0.049}, 
      imageUrl: "images/175.png"
    },
    トゲチック: { 
      helpSpeed:3800 ,
      berrys:1,
      berry: "モモンのみ", 
      ratio:  0.163,
      possessions:  10,
      ingredients:[["とくせんエッグ",1 ],["とくせんエッグ",2 ],["あったかジンジャー",2 ],["とくせんエッグ",4 ],["あったかジンジャー",4 ],["リラックスカカオ",3]], 
      skill: { name: "ゆびをふる", probability: 0.056}, 
      imageUrl: "images/176.png"
    },
    メリープ: { 
      helpSpeed: 4600,
      berrys:1,
      berry: "ウブのみ", 
      ratio:  0.128,
      possessions:  9,
      ingredients:[["げきからハーブ",1 ],["げきからハーブ",2 ],["とくせんエッグ",3 ],["げきからハーブ",4 ],["とくせんエッグ", 4],["",]], 
      skill: { name: "エナジーチャージM", probability: 0.047}, 
      imageUrl: "images/179.png"
    },
    モココ: { 
      helpSpeed: 3300,
      berrys:1,
      berry: "ウブのみ", 
      ratio:  0.127,
      possessions: 11 ,
      ingredients:[["げきからハーブ",1],["げきからハーブ", 2],["とくせんエッグ", 3],["げきからハーブ", 4],["とくせんエッグ",4 ],["",]], 
      skill: { name: "エナジーチャージM", probability: 0.046}, 
      imageUrl: "images/180.png"
    },
    デンリュウ: { 
      helpSpeed: 2500,
      berrys:1,
      berry: "ウブのみ", 
      ratio:  0.13,
      possessions:  15,
      ingredients:[["げきからハーブ", 1],["げきからハーブ",2 ],["とくせんエッグ",3 ],["げきからハーブ",4 ],["とくせんエッグ",4 ],["",]], 
      skill: { name: "エナジーチャージM", probability: 0.047}, 
      imageUrl: "images/181.png"
    },
    ウソッキー: { 
      helpSpeed: 4000,
      berrys:1,
      berry: "オボンのみ", 
      ratio:  0.217,
      possessions: 16 ,
      ingredients:[["あんみんトマト",1 ],["あんみんトマト", 2],["ワカクサ大豆",2 ],["あんみんトマト", 4],["ワカクサ大豆", 4],["あじわいキノコ",2]], 
      skill: { name: "エナジーチャージM", probability: 0.072}, 
      imageUrl: "images/185.png"
    },
    ウパー: { 
      helpSpeed: 5900,
      berrys:1,
      berry: "オレンのみ", 
      ratio:  0.201,
      possessions: 10 ,
      ingredients:[["あじわいキノコ",2 ],["あじわいキノコ", 5],["ほっこりポテト",6 ],["あじわいキノコ", 7],["ほっこりポテト",10 ],["マメミート",12]], 
      skill: { name: "げんきチャージS", probability: 0.038}, 
      imageUrl: "images/194.png"
    },
    ヌオー: { 
      helpSpeed:3400 ,
      berrys:1,
      berry: "オレンのみ", 
      ratio:  0.19,
      possessions: 16 ,
      ingredients:[["あじわいキノコ", 2],["あじわいキノコ",5 ],["ほっこりポテト",6 ],["あじわいキノコ", 7],["ほっこりポテト",10 ],["マメミート",12]], 
      skill: { name: "げんきチャージS", probability: 0.032}, 
      imageUrl: "images/195.png"
    },
    エーフィ:{ 
      helpSpeed: 2400,
      berrys:1,
      berry: "マゴのみ", 
      ratio:  0.164,
      possessions: 16 ,
      ingredients:[["モーモーミルク", 1],["モーモーミルク", 2],["リラックスカカオ", 1],["モーモーミルク",4 ],["リラックスカカオ",2 ],["マメミート",3]], 
      skill: { name: "エナジーチャージM", probability: 0.044}, 
      imageUrl: "images/196.png"
    },
    ブラッキー: { 
      helpSpeed: 3200,
      berrys:1,
      berry: "ウイのみ", 
      ratio:  0.219,
      possessions: 14 ,
      ingredients:[["モーモーミルク",1 ],["モーモーミルク",2 ],["リラックスカカオ", 1],["モーモーミルク", 4],["リラックスカカオ", 2],["マメミート",3]], 
      skill: { name: "げんきチャージS(つきのひかり)", probability: 0.101}, 
      imageUrl: "images/197.png"
    },
    ヤドキング: { 
      helpSpeed: 3400,
      berrys:1,
      berry: "オレンのみ", 
      ratio:  0.166,
      possessions: 17 ,
      ingredients:[["リラックスカカオ", 1],["リラックスカカオ",2 ],["おいしいシッポ", 1],["リラックスカカオ", 4],["おいしいシッポ", 2],["あんみんトマト",5]], 
      skill: { name: "げんきエールS", probability: 0.074}, 
      imageUrl: "images/199.png"
    },
    ソーナンス: { 
      helpSpeed:3500 ,
      berrys:1,
      berry: "マゴのみ", 
      ratio:  0.211,
      possessions: 13 ,
      ingredients:[["とくせんリンゴ", 1],["とくせんリンゴ",2 ],["あじわいキノコ", 1],["とくせんリンゴ", 4],["あじわいキノコ", 2],["ピュアなオイル",3]], 
      skill: { name: "げんきエールS", probability: 0.064}, 
      imageUrl: "images/202.png"
    },
    ハガネール:{ 
      helpSpeed: 3000,
      berrys:2,
      berry: "ベリブのみ", 
      ratio:  0.154,
      possessions: 25 ,
      ingredients:[["あんみんトマト", 1],["あんみんトマト",2 ],["マメミート",2 ],["あんみんトマト", 4],["マメミート", 4],["ほっこりポテト",3]], 
      skill: { name: "食材ゲットS", probability: 0.032}, 
      imageUrl: "images/208.png"
    },
    ヘラクロス: { 
      helpSpeed: 2400,
      berrys:1,
      berry: "ラムのみ", 
      ratio:  0.158,
      possessions:  20,
      ingredients:[["あまいミツ", 1],["あまいミツ",2 ],["あじわいキノコ",1 ],["あまいミツ", 4],["あじわいキノコ",2 ],["マメミート",4]], 
      skill: { name: "食材ゲットS", probability: 0.047}, 
      imageUrl: "images/214.png"
    },
    デリバード: { 
      helpSpeed: 2500,
      berrys:1,
      berry: "ドリのみ", 
      ratio:  0.188,
      possessions:  10,
      ingredients:[["とくせんエッグ", 2],["とくせんエッグ", 5],["とくせんリンゴ", 6],["とくせんエッグ", 7],["とくせんリンゴ", 9],["リラックスカカオ",5]], 
      skill: { name: "食材ゲットS", probability: 0.015}, 
      imageUrl: "images/225.png"
    },
    デルビル: { 
      helpSpeed: 4900,
      berrys:2,
      berry: "ウイのみ", 
      ratio:  0.201,
      possessions: 10 ,
      ingredients:[["げきからハーブ", 1],["げきからハーブ",2],["あったかジンジャー",3 ],["げきからハーブ", 4],["あったかジンジャー", 4],["ふといながねぎ",3]], 
      skill: { name: "エナジーチャージM", probability: 0.037}, 
      imageUrl: "images/228.png"
    },
    ヘルガー: { 
      helpSpeed: 3300,
      berrys:2,
      berry: "ウイのみ", 
      ratio:  0.203,
      possessions: 16 ,
      ingredients:[["げきからハーブ", 1],["げきからハーブ", 2],["あったかジンジャー", 3],["げきからハーブ", 4],["あったかジンジャー", 4],["ふといながねぎ",3]], 
      skill: { name: "エナジーチャージM", probability: 0.04}, 
      imageUrl: "images/229.png"
    },
    ライコウ: { 
      helpSpeed: 2100,
      berrys:1,
      berry: "ウブのみ", 
      ratio: 0.192 ,
      possessions: 22 ,
      ingredients:[["マメミート",1 ],["マメミート",2 ],["げきからハーブ",2 ],["マメミート", 4],["げきからハーブ",3 ],["ふといながねぎ",2]], 
      skill: { name: "おてつだいブースト", probability: 0.019}, 
      imageUrl: "images/243.png"
    },
    エンテイ:{ 
      helpSpeed: 2400,
      berrys:1,
      berry: "ヒメリのみ", 
      ratio:  0.187,
      possessions:  19,
      ingredients:[["ピュアなオイル",1 ],["ピュアなオイル", 2],["あんみんトマト",2 ],["ピュアなオイル", 4],["あんみんトマト", 4],["あじわいキノコ",3]], 
      skill: { name: "おてつだいブースト", probability: 0.023}, 
      imageUrl: "images/244.png"
    },
    スイクン: { 
      helpSpeed: 2700,
      berrys:1,
      berry: "オレンのみ", 
      ratio:  0.277,
      possessions:  17,
      ingredients:[["とくせんリンゴ",1 ],["とくせんリンゴ",2 ],["ピュアなオイル", 2],["とくせんリンゴ",4 ],["ピュアなオイル", 3],["ワカクサコーン",2]], 
      skill: { name: "おてつだいブースト", probability: 0.026}, 
      imageUrl: "images/245.png"
    },
    ヨーギラス: { 
      helpSpeed: 4800,
      berrys:1,
      berry: "オボンのみ", 
      ratio:  0.238,
      possessions:  9,
      ingredients:[["あったかジンジャー",2 ],["あったかジンジャー", 5],["ワカクサ大豆", 5],["あったかジンジャー", 7],["ワカクサ大豆", 8],["マメミート",8]], 
      skill: { name: "げんきチャージS", probability: 0.041}, 
      imageUrl: "images/246.png"
    },
    サナギラス: { 
      helpSpeed: 3600,
      berrys:1,
      berry: "オボンのみ", 
      ratio:  0.247,
      possessions:  13,
      ingredients:[["あったかジンジャー",2 ],["あったかジンジャー",5 ],["ワカクサ大豆",5 ],["あったかジンジャー",7 ],["ワカクサ大豆",8 ],["マメミート",8]], 
      skill: { name: "げんきチャージS", probability: 0.045}, 
      imageUrl: "images/247.png"
    },
    バンギラス:{ 
      helpSpeed: 2700,
      berrys:1,
      berry: "ウイのみ", 
      ratio:  0.266,
      possessions:  19,
      ingredients:[["あったかジンジャー", 2],["あったかジンジャー", 5],["ワカクサ大豆", 5],["あったかジンジャー",7 ],["ワカクサ大豆",8 ],["マメミート",8]], 
      skill: { name: "げんきチャージS", probability: 0.052}, 
      imageUrl: "images/248.png"
    },
    ラルトス: { 
      helpSpeed: 4800,
      berrys:1,
      berry: "マゴのみ", 
      ratio:  0.145,
      possessions:  9,
      ingredients:[["とくせんリンゴ",1 ],["とくせんリンゴ",2 ],["ワカクサコーン", 1],["とくせんリンゴ",4 ],["ワカクサコーン",2 ],["ふといながねぎ",2]], 
      skill: { name: "げんきオールS", probability: 0.043}, 
      imageUrl: "images/280.png"
    },
    キルリア: { 
      helpSpeed: 3500,
      berrys:1,
      berry: "マゴのみ", 
      ratio:  0.146,
      possessions: 13 ,
      ingredients:[["とくせんリンゴ", 1],["とくせんリンゴ",2 ],["ワカクサコーン", 1],["とくせんリンゴ",4],["ワカクサコーン", 2],["ふといながねぎ",2]], 
      skill: { name: "げんきオールS", probability: 0.043}, 
      imageUrl: "images/281.png"
    },
    サーナイト: { 
      helpSpeed: 2400,
      berrys:1,
      berry: "マゴのみ", 
      ratio:  0.144,
      possessions:  18,
      ingredients:[["とくせんリンゴ", 1],["とくせんリンゴ", 2],["ワカクサコーン", 1],["とくせんリンゴ", 4],["ワカクサコーン", 2],["ふといながねぎ",2]], 
      skill: { name: "げんきオールS", probability: 0.042}, 
      imageUrl: "images/282.png"
    },
    ナマケロ: { 
      helpSpeed: 4900,
      berrys:2,
      berry: "キーのみ", 
      ratio:  0.216,
      possessions:  7,
      ingredients:[["あんみんトマト",1 ],["あんみんトマト",2 ],["あまいミツ", 2],["あんみんトマト",4 ],["あまいミツ", 4],["とくせんリンゴ",4]], 
      skill: { name: "食材ゲットS", probability: 0.019}, 
      imageUrl: "images/287.png"
    },
    ヤルキモノ: { 
      helpSpeed: 3200,
      berrys:2,
      berry: "キーのみ", 
      ratio:  0.204,
      possessions:  9,
      ingredients:[["あんみんトマト",1 ],["あんみんトマト",2 ],["あまいミツ", 2],["あんみんトマト", 4],["あまいミツ",4 ],["とくせんリンゴ",4]], 
      skill: { name: "食材ゲットS", probability: 0.015}, 
      imageUrl: "images/288.png"
    },
    ケッキング: { 
      helpSpeed: 3800,
      berrys:2,
      berry: "キーのみ", 
      ratio:  0.339,
      possessions:  12,
      ingredients:[["あんみんトマト", 1],["あんみんトマト",2 ],["あまいミツ", 2],["あんみんトマト", 4],["あまいミツ",4 ],["とくせんリンゴ",4]], 
      skill: { name: "食材ゲットS", probability: 0.067}, 
      imageUrl: "images/289.png"
    },
    ヤミラミ:{ 
      helpSpeed: 3600,
      berrys:1,
      berry: "ウイのみ", 
      ratio:  0.188,
      possessions:  16,
      ingredients:[["ピュアなオイル", 1],["ピュアなオイル", 2],["あじわいキノコ", 2],["ピュアなオイル",4 ],["あじわいキノコ", 3],["リラックスカカオ",3]], 
      skill: { name: "ゆめのかけらゲットS", probability: 0.068}, 
      imageUrl: "images/302.png"
    },
    ココドラ:{ 
      helpSpeed: 5700,
      berrys:1,
      berry: "ベリブのみ", 
      ratio:  0.273,
      possessions: 10 ,
      ingredients:[["マメミート",2 ],["マメミート",5 ],["めざましコーヒー",3 ],["マメミート",7 ],["めざましコーヒー", 5],["ワカクサ大豆",7]], 
      skill: { name: "げんきチャージS", probability: 0.046}, 
      imageUrl: "images/304.png"
    },
    コドラ: { 
      helpSpeed:4200 ,
      berrys:1,
      berry: "ベリブのみ",
      ratio:  0.277,
      possessions: 13 , 
      ingredients:[["マメミート",2 ],["マメミート",5 ],["めざましコーヒー", 3],["マメミート",7 ],["めざましコーヒー",5 ],["ワカクサ大豆",7]], 
      skill: { name: "げんきチャージS", probability: 0.048}, 
      imageUrl: "images/305.png"
    },
    ボスゴドラ: { 
      helpSpeed: 3000,
      berrys:1,
      berry: "ベリブのみ", 
      ratio:  0.285,
      possessions:  18,
      ingredients:[["マメミート",2 ],["マメミート", 5],["めざましコーヒー",3 ],["マメミート", 7],["めざましコーヒー",5 ],["ワカクサ大豆",7]], 
      skill: { name: "げんきチャージS", probability:0.052 }, 
      imageUrl: "images/306.png"
    },
    ゴクリン: { 
      helpSpeed: 5900,
      berrys:1,
      berry: "カゴのみ", 
      ratio:  0.214,
      possessions: 8 ,
      ingredients:[["ワカクサ大豆", 1],["ワカクサ大豆",2 ],["あじわいキノコ", 1],["ワカクサ大豆", 4],["あじわいキノコ", 2],["あまいミツ",4]], 
      skill: { name: "ゆめのかけらゲットS", probability: 0.063}, 
      imageUrl: "images/316.png"
    },
    マルノーム:{ 
      helpSpeed: 3500,
      berrys:1,
      berry: "カゴのみ", 
      ratio:  0.21,
      possessions: 19 ,
      ingredients:[["ワカクサ大豆", 1],["ワカクサ大豆", 2],["あじわいキノコ",1 ],["ワカクサ大豆",4 ],["あじわいキノコ", 2],["あまいミツ",4]], 
      skill: { name: "ゆめのかけらゲットS", probability: 0.07}, 
      imageUrl: "images/317.png"
    },
    チルット: { 
      helpSpeed: 4200,
      berrys:2,
      berry: "ドリのみ", 
      ratio:  0.177,
      possessions: 12 ,
      ingredients:[["とくせんエッグ", 1],["とくせんエッグ", 2],["ワカクサ大豆",3 ],["とくせんエッグ", 4],["ワカクサ大豆",4 ],["とくせんリンゴ",5]], 
      skill: { name: "げんきチャージS", probability: 0.032}, 
      imageUrl: "images/333.png"
    },
    チルタリス: { 
      helpSpeed: 3700,
      berrys:2,
      berry: "ヤチェのみ", 
      ratio:  0.258,
      possessions: 14 ,
      ingredients:[["とくせんエッグ",1 ],["とくせんエッグ",2 ],["ワカクサ大豆",3 ],["とくせんエッグ",4 ],["ワカクサ大豆",4 ],["とくせんリンゴ",5]], 
      skill: { name: "げんきチャージS", probability: 0.061}, 
      imageUrl: "images/334.png"
    },
    カゲボウズ: { 
      helpSpeed: 3900,
      berrys:2,
      berry: "ブリーのみ", 
      ratio:  0.171,
      possessions:  11,
      ingredients:[["ピュアなオイル",1 ],["ピュアなオイル",2 ],["あったかジンジャー", 2],["ピュアなオイル", 4],["あったかジンジャー", 4],["あじわいキノコ",3]], 
      skill: { name: "エナジーチャージS", probability: 0.026}, 
      imageUrl: "images/353.png"
    },
    ジュペッタ:{ 
      helpSpeed: 2600,
      berrys:2,
      berry: "ブリーのみ", 
      ratio:  0.179,
      possessions: 19 ,
      ingredients:[["ピュアなオイル",1 ],["ピュアなオイル", 2],["あったかジンジャー",2 ],["ピュアなオイル",4 ],["あったかジンジャー",4 ],["あじわいキノコ",3]], 
      skill: { name: "エナジーチャージS", probability: 0.033}, 
      imageUrl: "images/354.png"
    },
    アブソル: { 
      helpSpeed: 3100,
      berrys:1,
      berry: "ウイのみ", 
      ratio:  0.178,
      possessions: 18 ,
      ingredients:[["リラックスカカオ", 2],["リラックスカカオ", 5],["とくせんリンゴ",8 ],["リラックスカカオ",7 ],["とくせんリンゴ",12 ],["あじわいキノコ",7]], 
      skill: { name: "エナジーチャージS", probability: 0.038}, 
      imageUrl: "images/359.png"
    },
    ソーナノ: { 
      helpSpeed: 5800,
      berrys:1,
      berry: "マゴのみ", 
      ratio:  0.213,
      possessions:  7,
      ingredients:[["とくせんリンゴ",1 ],["とくせんリンゴ",2 ],["あじわいキノコ", 1],["とくせんリンゴ", 4],["あじわいキノコ", 2],["ピュアなオイル",3]], 
      skill: { name: "げんきエールS", probability: 0.059}, 
      imageUrl: "images/360.png"
    },
    タマザラシ: { 
      helpSpeed: 5600,
      berrys:2,
      berry: "チーゴのみ", 
      ratio:  0.224,
      possessions:  9,
      ingredients:[["ピュアなオイル", 1],["ピュアなオイル",2 ],["マメミート",3 ],["ピュアなオイル", 4],["マメミート", 4],["あったかジンジャー",4]], 
      skill: { name: "食材ゲットS", probability: 0.023}, 
      imageUrl: "images/363.png"
    },
    トドグラー: { 
      helpSpeed: 4000,
      berrys:2,
      berry: "チーゴのみ", 
      ratio:  0.221,
      possessions: 13 ,
      ingredients:[["ピュアなオイル",1 ],["ピュアなオイル", 2],["マメミート", 3],["ピュアなオイル",4 ],["マメミート",4 ],["あったかジンジャー",4]], 
      skill: { name: "食材ゲットS", probability: 0.021}, 
      imageUrl: "images/364.png"
    },
    トドゼルガ: { 
      helpSpeed: 3000,
      berrys:2,
      berry: "チーゴのみ", 
      ratio:  0.223,
      possessions: 18 ,
      ingredients:[["ピュアなオイル", 1],["ピュアなオイル", 2],["マメミート", 3],["ピュアなオイル", 4],["マメミート", 4],["あったかジンジャー",4]], 
      skill: { name: "食材ゲットS", probability: 0.022}, 
      imageUrl: "images/365.png"
    },
    コリンク: { 
      helpSpeed: 4400,
      berrys:1,
      berry: "ウブのみ", 
      ratio:  0.181,
      possessions: 11 ,
      ingredients:[["あんみんトマト",2 ],["あんみんトマト", 5],["ピュアなオイル", 4],["あんみんトマト", 7],["ピュアなオイル",7 ],["めざましコーヒー",5]], 
      skill: { name: "料理パワーアップS", probability: 0.018}, 
      imageUrl: "images/403.png"
    },
    ルクシオ:{ 
      helpSpeed: 3200,
      berrys:1,
      berry: "ウブのみ", 
      ratio:  0.182,
      possessions: 16 ,
      ingredients:[["あんみんトマト",2 ],["あんみんトマト",5 ],["ピュアなオイル",4 ],["あんみんトマト",7 ],["ピュアなオイル", 7],["めざましコーヒー",5]], 
      skill: { name: "料理パワーアップS", probability: 0.018}, 
      imageUrl: "images/404.png"
    },
    レントラー:{ 
      helpSpeed: 2400,
      berrys:1,
      berry: "ウブのみ", 
      ratio:  0.2,
      possessions: 21 ,
      ingredients:[["あんみんトマト",2 ],["あんみんトマト", 5],["ピュアなオイル", 4],["あんみんトマト", 7],["ピュアなオイル", 7],["めざましコーヒー",5]], 
      skill: { name: "料理パワーアップS", probability: 0.023}, 
      imageUrl: "images/405.png"
    },
    フワンテ: { 
      helpSpeed:4800 ,
      berrys:1,
      berry: "ブリーのみ", 
      ratio:  0.137,
      possessions: 9 ,
      ingredients:[["ワカクサコーン",1 ],["ワカクサコーン", 2],["ピュアなオイル",3 ],["ワカクサコーン",4 ],["ピュアなオイル", 4],["ほっこりポテト",4]], 
      skill: { name: "エナジーチャージS(たくわえる)", probability: 0.069}, 
      imageUrl: "images/425.png"
    },
    フワライド:{ 
      helpSpeed: 2500,
      berrys:1,
      berry: "ブリーのみ", 
      ratio:  0.128,
      possessions:  17,
      ingredients:[["ワカクサコーン",1 ],["ワカクサコーン",2 ],["ピュアなオイル", 3],["ワカクサコーン",4 ],["ピュアなオイル",4 ],["ほっこりポテト",4]], 
      skill: { name: "エナジーチャージS(たくわえる)", probability: 0.061}, 
      imageUrl: "images/426.png"
    },
    ウソハチ: { 
      helpSpeed: 6300,
      berrys:1,
      berry: "オボンのみ", 
      ratio:  0.189,
      possessions:  8,
      ingredients:[["あんみんトマト", 1],["あんみんトマト", 2],["ワカクサ大豆", 2],["あんみんトマト", 4],["ワカクサ大豆",4 ],["あじわいキノコ",2]], 
      skill: { name: "", probability: 0.061}, 
      imageUrl: "images/438.png"
    },
    マネネ: { 
      helpSpeed:4300 ,
      berrys:1,
      berry: "マゴのみ", 
      ratio:  0.201,
      possessions:  10,
      ingredients:[["あんみんトマト",2 ],["あんみんトマト",5 ],["ほっこりポテト", 4],["あんみんトマト", 7],["ほっこりポテト", 6],["ふといながねぎ",4]], 
      skill: { name: "エナジーチャージS", probability: 0.032}, 
      imageUrl: "images/439.png"
    },
    リオル: { 
      helpSpeed: 4200,
      berrys:1,
      berry: "クラボのみ", 
      ratio:  0.126,
      possessions:  9,
      ingredients:[["ピュアなオイル",1 ],["ピュアなオイル",2 ],["ほっこりポテト", 2],["ピュアなオイル", 4],["ほっこりポテト", 4],["とくせんエッグ",4]], 
      skill: { name: "ゆめのかけらゲットS", probability: 0.038}, 
      imageUrl: "images/447.png"
    },
    ルカリオ: { 
      helpSpeed: 2600,
      berrys:1,
      berry: "クラボのみ", 
      ratio:  0.15,
      possessions: 14 ,
      ingredients:[["ピュアなオイル",1 ],["ピュアなオイル",2 ],["ほっこりポテト",2 ],["ピュアなオイル",4 ],["ほっこりポテト",4 ],["とくせんエッグ",4]], 
      skill: { name: "ゆめのかけらゲットS", probability: 0.051}, 
      imageUrl: "images/448.png"
    },
    グレッグル: { 
      helpSpeed: 5600,
      berrys:1,
      berry: "カゴのみ", 
      ratio:  0.228,
      possessions:  10,
      ingredients:[["ピュアなオイル",2 ],["ピュアなオイル",5 ],["マメミート",5 ],["ピュアなオイル",7 ],["マメミート",8 ],["",]], 
      skill: { name: "エナジーチャージS", probability: 0.042}, 
      imageUrl: "images/453.png"
    },
    ドクロッグ: { 
      helpSpeed: 3400,
      berrys:1,
      berry: "カゴのみ", 
      ratio:  0.229,
      possessions:  14,
      ingredients:[["ピュアなオイル",2 ],["ピュアなオイル", 5],["マメミート", 5],["ピュアなオイル",7 ],["マメミート",8 ],["",]], 
      skill: { name: "エナジーチャージS", probability:0.043 }, 
      imageUrl: "images/454.png"
    },
    ユキカブリ: { 
      helpSpeed: 5600,
      berrys:1,
      berry: "チーゴのみ", 
      ratio: 0.251 ,
      possessions:  10,
      ingredients:[["あんみんトマト", 2],["あんみんトマト",5 ],["とくせんエッグ",4 ],["あんみんトマト",7 ],["とくせんエッグ", 7],["あじわいキノコ",5]], 
      skill: { name: "エナジーチャージS", probability: 0.044}, 
      imageUrl: "images/459.png"
    },
    ユキノオー: { 
      helpSpeed: 3000,
      berrys:1,
      berry: "チーゴのみ", 
      ratio:  0.25,
      possessions:  21,
      ingredients:[["あんみんトマト",2 ],["あんみんトマト",5 ],["とくせんエッグ",4 ],["あんみんトマト", 7],["とくせんエッグ", 7],["あじわいキノコ",5]], 
      skill: { name: "エナジーチャージS", probability: 0.044}, 
      imageUrl: "images/460.png"
    },
    ジバコイル: { 
      helpSpeed: 3100,
      berrys:1,
      berry: "ベリブのみ", 
      ratio:  0.179,
      possessions: 13 ,
      ingredients:[["ピュアなオイル", 1],["ピュアなオイル",2 ],["げきからハーブ", 2],["ピュアなオイル",4 ],["げきからハーブ",3 ],["",]], 
      skill: { name: "料理パワーアップS", probability: 0.062}, 
      imageUrl: "images/462.png"
    },
    トゲキッス: { 
      helpSpeed: 2600,
      berrys:1,
      berry: "モモンのみ", 
      ratio:  0.158,
      possessions: 16 ,
      ingredients:[["とくせんエッグ", 1],["とくせんエッグ",2 ],["あったかジンジャー", 2],["とくせんエッグ",4 ],["あったかジンジャー", 4],["リラックスカカオ",3]], 
      skill: { name: "ゆびをふる", probability: 0.053}, 
      imageUrl: "images/468.png"
    },
    リーフィア: { 
      helpSpeed: 3000,
      berrys:1,
      berry: "ドリのみ", 
      ratio: 0.205 ,
      possessions:  13,
      ingredients:[["モーモーミルク", 1],["モーモーミルク", 2],["リラックスカカオ", 1],["モーモーミルク",4 ],["リラックスカカオ", 2],["マメミート",3]], 
      skill: { name: "げんきエールS", probability: 0.059}, 
      imageUrl: "images/470.png"
    },
    グレイシア: { 
      helpSpeed: 3200,
      berrys:1,
      berry: "チーゴのみ", 
      ratio:  0.219,
      possessions:  12,
      ingredients:[["モーモーミルク", 1],["モーモーミルク",2 ],["リラックスカカオ",1 ],["モーモーミルク", 4],["リラックスカカオ",2 ],["マメミート",3]], 
      skill: { name: "料理パワーアップS", probability: 0.063}, 
      imageUrl: "images/471.png"
    },
    エルレイド: { 
      helpSpeed: 2400,
      berrys:1,
      berry: "クラボのみ", 
      ratio:  0.147,
      possessions:  19,
      ingredients:[["とくせんリンゴ",1 ],["とくせんリンゴ",2 ],["ワカクサコーン",1 ],["とくせんリンゴ", 4],["ワカクサコーン", 2],["ふといながねぎ",2]], 
      skill: { name: "おてつだいサポートS", probability: 0.054}, 
      imageUrl: "images/475.png"
    },
    ニンフィア: { 
      helpSpeed: 2600,
      berrys:1,
      berry: "モモンのみ", 
      ratio:  0.178,
      possessions: 15 ,
      ingredients:[["モーモーミルク", 1],["モーモーミルク",2 ],["", ],["モーモーミルク", 4],["", ],["マメミート",3]], 
      skill: { name: "げんきオールS", probability: 0.04}, 
      imageUrl: "images/700.png"
    },
    デデンネ: { 
      helpSpeed: 2500,
      berrys:1,
      berry: "ウブのみ", 
      ratio:  0.177,
      possessions:  19,
      ingredients:[["とくせんリンゴ",1 ],["とくせんリンゴ",2 ],["リラックスカカオ", 1],["とくせんリンゴ", 4],["リラックスカカオ", 2],["ワカクサコーン",2]], 
      skill: { name: "料理チャンスS", probability: 0.045}, 
      imageUrl: "images/702.png"
    },
    アゴジムシ: { 
      helpSpeed: 4600,
      berrys:1,
      berry: "ラムのみ", 
      ratio:  0.155,
      possessions: 11 ,
      ingredients:[["めざましコーヒー",2 ],["めざましコーヒー",5 ],["あじわいキノコ",4 ],["めざましコーヒー",7 ],["あじわいキノコ",7 ],["あまいミツ",11]], 
      skill: { name: "エナジーチャージS", probability: 0.029}, 
      imageUrl: "images/736.png"
    },
    デンヂムシ: { 
      helpSpeed: 3300,
      berrys:1,
      berry: "ラムのみ", 
      ratio: 0.154 ,
      possessions:  15,
      ingredients:[["めざましコーヒー",2],["めざましコーヒー", 5],["あじわいキノコ",4 ],["めざましコーヒー",7 ],["あじわいキノコ",7 ],["あまいミツ",11]], 
      skill: { name: "エナジーチャージS", probability: 0.028}, 
      imageUrl: "images/737.png"
    },
    クワガノン:{ 
      helpSpeed: 2800,
      berrys:1,
      berry: "ラムのみ", 
      ratio:  0.194,
      possessions: 19 ,
      ingredients:[["めざましコーヒー", 2],["めざましコーヒー", 5],["あじわいキノコ", 4],["めざましコーヒー", 7],["あじわいキノコ", 7],["あまいミツ",11]], 
      skill: { name: "エナジーチャージS", probability: 0.051}, 
      imageUrl: "images/738.png"
    },
    ヌイコグマ: { 
      helpSpeed: 4100,
      berrys:1,
      berry: "クラボのみ", 
      ratio:  0.225,
      possessions: 13 ,
      ingredients:[["ワカクサコーン", 2],["ワカクサコーン",5 ],["マメミート",6 ],["ワカクサコーン",7 ],["マメミート", 10],["とくせんエッグ",9]], 
      skill: { name: "エナジーチャージS", probability: 0.011}, 
      imageUrl: "images/759.png"
    },
    キテルグマ: { 
      helpSpeed: 2800,
      berrys:1,
      berry: "クラボのみ", 
      ratio:  0.229,
      possessions: 20 ,
      ingredients:[["ワカクサコーン", 2],["ワカクサコーン",5 ],["マメミート",6 ],["ワカクサコーン", 7],["マメミート", 10],["とくせんエッグ",9]], 
      skill: { name: "エナジーチャージS", probability: 0.013}, 
      imageUrl: "images/760.png"
    },
    キュワワー: { 
      helpSpeed: 2500,
      berrys:1,
      berry: "モモンのみ", 
      ratio:  0.139,
      possessions: 20 ,
      ingredients:[["ワカクサコーン",2 ],["ワカクサコーン",5 ],["あったかジンジャー",6 ],["ワカクサコーン", 7],["あったかジンジャー", 9],["リラックスカカオ",7]], 
      skill: { name: "げんきエールS", probability: 0.022}, 
      imageUrl: "images/764.png"
    },
    ミミッキュ: { 
      helpSpeed: 2500,
      berrys:1,
      berry: "ブリーのみ", 
      ratio:  0.153,
      possessions:  19,
      ingredients:[["とくせんリンゴ", 1],["とくせんリンゴ", 2],["めざましコーヒー", 1],["とくせんリンゴ", 4],["めざましコーヒー", 2],["あじわいキノコ",2]], 
      skill: { name: "ばけのかわ(きのみバースト)", probability: 0.033}, 
      imageUrl: "images/778.png"
    },
    ウッウ: { 
      helpSpeed: 2700,
      berrys:1,
      berry: "ドリのみ", 
      ratio:  0.165,
      possessions:  19,
      ingredients:[["ピュアなオイル", 2],["ピュアなオイル",5 ],["ほっこりポテト",4 ],["ピュアなオイル",7 ],["ほっこりポテト", 7],["とくせんエッグ",8]], 
      skill: { name: "料理チャンスS", probability: 0.033}, 
      imageUrl: "images/845.png"
    },
    ニャオハ: { 
      helpSpeed: 4600,
      berrys:1,
      berry: "ドリのみ", 
      ratio: 0.208 ,
      possessions: 10 ,
      ingredients:[["ほっこりポテト", 2],["ほっこりポテト",5 ],["モーモーミルク", 6],["ほっこりポテト",7 ],["モーモーミルク",9 ],["あったかジンジャー",8]], 
      skill: { name: "料理パワーアップS", probability: 0.023}, 
      imageUrl: "images/906.png"
    },
    ニャローテ: { 
      helpSpeed: 3500,
      berrys:1,
      berry: "ドリのみ", 
      ratio:  0.209,
      possessions: 14 ,
      ingredients:[["ほっこりポテト", 2],["ほっこりポテト", 5],["モーモーミルク", 6],["ほっこりポテト",7 ],["モーモーミルク",9 ],["あったかジンジャー",8]], 
      skill: { name: "料理パワーアップS", probability: 0.023}, 
      imageUrl: "images/907.png"
    },
    マスカーニャ: { 
      helpSpeed: 2600,
      berrys:1,
      berry: "ウイのみ", 
      ratio:  0.19,
      possessions:  18,
      ingredients:[["ほっこりポテト",2 ],["ほっこりポテト",5 ],["モーモーミルク", 6],["ほっこりポテト",7 ],["モーモーミルク", 9],["あったかジンジャー",8]], 
      skill: { name: "料理パワーアップS", probability: 0.022}, 
      imageUrl: "images/908.png"
    },
    ホゲータ: { 
      helpSpeed: 4200,
      berrys:1,
      berry: "ヒメリのみ", 
      ratio:  0.254,
      possessions:  11,
      ingredients:[["とくせんリンゴ", 2],["とくせんリンゴ", 5],["マメミート", 4],["とくせんリンゴ",7 ],["マメミート",6 ],["げきからハーブ",5]], 
      skill: { name: "げんきチャージS", probability:0.053 }, 
      imageUrl: "images/909.png"
    },
    アチゲータ:{ 
      helpSpeed: 3100,
      berrys:1,
      berry: "ヒメリのみ", 
      ratio:  0.247,
      possessions: 16 ,
      ingredients:[["とくせんリンゴ", 2],["とくせんリンゴ", 5],["マメミート",4 ],["とくせんリンゴ",7 ],["マメミート",6 ],["げきからハーブ",5]], 
      skill: { name: "げんきチャージS", probability: 0.05}, 
      imageUrl: "images/910.png"
    },
    ラウドボーン: { 
      helpSpeed: 2700,
      berrys:1,
      berry: "ブリーのみ", 
      ratio: 0.268 ,
      possessions: 19 ,
      ingredients:[["とくせんリンゴ",2 ],["とくせんリンゴ",5 ],["マメミート",4 ],["とくせんリンゴ",7],["マメミート",6 ],["げきからハーブ",5]], 
      skill: { name: "げんきチャージS", probability: 0.062}, 
      imageUrl: "images/911.png"
    },
    クワッス: { 
      helpSpeed: 4800,
      berrys:1,
      berry: "オレンのみ", 
      ratio:  0.261,
      possessions: 10 ,
      ingredients:[["ワカクサ大豆",2 ],["ワカクサ大豆",5 ],["ふといながねぎ",2 ],["ワカクサ大豆",7 ],["ふといながねぎ",4 ],["ピュアなオイル",6]], 
      skill: { name: "エナジーチャージM", probability:0.028 }, 
      imageUrl: "images/912.png"
    },
    ウェルカモ:{ 
      helpSpeed: 3600,
      berrys:1,
      berry: "オレンのみ", 
      ratio:  0.259,
      possessions:  14,
      ingredients:[["ワカクサ大豆", 2],["ワカクサ大豆", 5],["ふといながねぎ", 2],["ワカクサ大豆", 7],["ふといながねぎ", 4],["ピュアなオイル",6]], 
      skill: { name: "エナジーチャージM", probability: 0.027}, 
      imageUrl: "images/913.png"
    },
    ウェーニバル: { 
      helpSpeed: 2600,
      berrys:1,
      berry: "クラボのみ", 
      ratio:  0.232,
      possessions: 19 ,
      ingredients:[["ワカクサ大豆",2 ],["ワカクサ大豆",5 ],["ふといながねぎ", 2],["ワカクサ大豆", 7],["ふといながねぎ", 4],["ピュアなオイル",6]], 
      skill: { name: "エナジーチャージM", probability: 0.024}, 
      imageUrl: "images/914.png"
    },
  };
