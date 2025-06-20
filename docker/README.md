# Docker Configuration

このディレクトリには3DMOTOCRAFT - Sereno SystemのDocker関連ファイルが含まれています。

## 📁 ファイル構成

```
docker/
├── Dockerfile          # Laravel アプリケーション用Dockerイメージ
├── .env.docker        # Docker環境用環境変数
└── README.md          # このファイル
```

## 🐳 Docker構成

### サービス構成
- **app**: PHP 8.2 + Apache + Laravel アプリケーション
- **db**: MySQL 8.0 データベース
- **phpmyadmin**: データベース管理ツール
- **redis**: キャッシュ・セッション管理
- **node**: フロントエンド開発環境

### ポート構成
| サービス | ポート | 説明 |
|----------|--------|------|
| app | 8080 | Webアプリケーション |
| db | 3306 | MySQL データベース |
| phpmyadmin | 8081 | データベース管理画面 |
| redis | 6379 | キャッシュサーバー |
| node | 3000, 5173 | 開発サーバー |

## 🚀 使用方法

### 1. 開発環境起動
```bash
# プロジェクトルートで実行
docker-compose up -d
```

### 2. アプリケーション初期化
```bash
# アプリケーションキー生成
docker-compose exec app php artisan key:generate

# データベースマイグレーション（必要に応じて）
docker-compose exec app php artisan migrate
```

### 3. アクセス確認
- **Webサイト**: http://localhost:8080
- **phpMyAdmin**: http://localhost:8081
- **Redis**: localhost:6379

### 4. 開発作業
```bash
# コンテナ内でコマンド実行
docker-compose exec app bash

# ログ確認
docker-compose logs -f app

# コンテナ停止
docker-compose down
```

## 🔧 Dockerfile 詳細

### ベースイメージ
- **PHP 8.2** with Apache
- **Composer** 最新版
- **Node.js 18** + npm

### インストール済みパッケージ
- PHP拡張: pdo_mysql, mbstring, exif, pcntl, bcmath, gd, zip
- システムツール: git, curl, zip, unzip
- Apache: mod_rewrite 有効化

### ディレクトリ構成
```
/var/www/html/          # Laravel アプリケーションルート
├── public/             # Webルート (DocumentRoot)
├── storage/            # Laravel ストレージ (書き込み権限設定済み)
└── bootstrap/cache/    # Laravel キャッシュ (書き込み権限設定済み)
```

### 権限設定
- **storage/**: 775 権限、www-data:www-data 所有者
- **bootstrap/cache/**: 775 権限、www-data:www-data 所有者

## 🔒 セキュリティ設定

### 本番環境用設定
```bash
# 本番環境用に環境変数を更新
APP_ENV=production
APP_DEBUG=false
APP_URL=https://your-domain.com

# キャッシュ最適化
docker-compose exec app php artisan config:cache
docker-compose exec app php artisan route:cache
docker-compose exec app php artisan view:cache
```

### SSL設定
本番環境では以下を追加設定してください：
- SSL証明書の設定
- HTTPSリダイレクト
- セキュリティヘッダー

## 🐛 トラブルシューティング

### よくある問題

1. **権限エラー**
```bash
# ストレージディレクトリの権限を修正
docker-compose exec app chown -R www-data:www-data /var/www/html/storage
docker-compose exec app chmod -R 775 /var/www/html/storage
```

2. **データベース接続エラー**
```bash
# データベースコンテナの状態確認
docker-compose ps db
docker-compose logs db
```

3. **コンポーザー依存関係エラー**
```bash
# 依存関係の再インストール
docker-compose exec app composer install
```

4. **Node.js依存関係エラー**
```bash
# Node.js依存関係の再インストール
docker-compose exec node npm install
```

### ログ確認
```bash
# 全サービスのログ
docker-compose logs

# 特定サービスのログ
docker-compose logs app
docker-compose logs db
docker-compose logs redis
```

## 📊 パフォーマンス最適化

### 本番環境最適化
```bash
# Composer最適化
docker-compose exec app composer install --no-dev --optimize-autoloader

# Laravel最適化
docker-compose exec app php artisan optimize

# OPcache有効化（Dockerfile内で設定済み）
```

### メモリ設定
- **app**: 最小512MB、推奨1GB
- **db**: 最小256MB、推奨512MB
- **redis**: 最小64MB、推奨128MB

## 🔄 バックアップ

### データベースバックアップ
```bash
# データベースダンプ
docker-compose exec db mysqldump -u root -ppassword sereno_system_web > backup.sql

# データベース復元
docker-compose exec -T db mysql -u root -ppassword sereno_system_web < backup.sql
```

### ストレージバックアップ
```bash
# ストレージディレクトリのバックアップ
docker-compose exec app tar -czf /tmp/storage-backup.tar.gz storage/
docker cp $(docker-compose ps -q app):/tmp/storage-backup.tar.gz ./storage-backup.tar.gz
```

---

**Last Updated**: 2024-06-20  
**Docker Compose Version**: 3.8  
**PHP Version**: 8.2  
**MySQL Version**: 8.0