# 3DMOTOCRAFT - Sereno System

> 3Dプリンティング事業を展開するSereno Systemの企業Webサイト

## 🚀 クイックスタート

### 必要な環境
- Docker
- Docker Compose
- Git

### セットアップ手順

1. **リポジトリのクローン**
```bash
git clone <your-repository-url>
cd Sereno_System_Web
```

2. **環境設定**
```bash
cp .env.example .env
```

3. **Docker環境の起動**
```bash
docker-compose up -d
```

4. **アプリケーションの初期化**
```bash
# アプリケーションキーの生成
docker-compose exec app php artisan key:generate

# データベースマイグレーション（必要に応じて）
docker-compose exec app php artisan migrate
```

5. **アクセス確認**
- **Webサイト**: http://localhost:8080
- **phpMyAdmin**: http://localhost:8081
- **Redis**: localhost:6379

## 📋 プロジェクト概要

### 特徴
- ✨ **シングルページアプリケーション**: 滑らかなユーザー体験
- 🌍 **多言語対応**: 日本語・英語・中国語・韓国語
- 📱 **レスポンシブデザイン**: 全デバイス対応
- 🎨 **薄い緑のエレガントデザイン**: ブランドカラーを活用
- 🍔 **ハンバーガーメニュー**: モバイル最適化ナビゲーション
- 🔮 **将来のEC機能準備**: 拡張性を考慮した設計

### 技術スタック
- **フロントエンド**: HTML5, CSS3, JavaScript (ES6+)
- **バックエンド**: PHP 8.2, Laravel 10.x
- **データベース**: MySQL 8.0
- **キャッシュ**: Redis
- **インフラ**: Docker, Docker Compose

## 🏗️ アーキテクチャ

### コンテナ構成
```
┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
│   Web App       │  │   Database      │  │   Cache         │
│   (Laravel)     │◄─┤   (MySQL)       │  │   (Redis)       │
│   Port: 8080    │  │   Port: 3306    │  │   Port: 6379    │
└─────────────────┘  └─────────────────┘  └─────────────────┘
         │                       │
         ▼                       ▼
┌─────────────────┐  ┌─────────────────┐
│   phpMyAdmin    │  │   Node.js       │
│   Port: 8081    │  │   Port: 3000    │
└─────────────────┘  └─────────────────┘
```

## 📁 ディレクトリ構成

```
Sereno_System_Web/
├── 📁 app/                    # Laravel アプリケーション
│   ├── 📁 Http/
│   │   ├── 📁 Controllers/    # コントローラー
│   │   └── 📁 Middleware/     # ミドルウェア
│   └── 📁 Models/             # モデル
├── 📁 config/                 # 設定ファイル
├── 📁 public/                 # 公開ファイル
│   ├── 📁 css/               # スタイルシート
│   ├── 📁 js/                # JavaScript
│   └── 📁 images/            # 画像ファイル
├── 📁 resources/             # リソースファイル
│   ├── 📁 lang/              # 多言語ファイル
│   └── 📁 views/             # Bladeテンプレート
├── 📁 routes/                # ルート定義
├── 🐳 docker-compose.yml     # Docker設定
├── 🐳 Dockerfile            # Dockerイメージ定義
└── 📋 README.md             # このファイル
```

## 🌐 多言語対応

| 言語 | コード | ファイル |
|------|--------|----------|
| 日本語 | `ja` | `resources/lang/ja/messages.php` |
| English | `en` | `resources/lang/en/messages.php` |
| 中文 | `zh` | `resources/lang/zh/messages.php` |
| 한국어 | `ko` | `resources/lang/ko/messages.php` |

## 🎨 デザインシステム

### カラーパレット
- **プライマリ**: `#8FBC8F` (薄い緑)
- **セカンダリ**: `#4F7A4F` (濃い緑)
- **アクセント**: `#66A266` (ミディアム緑)
- **背景**: `#E6F3E6` (ライト緑)

### タイポグラフィ
- **メインフォント**: Noto Sans JP
- **サブフォント**: Inter

## 🔧 開発コマンド

### Docker関連
```bash
# コンテナ起動
docker-compose up -d

# コンテナ停止
docker-compose down

# ログ確認
docker-compose logs -f app

# コンテナ内でコマンド実行
docker-compose exec app bash
```

### Laravel関連
```bash
# Artisanコマンド実行例
docker-compose exec app php artisan route:list
docker-compose exec app php artisan config:cache
docker-compose exec app php artisan view:clear
```

## 📱 レスポンシブ対応

### ブレークポイント
- **モバイル**: `< 768px`
- **タブレット**: `768px - 1024px`
- **デスクトップ**: `> 1024px`

## 🧪 テスト

### 機能テスト項目
- [ ] 各セクションの表示
- [ ] ナビゲーション動作
- [ ] 言語切り替え
- [ ] コンタクトフォーム
- [ ] レスポンシブデザイン

### パフォーマンステスト
- [ ] ページ読み込み速度
- [ ] モバイル表示速度
- [ ] 画像最適化確認

## 🚀 デプロイ

### 本番環境セットアップ
1. 環境変数設定 (`.env`)
2. SSL証明書設定
3. データベース設定
4. キャッシュ設定

### 推奨本番環境
- **サーバー**: VPS / Cloud (2GB RAM以上)
- **Webサーバー**: Apache/Nginx
- **PHP**: 8.2以上
- **データベース**: MySQL 8.0

## 📞 企業情報

- **会社名**: Sereno System
- **代表者**: 垣原 親伍
- **事業内容**: 3Dプリンティング事業
- **所在地**: 大阪府和泉市仏並町170-1
- **電話**: 09032885689
- **メール**: sk.shingo.10@gmail.com
- **YouTube**: https://www.youtube.com/@kaaki_bike

## 🤝 サポート

### 開発サポート
- Docker環境構築支援
- カスタマイズ開発
- 機能追加開発

### 技術的な質問
プロジェクトに関する技術的な質問や問題については、Issues を作成してください。

## 📄 ライセンス

このプロジェクトは MIT ライセンスの下で公開されています。

---

**🔗 関連リンク**
- [詳細仕様書](./DOCUMENTATION.md)
- [Laravel Documentation](https://laravel.com/docs)
- [Docker Documentation](https://docs.docker.com/)

*Built with ❤️ for Sereno System*