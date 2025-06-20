<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>お問い合わせ - 3DMOTOCRAFT</title>
    <style>
        body {
            font-family: 'Arial', 'Hiragino Sans', 'Meiryo', sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background: #8FBC8F;
            color: white;
            padding: 20px;
            text-align: center;
            border-radius: 8px 8px 0 0;
        }
        .content {
            background: #f9f9f9;
            padding: 30px;
            border: 1px solid #ddd;
        }
        .footer {
            background: #f0f0f0;
            padding: 20px;
            text-align: center;
            border-radius: 0 0 8px 8px;
            font-size: 0.9em;
            color: #666;
        }
        .field {
            margin-bottom: 20px;
        }
        .field-label {
            font-weight: bold;
            color: #2c3e50;
            margin-bottom: 5px;
        }
        .field-value {
            background: white;
            padding: 10px;
            border-radius: 4px;
            border: 1px solid #ddd;
        }
        .message-content {
            white-space: pre-wrap;
            min-height: 100px;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>3DMOTOCRAFT - Sereno System</h1>
        <h2>お問い合わせをいただきました</h2>
    </div>

    <div class="content">
        <p>以下の内容でお問い合わせをいただきました。</p>

        <div class="field">
            <div class="field-label">お名前</div>
            <div class="field-value">{{ $name }}</div>
        </div>

        <div class="field">
            <div class="field-label">メールアドレス</div>
            <div class="field-value">{{ $email }}</div>
        </div>

        <div class="field">
            <div class="field-label">件名</div>
            <div class="field-value">{{ $subject }}</div>
        </div>

        <div class="field">
            <div class="field-label">お問い合わせ内容</div>
            <div class="field-value message-content">{{ $message }}</div>
        </div>

        <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">

        <p><strong>送信日時：</strong> {{ date('Y年n月j日 H:i') }}</p>
        <p><strong>IPアドレス：</strong> {{ request()->ip() }}</p>
    </div>

    <div class="footer">
        <p><strong>Sereno System</strong></p>
        <p>〒594-1136　大阪府和泉市仏並町170-1</p>
        <p>TEL: 090-3288-5689</p>
        <p>Email: sk.shingo.10@gmail.com</p>
    </div>
</body>
</html>