var viewer = OpenSeadragon({
    id: "viewer",
    prefixUrl: "https://cdnjs.cloudflare.com/ajax/libs/openseadragon/4.1.0/images/",
    tileSources: "atlas.xml",
    
    showNavigator: true,
    navigatorPosition: "BOTTOM_RIGHT",
    animationTime: 0.5,
    blendTime: 0.1,
    alwaysBlend: false,
    maxZoomPixelRatio: 2,
    visibilityRatio: 1.0,
    constrainDuringPan: true,
    crossOriginPolicy: "Anonymous"
});