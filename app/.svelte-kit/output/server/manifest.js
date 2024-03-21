export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","01-model.jpg","01inhand-dark.webp","01light.jpg","01light2.jpg","1.png","HD2.png","TEST.jpg","TEST2.jpg","assets/banner.jpg","assets/bg.jpg","assets/computer_api.png","assets/demo_poster.jpg","assets/demo_preview.mp4","assets/favicon/android-chrome-192x192.png","assets/favicon/android-chrome-512x512.png","assets/favicon/apple-touch-icon.png","assets/favicon/favicon-16x16.png","assets/favicon/favicon-32x32.png","assets/favicon/favicon.ico","assets/favicon/site.webmanifest","assets/ncu_short.mp4","assets/ncu_thumbnail.jpg","assets/thumbnail.jpg","cd-grass.jpg","cd.jpg","cd.png","community.jpg","floppy.jpg","hand.png","heavy.jpg","killian.jpg","robots.txt","seattle.jpg","shiven.jpg","vik.jpg","wow.jpg"]),
	mimeTypes: {".jpg":"image/jpeg",".webp":"image/webp",".png":"image/png",".mp4":"video/mp4",".webmanifest":"application/manifest+json",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.DvPClIIF.js","app":"_app/immutable/entry/app.4F_7jcmq.js","imports":["_app/immutable/entry/start.DvPClIIF.js","_app/immutable/chunks/entry.B5XZDnDT.js","_app/immutable/chunks/scheduler.CcMS3Mw0.js","_app/immutable/chunks/index.CiBn7g07.js","_app/immutable/entry/app.4F_7jcmq.js","_app/immutable/chunks/scheduler.CcMS3Mw0.js","_app/immutable/chunks/index.Dtc04KBN.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
