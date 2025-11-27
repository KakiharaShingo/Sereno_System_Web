<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="3DMOTOCRAFT - Sereno System | 3Dプリンティング事業">
    <title>3DMOTOCRAFT - Sereno System</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;800&family=Noto+Sans+JP:wght@300;400;500;700&display=swap"
        rel="stylesheet">
</head>

<body>
    <script>
        window.sereno = {
            locale: '{{ $currentLocale }}',
            locales: @json($availableLocales),
            translations: @json($translations)
        };
    </script>
    <div id="app"></div>
    <script src="{{ asset('js/app.js') }}"></script>
</body>

</html>