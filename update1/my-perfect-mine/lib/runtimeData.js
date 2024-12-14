const runtimeData = (function () {

    return {

        // Basic information.
        companyName: "Mirra Games",
        productName: "My Perfect Mine",
        productVersion: "1.0",
        sdkVersion: "3.17.16",
        productDescription: "",

        // File references.
        buildURL: "bin",
        loaderURL: "bin/my-perfect-mine_Web_GameDistribution.loader.js",
        dataURL: "bin/my-perfect-mine_Web_GameDistribution.data.unityweb",
        frameworkURL: "bin/my-perfect-mine_Web_GameDistribution.framework.js.unityweb",
        workerURL: "",
        codeURL: "bin/my-perfect-mine_Web_GameDistribution.wasm.unityweb",
        symbolsURL: "",
        streamingURL: "streaming",

        // Visual information.
        logoType: "ThreeJs",
        iconTextureName: "game_logo_256x256.png",
        backgroundTextureName: "background_1280x720.png",

        // Aspect ratio.
        desktopAspectRatio: -1,
        mobileAspectRatio: -1,

        // Debug mode.
        debugMode: false,

        // Prefs.
        prefsContainerTags: [ "json-data" ],

        // Platform specific scripts.
        wrapperScript: "gameDistributionWrapper.js",

        // YandexGames.
        yandexGamesSDK: "/sdk.js",

        // Yandex Ads Network.
        yandexGameId: "",
        yandexBannerId: "",
        yandexInterstitialDesktopId: "",
        yandexInterstitialMobileId: "",
        yandexRewardedDesktopId: "",
        yandexRewardedMobileId: "",

        // GameDistribution.
        gameDistributionId: "47a0d4a28d7b415ab406787ba9350caa",
        gameDistributionPrefix: "mirragames_",

    }

})();