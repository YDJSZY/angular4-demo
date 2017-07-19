/**
 * Created by Apple on 16/8/23.
 */
var plugins = {
    js:[
        './node_modules/core-js/client/shim.min.js',
        './node_modules/zone.js/dist/zone.js',
        './node_modules/reflect-metadata/Reflect.js',
        //'./node_modules/@angular/core/index.d.ts'
    ],
    css:[
        './node_modules/font-awesome/css/font-awesome.min.css',
        './node_modules/bootstrap/dist/css/bootstrap.min.css',
        './src/styles/app.css',
        './src/styles/main.css'
    ]
}

module.exports = plugins;