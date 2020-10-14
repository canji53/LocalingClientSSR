# LocalingClientSSR

## 概要

* [ローカりんぐ](https://www.loclaing.ml)のフロントソース
* 全国のローカルメディアのコンテンツを収集して一覧化したサイト
* Server Side Rendering (SSR) 構成だが、Lambda のコールドスタートを考慮できていないので初期表示が激遅 :innocent:

## 構成図

![ローカリングの構成図]()

## 特徴

* Inoreader API がスクレイピング機能を担当し、そのデータを DynamoDB に吸収して、それらを一覧化して見せるとても単純なサイト
* 個人開発ということもあり、低コストを実現するために Serverless を選択
* 機能的には SSR ではなく Jamstack で十分だが、今後の機能開発の展望とやってみたいという理由で SSR を選択
* Serverless + SSR + AWS から、API Gateway の Lambda 上で Express のミドルウェアとして Nuxt.js を公開
* Serverless Framework (sls) で構築する文献が多いが、SAM に慣れているので、SAM と Github Actions (CI) で インフラコードとアプリケーションコードのビルド、デプロイを一元化
* Nuxt.js を触る内にコンポーネント数が爆発したためオレオレで Atomic Desgin を導入

## 技術スタック

* Serverless, Server Side Rendering (SSR), Atomic Desgin
* JavaScript, Python, Node.js
* Express, Vue.js / Nuxt.js
* Inoreader API, SendGrid API, Font Awesome
* AWS, API Gateway, Lambda, Lambda Layer, Lambda@Edge, DynamoDB, S3, CloudFront (OAI), IAM
* AWS SAM, AWS CLI, CloudFormation
* Jest, npm, Babel, ESLint, Prettier, pip
* Git, GitHub, GitHub Actions

## 反省点（今後の改善点）

* Lambda (コンテナ) をコールドスタートで運用しているので、SSR のメリットである初期表示時のスピード感が全くない、Warm Up は金銭的に厳しいため検討段階、、、単純にチューニングできていないだけ、、、
* 管理画面を前提に設計したが、管理画面をローンチする体力と金銭面の心配から一時開発を断念。仕方なくクライアント機能（サイト）だけでもリリースしたが、コンテンツ管理が生の API 経由なため非常に煩雑で困っている
