<!DOCTYPE html>
<html>
<head>
    <title></title>
    <link rel="stylesheet" type="text/css" href="{{ asset('css/app.css') }}">
</head>
<body>

    <h1>Hello World!</h1>

    <div id="app" class="test">
        <div :class="color">123</div>
        <div v-cloak @click="change" :class="color">@{{ message }}</div>
    </div>

    <script src="{{ asset('js/app.js') }}"></script>

</body>
</html>