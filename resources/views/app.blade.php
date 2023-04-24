<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

    <!-- Icon -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />

    {{-- Tailwindcss --}}
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        ::-webkit-scrollbar {
            width: 20px;
            background: gray;
        }

        ::-webkit-scrollbar-thumb {
            background: rgb(100, 100, 100);
            border-radius: 10px;
            box-shadow: inset -3px 0 8px black, inset 1px 0 0px gray;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: rgb(70, 70, 70);
        }
    </style>

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
</head>

<body class="scroll-smooth font-sans antialiased overflow-x-hidden bg-black selection:bg-slate-300/50">
    @inertia
</body>

</html>
