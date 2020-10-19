# LocalingClientSSR

## 概要

* [ローカりんぐ](https://www.loclaing.ml)のフロントソース
* 全国のローカルメディアのコンテンツを収集して一覧化したサイト
* Server Side Rendering ですが、Lambda のコールドスタートを考慮できていないので初期表示が激遅 :innocent:

## 構成図

![ローカリングの構成図](https://raw.githubusercontent.com/canji53/LocalingClientSSR/master/.documents/image/diagram.png)

## 技術スタック

* Serverless, Server Side Rendering (SSR), Atomic Design
* JavaScript, Python, Node.js
* Express, Vue.js / Nuxt.js
* Inoreader API, SendGrid API, Font Awesome
* AWS, API Gateway, Lambda, Lambda Layer, Lambda@Edge, DynamoDB, S3, CloudFront (OAI), IAM
* AWS SAM, AWS CLI, CloudFormation
* Jest, npm, Babel, ESLint, Prettier, pip
* Git, GitHub, GitHub Actions

## 特徴

* Inoreader で RSS をスクレイピング、そのデータを DynamoDB に吸収、一覧化して見せるとても単純なサイト
* 個人開発ということもあり、低コストを実現するために Serverless (FaaS) を選定
* 機能的には SPA で十分ですが、今後の機能開発の展望とやってみたいという理由で SSR を選定
* Serverless + SSR + AWS から、API Gateway の Lambda 上で Express のミドルウェアとして Nuxt.js を公開
* Nuxt.js を触る内にコンポーネント数が爆発したためオレオレで Atomic Desgin を導入
* スクレイピングを自前で用意すのは面倒だったため、ドキュメントが読み易かった Inoreader API で RSS を収集
* Serverless Framework で構築する文献が多いが、SAM に慣れているので、SAM と Github Actions (CI) で インフラコードとアプリケーションコードのビルド、デプロイを一元化

## 反省点（今後の改善点）

* Lambda (コンテナ) をコールドスタートで運用しているので、SSR のメリットである初期表示時のスピード感が全くない、Warm Up は金銭的に厳しいため検討段階、、、単純にチューニングできていないだけ、、、
* 管理画面を前提に設計したのですが、管理画面をローンチする体力が尽きてしまい、仕方なくクライアント（サイト）だけでもリリース。そのため、コンテンツ管理が生の API 経由なため非常に煩雑で困っている状況
* Slack API 経由でコンテンツ管理ができないか検討中

## 関連リポジトリ

* [LocalingClientApi](https://github.com/canji53/LocalingClientApi) : ユーザーが操作する API 群
