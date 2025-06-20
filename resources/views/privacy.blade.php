<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="プライバシーポリシー - 3DMOTOCRAFT Sereno System">
    <title>プライバシーポリシー - 3DMOTOCRAFT Sereno System</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap" rel="stylesheet">
</head>
<body>
    <nav class="navbar">
        <div class="nav-container">
            <div class="nav-logo">
                <a href="{{ route('home') }}">
                    <h1>3DMOTOCRAFT</h1>
                    <span class="nav-subtitle">Sereno System</span>
                </a>
            </div>
        </div>
    </nav>

    <main class="privacy-policy">
        <div class="container">
            <div class="policy-header">
                <h1>プライバシーポリシー</h1>
                <p class="updated-date">最終更新日：2025年6月20日</p>
            </div>

            <div class="policy-content">
                <section>
                    <h2>1. 個人情報の収集について</h2>
                    <p>Sereno System（以下「当社」）は、お客様からお問い合わせをいただく際に、以下の個人情報を収集する場合があります：</p>
                    <ul>
                        <li>お名前</li>
                        <li>メールアドレス</li>
                        <li>電話番号</li>
                        <li>お問い合わせ内容</li>
                        <li>その他、お客様が任意で提供される情報</li>
                    </ul>
                </section>

                <section>
                    <h2>2. 個人情報の利用目的</h2>
                    <p>収集した個人情報は、以下の目的で利用いたします：</p>
                    <ul>
                        <li>お問い合わせへの回答・対応</li>
                        <li>3Dプリンティングサービスのご提案・見積もり</li>
                        <li>アフターサービス・サポートの提供</li>
                        <li>当社サービスの改善・開発</li>
                        <li>法令に基づく対応</li>
                    </ul>
                </section>

                <section>
                    <h2>3. 個人情報の第三者提供</h2>
                    <p>当社は、以下の場合を除き、お客様の個人情報を第三者に提供することはありません：</p>
                    <ul>
                        <li>お客様の同意がある場合</li>
                        <li>法令に基づく場合</li>
                        <li>人の生命、身体または財産の保護のために必要がある場合</li>
                        <li>業務委託先への提供（適切な管理のもと）</li>
                    </ul>
                </section>

                <section>
                    <h2>4. 個人情報の管理</h2>
                    <p>当社は、お客様の個人情報を適切に管理し、不正アクセス、紛失、破損、改ざん、漏洩等を防止するため、必要かつ適切な安全管理措置を講じます。</p>
                </section>

                <section>
                    <h2>5. Cookieの使用について</h2>
                    <p>当社のウェブサイトでは、サービス向上のためCookieを使用する場合があります。Cookieは、ブラウザの設定で無効にすることができます。</p>
                </section>

                <section>
                    <h2>6. Google Analyticsの使用について</h2>
                    <p>当社のウェブサイトでは、Google Analyticsを使用してアクセス解析を行っています。Google Analyticsは、Cookieを使用してウェブサイトの利用状況を分析します。</p>
                </section>

                <section>
                    <h2>7. 個人情報の開示・訂正・削除</h2>
                    <p>お客様は、当社が保有するご自身の個人情報について、開示・訂正・削除を求めることができます。お問い合わせフォームまたは下記連絡先までご連絡ください。</p>
                </section>

                <section>
                    <h2>8. お問い合わせ先</h2>
                    <div class="contact-info">
                        <p><strong>Sereno System</strong></p>
                        <p>代表者：垣原 親伍</p>
                        <p>住所：〒594-1136　大阪府和泉市仏並町170-1</p>
                        <p>電話：090-3288-5689</p>
                        <p>メール：sk.shingo.10@gmail.com</p>
                    </div>
                </section>

                <section>
                    <h2>9. プライバシーポリシーの変更</h2>
                    <p>当社は、必要に応じて本プライバシーポリシーを変更することがあります。変更後のプライバシーポリシーは、本ウェブサイトに掲載した時点から効力を生じるものとします。</p>
                </section>
            </div>

            <div class="policy-footer">
                <a href="{{ route('home') }}" class="btn btn-primary">ホームに戻る</a>
            </div>
        </div>
    </main>

    <style>
        .privacy-policy {
            min-height: 100vh;
            padding: 80px 0 40px;
            background: #f8f9fa;
        }

        .policy-header {
            text-align: center;
            margin-bottom: 40px;
            padding-bottom: 20px;
            border-bottom: 2px solid #8FBC8F;
        }

        .policy-header h1 {
            color: #2c3e50;
            font-size: 2.5rem;
            margin-bottom: 10px;
        }

        .updated-date {
            color: #666;
            font-size: 0.9rem;
        }

        .policy-content {
            max-width: 800px;
            margin: 0 auto;
            background: white;
            padding: 40px;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }

        .policy-content section {
            margin-bottom: 30px;
        }

        .policy-content h2 {
            color: #2c3e50;
            font-size: 1.3rem;
            margin-bottom: 15px;
            padding-bottom: 5px;
            border-bottom: 1px solid #8FBC8F;
        }

        .policy-content p {
            line-height: 1.7;
            margin-bottom: 15px;
            color: #333;
        }

        .policy-content ul {
            margin: 15px 0;
            padding-left: 25px;
        }

        .policy-content li {
            margin-bottom: 8px;
            line-height: 1.6;
            color: #444;
        }

        .contact-info {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
            border-left: 4px solid #8FBC8F;
        }

        .contact-info p {
            margin-bottom: 8px;
        }

        .policy-footer {
            text-align: center;
            margin-top: 40px;
        }

        .btn {
            display: inline-block;
            padding: 12px 30px;
            background: #8FBC8F;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            transition: background 0.3s ease;
        }

        .btn:hover {
            background: #7aa87a;
            text-decoration: none;
        }

        @media (max-width: 768px) {
            .policy-content {
                padding: 20px;
                margin: 0 15px;
            }

            .policy-header h1 {
                font-size: 2rem;
            }
        }
    </style>
</body>
</html>