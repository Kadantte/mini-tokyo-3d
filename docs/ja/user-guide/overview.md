# Mini Tokyo 3D 概要

<img :src="$withBase('/images/screenshot1.jpg')">

Mini Tokyo 3D は東京の公共交通のリアルタイム3Dマップです。今、実際に動いている列車や発着している旅客機をリアルな3Dマップ上に滑らかなアニメーションで表現します。これは、現実世界とそっくりな双子をデジタルの世界に表現した「デジタルツイン」です。

ユーザーは自由に3Dマップ上を動き回り、見たいところにズームインして東京の「今」を知ることができます。路線図として乗り換えルートを調べる、出かける前に目的地の街と天気を下調べする、列車を自動追跡して沿線の様子をただひたすら眺める、終電に逃さないためにダッシュすべきかどうか列車の現在位置から判断するなど、さまざまな使い方ができます。

Mini Tokyo 3D は PC、スマートフォン、タブレット、セットトップボックスなど、デバイスを問わず Web ブラウザさえあれば利用できる Web アプリケーションです。下記の URL からアクセスしてください。

[https://minitokyo3d.com](https://minitokyo3d.com)

Mini Tokyo 3D の特徴は次の通りです。

## 全てがリアルタイム

<img :src="$withBase('/images/day-night.jpg')" style="width: 640px;">

現実の時刻表、さらにはリアルタイムの遅延情報に従って運行する列車や旅客機を上空の好きな視点から観覧できます。東京の日の出・日の入り時刻に合わせて景色の明るさが変わり、夕焼けも見られます。また、リアルタイムの気象情報を基にした降水アニメーションが表示されるため、よりリアルな風景を楽しめます。

## 鉄道路線図の見やすさをそのままに

<img :src="$withBase('/images/transit.jpg')" style="width: 328px;">

路線図や案内で使われているものと同じラインカラーを使用し、地図の縮尺に合わせて各路線を適切な間隔で配置してルートを見やすい形で表現します。駅名が異なっていても乗り換え駅である場合には駅間の接続を表示して、スムーズな乗り換えをサポートします。列車の形はあえてシンプルな単色の直方体にして、シンボル性を高めています。

## 操作性とパフォーマンス

<img :src="$withBase('/images/performance.jpg')" style="width: 537px;">

ラッシュ時には2,200を超える列車が同時に走りますが、最適化されたデータ構造と計算処理により、スマートフォンでも非常にスムーズな運行アニメーションを実現。視点移動や地上・地下表示の切り替え、列車・旅客機のフェードイン・アウトなど、60フレーム/秒のスムーズなアニメーションを随所に利用しています。

## 4ヶ国語対応

<img :src="$withBase('/images/multilanguage.jpg')" style="width: 219px;">

日本語以外に、訪日観光客の多い英語・中国語（簡体字・繁体字）・韓国語に対応。ユーザーインターフェース表示だけではなく、路線名、駅名、列車種別、空港名、航空会社名なども多言語化。ユーザーインターフェース表示に限り、タイ語・ネパール語・ポルトガル語（ブラジル）、フランス語、スペイン語、ドイツ語にも対応しています。

## 地上・地下の表示切り替え

<img :src="$withBase('/images/shinjuku-overground.jpg')" style="width: 300px;"> <img :src="$withBase('/images/shinjuku-underground.jpg')" style="width: 300px;">

東京の鉄道ネットワークは世界有数の複雑度。地上と地下の路線網を切り替えて表示することで見やすさを追求するとともに、地下鉄路線の現実には見えない列車の運行をわかりやすく表現します。

## 実用的なリアルタイム経路検索

<img :src="$withBase('/images/route-search.jpg')" style="width: 563px;">

リアルタイム遅延情報を利用した独自の経路検索機能を搭載。列車の遅れに応じた複数の乗り換え経路候補を、モバイルデバイスのジェスチャー対応した直感的な操作を通じて、わかりやすく3Dマップ上に表示します。
