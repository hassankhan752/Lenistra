module.exports = [
"[externals]/@prisma/client [external] (@prisma/client, cjs, [project]/node_modules/@prisma/client)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("@prisma/client-2c3a283f134fdcb6", () => require("@prisma/client-2c3a283f134fdcb6"));

module.exports = mod;
}),
"[project]/node_modules/next/dist/esm/build/templates/app-page-runtime.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createAppPageEntrypoint",
    ()=>createAppPageEntrypoint
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$module$2e$compiled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$dev$2d$render$2d$context$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/route-modules/app-page/dev-render-context.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/route-kind.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$instrumentation$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/instrumentation/utils.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/lib/trace/tracer.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/request-meta.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/lib/trace/constants.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$strip$2d$flight$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/app-render/strip-flight-headers.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$parse$2d$request$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/route-modules/app-page/parse-request-headers.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/base-http/node.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$is$2d$rsc$2d$request$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/lib/is-rsc-request.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$is$2d$non$2d$html$2d$sec$2d$fetch$2d$dest$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/lib/is-non-html-sec-fetch-dest.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$entry$2d$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/entry-constants.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/request/fallback-params.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$manifests$2d$singleton$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/app-render/manifests-singleton.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$streaming$2d$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/lib/streaming-metadata.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$routes$2f$app$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/router/routes/app.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$server$2d$action$2d$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/lib/server-action-request-meta.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/client/components/app-router-headers.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$is$2d$bot$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/router/utils/is-bot.js [app-rsc] (ecmascript, Next.js server utility) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/response-cache/index.js [app-rsc] (ecmascript, Next.js server utility) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/response-cache/types.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/lib/fallback.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/render-result.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/lib/constants.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/stream-utils/encoded-tags.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/send-payload.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$shared$2f$lib$2f$no$2d$fallback$2d$error$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$shared$2f$lib$2f$no$2d$fallback$2d$error$2e$external$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$route$2d$cache$2d$key$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/lib/route-cache-key.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$size$2d$limit$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/size-limit.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$postponed$2d$request$2d$body$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/lib/postponed-request-body.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$url$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/lib/url.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript, Next.js server utility) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$redirect$2d$status$2d$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/client/components/redirect-status-code.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/invariant-error.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/lib/scheduler.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$segment$2d$param$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/router/utils/get-segment-param.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$turbopack$2d$bootstrap$2d$script$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/app-render/turbopack-bootstrap-script.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$get$2d$script$2d$nonce$2d$from$2d$header$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/app-render/get-script-nonce-from-header.js [app-rsc] (ecmascript, Next.js server utility)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
/**
 * Builds the cache key for the most complete prerenderable shell we can derive
 * from the shell that matched this request. Only params that can still be
 * filled by `generateStaticParams` are substituted; fully dynamic params stay
 * as placeholders so a request like `/c/foo` can complete `/[one]/[two]` into
 * `/c/[two]` rather than `/c/foo`.
 */ function buildCompletedShellCacheKey(fallbackPathname, remainingPrerenderableParams, params) {
    const prerenderableParamsByName = new Map(remainingPrerenderableParams.map((param)=>[
            param.paramName,
            param
        ]));
    return fallbackPathname.split('/').map((segment)=>{
        const segmentParam = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$segment$2d$param$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getSegmentParam"])(segment);
        if (!segmentParam) {
            return segment;
        }
        const remainingParam = prerenderableParamsByName.get(segmentParam.paramName);
        if (!remainingParam) {
            return segment;
        }
        const value = params == null ? void 0 : params[remainingParam.paramName];
        if (!value) {
            return segment;
        }
        const encodedValue = Array.isArray(value) ? value.map((item)=>encodeURIComponent(item)).join('/') : encodeURIComponent(value);
        return segment.replace((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["buildDynamicSegmentPlaceholder"])(remainingParam), encodedValue);
    }).join('/') || '/';
}
function createAppPageEntrypoint({ tree, page, pathname, require: __next_app_require__, loadChunk: __next_app_load_chunk__, interopDefault }) {
    const __next_app__ = {
        require: __next_app_require__,
        loadChunk: __next_app_load_chunk__
    };
    const routeModule = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$module$2e$compiled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppPageRouteModule"]({
        definition: {
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RouteKind"].APP_PAGE,
            page,
            pathname,
            // The following aren't used in production.
            bundlePath: '',
            filename: '',
            appPaths: []
        },
        userland: {
            loaderTree: tree
        },
        distDir: ("TURBOPACK compile-time value", ".next/dev") || '',
        relativeProjectDir: ("TURBOPACK compile-time value", "") || ''
    });
    let srcPage = page;
    // turbopack doesn't normalize `/index` in the page name
    // so we need to to process dynamic routes properly
    // TODO: fix turbopack providing differing value from webpack
    if ("TURBOPACK compile-time truthy", 1) {
        srcPage = srcPage.replace(/\/index$/, '') || '/';
    } else if (srcPage === '/index') {
        // we always normalize /index specifically
        srcPage = '/';
    }
    const normalizedSrcPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["normalizeAppPath"])(srcPage);
    // The legacy prerender manifest says whether unmatched values return 404,
    // but does not list all of the route's parameter names. Read them from the
    // route pattern once, since the names do not depend on the request.
    const routeParamNames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$routes$2f$app$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["parseNormalizedAppRoute"])(normalizedSrcPage).dynamicSegments.map((segment)=>segment.param.paramName);
    async function handler(req, res, ctx) {
        if (ctx.requestMeta) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["setRequestMeta"])(req, ctx.requestMeta);
        }
        if (routeModule.isDev) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["addRequestMeta"])(req, 'devRequestTimingInternalsEnd', process.hrtime.bigint());
        }
        const isMinimalMode = Boolean((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getRequestMeta"])(req, 'minimalMode'));
        // Capture the request target before `prepare()` runs, since route
        // normalization (e.g. `normalizeCdnUrl`) rewrites `req.url` and would
        // otherwise change the `http.target` span attribute. This mirrors
        // `BaseServer.handleRequest`, which records the target before normalization.
        const httpTarget = req.url;
        const multiZoneDraftMode = ("TURBOPACK compile-time value", false);
        // Registering `instrumentation.ts` usually installs the tracer provider, so
        // do it before starting the request span. The span is started before
        // `prepare`, so route module preparation is part of the request's trace.
        // When this request triggers registration, the lifecycle spans of
        // `instrumentation.ts` are emitted inside the request span.
        const { instrumentation } = await routeModule.ensureInstrumentation(req, {
            deferSpans: true
        });
        return routeModule.traceRequest(req, {
            tracer: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getTracer"])(),
            spanName: `${req.method || 'GET'} ${srcPage}`,
            httpTarget,
            instrumentation
        }, (requestSpan, requestRootSpan)=>handleRequest(req, res, ctx, isMinimalMode, multiZoneDraftMode, requestSpan, requestRootSpan));
    }
    async function handleRequest(req, res, ctx, isMinimalMode, multiZoneDraftMode, requestSpan, requestRootSpan) {
        var _this, _prerenderInfo_fallbackRouteParams, _prerenderInfo_fallbackRootParams, _prerenderInfo_fallbackRouteParams1, _prerenderInfo_fallbackRouteParams2;
        const prepareResult = await routeModule.prepare(req, res, {
            srcPage,
            multiZoneDraftMode
        });
        if (!prepareResult) {
            res.statusCode = 400;
            res.end('Bad Request');
            ctx.waitUntil == null ? void 0 : ctx.waitUntil.call(ctx, Promise.resolve());
            return null;
        }
        const { buildId, query, params, pageIsDynamic, buildManifest, nextFontManifest, reactLoadableManifest, serverActionsManifest, clientReferenceManifest, subresourceIntegrityManifest, prerenderManifest, prefetchHintsManifest, isDraftMode, resolvedPathname, revalidateOnlyGenerated, routerServerContext, nextConfig, parsedUrl, interceptionRoutePatterns, deploymentId, clientAssetToken, previewProps } = prepareResult;
        let { isOnDemandRevalidate } = prepareResult;
        // We use the resolvedPathname instead of the parsedUrl.pathname because it
        // is not rewritten as resolvedPathname is. This will ensure that the correct
        // prerender info is used instead of using the original pathname as the
        // source.
        const prerenderMatch = routeModule.match(resolvedPathname, prerenderManifest);
        const prerenderInfo = (prerenderMatch == null ? void 0 : prerenderMatch.route) ?? null;
        // A sibling's prerender must not change this route's rendering mode or
        // supply prefetch metadata for its response.
        const prerenderedRoute = routeModule.isDev || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$route$2d$cache$2d$key$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["isRouteCacheOwner"])(resolvedPathname, routeModule.cacheOwner, prerenderManifest.routes[resolvedPathname]) ? prerenderManifest.routes[resolvedPathname] : undefined;
        const isPrerendered = Boolean(prerenderedRoute);
        const userAgent = req.headers['user-agent'] || '';
        const botType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$is$2d$bot$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__$3c$locals$3e$__["getBotType"])(userAgent);
        /**
     * If true, this indicates that the request being made is for an app
     * prefetch request.
     */ const isPrefetchRSCRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getRequestMeta"])(req, 'isPrefetchRSCRequest') ?? req.headers[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["NEXT_ROUTER_PREFETCH_HEADER"]] === '1' // exclude runtime prefetches, which use '2'
        ;
        // NOTE: Don't delete headers[RSC] yet, it still needs to be used in renderToHTML later
        const isRSCRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getRequestMeta"])(req, 'isRSCRequest') ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$is$2d$rsc$2d$request$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["isRSCRequestHeader"])(req.headers[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RSC_HEADER"]]);
        const isPossibleServerAction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$server$2d$action$2d$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getIsPossibleServerAction"])(req);
        // For subresource requests (e.g. images or fonts), return plain text 404
        // instead of rendering the not-found route.
        if (normalizedSrcPage === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$entry$2d$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["UNDERSCORE_NOT_FOUND_ROUTE"] && (req.method === 'GET' || req.method === 'HEAD') && !isRSCRequest && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$is$2d$non$2d$html$2d$sec$2d$fetch$2d$dest$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["isNonHtmlSecFetchDest"])(req.headers['sec-fetch-dest'])) {
            res.statusCode = 404;
            res.setHeader('Cache-Control', 'private, no-cache, no-store, max-age=0, must-revalidate');
            res.setHeader('Content-Type', 'text/plain; charset=utf-8');
            res.end('Not Found');
            ctx.waitUntil == null ? void 0 : ctx.waitUntil.call(ctx, Promise.resolve());
            return null;
        }
        /**
     * If the route being rendered is an app page, and the ppr feature has been
     * enabled, then the given route _could_ support PPR.
     */ const couldSupportPPR = Boolean(nextConfig.cacheComponents);
        // Stash postponed state for server actions when in minimal mode.
        // We extract it here so the RDC is available for the re-render after the action completes.
        const resumeStateLengthHeader = req.headers[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["NEXT_RESUME_STATE_LENGTH_HEADER"]];
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getRequestMeta"])(req, 'postponed') && isMinimalMode && couldSupportPPR && isPossibleServerAction && resumeStateLengthHeader && typeof resumeStateLengthHeader === 'string') {
            const stateLength = parseInt(resumeStateLengthHeader, 10);
            const { maxPostponedStateSize, maxPostponedStateSizeBytes } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$postponed$2d$request$2d$body$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getMaxPostponedStateSize"])(nextConfig.experimental.maxPostponedStateSize);
            if (!isNaN(stateLength) && stateLength > 0) {
                var _nextConfig_experimental_serverActions;
                if (stateLength > maxPostponedStateSizeBytes) {
                    res.statusCode = 413;
                    res.end((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$postponed$2d$request$2d$body$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getPostponedStateExceededErrorMessage"])(maxPostponedStateSize));
                    ctx.waitUntil == null ? void 0 : ctx.waitUntil.call(ctx, Promise.resolve());
                    return null;
                }
                // Calculate max total body size to prevent buffering excessively large
                // payloads before the action handler checks. We use stateLength (not
                // maxPostponedStateSizeBytes) so the postponed state doesn't eat into
                // the action body budget - it's already validated above.
                const defaultActionBodySizeLimit = '1 MB';
                const actionBodySizeLimit = ((_nextConfig_experimental_serverActions = nextConfig.experimental.serverActions) == null ? void 0 : _nextConfig_experimental_serverActions.bodySizeLimit) ?? defaultActionBodySizeLimit;
                const actionBodySizeLimitBytes = actionBodySizeLimit !== defaultActionBodySizeLimit ? __turbopack_context__.r("[project]/node_modules/next/dist/compiled/bytes/index.js [app-rsc] (ecmascript)").parse(actionBodySizeLimit) : 1024 * 1024 // 1 MB
                ;
                const maxTotalBodySize = stateLength + actionBodySizeLimitBytes;
                const fullBody = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$postponed$2d$request$2d$body$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["readBodyWithSizeLimit"])(req, maxTotalBodySize);
                if (fullBody === null) {
                    res.statusCode = 413;
                    res.end(`Request body exceeded limit. ` + `To configure the body size limit for Server Actions, see: https://nextjs.org/docs/app/api-reference/next-config-js/serverActions#bodysizelimit`);
                    ctx.waitUntil == null ? void 0 : ctx.waitUntil.call(ctx, Promise.resolve());
                    return null;
                }
                if (fullBody.length >= stateLength) {
                    // Extract postponed state from the beginning
                    const postponedState = fullBody.subarray(0, stateLength).toString('utf8');
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["addRequestMeta"])(req, 'postponed', postponedState);
                    // Store the remaining action body for the action handler
                    const actionBody = fullBody.subarray(stateLength);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["addRequestMeta"])(req, 'actionBody', actionBody);
                } else {
                    throw new Error(`invariant: expected ${stateLength} bytes of postponed state but only received ${fullBody.length} bytes`);
                }
            }
        }
        if (typeof (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getRequestMeta"])(req, 'postponed') !== 'string' && couldSupportPPR && req.headers[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["NEXT_RESUME_HEADER"]] === '1' && req.method === 'POST') {
            const { maxPostponedStateSize, maxPostponedStateSizeBytes } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$postponed$2d$request$2d$body$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getMaxPostponedStateSize"])(nextConfig.experimental.maxPostponedStateSize);
            // Decode the postponed state from the request body, it will come as
            // an array of buffers, so collect them and then concat them to form
            // the string.
            const body = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$postponed$2d$request$2d$body$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["readBodyWithSizeLimit"])(req, maxPostponedStateSizeBytes);
            if (body === null) {
                res.statusCode = 413;
                res.end((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$postponed$2d$request$2d$body$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getPostponedStateExceededErrorMessage"])(maxPostponedStateSize));
                ctx.waitUntil == null ? void 0 : ctx.waitUntil.call(ctx, Promise.resolve());
                return null;
            }
            const postponed = body.toString('utf8');
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["addRequestMeta"])(req, 'postponed', postponed);
        }
        // When enabled, this will allow the use of the `?__nextppronly` query to
        // enable debugging of the static shell.
        const hasDebugStaticShellQuery = ("TURBOPACK compile-time value", false) === '1' && typeof query.__nextppronly !== 'undefined' && couldSupportPPR;
        // When enabled, this will allow the use of the `?__nextppronly` query
        // to enable debugging of the fallback shell.
        const hasDebugFallbackShellQuery = hasDebugStaticShellQuery && query.__nextppronly === 'fallback';
        // Whether the testing API is exposed (dev mode or explicit flag)
        const exposeTestingApi = nextConfig.cacheComponents === true && (routeModule.isDev === true || nextConfig.experimental.exposeTestingApiInProductionBuild === true);
        // Enable the Instant Navigation Testing API. Renders only the prefetched
        // portion of the page, excluding dynamic content. This allows tests to
        // assert on the prefetched UI state deterministically.
        //
        // The instant test cookie is sent automatically with all requests while a
        // navigation lock is held. We treat a request as a test render when the
        // cookie is present and either:
        // - it's a document request (no RSC header) — covers MPA navigations
        // - it's a prefetch RSC request — covers client-side prefetches
        // Regular RSC navigation requests proceed normally even during a locked
        // scope; blocking happens on the client side.
        const isInstantNavigationTest = exposeTestingApi && typeof req.headers.cookie === 'string' && req.headers.cookie.includes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["NEXT_INSTANT_TEST_COOKIE"] + '=') && (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$is$2d$rsc$2d$request$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["isRSCRequestHeader"])(req.headers[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RSC_HEADER"]]) || req.headers[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["NEXT_ROUTER_PREFETCH_HEADER"]] === '1');
        // This page supports PPR if it is marked as being `PARTIALLY_STATIC` in the
        // prerender manifest and this is an app page.
        const isRoutePPREnabled = couldSupportPPR && (((_this = prerenderManifest.routes[normalizedSrcPage] ?? prerenderManifest.dynamicRoutes[normalizedSrcPage]) == null ? void 0 : _this.renderingMode) === 'PARTIALLY_STATIC' || // Ideally we'd want to check the appConfig to see if this page has PPR
        // enabled or not, but that would require plumbing the appConfig through
        // to the server during development. We assume that the page supports it
        // but only during development or when the testing API is exposed.
        (hasDebugStaticShellQuery || isInstantNavigationTest) && (exposeTestingApi || (routerServerContext == null ? void 0 : routerServerContext.experimentalTestProxy) === true));
        const isDebugStaticShell = (hasDebugStaticShellQuery || isInstantNavigationTest) && isRoutePPREnabled;
        // We should enable debugging dynamic accesses when the static shell
        // debugging has been enabled and we're also in development mode.
        const isDebugDynamicAccesses = isDebugStaticShell && routeModule.isDev === true;
        const isDebugFallbackShell = hasDebugFallbackShellQuery && isRoutePPREnabled;
        const isDebugPrerender = isDebugStaticShell || isDebugDynamicAccesses || isDebugFallbackShell;
        // If we're in minimal mode, then try to get the postponed information from
        // the request metadata. If available, use it for resuming the postponed
        // render.
        const minimalPostponed = isRoutePPREnabled ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getRequestMeta"])(req, 'postponed') : undefined;
        const hasPostponedState = typeof minimalPostponed === 'string';
        // If PPR is enabled, and this is a RSC request (but not a prefetch), then
        // we can use this fact to only generate the flight data for the request
        // because we can't cache the HTML (as it's also dynamic).
        const staticPrefetchDataRoute = prerenderedRoute == null ? void 0 : prerenderedRoute.prefetchDataRoute;
        const isEnsureStaticPage = (prerenderInfo == null ? void 0 : prerenderInfo._isEnsureStaticPage) === true;
        let isDynamicRSCRequest = isRoutePPREnabled && isRSCRequest && !isPrefetchRSCRequest && // If generated at build time, treat the RSC request as static
        // so we can serve the prebuilt .rsc without a dynamic render.
        // Only do this for routes that have a concrete prefetchDataRoute.
        !staticPrefetchDataRoute && // Do not serve `ensureStatic = "navigation"` with a dynamic response,
        // (we want to do a blocking prerender instead)
        // TODO(ensure-static): express this in a cleaner way
        !isEnsureStaticPage;
        // During a PPR revalidation, the RSC request is not dynamic if postponed
        // metadata is absent. An empty string represents a resume request without
        // postponed state, which should perform a full dynamic render.
        if (isMinimalMode) {
            isDynamicRSCRequest = isDynamicRSCRequest && hasPostponedState;
        }
        // Need to read this before it's stripped by stripFlightHeaders. We don't
        // need to transfer it to the request meta because it's only read
        // within this function; the static segment data should have already been
        // generated, so we will always either return a static response or a 404.
        const rawSegmentPrefetchHeader = req.headers[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["NEXT_ROUTER_SEGMENT_PREFETCH_HEADER"]];
        const segmentPrefetchHeader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getRequestMeta"])(req, 'segmentPrefetchRSCRequest') ?? (isPrefetchRSCRequest ? typeof rawSegmentPrefetchHeader === 'string' ? rawSegmentPrefetchHeader : Array.isArray(rawSegmentPrefetchHeader) ? rawSegmentPrefetchHeader[0] : undefined : undefined);
        // TODO: investigate existing bug with shouldServeStreamingMetadata always
        // being true for a revalidate due to modifying the base-server this.renderOpts
        // when fixing this to correct logic it causes hydration issue since we set
        // serveStreamingMetadata to true during export
        const serveStreamingMetadata = !userAgent ? true : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$streaming$2d$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["shouldServeStreamingMetadata"])(userAgent, nextConfig.htmlLimitedBots);
        // A PPR shell has already closed its head before the dynamic render resumes.
        // Blocking metadata resolved during the resume would therefore be emitted
        // after the head, where HTML-limited bots cannot observe it. Bypass the
        // shell so blocking metadata is included in the initial document head.
        const shouldForceDynamicPPRRender = isRoutePPREnabled && !serveStreamingMetadata;
        const isSSG = Boolean((prerenderInfo || isPrerendered || prerenderManifest.routes[normalizedSrcPage]) && !shouldForceDynamicPPRRender);
        // When a page supports cacheComponents, we can support RDC for Navigations
        const supportsRDCForNavigations = isRoutePPREnabled && nextConfig.cacheComponents === true;
        // In development, we always want to generate dynamic HTML.
        const supportsDynamicResponse = // a data request, in which case we only produce static HTML.
        routeModule.isDev === true || // If this is a draft mode request, it supports dynamic HTML.
        isDraftMode || // If this is not SSG or does not have static paths, then it supports
        // dynamic HTML.
        !isSSG || // If this request has provided postponed data, it supports dynamic
        // HTML.
        hasPostponedState || // If this handler supports onCacheEntryV2, then we can only support
        // dynamic responses if it's a dynamic RSC request and not in minimal mode. If it
        // doesn't support it we must fallback to the default behavior.
        (supportsRDCForNavigations && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getRequestMeta"])(req, 'onCacheEntryV2') ? // RSC request, we'll pass the minimal postponed data to the render
        // which will trigger the `supportsDynamicResponse` to be true.
        isDynamicRSCRequest && !isMinimalMode : isDynamicRSCRequest);
        const remainingPrerenderableParams = (prerenderInfo == null ? void 0 : prerenderInfo.remainingPrerenderableParams) ?? [];
        const remainingFallbackRouteParams = nextConfig.cacheComponents ? (prerenderInfo == null ? void 0 : (_prerenderInfo_fallbackRouteParams = prerenderInfo.fallbackRouteParams) == null ? void 0 : _prerenderInfo_fallbackRouteParams.filter((param)=>!remainingPrerenderableParams.some((prerenderableParam)=>prerenderableParam.paramName === param.paramName))) ?? [] : [];
        // Concrete optional routes like `/optional-catchall` can still match their
        // generic shell entry (eg /optional-catchall/[[...slug]]) in the prerender manifest.
        // If the omitted param already resolved to a real prerendered path, keep serving that concrete result.
        const hasOmittedConcreteFallbackParam = isPrerendered && remainingPrerenderableParams.some((param)=>{
            const value = params == null ? void 0 : params[param.paramName];
            return value == null || Array.isArray(value) && value.length === 0;
        });
        const hasUnresolvedRootFallbackParams = (prerenderInfo == null ? void 0 : prerenderInfo.fallback) === null && (((_prerenderInfo_fallbackRootParams = prerenderInfo.fallbackRootParams) == null ? void 0 : _prerenderInfo_fallbackRootParams.length) ?? 0) > 0;
        // SSG writes and navigation RDC reads use the same shell key. Completion
        // uses the matched shell rather than the fully resolved pathname. A request
        // for `/prefix/c/foo` can complete `/prefix/[one]/[two]` to
        // `/prefix/c/[two]`. This avoids creating an entry for every value of
        // `two`.
        //
        // The completed-shell key also applies when unresolved root params require
        // a blocking render. A source shell cannot be shared across root branches.
        // Completion resolves the params into the key as follows:
        // - Root params and other prerenderable params use concrete values.
        // - Never-prerenderable params remain placeholders.
        // The values of those placeholder params must not partition the cache.
        const fallbackPathname = prerenderMatch ? typeof (prerenderInfo == null ? void 0 : prerenderInfo.fallback) === 'string' ? prerenderInfo.fallback : prerenderMatch.source : null;
        let shellCacheKey = null;
        if (nextConfig.cacheComponents && // A closed matcher has no fallback shell. Its generated outputs must
        // retain their concrete cache keys.
        (prerenderInfo == null ? void 0 : prerenderInfo.fallback) !== false && // Never-prerenderable params must stay out of the key even when Partial
        // Prefetching is disabled.
        (nextConfig.partialPrefetching || remainingFallbackRouteParams.length > 0) && fallbackPathname && (prerenderInfo == null ? void 0 : (_prerenderInfo_fallbackRouteParams1 = prerenderInfo.fallbackRouteParams) == null ? void 0 : _prerenderInfo_fallbackRouteParams1.length) && !hasOmittedConcreteFallbackParam) {
            const cacheKey = buildCompletedShellCacheKey(fallbackPathname, remainingPrerenderableParams, params);
            if (cacheKey !== fallbackPathname || remainingFallbackRouteParams.length > 0) {
                shellCacheKey = cacheKey;
            }
        }
        let ssgCacheKey = null;
        let usesShellCacheKey = false;
        if (!isDraftMode && isSSG && !supportsDynamicResponse && !isPossibleServerAction && !hasPostponedState && !isDynamicRSCRequest) {
            if (shellCacheKey !== null) {
                // Normal fallback serving uses the source shell's separate cache
                // lookup. Explicit revalidation skips that path, so it must write the
                // source key here even when no params can be completed.
                if (shellCacheKey !== fallbackPathname || isOnDemandRevalidate) {
                    ssgCacheKey = shellCacheKey;
                    usesShellCacheKey = true;
                }
            } else {
                ssgCacheKey = resolvedPathname;
            }
        }
        // the staticPathKey differs from ssgCacheKey since
        // ssgCacheKey is null in dev since we're always in "dynamic"
        // mode in dev to bypass the cache. It can also be null for partial
        // fallback shells that should remain shared and must not create a
        // param-specific ISR entry, but we still need to honor fallback handling.
        let staticPathKey = ssgCacheKey;
        if (!staticPathKey && (routeModule.isDev || isSSG && pageIsDynamic && (prerenderInfo == null ? void 0 : (_prerenderInfo_fallbackRouteParams2 = prerenderInfo.fallbackRouteParams) == null ? void 0 : _prerenderInfo_fallbackRouteParams2.length) && // Server action requests must not get a staticPathKey, otherwise they
        // enter the fallback rendering block below and return the cached HTML
        // shell with the action result appended, instead of responding with
        // just the RSC action result.
        !isPossibleServerAction)) {
            staticPathKey = resolvedPathname;
        }
        // If this is a request for an app path that should be statically generated
        // and we aren't in the edge runtime, strip the flight headers so it will
        // generate the static response.
        if (!routeModule.isDev && !isDraftMode && isSSG && isRSCRequest && !isDynamicRSCRequest) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$strip$2d$flight$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["stripFlightHeaders"])(req.headers);
        }
        const ComponentMod = {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__,
            tree,
            handler,
            routeModule,
            __next_app__
        };
        // Before rendering (which initializes component tree modules), we have to
        // set the reference manifests to our global store so Server Action's
        // encryption util can access to them at the top level of the page module.
        if (serverActionsManifest && clientReferenceManifest) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$manifests$2d$singleton$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["setManifestsSingleton"])({
                page: srcPage,
                clientReferenceManifest,
                serverActionsManifest
            });
        }
        const method = req.method || 'GET';
        const tracer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getTracer"])();
        const render404 = async ()=>{
            // TODO: should route-module itself handle rendering the 404
            if (routerServerContext == null ? void 0 : routerServerContext.render404) {
                await routerServerContext.render404(req, res, parsedUrl, false);
            } else {
                res.statusCode = 404;
                res.end('This page could not be found');
            }
            return null;
        };
        try {
            const varyHeader = routeModule.getVaryHeader(resolvedPathname, interceptionRoutePatterns);
            res.setHeader('Vary', varyHeader);
            const invokeRouteModule = async (span, context, renderOperation)=>{
                const nextReq = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["NodeNextRequest"](req);
                const nextRes = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["NodeNextResponse"](res);
                const result = renderOperation === 'prerender' ? routeModule.prerender(nextReq, nextRes, context) : routeModule.render(nextReq, nextRes, context);
                return result.finally(()=>{
                    if (!span) return;
                    span.setAttributes({
                        'http.status_code': res.statusCode,
                        'next.rsc': isRSCRequest
                    });
                    if (res.statusCode && res.statusCode >= 500) {
                        // For 5xx status codes: SHOULD be set to 'Error' span status.
                        // x-ref: https://opentelemetry.io/docs/specs/semconv/http/http-spans/#status
                        span.setStatus({
                            code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["SpanStatusCode"].ERROR
                        });
                        // For span status 'Error', SHOULD set 'error.type' attribute.
                        span.setAttribute('error.type', res.statusCode.toString());
                    }
                    const rootSpanAttributes = tracer.getRootSpanAttributes();
                    // We were unable to get attributes, probably OTEL is not enabled
                    if (!rootSpanAttributes) {
                        return;
                    }
                    if (rootSpanAttributes.get('next.span_type') !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["BaseServerSpan"].handleRequest) {
                        console.warn(`Unexpected root span type '${rootSpanAttributes.get('next.span_type')}'. Please report this Next.js issue https://github.com/vercel/next.js`);
                        return;
                    }
                    const route = rootSpanAttributes.get('next.route') || normalizedSrcPage;
                    const name = isRSCRequest ? `RSC ${method} ${route}` : `${method} ${route}`;
                    span.setAttributes({
                        'next.route': route,
                        'http.route': route,
                        'next.span_name': name
                    });
                    span.updateName(name);
                    // Propagate http.route to the request's root span if it isn't the
                    // request span (e.g. a platform-created HTTP span in adapter
                    // deployments).
                    if (requestRootSpan && requestRootSpan !== span) {
                        requestRootSpan.setAttribute('http.route', route);
                        requestRootSpan.updateName(name);
                    }
                });
            };
            const incrementalCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getRequestMeta"])(req, 'incrementalCache') || await routeModule.getIncrementalCache(req, nextConfig, previewProps, prerenderManifest, isMinimalMode);
            incrementalCache == null ? void 0 : incrementalCache.resetRequestCache();
            globalThis.__incrementalCache = incrementalCache;
            const doRender = async ({ span, postponed, fallbackRouteParams, renderOperation, allowEmptyStaticShell })=>{
                var _prerenderManifest_dynamicRoutes_normalizedSrcPage, _prerenderManifest_dynamicRoutes_normalizedSrcPage1;
                // A static page may have stripped Flight headers before reaching this
                // render. Parse only when the response cache invokes the render.
                const parsedRequestHeaders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$parse$2d$request$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["parseRequestHeaders"])(req.headers, {
                    isRoutePPREnabled,
                    previewModeId: previewProps == null ? void 0 : previewProps.previewModeId
                });
                const routeMatch = {
                    resolvedPathname
                };
                const dev = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$dev$2d$render$2d$context$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createDevRenderContext"])(req);
                const context = {
                    query,
                    params,
                    page: normalizedSrcPage,
                    routeMatch,
                    parsedRequestHeaders,
                    sharedContext: {
                        buildId,
                        deploymentId,
                        clientAssetToken
                    },
                    dev,
                    fallbackRouteParams,
                    renderOpts: {
                        App: ()=>null,
                        Document: ()=>null,
                        pageConfig: {},
                        ComponentMod,
                        Component: interopDefault(ComponentMod),
                        params,
                        routeModule,
                        page: srcPage,
                        postponed,
                        allowEmptyStaticShell,
                        serveStreamingMetadata,
                        supportsDynamicResponse: renderOperation === 'render' && (typeof postponed === 'string' || supportsDynamicResponse),
                        buildManifest,
                        nextFontManifest,
                        reactLoadableManifest,
                        subresourceIntegrityManifest,
                        setCacheStatus: routerServerContext == null ? void 0 : routerServerContext.setCacheStatus,
                        setIsrStatus: routerServerContext == null ? void 0 : routerServerContext.setIsrStatus,
                        setReactDebugChannel: routerServerContext == null ? void 0 : routerServerContext.setReactDebugChannel,
                        sendErrorsToBrowser: routerServerContext == null ? void 0 : routerServerContext.sendErrorsToBrowser,
                        dir: ("TURBOPACK compile-time truthy", 1) ? require('path').join(/* turbopackIgnore: true */ process.cwd(), routeModule.relativeProjectDir) : "TURBOPACK unreachable",
                        isDraftMode,
                        botType,
                        isOnDemandRevalidate,
                        isPossibleServerAction,
                        assetPrefix: routeModule.getAssetPrefixForRender(routerServerContext, nextConfig.assetPrefix),
                        nextConfigOutput: nextConfig.output,
                        crossOrigin: nextConfig.crossOrigin,
                        trailingSlash: nextConfig.trailingSlash,
                        images: nextConfig.images,
                        previewProps,
                        enableTainting: nextConfig.experimental.taint,
                        reactMaxHeadersLength: nextConfig.reactMaxHeadersLength,
                        multiZoneDraftMode,
                        prefetchHints: prefetchHintsManifest,
                        // With dynamicParams = false, every parameter is restricted to the
                        // paths generated at build time. Advertise this even for allowed
                        // URLs. Read the current manifest here because dev updates it as
                        // routes compile.
                        notFoundParams: (routeModule.isDev ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getRequestMeta"])(req, 'devNotFoundParams') : undefined) ?? ((_prerenderManifest_dynamicRoutes_normalizedSrcPage = prerenderManifest.dynamicRoutes[normalizedSrcPage]) == null ? void 0 : _prerenderManifest_dynamicRoutes_normalizedSrcPage.notFoundParams) ?? (((_prerenderManifest_dynamicRoutes_normalizedSrcPage1 = prerenderManifest.dynamicRoutes[normalizedSrcPage]) == null ? void 0 : _prerenderManifest_dynamicRoutes_normalizedSrcPage1.fallback) === false ? routeParamNames : undefined),
                        incrementalCache,
                        cacheLifeProfiles: nextConfig.cacheLife,
                        staticPageGenerationTimeout: nextConfig.staticPageGenerationTimeout,
                        basePath: nextConfig.basePath,
                        serverActions: nextConfig.experimental.serverActions,
                        logServerFunctions: typeof nextConfig.logging === 'object' && Boolean(nextConfig.logging.serverFunctions),
                        ...isDebugStaticShell || isDebugDynamicAccesses || isDebugFallbackShell ? {
                            isBuildTimePrerendering: true,
                            isDebugDynamicAccesses: isDebugDynamicAccesses
                        } : {},
                        cacheComponents: Boolean(nextConfig.cacheComponents),
                        partialPrefetching: nextConfig.partialPrefetching,
                        // A fallback shell can only be upgraded to a concrete version if at
                        // least one of its fallback params is a `generateStaticParams`
                        // candidate (`remainingPrerenderableParams`), and only when Partial
                        // Prefetching is enabled (the upgrade itself is gated on it above).
                        // This gates whether the per-segment prefetch responses are flagged
                        // `isUpgradeableISRFallback`; without an upgrade to wait for, the
                        // client should not retry the prefetch.
                        isFallbackUpgradeable: Boolean(nextConfig.partialPrefetching) && remainingPrerenderableParams.length > 0,
                        validationLevel: nextConfig.experimental.instantInsights.validationLevel,
                        experimental: {
                            isRoutePPREnabled,
                            expireTime: nextConfig.expireTime,
                            staleTimes: nextConfig.experimental.staleTimes,
                            dynamicOnHover: Boolean(nextConfig.experimental.dynamicOnHover),
                            optimisticRouting: Boolean(nextConfig.experimental.optimisticRouting),
                            parallelRouteMetadata: Boolean(nextConfig.experimental.parallelRouteMetadata),
                            inlineCss: Boolean(nextConfig.experimental.inlineCss),
                            prefetchInlining: nextConfig.experimental.prefetchInlining ?? false,
                            authInterrupts: Boolean(nextConfig.experimental.authInterrupts),
                            reactBrowserBailout: Boolean(nextConfig.experimental.reactBrowserBailout),
                            serverComponentsHmrCancellation: Boolean(nextConfig.experimental.serverComponentsHmrCancellation),
                            useCacheTimeout: nextConfig.experimental.useCacheTimeout,
                            durableUseCacheEntries: Boolean(nextConfig.experimental.durableUseCacheEntries),
                            cachedNavigations: nextConfig.experimental.cachedNavigations ?? false,
                            clientTraceMetadata: nextConfig.experimental.clientTraceMetadata || [],
                            clientParamParsingOrigins: nextConfig.experimental.clientParamParsingOrigins,
                            maxPostponedStateSizeBytes: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$size$2d$limit$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["parseMaxPostponedStateSize"])(nextConfig.experimental.maxPostponedStateSize),
                            disableResumeDataCacheCompression: nextConfig.experimental.disableResumeDataCacheCompression ?? false,
                            exposeTestingApi
                        },
                        waitUntil: ctx.waitUntil,
                        onClose: (cb)=>{
                            res.on('close', cb);
                        },
                        onAfterTaskError: ()=>{},
                        onInstrumentationRequestError: (error, errorContext, silenceLog)=>routeModule.onRequestError(req, error, errorContext, silenceLog, routerServerContext),
                        err: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getRequestMeta"])(req, 'invokeError')
                    }
                };
                const result = await invokeRouteModule(span, context, renderOperation);
                // Keep recovery output separate from successful response cache entries.
                if ('error' in result) {
                    ;
                    req.fetchMetrics = result.result.metadata.fetchMetrics;
                    return result;
                }
                const { metadata } = result;
                const { cacheControl, headers = {}, fetchTags: cacheTags, fetchMetrics } = metadata;
                // Apply the `expireTime` fallback as soon as we have the render's
                // `cacheControl`, so every downstream consumer (the cache stored via
                // `incrementalCache.set`, the response Cache-Control header, the outgoing
                // entry returned to `handleResponse`) sees a finalized `cacheControl`
                // with a populated `expire`. This mirrors the build-time fallback in
                // `build/index.ts` so we don't apply an expire to routes that opt out of
                // revalidation entirely (`revalidate: false`) or that are dynamic
                // (`revalidate: 0`).
                if (cacheControl && cacheControl.revalidate !== false && cacheControl.revalidate > 0 && cacheControl.expire === undefined) {
                    cacheControl.expire = nextConfig.expireTime;
                }
                if (cacheTags) {
                    headers[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["NEXT_CACHE_TAGS_HEADER"]] = cacheTags;
                }
                // Pull any fetch metrics from the render onto the request.
                ;
                req.fetchMetrics = fetchMetrics;
                // we don't throw static to dynamic errors in dev as isSSG
                // is a best guess in dev since we don't have the prerender pass
                // to know whether the path is actually static or not
                if (isSSG && (cacheControl == null ? void 0 : cacheControl.revalidate) === 0 && !routeModule.isDev && !isRoutePPREnabled) {
                    const staticBailoutInfo = metadata.staticBailoutInfo;
                    const err = new Error(`Page changed from static to dynamic at runtime ${resolvedPathname}${(staticBailoutInfo == null ? void 0 : staticBailoutInfo.description) ? `, reason: ${staticBailoutInfo.description}` : ``}` + `\nsee more here https://nextjs.org/docs/messages/app-static-to-dynamic-error`);
                    if (staticBailoutInfo == null ? void 0 : staticBailoutInfo.stack) {
                        const stack = staticBailoutInfo.stack;
                        err.stack = err.message + stack.substring(stack.indexOf('\n'));
                    }
                    throw err;
                }
                return {
                    value: {
                        kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["CachedRouteKind"].APP_PAGE,
                        html: result,
                        headers,
                        rscData: metadata.flightData,
                        postponed: metadata.postponed,
                        status: metadata.statusCode,
                        segmentData: metadata.segmentData
                    },
                    cacheControl
                };
            };
            const responseGenerator = async ({ hasResolved, previousCacheEntry: previousIncrementalCacheEntry, isRevalidating, span, forceStaticRender = false })=>{
                const isProduction = routeModule.isDev === false;
                const didRespond = hasResolved || res.writableEnded;
                const reportRevalidationError = (error)=>routeModule.onRequestError(req, error, {
                        routerKind: 'App Router',
                        routePath: srcPage,
                        routeType: 'render',
                        revalidateReason: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$instrumentation$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getRevalidateReason"])({
                            isStaticGeneration: isSSG,
                            isOnDemandRevalidate
                        })
                    }, false, routerServerContext);
                try {
                    var _prerenderInfo_fallbackRouteParams;
                    // skip on-demand revalidate if cache is not present and
                    // revalidate-if-generated is set
                    if (isOnDemandRevalidate && revalidateOnlyGenerated && !previousIncrementalCacheEntry && !isMinimalMode) {
                        if (routerServerContext == null ? void 0 : routerServerContext.render404) {
                            await routerServerContext.render404(req, res);
                        } else {
                            res.statusCode = 404;
                            res.end('This page could not be found');
                        }
                        return null;
                    }
                    let fallbackMode;
                    if (prerenderInfo) {
                        fallbackMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["parseFallbackField"])(prerenderInfo.fallback);
                    }
                    // A closed matcher rejects new paths, not regeneration of paths that
                    // were produced by the build. Their cache entries can be invalidated
                    // or evicted without removing the path from the build manifest.
                    if (fallbackMode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["FallbackMode"].NOT_FOUND && isPrerendered) {
                        fallbackMode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["FallbackMode"].BLOCKING_STATIC_RENDER;
                    }
                    if (nextConfig.partialPrefetching && (prerenderInfo == null ? void 0 : prerenderInfo.fallback) === null && // TODO(ensure-static): express this in a cleaner way
                    !isEnsureStaticPage && !prerenderInfo.isExplicitlyBlocking && !hasOmittedConcreteFallbackParam && !hasUnresolvedRootFallbackParams && remainingPrerenderableParams.length > 0) {
                        // Generic source shells without unresolved root params don't have a
                        // concrete fallback file of their own, so they're marked as blocking.
                        // When we can complete the shell into a more specific
                        // prerendered shell for this request, treat it like a prerender
                        // fallback so we can serve that shell instead of blocking on the full
                        // route. Root-param shells stay blocking, since unknown root branches
                        // should not inherit a shell from another generated branch.
                        fallbackMode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["FallbackMode"].PRERENDER;
                    }
                    // When serving a request that requires blocking metadata, we want to
                    // use a blocking render instead of the prerendered fallback. Without
                    // PPR, preserve the existing behavior for built-in bots.
                    if (fallbackMode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["FallbackMode"].PRERENDER && (isRoutePPREnabled ? !serveStreamingMetadata : Boolean(botType))) {
                        fallbackMode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["FallbackMode"].BLOCKING_STATIC_RENDER;
                    }
                    if ((previousIncrementalCacheEntry == null ? void 0 : previousIncrementalCacheEntry.isStale) === -1) {
                        isOnDemandRevalidate = true;
                    }
                    // On-demand revalidation blocks for admitted paths. Cache contents
                    // must not make an otherwise closed path eligible for generation.
                    if (isOnDemandRevalidate && fallbackMode !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["FallbackMode"].NOT_FOUND) {
                        fallbackMode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["FallbackMode"].BLOCKING_STATIC_RENDER;
                    }
                    if (// below. Only production, forced background work, and explicit
                    // shell debugging may enter fallback prerender handling.
                    (isProduction || forceStaticRender || isDebugPrerender) && !isMinimalMode && fallbackMode !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["FallbackMode"].BLOCKING_STATIC_RENDER && staticPathKey && !didRespond && !isDraftMode && pageIsDynamic && (isProduction || !isPrerendered)) {
                        // When cacheComponents is enabled, we can use the fallback
                        // response if the request is not a dynamic RSC request because the
                        // RSC data when this feature flag is enabled does not contain any
                        // param references. Without this feature flag enabled, the RSC data
                        // contains param references, and therefore we can't use the fallback.
                        if (isRoutePPREnabled && (nextConfig.cacheComponents ? !isDynamicRSCRequest : !isRSCRequest)) {
                            const cacheKey = isProduction && typeof (prerenderInfo == null ? void 0 : prerenderInfo.fallback) === 'string' ? prerenderInfo.fallback : normalizedSrcPage;
                            let fallbackRouteParams;
                            if (isProduction) {
                                // In production, rely on the prerender manifest's fallback
                                // entry — the authoritative set computed at build time by
                                // `buildAppStaticPaths`.
                                if (prerenderInfo == null ? void 0 : prerenderInfo.fallbackRouteParams) {
                                    fallbackRouteParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createOpaqueFallbackRouteParams"])(prerenderInfo.fallbackRouteParams);
                                } else if (isDebugFallbackShell) {
                                    fallbackRouteParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getFallbackRouteParams"])(normalizedSrcPage, routeModule);
                                } else {
                                    fallbackRouteParams = null;
                                }
                            } else {
                                // Dev selects the source for static-shell debug renders from
                                // the per-URL `getStaticPaths` result. The dev prerender
                                // manifest does not contain these ad-hoc paths. `base-server`
                                // passes the source's fallback params in request metadata.
                                // These renders need the source set, not the completed target's
                                // potentially smaller `stagedFallbackParams`.
                                if (isDebugFallbackShell) {
                                    fallbackRouteParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getFallbackRouteParams"])(normalizedSrcPage, routeModule);
                                } else if (isDebugStaticShell) {
                                    fallbackRouteParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getRequestMeta"])(req, 'fallbackRouteParams') ?? null;
                                } else {
                                    fallbackRouteParams = null;
                                }
                            }
                            // Debug rendering stages the params of the selected source shell.
                            if (isDebugStaticShell) {
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["addRequestMeta"])(req, 'stagedFallbackParams', fallbackRouteParams);
                            }
                            // We use the response cache here to handle the revalidation and
                            // management of the fallback shell.
                            const fallbackResponse = await routeModule.handleResponse({
                                cacheKey,
                                req,
                                nextConfig,
                                routeKind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RouteKind"].APP_PAGE,
                                isFallback: true,
                                previewProps,
                                prerenderManifest,
                                isRoutePPREnabled,
                                responseGenerator: async ()=>doRender({
                                        span,
                                        // We pass `undefined` as rendering a fallback isn't resumed
                                        // here.
                                        postponed: undefined,
                                        // Always serve the shell that matched this request
                                        // immediately. If there are still prerenderable params left,
                                        // the background path below will complete the shell into a
                                        // more specific cache entry for later requests.
                                        fallbackRouteParams,
                                        renderOperation: 'prerender',
                                        allowEmptyStaticShell: isInstantNavigationTest || undefined
                                    }),
                                waitUntil: ctx.waitUntil,
                                isMinimalMode
                            });
                            if (fallbackResponse === null || 'error' in fallbackResponse) {
                                return fallbackResponse;
                            }
                            // Otherwise, if we did get a fallback response, we should return it.
                            if (fallbackResponse) {
                                if (!isMinimalMode && isRoutePPREnabled && // Upgrading a fallback shell into a more specific ISR entry is
                                // only done when Partial Prefetching is enabled, mirroring the
                                // `partialFallback` flag the adapter emits for deployments.
                                nextConfig.partialPrefetching && // Match the build-time contract: only fallback shells that can
                                // still be completed with prerenderable params should upgrade.
                                remainingPrerenderableParams.length > 0 && ssgCacheKey && incrementalCache && !isOnDemandRevalidate && !isDebugFallbackShell && // The testing API relies on deterministic shell behavior, so
                                // don't upgrade fallback shells in the background when it's
                                // exposed.
                                !exposeTestingApi && // Instant Navigation Testing API requests intentionally keep
                                // the route in shell mode; don't upgrade these in background.
                                !isInstantNavigationTest) {
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["scheduleOnNextTick"])(async ()=>{
                                        const responseCache = routeModule.getResponseCache(req);
                                        try {
                                            // Only the params that were just specialized should be
                                            // removed from the fallback render. Any remaining fallback
                                            // params stay deferred so the revalidated result is a more
                                            // specific shell (e.g. `/prefix/c/[two]`), not a fully
                                            // concrete route (`/prefix/c/foo`).
                                            const result = await responseCache.revalidate(ssgCacheKey, incrementalCache, isRoutePPREnabled, false, (c)=>{
                                                return doRender({
                                                    span: c.span,
                                                    postponed: undefined,
                                                    fallbackRouteParams: remainingFallbackRouteParams.length > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createOpaqueFallbackRouteParams"])(remainingFallbackRouteParams) : null,
                                                    renderOperation: 'prerender'
                                                });
                                            }, null, hasResolved, ctx.waitUntil);
                                            if (result !== null && 'error' in result) {
                                                throw result.error;
                                            }
                                        } catch (err) {
                                            console.error('Error revalidating the page in the background', err);
                                        }
                                    });
                                }
                                // Remove the cache control from the response to prevent it from being
                                // used in the surrounding cache.
                                delete fallbackResponse.cacheControl;
                                return fallbackResponse;
                            }
                        }
                    }
                    // Only requests that aren't revalidating can be resumed. If we have the
                    // minimal postponed data, then we should resume the render with it.
                    let postponed = !isOnDemandRevalidate && !isRevalidating && minimalPostponed ? minimalPostponed : undefined;
                    let hasFullyStaticCacheEntry = false;
                    if (// use the postponed data from the static render (if available). This
                    // ensures that we can utilize the resume data cache (RDC) from the static
                    // render to ensure that the data is consistent between the static and
                    // dynamic renders (for navigations) or when re-rendering after a server
                    // action.
                    // Only enable RDC for Navigations if the feature is enabled.
                    supportsRDCForNavigations && ("TURBOPACK compile-time value", "nodejs") !== 'edge' && !isMinimalMode && incrementalCache && // Include both dynamic RSC requests (navigations) and server actions
                    (isDynamicRSCRequest || isPossibleServerAction) && // We don't typically trigger an on-demand revalidation for dynamic RSC
                    // requests, as we're typically revalidating the page in the background
                    // instead. However, if the cache entry is stale, we should trigger a
                    // background revalidation on dynamic RSC requests. This prevents us
                    // from entering an infinite loop of revalidations.
                    !forceStaticRender) {
                        const incrementalCacheKey = shellCacheKey ?? resolvedPathname;
                        const incrementalCacheEntry = await incrementalCache.get(incrementalCacheKey, {
                            kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["IncrementalCacheKind"].APP_PAGE,
                            route: routeModule.cacheOwner,
                            isRoutePPREnabled: true,
                            isFallback: false
                        });
                        // If the cache entry is found, we should use the postponed data from
                        // the cache.
                        if (incrementalCacheEntry && incrementalCacheEntry.value && incrementalCacheEntry.value.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["CachedRouteKind"].APP_PAGE) {
                            // CRITICAL: we're assigning the postponed data from the cache entry
                            // here as we're using the RDC to resume the render.
                            postponed = incrementalCacheEntry.value.postponed;
                            hasFullyStaticCacheEntry = postponed === undefined;
                            // If the cache entry is stale, we should trigger a background
                            // revalidation so that subsequent requests will get a fresh response.
                            if (incrementalCacheEntry && // We want to trigger this flow if the cache entry is stale and if
                            // the requested revalidation flow is either foreground or
                            // background.
                            (incrementalCacheEntry.isStale === -1 || incrementalCacheEntry.isStale === true)) {
                                // We want to schedule this on the next tick to ensure that the
                                // render is not blocked on it.
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["scheduleOnNextTick"])(async ()=>{
                                    const responseCache = routeModule.getResponseCache(req);
                                    try {
                                        const result = await responseCache.revalidate(incrementalCacheKey, incrementalCache, isRoutePPREnabled, false, (c)=>responseGenerator({
                                                ...c,
                                                // CRITICAL: we need to set this to true as we're
                                                // revalidating in the background and typically this dynamic
                                                // RSC request is not treated as static.
                                                forceStaticRender: true
                                            }), // previous cache entry here (which is stale) will switch on
                                        // isOnDemandRevalidate and break the prerendering.
                                        null, hasResolved, ctx.waitUntil);
                                        if (result !== null && 'error' in result) {
                                            throw result.error;
                                        }
                                    } catch (err) {
                                        console.error('Error revalidating the page in the background', err);
                                    }
                                });
                            }
                        }
                    }
                    // When we're in minimal mode, if we're trying to debug the static shell,
                    // return an empty App Page response instead of resuming the dynamic
                    // render. The static shell has already been streamed by the platform.
                    if ((isDebugStaticShell || isDebugDynamicAccesses) && typeof postponed !== 'undefined') {
                        return {
                            cacheControl: {
                                revalidate: 1,
                                expire: undefined
                            },
                            value: {
                                kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["CachedRouteKind"].APP_PAGE,
                                html: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["default"].fromStatic('', isRSCRequest ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RSC_CONTENT_TYPE_HEADER"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["HTML_CONTENT_TYPE_HEADER"]),
                                rscData: undefined,
                                postponed,
                                segmentData: undefined,
                                headers: undefined,
                                status: undefined
                            }
                        };
                    }
                    const placeholderFallbackRouteParams = // (e.g. "[slug]") for the params it leaves unresolved, so defer
                    // only that subset instead of forcing all fallback params to
                    // suspend. With `next start`, a placeholder-shaped segment in the
                    // URL is an ordinary concrete value, and every never-prerenderable
                    // param defers below.
                    isMinimalMode && !routeModule.isDev && pageIsDynamic && (prerenderInfo == null ? void 0 : prerenderInfo.fallbackRouteParams) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getPlaceholderFallbackRouteParams"])(params, prerenderInfo.fallbackRouteParams) : null;
                    const fallbackRouteParamsForRender = placeholderFallbackRouteParams && placeholderFallbackRouteParams.length > 0 ? placeholderFallbackRouteParams : prerenderInfo == null ? void 0 : prerenderInfo.fallbackRouteParams;
                    const hasPlaceholderFallbackRouteParams = placeholderFallbackRouteParams != null && placeholderFallbackRouteParams.length > 0;
                    // When route-module.ts resolved partial nxtP* params during
                    // background revalidation, filter fallbackRouteParams to only the
                    // params that are still unresolved. This lets doRender produce an
                    // intermediate PPR shell that suspends only for those params.
                    let effectiveFallbackRouteParams = null;
                    if (nextConfig.cacheComponents && (prerenderInfo == null ? void 0 : prerenderInfo.fallbackRouteParams)) {
                        const resolvedKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getRequestMeta"])(req, 'resolvedRouteParamKeys');
                        if (resolvedKeys && resolvedKeys.size > 0) {
                            effectiveFallbackRouteParams = prerenderInfo.fallbackRouteParams.filter((param)=>!resolvedKeys.has(param.paramName));
                        }
                    }
                    const fallbackRouteParams = // non-prerendered URL, use the prerender manifest's fallback route
                    // params which correctly identifies which params are unknown.
                    (isProduction && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getRequestMeta"])(req, 'renderFallbackShell') || hasPlaceholderFallbackRouteParams || isDebugStaticShell && !isPrerendered) && fallbackRouteParamsForRender ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createOpaqueFallbackRouteParams"])(fallbackRouteParamsForRender) : // prerender suspends only for the unresolved params.
                    effectiveFallbackRouteParams && effectiveFallbackRouteParams.length > 0 && effectiveFallbackRouteParams.length < ((prerenderInfo == null ? void 0 : (_prerenderInfo_fallbackRouteParams = prerenderInfo.fallbackRouteParams) == null ? void 0 : _prerenderInfo_fallbackRouteParams.length) ?? 0) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createOpaqueFallbackRouteParams"])(effectiveFallbackRouteParams) : // shared entry. Per-request resumes resolve those params
                    // instead. Blocking renders and RSC-triggered revalidations
                    // both need this restriction.
                    //
                    // The serving modes obtain the unresolved params differently:
                    // - `next start` defers them in this branch.
                    // - Minimal mode uses the platform's placeholders above.
                    // The platform strips never-prerenderable param values before
                    // calling the origin.
                    !isMinimalMode && (usesShellCacheKey || forceStaticRender && shellCacheKey !== null) && remainingFallbackRouteParams.length > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createOpaqueFallbackRouteParams"])(remainingFallbackRouteParams) : isDebugFallbackShell ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getFallbackRouteParams"])(normalizedSrcPage, routeModule) : null;
                    // Staging defers params without replacing their values with opaque
                    // placeholders. A resumed render reads the selected artifact's mask
                    // from its postponed state.
                    if ((isProduction || isDebugStaticShell) && nextConfig.cacheComponents) {
                        let stagedFallbackParams;
                        if (hasPlaceholderFallbackRouteParams) {
                            stagedFallbackParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createOpaqueFallbackRouteParams"])(placeholderFallbackRouteParams);
                        } else if (isDebugStaticShell) {
                            stagedFallbackParams = fallbackRouteParams;
                        } else if (hasFullyStaticCacheEntry || isPrerendered) {
                            stagedFallbackParams = null;
                        } else if (postponed && (prerenderInfo == null ? void 0 : prerenderInfo.fallbackRouteParams)) {
                            // App-render uses this source-shell set only when the supplied
                            // state does not record its own fallback params.
                            stagedFallbackParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createOpaqueFallbackRouteParams"])(prerenderInfo.fallbackRouteParams);
                        } else if (prerenderInfo) {
                            stagedFallbackParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getStagedFallbackParams"])(prerenderInfo);
                        } else {
                            stagedFallbackParams = null;
                        }
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["addRequestMeta"])(req, 'stagedFallbackParams', stagedFallbackParams);
                    }
                    // Forced static and debug renders are prerenders even when the
                    // surrounding request otherwise supports dynamic rendering.
                    const isRequestSpecificRender = !forceStaticRender && !isDebugPrerender && (supportsDynamicResponse || isPossibleServerAction);
                    // Perform the render.
                    const result = await doRender({
                        span,
                        postponed,
                        fallbackRouteParams,
                        renderOperation: isRequestSpecificRender ? 'render' : 'prerender',
                        allowEmptyStaticShell: isInstantNavigationTest || undefined
                    });
                    // The response cache already served the stale entry, so response
                    // delivery cannot report this background failure.
                    if ('error' in result && hasResolved) {
                        await reportRevalidationError(result.error);
                    }
                    return result;
                } catch (err) {
                    // The foreground handler reports errors while it awaits a response.
                    // Report here only after the cache has resolved that response.
                    if (hasResolved) {
                        await reportRevalidationError(err);
                    }
                    throw err;
                }
            };
            const invokeOnCacheEntry = (cacheEntry)=>{
                var _parseUrl;
                // If we support RDC for Navigations, prefer the callback that can
                // deliver postponed state for both document and RSC requests.
                const onCacheEntry = supportsRDCForNavigations ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getRequestMeta"])(req, 'onCacheEntryV2') ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getRequestMeta"])(req, 'onCacheEntry') : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getRequestMeta"])(req, 'onCacheEntry');
                if (!onCacheEntry) {
                    return false;
                }
                const rawCacheEntryUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getRequestMeta"])(req, 'initURL') ?? req.url;
                const cacheEntryUrl = rawCacheEntryUrl ? ((_parseUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$url$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["parseUrl"])(rawCacheEntryUrl)) == null ? void 0 : _parseUrl.pathname) ?? rawCacheEntryUrl : undefined;
                return onCacheEntry(cacheEntry, {
                    url: cacheEntryUrl
                });
            };
            const resumeRender = (body, postponed, span)=>{
                // Attach the continuation before rendering so the prelude can start
                // streaming immediately.
                const transformer = new TransformStream();
                body.push(transformer.readable);
                // This metadata supplies fallback params when the saved state does not
                // record them. App-render uses the saved state's own set when present.
                if (nextConfig.cacheComponents && (prerenderInfo == null ? void 0 : prerenderInfo.fallbackRouteParams)) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["addRequestMeta"])(req, 'stagedFallbackParams', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createOpaqueFallbackRouteParams"])(prerenderInfo.fallbackRouteParams));
                }
                // Start the resume without awaiting it. The response consumes the
                // continuation stream attached above.
                doRender({
                    span,
                    postponed,
                    // The resume retains concrete param values; staging only defers
                    // access.
                    fallbackRouteParams: null,
                    renderOperation: 'render'
                }).then(async (result)=>{
                    var _result_value;
                    if (!result) {
                        throw new Error('Invariant: expected a result to be returned');
                    }
                    if ('error' in result) {
                        throw result.error;
                    }
                    if (((_result_value = result.value) == null ? void 0 : _result_value.kind) !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["CachedRouteKind"].APP_PAGE) {
                        var _result_value1;
                        throw new Error(`Invariant: expected a page response, got ${(_result_value1 = result.value) == null ? void 0 : _result_value1.kind}`);
                    }
                    // Pipe the resume result to the transformer.
                    await result.value.html.pipeTo(transformer.writable);
                }).catch((err)=>{
                    // An error occurred during piping or preparing the render, abort
                    // the transformers writer so we can terminate the stream.
                    transformer.writable.abort(err).catch((e)=>{
                        console.error("couldn't abort transformer", e);
                    });
                });
            };
            const handleResponse = async (span)=>{
                var _cacheEntry_value, _cachedData_headers;
                // Development evaluates the configured policy without emitting its
                // production matchers. Use that outcome at the same admission boundary.
                const devParamMatchingRejected = routeModule.isDev && !isDebugPrerender && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getRequestMeta"])(req, 'devParamMatchingRejected');
                // Decide whether this URL is allowed before consulting ISR. An exact
                // build path remains valid even when its cached result is missing, and
                // the most specific matched route controls whether other paths may be
                // generated. Neither a cache hit nor revalidation changes that decision.
                // Server Actions may be forwarded to a worker's route pattern rather
                // than a concrete URL. That invokes the action, not a page navigation.
                if (!isMinimalMode && !isDraftMode && !isPossibleServerAction && pageIsDynamic && (devParamMatchingRejected || (prerenderInfo == null ? void 0 : prerenderInfo.fallback) === false && !isPrerendered)) {
                    if (nextConfig.adapterPath) {
                        return await render404();
                    }
                    throw new __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$shared$2f$lib$2f$no$2d$fallback$2d$error$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$shared$2f$lib$2f$no$2d$fallback$2d$error$2e$external$2e$js$2c$__cjs$29$__["NoFallbackError"]();
                }
                const cacheEntry = await routeModule.handleResponse({
                    cacheKey: ssgCacheKey,
                    responseGenerator: (c)=>responseGenerator({
                            span,
                            ...c
                        }),
                    routeKind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RouteKind"].APP_PAGE,
                    isOnDemandRevalidate,
                    isRoutePPREnabled,
                    req,
                    nextConfig,
                    previewProps,
                    prerenderManifest,
                    waitUntil: ctx.waitUntil,
                    isMinimalMode
                });
                if (cacheEntry !== null && 'error' in cacheEntry) {
                    if (res.headersSent || res.writableEnded) {
                        // The outer catch reports the error when we cannot send recovery.
                        throw cacheEntry.error;
                    }
                    // Returned failures bypass the outer catch's error reporting. Do not
                    // await async reporting before sending the error response.
                    const reportPrerenderError = ()=>{
                        const errorReporting = routeModule.onRequestError(req, cacheEntry.error, {
                            routerKind: 'App Router',
                            routePath: srcPage,
                            routeType: 'render',
                            revalidateReason: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$instrumentation$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getRevalidateReason"])({
                                isStaticGeneration: isSSG,
                                isOnDemandRevalidate
                            })
                        }, false, routerServerContext).catch((err)=>{
                            console.error(err);
                        });
                        ctx.waitUntil == null ? void 0 : ctx.waitUntil.call(ctx, errorReporting);
                    };
                    const { result } = cacheEntry;
                    for (const [name, value] of Object.entries(result.metadata.headers ?? {})){
                        if (value !== undefined) {
                            res.appendHeader(name, typeof value === 'number' ? value.toString() : value);
                        }
                    }
                    // Each request needs the failure status, including callers that
                    // reused another request's render through the response cache.
                    res.statusCode = 500;
                    span == null ? void 0 : span.setAttributes({
                        'http.status_code': 500,
                        'next.rsc': isRSCRequest,
                        'error.type': '500'
                    });
                    span == null ? void 0 : span.setStatus({
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["SpanStatusCode"].ERROR
                    });
                    res.removeHeader('x-nextjs-cache');
                    res.setHeader('Cache-Control', 'private, no-cache, no-store, max-age=0, must-revalidate');
                    let response = result;
                    if (isRSCRequest) {
                        // The router discards failed prefetches and falls back to a
                        // document load when navigation receives a failed Flight response.
                        response = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["default"].fromStatic('', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RSC_CONTENT_TYPE_HEADER"]);
                    } else if (typeof result.metadata.postponed === 'string') {
                        // The platform needs the postponed state to resume with the actual
                        // request. This value is only for delivery; the response cache
                        // retains the failure and never persists it as ISR output.
                        //
                        // The callback writes to res without applying value.status. Its
                        // status and metadata headers must be set first.
                        if (await invokeOnCacheEntry({
                            value: {
                                kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["CachedRouteKind"].APP_PAGE,
                                html: result,
                                rscData: result.metadata.flightData,
                                postponed: result.metadata.postponed,
                                status: 500,
                                headers: undefined,
                                segmentData: undefined
                            },
                            cacheControl: {
                                revalidate: 0,
                                expire: undefined
                            }
                        })) {
                            reportPrerenderError();
                            return null;
                        }
                        if (isMinimalMode) {
                            // A prerender invocation may have filtered request headers, so
                            // only the platform can resume with the original request.
                            //
                            // Let the outer catch report this error once.
                            throw cacheEntry.error;
                        }
                        // Each request owns its continuation. The buffered prelude and
                        // postponed state can be shared by the response cache.
                        response = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["default"].fromStatic(result.toUnchunkedString(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["HTML_CONTENT_TYPE_HEADER"]);
                        resumeRender(response, result.metadata.postponed, span);
                    }
                    reportPrerenderError();
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["sendRenderResult"])({
                        req,
                        res,
                        result: response,
                        generateEtags: false,
                        poweredByHeader: nextConfig.poweredByHeader,
                        cacheControl: undefined
                    });
                }
                if (isDraftMode) {
                    res.setHeader('Cache-Control', 'private, no-cache, no-store, max-age=0, must-revalidate');
                }
                // Documents and RSC payloads must not be stored in development.
                // Browsers reuse a stored response for a history navigation without
                // revalidating it, so a back navigation would restore a page from
                // before the latest edit. Static assets never reach this code. They
                // keep a revalidatable `Cache-Control`, so the browser caches them
                // between page loads.
                if (routeModule.isDev) {
                    res.setHeader('Cache-Control', 'no-store');
                }
                if (!cacheEntry) {
                    if (ssgCacheKey) {
                        // A cache entry might not be generated if a response is written
                        // in `getInitialProps` or `getServerSideProps`, but those shouldn't
                        // have a cache key. If we do have a cache key but we don't end up
                        // with a cache entry, then either Next.js or the application has a
                        // bug that needs fixing.
                        throw new Error('invariant: cache entry required but not generated');
                    }
                    return null;
                }
                if (((_cacheEntry_value = cacheEntry.value) == null ? void 0 : _cacheEntry_value.kind) !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["CachedRouteKind"].APP_PAGE) {
                    var _cacheEntry_value1;
                    throw new Error(`Invariant app-page handler received invalid cache entry ${(_cacheEntry_value1 = cacheEntry.value) == null ? void 0 : _cacheEntry_value1.kind}`);
                }
                const didPostpone = typeof cacheEntry.value.postponed === 'string';
                // A static shell with postponed parts doesn't include the Turbopack
                // bootstrap: the resume emits it with the request's CSP nonce. When
                // such a shell is served without a resume, it has to be added.
                const pushTurbopackBootstrapScript = (result)=>{
                    if (!didPostpone) return;
                    const bootstrapScript = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$turbopack$2d$bootstrap$2d$script$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createTurbopackBootstrapScriptStreamForPage"])(buildManifest, srcPage, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$get$2d$script$2d$nonce$2d$from$2d$header$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getScriptNonceFromHeaders"])(req.headers));
                    if (bootstrapScript) result.push(bootstrapScript);
                };
                // Set the build ID header for RSC navigation requests when deploymentId is configured. This
                // corresponds with maybeAppendBuildIdToRSCPayload in app-render.tsx which omits the build ID
                // from the RSC payload when deploymentId is set (relying on this header instead). Server
                // actions are excluded here because action redirect responses get the deployment ID header
                // from the pre-fetched redirect target (via createRedirectRenderResult in action-handler.ts
                // which copies headers from the internal RSC fetch).
                // For static prerenders served from CDN, routes-manifest.json adds a header.
                if (isRSCRequest && !isPossibleServerAction && deploymentId) {
                    res.setHeader(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["NEXT_NAV_DEPLOYMENT_ID_HEADER"], deploymentId);
                }
                if (isSSG && // We don't want to send a cache header for requests that contain dynamic
                // data. If this is a Dynamic RSC request or wasn't a Prefetch RSC
                // request, then we should set the cache header.
                !isDynamicRSCRequest && (!didPostpone || isPrefetchRSCRequest)) {
                    if (!isMinimalMode) {
                        // set x-nextjs-cache header to match the header
                        // we set for the image-optimizer
                        res.setHeader('x-nextjs-cache', isOnDemandRevalidate ? 'REVALIDATED' : cacheEntry.isMiss ? 'MISS' : cacheEntry.isStale ? 'STALE' : 'HIT');
                    }
                    // Set a header used by the client router to signal the response is static
                    // and should respect the `static` cache staleTime value.
                    res.setHeader(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["NEXT_IS_PRERENDER_HEADER"], '1');
                }
                const { value: cachedData } = cacheEntry;
                // Coerce the cache control parameter from the render.
                let cacheControl;
                // If this is a resume request in minimal mode it is streamed with dynamic
                // content and should not be cached.
                if (hasPostponedState) {
                    cacheControl = {
                        revalidate: 0,
                        expire: undefined
                    };
                } else if (isDynamicRSCRequest) {
                    cacheControl = {
                        revalidate: 0,
                        expire: undefined
                    };
                } else if (!routeModule.isDev) {
                    // If this is a preview mode request, we shouldn't cache it
                    if (isDraftMode) {
                        cacheControl = {
                            revalidate: 0,
                            expire: undefined
                        };
                    } else if (!isSSG) {
                        if (!res.getHeader('Cache-Control')) {
                            cacheControl = {
                                revalidate: 0,
                                expire: undefined
                            };
                        }
                    } else if (cacheEntry.cacheControl) {
                        // If the cache entry has a cache control with a revalidate value that's
                        // a number, use it.
                        if (typeof cacheEntry.cacheControl.revalidate === 'number') {
                            if (cacheEntry.cacheControl.revalidate < 1) {
                                throw new Error(`Invalid revalidate configuration provided: ${cacheEntry.cacheControl.revalidate} < 1`);
                            }
                            cacheControl = {
                                revalidate: cacheEntry.cacheControl.revalidate,
                                expire: cacheEntry.cacheControl.expire
                            };
                        } else {
                            cacheControl = {
                                revalidate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["CACHE_ONE_YEAR_SECONDS"],
                                expire: undefined
                            };
                        }
                    }
                }
                cacheEntry.cacheControl = cacheControl;
                if (typeof segmentPrefetchHeader === 'string' && (cachedData == null ? void 0 : cachedData.kind) === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["CachedRouteKind"].APP_PAGE && cachedData.segmentData) {
                    var _cachedData_headers1;
                    // This is a prefetch request issued by the client Segment Cache. These
                    // should never reach the application layer (lambda). We should either
                    // respond from the cache (HIT) or respond with 404 (MISS).
                    // Set a header to indicate that PPR is enabled for this route. This
                    // lets the client distinguish between a regular cache miss and a cache
                    // miss due to PPR being disabled. In other contexts this header is used
                    // to indicate that the response contains dynamic data, but here we're
                    // only using it to indicate that the feature is enabled — the segment
                    // response itself contains whether the data is dynamic.
                    res.setHeader(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["NEXT_DID_POSTPONE_HEADER"], '2');
                    // Add the cache tags header to the response if it exists and we're in
                    // minimal mode while rendering a static page.
                    const tags = (_cachedData_headers1 = cachedData.headers) == null ? void 0 : _cachedData_headers1[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["NEXT_CACHE_TAGS_HEADER"]];
                    if (isMinimalMode && isSSG && tags && typeof tags === 'string') {
                        res.setHeader(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["NEXT_CACHE_TAGS_HEADER"], tags);
                    }
                    const matchedSegment = cachedData.segmentData.get(segmentPrefetchHeader);
                    if (matchedSegment !== undefined) {
                        // Cache hit
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["sendRenderResult"])({
                            req,
                            res,
                            generateEtags: nextConfig.generateEtags,
                            poweredByHeader: nextConfig.poweredByHeader,
                            result: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["default"].fromStatic(matchedSegment, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RSC_CONTENT_TYPE_HEADER"]),
                            cacheControl: cacheEntry.cacheControl
                        });
                    }
                    // Cache miss. Either a cache entry for this route has not been generated
                    // (which technically should not be possible when PPR is enabled, because
                    // at a minimum there should always be a fallback entry) or there's no
                    // match for the requested segment. Respond with a 404.
                    res.statusCode = 404;
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["sendRenderResult"])({
                        req,
                        res,
                        generateEtags: nextConfig.generateEtags,
                        poweredByHeader: nextConfig.poweredByHeader,
                        result: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["default"].EMPTY,
                        cacheControl: cacheEntry.cacheControl
                    });
                }
                // `onCacheEntry` lets the platform capture a freshly prerendered result
                // so the proxy can write it to the ISR cache; on deploy it returns true
                // and the function returns below. In debug-shell mode the render was
                // skipped and we only serve the already-cached shell, so there is nothing
                // to capture, and we need to reach the serve path below to close the
                // document. `onCacheEntry` is absent in `next start`/dev, so this guard
                // only affects the deploy (minimalMode) path.
                if (!isDebugStaticShell && await invokeOnCacheEntry(cacheEntry)) {
                    return null;
                }
                if (cachedData.headers) {
                    const headers = {
                        ...cachedData.headers
                    };
                    if (!isMinimalMode || !isSSG) {
                        delete headers[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["NEXT_CACHE_TAGS_HEADER"]];
                    }
                    for (let [key, value] of Object.entries(headers)){
                        if (typeof value === 'undefined') continue;
                        if (Array.isArray(value)) {
                            for (const v of value){
                                res.appendHeader(key, v);
                            }
                        } else if (typeof value === 'number') {
                            value = value.toString();
                            res.appendHeader(key, value);
                        } else {
                            res.appendHeader(key, value);
                        }
                    }
                }
                // Add the cache tags header to the response if it exists and we're in
                // minimal mode while rendering a static page.
                const tags = (_cachedData_headers = cachedData.headers) == null ? void 0 : _cachedData_headers[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["NEXT_CACHE_TAGS_HEADER"]];
                if (isMinimalMode && isSSG && tags && typeof tags === 'string') {
                    res.setHeader(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["NEXT_CACHE_TAGS_HEADER"], tags);
                }
                // If the request is a data request, then we shouldn't set the status code
                // from the response because it should always be 200. This should be gated
                // behind the experimental PPR flag.
                if (cachedData.status && (!isRSCRequest || !isRoutePPREnabled)) {
                    res.statusCode = cachedData.status;
                }
                // Redirect information is encoded in RSC payload, so we don't need to use redirect status codes
                if (!isMinimalMode && cachedData.status && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$redirect$2d$status$2d$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RedirectStatusCode"][cachedData.status] && isRSCRequest) {
                    res.statusCode = 200;
                }
                // Mark that the request did postpone.
                if (didPostpone && !isDynamicRSCRequest) {
                    res.setHeader(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["NEXT_DID_POSTPONE_HEADER"], '1');
                }
                // we don't go through this block when preview mode is true
                // as preview mode is a dynamic request (bypasses cache) and doesn't
                // generate both HTML and payloads in the same request so continue to just
                // return the generated payload
                if (isRSCRequest && !isDraftMode) {
                    // If this is a dynamic RSC request, then stream the response.
                    if (typeof cachedData.rscData === 'undefined') {
                        // If the response is not an RSC response, then we can't serve it.
                        if (cachedData.html.contentType !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RSC_CONTENT_TYPE_HEADER"]) {
                            if (nextConfig.cacheComponents) {
                                res.statusCode = 404;
                                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["sendRenderResult"])({
                                    req,
                                    res,
                                    generateEtags: nextConfig.generateEtags,
                                    poweredByHeader: nextConfig.poweredByHeader,
                                    result: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["default"].EMPTY,
                                    cacheControl: cacheEntry.cacheControl
                                });
                            } else {
                                // Otherwise this case is not expected.
                                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["InvariantError"](`Expected RSC response, got ${cachedData.html.contentType}`);
                            }
                        }
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["sendRenderResult"])({
                            req,
                            res,
                            generateEtags: nextConfig.generateEtags,
                            poweredByHeader: nextConfig.poweredByHeader,
                            result: cachedData.html,
                            cacheControl: cacheEntry.cacheControl
                        });
                    }
                    // As this isn't a prefetch request, we should serve the static flight
                    // data.
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["sendRenderResult"])({
                        req,
                        res,
                        generateEtags: nextConfig.generateEtags,
                        poweredByHeader: nextConfig.poweredByHeader,
                        result: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["default"].fromStatic(cachedData.rscData, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RSC_CONTENT_TYPE_HEADER"]),
                        cacheControl: cacheEntry.cacheControl
                    });
                }
                // This is a request for HTML data.
                const body = cachedData.html;
                // Instant Navigation Testing API: under the instant lock we serve the
                // static shell as a complete document without resuming the dynamic
                // render, either recovering from an empty (blocking) shell or appending
                // the closing tags to a non-empty one.
                if (isInstantNavigationTest && isDebugStaticShell) {
                    const isEmptyPrelude = typeof cachedData.postponed === 'string' && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__.isEmptyHTMLPrelude(cachedData.postponed);
                    if (isEmptyPrelude) {
                        // A blocking route (a Suspense boundary above <body>, or `export
                        // const instant = false`) has an empty static shell. Serving it under
                        // the lock would be a blank document with no way to release the lock,
                        // so every reload would render the same blank shell and leave the
                        // user stuck. We surface the reason instead: in development we throw
                        // so it shows as an error overlay (the catch below clears the instant
                        // cookie via Set-Cookie); in production we serve a minimal document
                        // whose script clears the cookie client-side, since on deploy the
                        // edge has already served the cached shell and committed the response
                        // headers and this function only resumes by appending to the body, so
                        // a Set-Cookie could not take effect. `next start` reuses the same
                        // document, where throwing would render only a generic "Internal
                        // Server Error" page.
                        if (routeModule.isDev === true) {
                            throw new Error(`The Navigation Inspector was active, but you attempted to load a blocking route. Reload the page to reset the inspector.\n\n` + `To identify why this route is blocking, refer to the Instant Navigation docs: https://preview.nextjs.org/docs/app/guides/instant-navigation`);
                        }
                        const recoveryHtml = `<!DOCTYPE html><html><head><meta charSet="utf-8"/></head><body>` + `<script>document.cookie="${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["NEXT_INSTANT_TEST_COOKIE"]}=; Path=/; Max-Age=0"</script>` + `<p>The Navigation Inspector was active, but you attempted to load a blocking route. Reload the page to reset the inspector.</p>` + `<p>To identify why this route is blocking, refer to the ` + `<a href="https://preview.nextjs.org/docs/app/guides/instant-navigation">Instant Navigation docs</a>.</p>` + `</body></html>`;
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["sendRenderResult"])({
                            req,
                            res,
                            generateEtags: nextConfig.generateEtags,
                            poweredByHeader: nextConfig.poweredByHeader,
                            result: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["default"].fromStatic(recoveryHtml, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["HTML_CONTENT_TYPE_HEADER"]),
                            cacheControl: {
                                revalidate: 0,
                                expire: undefined
                            }
                        });
                    }
                    // Non-empty shell: the cookie-guarded bootstrap that sets
                    // self.__next_instant_test is embedded in the prerendered shell via
                    // `bootstrapScriptContent`, so it is already present (in the served
                    // shell for a fresh render, or in the cached prelude on deploy). The
                    // Turbopack bootstrap is left out of the shell for the resume to
                    // emit, so add it here. Append the closing tags so the browser can
                    // parse a complete document.
                    pushTurbopackBootstrapScript(body);
                    body.push(new ReadableStream({
                        start (controller) {
                            controller.enqueue(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["ENCODED_TAGS"].CLOSED.BODY_AND_HTML);
                            controller.close();
                        }
                    }));
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["sendRenderResult"])({
                        req,
                        res,
                        generateEtags: nextConfig.generateEtags,
                        poweredByHeader: nextConfig.poweredByHeader,
                        result: body,
                        cacheControl: {
                            revalidate: 0,
                            expire: undefined
                        }
                    });
                }
                // If there's no postponed state, we should just serve the HTML. This
                // should also be the case for a resume request because it's completed
                // as a server render (rather than a static render).
                if (!didPostpone || isMinimalMode || isRSCRequest) {
                    // If we're in test mode, we should add a sentinel chunk to the response
                    // that's between the static and dynamic parts so we can compare the
                    // chunks and add assertions.
                    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                    ;
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["sendRenderResult"])({
                        req,
                        res,
                        generateEtags: nextConfig.generateEtags,
                        poweredByHeader: nextConfig.poweredByHeader,
                        result: body,
                        cacheControl: cacheEntry.cacheControl
                    });
                }
                // If we're debugging the static shell or the dynamic API accesses, we
                // should just serve the HTML without resuming the render. The returned
                // HTML will be the static shell so all the Dynamic API's will be used
                // during static generation.
                if (isDebugStaticShell || isDebugDynamicAccesses) {
                    // The Turbopack bootstrap is left out of the shell for the resume to
                    // emit, so add it here. Since we're not resuming the render, we need
                    // to at least add the closing body and html tags to create valid
                    // HTML.
                    pushTurbopackBootstrapScript(body);
                    body.push(new ReadableStream({
                        start (controller) {
                            controller.enqueue(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["ENCODED_TAGS"].CLOSED.BODY_AND_HTML);
                            controller.close();
                        }
                    }));
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["sendRenderResult"])({
                        req,
                        res,
                        generateEtags: nextConfig.generateEtags,
                        poweredByHeader: nextConfig.poweredByHeader,
                        result: body,
                        cacheControl: {
                            revalidate: 0,
                            expire: undefined
                        }
                    });
                }
                // If we're in test mode, we should add a sentinel chunk to the response
                // that's between the static and dynamic parts so we can compare the
                // chunks and add assertions.
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
                resumeRender(body, cachedData.postponed, span);
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["sendRenderResult"])({
                    req,
                    res,
                    generateEtags: nextConfig.generateEtags,
                    poweredByHeader: nextConfig.poweredByHeader,
                    result: body,
                    // We don't want to cache the response if it has postponed data because
                    // the response being sent to the client it's dynamic parts are streamed
                    // to the client on the same request.
                    cacheControl: {
                        revalidate: 0,
                        expire: undefined
                    }
                });
            };
            return await handleResponse(requestSpan);
        } catch (err) {
            // If an Instant Navigation Testing document render fails (e.g. the page
            // blocks at the root with no Suspense boundary above it, producing an empty
            // or bailed-out static shell), clear the instant navigation cookie before
            // serving the error page. Otherwise the cookie would persist and every
            // reload would re-render the same broken shell, leaving the user stuck
            // without a way to release the lock.
            if (isInstantNavigationTest && !res.headersSent) {
                res.setHeader('Set-Cookie', `${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["NEXT_INSTANT_TEST_COOKIE"]}=; Path=/; Max-Age=0`);
            }
            if (!(err instanceof __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$shared$2f$lib$2f$no$2d$fallback$2d$error$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$shared$2f$lib$2f$no$2d$fallback$2d$error$2e$external$2e$js$2c$__cjs$29$__["NoFallbackError"])) {
                const silenceLog = false;
                await routeModule.onRequestError(req, err, {
                    routerKind: 'App Router',
                    routePath: srcPage,
                    routeType: 'render',
                    revalidateReason: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$instrumentation$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["getRevalidateReason"])({
                        isStaticGeneration: isSSG,
                        isOnDemandRevalidate
                    })
                }, silenceLog, routerServerContext);
            }
            // rethrow so that we can handle serving error page
            throw err;
        }
    }
    return {
        __next_app__,
        routeModule,
        handler
    };
}
// TODO: omit this from production builds, only test builds should include it
/**
 * Creates a readable stream that emits a PPR boundary sentinel.
 *
 * @returns A readable stream that emits a PPR boundary sentinel.
 */ function createPPRBoundarySentinel() {
    return new ReadableStream({
        start (controller) {
            controller.enqueue(new TextEncoder().encode('<!-- PPR_BOUNDARY_SENTINEL -->'));
            controller.close();
        }
    });
}
}),
"[project]/node_modules/next/dist/esm/build/templates/app-page.js?page=/page { MODULE_0 => \"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_1 => \"[project]/node_modules/next/dist/client/components/builtin/not-found.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_2 => \"[project]/node_modules/next/dist/client/components/builtin/forbidden.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_3 => \"[project]/node_modules/next/dist/client/components/builtin/unauthorized.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_4 => \"[project]/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_5 => \"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)\" } [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClientPageRoot",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["ClientPageRoot"],
    "ClientSegmentRoot",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["ClientSegmentRoot"],
    "Fragment",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["Fragment"],
    "HTTPAccessFallbackBoundary",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["HTTPAccessFallbackBoundary"],
    "InstantValidation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["InstantValidation"],
    "LayoutRouter",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["LayoutRouter"],
    "LoadingBoundaryProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["LoadingBoundaryProvider"],
    "RenderFromTemplateContext",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RenderFromTemplateContext"],
    "RootLayoutBoundary",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RootLayoutBoundary"],
    "SegmentViewNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["SegmentViewNode"],
    "SegmentViewStateNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["SegmentViewStateNode"],
    "__next_app__",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__MODULE_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$not$2d$found$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$forbidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$unauthorized$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["__next_app__"],
    "captureOwnerStack",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["captureOwnerStack"],
    "collectPrefetchHints",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["collectPrefetchHints"],
    "collectSegmentData",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["collectSegmentData"],
    "createElement",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createElement"],
    "createMetadataComponents",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createMetadataComponents"],
    "createPrerenderParamsForClientSegment",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createPrerenderParamsForClientSegment"],
    "createPrerenderSearchParamsForClientPage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createPrerenderSearchParamsForClientPage"],
    "createServerParamsForServerSegment",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createServerParamsForServerSegment"],
    "createServerSearchParamsForServerPage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createServerSearchParamsForServerPage"],
    "createTemporaryReferenceSet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createTemporaryReferenceSet"],
    "decodeAction",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["decodeAction"],
    "decodeFormState",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["decodeFormState"],
    "decodeReply",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["decodeReply"],
    "handler",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__MODULE_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$not$2d$found$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$forbidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$unauthorized$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["handler"],
    "isEmptyHTMLPrelude",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["isEmptyHTMLPrelude"],
    "patchFetch",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["patchFetch"],
    "preconnect",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["preconnect"],
    "preloadFont",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["preloadFont"],
    "preloadStyle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["preloadStyle"],
    "prerender",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["prerender"],
    "prerenderToNodeStream",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["prerenderToNodeStream"],
    "renderToPipeableStream",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["renderToPipeableStream"],
    "renderToReadableStream",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["renderToReadableStream"],
    "routeModule",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__MODULE_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$not$2d$found$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$forbidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$unauthorized$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["routeModule"],
    "serverHooks",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["serverHooks"],
    "taintObjectReference",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["taintObjectReference"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__MODULE_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$not$2d$found$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$forbidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$unauthorized$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/node_modules/next/dist/esm/build/templates/app-page.js?page=/page { MODULE_0 => "[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", MODULE_1 => "[project]/node_modules/next/dist/client/components/builtin/not-found.js [app-rsc] (ecmascript, Next.js Server Component)", MODULE_2 => "[project]/node_modules/next/dist/client/components/builtin/forbidden.js [app-rsc] (ecmascript, Next.js Server Component)", MODULE_3 => "[project]/node_modules/next/dist/client/components/builtin/unauthorized.js [app-rsc] (ecmascript, Next.js Server Component)", MODULE_4 => "[project]/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)", MODULE_5 => "[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)" } [app-rsc] (ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript, Next.js server utility)");
}),
"[project]/node_modules/next/dist/esm/build/templates/app-page.js?page=/page { MODULE_0 => \"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_1 => \"[project]/node_modules/next/dist/client/components/builtin/not-found.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_2 => \"[project]/node_modules/next/dist/client/components/builtin/forbidden.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_3 => \"[project]/node_modules/next/dist/client/components/builtin/unauthorized.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_4 => \"[project]/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_5 => \"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)\" } [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__next_app__",
    ()=>__next_app__,
    "handler",
    ()=>handler,
    "routeModule",
    ()=>routeModule
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$module$2d$loading$2f$instrument$2d$module$2d$getter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/module-loading/instrument-module-getter.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/build/templates/app-page-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$interop$2d$default$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/app-render/interop-default.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript, Next.js server utility) <locals>");
;
const __TURBOPACK__layout__$23$0__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$module$2d$loading$2f$instrument$2d$module$2d$getter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["instrumentModuleGetter"])(()=>__turbopack_context__.r("[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)"));
const __TURBOPACK__not$2d$found__$23$1__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$module$2d$loading$2f$instrument$2d$module$2d$getter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["instrumentModuleGetter"])(()=>__turbopack_context__.r("[project]/node_modules/next/dist/client/components/builtin/not-found.js [app-rsc] (ecmascript, Next.js Server Component)"));
const __TURBOPACK__forbidden__$23$2__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$module$2d$loading$2f$instrument$2d$module$2d$getter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["instrumentModuleGetter"])(()=>__turbopack_context__.r("[project]/node_modules/next/dist/client/components/builtin/forbidden.js [app-rsc] (ecmascript, Next.js Server Component)"));
const __TURBOPACK__unauthorized__$23$3__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$module$2d$loading$2f$instrument$2d$module$2d$getter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["instrumentModuleGetter"])(()=>__turbopack_context__.r("[project]/node_modules/next/dist/client/components/builtin/unauthorized.js [app-rsc] (ecmascript, Next.js Server Component)"));
const __TURBOPACK__global$2d$error__$23$4__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$module$2d$loading$2f$instrument$2d$module$2d$getter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["instrumentModuleGetter"])(()=>__turbopack_context__.r("[project]/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)"));
const __TURBOPACK__page__$23$5__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$module$2d$loading$2f$instrument$2d$module$2d$getter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["instrumentModuleGetter"])(()=>__turbopack_context__.r("[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)"));
;
;
const tree = [
    "",
    {
        "children": [
            "__PAGE__",
            {},
            {
                metadata: {},
                "page": [
                    __TURBOPACK__page__$23$5__,
                    "[project]/src/app/page.tsx"
                ]
            },
            []
        ]
    },
    {
        "layout": [
            __TURBOPACK__layout__$23$0__,
            "[project]/src/app/layout.tsx"
        ],
        "not-found": [
            __TURBOPACK__not$2d$found__$23$1__,
            "[project]/node_modules/next/dist/client/components/builtin/not-found.js"
        ],
        "forbidden": [
            __TURBOPACK__forbidden__$23$2__,
            "[project]/node_modules/next/dist/client/components/builtin/forbidden.js"
        ],
        "unauthorized": [
            __TURBOPACK__unauthorized__$23$3__,
            "[project]/node_modules/next/dist/client/components/builtin/unauthorized.js"
        ],
        "global-error": [
            __TURBOPACK__global$2d$error__$23$4__,
            "[project]/node_modules/next/dist/client/components/builtin/global-error.js"
        ]
    },
    []
];
const __next_app_require__ = __turbopack_context__.r.bind(__turbopack_context__);
const __next_app_load_chunk__ = __turbopack_context__.l.bind(__turbopack_context__);
const entrypoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAppPageEntrypoint"])({
    tree,
    page: "/page",
    pathname: "/",
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__,
    interopDefault: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$interop$2d$default$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["interopDefault"]
});
const __next_app__ = entrypoint.__next_app__;
const routeModule = entrypoint.routeModule;
const handler = entrypoint.handler;
;
}),
"[project]/node_modules/next/dist/esm/client/components/app-router-headers.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/client/components/app-router-headers.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/client/components/redirect-status-code.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/client/components/redirect-status-code.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/lib/constants.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/lib/constants.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/lib/fallback.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/lib/fallback.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/lib/scheduler.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/lib/scheduler.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/lib/url.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/lib/url.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript, Next.js server utility) <locals>", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript) <locals>"));
}),
"[project]/node_modules/next/dist/esm/server/app-render/get-script-nonce-from-header.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/app-render/get-script-nonce-from-header.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/server/app-render/interop-default.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/app-render/interop-default.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/server/app-render/manifests-singleton.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/app-render/manifests-singleton.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/server/app-render/strip-flight-headers.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/app-render/strip-flight-headers.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/server/app-render/turbopack-bootstrap-script.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/app-render/turbopack-bootstrap-script.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/server/base-http/node.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/base-http/node.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/server/instrumentation/utils.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/instrumentation/utils.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/server/lib/is-non-html-sec-fetch-dest.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/lib/is-non-html-sec-fetch-dest.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/server/lib/is-rsc-request.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/lib/is-rsc-request.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/server/lib/postponed-request-body.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/lib/postponed-request-body.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/server/lib/route-cache-key.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/lib/route-cache-key.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/server/lib/server-action-request-meta.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/lib/server-action-request-meta.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/server/lib/streaming-metadata.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/lib/streaming-metadata.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/server/lib/trace/constants.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/lib/trace/constants.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/server/lib/trace/tracer.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/lib/trace/tracer.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/server/render-result.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/render-result.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/server/request-meta.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/request-meta.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/server/request/fallback-params.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/request/fallback-params.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/server/response-cache/index.js [app-rsc] (ecmascript, Next.js server utility) <locals>", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/response-cache/index.js [app-rsc] (ecmascript) <locals>"));
}),
"[project]/node_modules/next/dist/esm/server/response-cache/types.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/response-cache/types.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/server/route-kind.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/route-kind.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/server/route-modules/app-page/dev-render-context.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/route-modules/app-page/dev-render-context.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
}
}),
"[project]/node_modules/next/dist/esm/server/route-modules/app-page/parse-request-headers.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/route-modules/app-page/parse-request-headers.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/server/send-payload.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/send-payload.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/server/stream-utils/encoded-tags.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/stream-utils/encoded-tags.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/shared/lib/entry-constants.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/entry-constants.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/shared/lib/invariant-error.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/invariant-error.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/shared/lib/router/routes/app.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/router/routes/app.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/shared/lib/router/utils/get-segment-param.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/router/utils/get-segment-param.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/shared/lib/router/utils/is-bot.js [app-rsc] (ecmascript, Next.js server utility) <locals>", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/router/utils/is-bot.js [app-rsc] (ecmascript) <locals>"));
}),
"[project]/node_modules/next/dist/esm/shared/lib/size-limit.js [app-rsc] (ecmascript, Next.js server utility)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/size-limit.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/server/app-render/module-loading/instrument-module-getter.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Wraps a module getter from the generated loader tree code so that the
 * result of an async module (e.g. due to a top-level await) is tracked as a
 * pending import, which the cache warming phase of a prerender waits for.
 * Both bundlers emit this around every module getter in the loader tree.
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "instrumentModuleGetter", {
    enumerable: true,
    get: function() {
        return instrumentModuleGetter;
    }
});
function instrumentModuleGetter(getter) {
    if ("TURBOPACK compile-time truthy", 1) {
        // The tracking is only consumed when prerendering with Cache Components,
        // which is not supported in the edge runtime (and the tracking relies on
        // Node.js APIs).
        return getter;
    } else //TURBOPACK unreachable
    ;
}
}),
"[project]/node_modules/zod/v3/ZodError.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ZodError",
    ()=>ZodError,
    "ZodIssueCode",
    ()=>ZodIssueCode,
    "quotelessJson",
    ()=>quotelessJson
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/v3/helpers/util.js [app-rsc] (ecmascript)");
;
const ZodIssueCode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["util"].arrayToEnum([
    "invalid_type",
    "invalid_literal",
    "custom",
    "invalid_union",
    "invalid_union_discriminator",
    "invalid_enum_value",
    "unrecognized_keys",
    "invalid_arguments",
    "invalid_return_type",
    "invalid_date",
    "invalid_string",
    "too_small",
    "too_big",
    "invalid_intersection_types",
    "not_multiple_of",
    "not_finite"
]);
const quotelessJson = (obj)=>{
    const json = JSON.stringify(obj, null, 2);
    return json.replace(/"([^"]+)":/g, "$1:");
};
class ZodError extends Error {
    get errors() {
        return this.issues;
    }
    constructor(issues){
        super();
        this.issues = [];
        this.addIssue = (sub)=>{
            this.issues = [
                ...this.issues,
                sub
            ];
        };
        this.addIssues = (subs = [])=>{
            this.issues = [
                ...this.issues,
                ...subs
            ];
        };
        const actualProto = new.target.prototype;
        if (Object.setPrototypeOf) {
            // eslint-disable-next-line ban/ban
            Object.setPrototypeOf(this, actualProto);
        } else {
            this.__proto__ = actualProto;
        }
        this.name = "ZodError";
        this.issues = issues;
    }
    format(_mapper) {
        const mapper = _mapper || function(issue) {
            return issue.message;
        };
        const fieldErrors = {
            _errors: []
        };
        const processError = (error)=>{
            for (const issue of error.issues){
                if (issue.code === "invalid_union") {
                    issue.unionErrors.map(processError);
                } else if (issue.code === "invalid_return_type") {
                    processError(issue.returnTypeError);
                } else if (issue.code === "invalid_arguments") {
                    processError(issue.argumentsError);
                } else if (issue.path.length === 0) {
                    fieldErrors._errors.push(mapper(issue));
                } else {
                    let curr = fieldErrors;
                    let i = 0;
                    while(i < issue.path.length){
                        const el = issue.path[i];
                        const terminal = i === issue.path.length - 1;
                        if (!terminal) {
                            curr[el] = curr[el] || {
                                _errors: []
                            };
                        // if (typeof el === "string") {
                        //   curr[el] = curr[el] || { _errors: [] };
                        // } else if (typeof el === "number") {
                        //   const errorArray: any = [];
                        //   errorArray._errors = [];
                        //   curr[el] = curr[el] || errorArray;
                        // }
                        } else {
                            curr[el] = curr[el] || {
                                _errors: []
                            };
                            curr[el]._errors.push(mapper(issue));
                        }
                        curr = curr[el];
                        i++;
                    }
                }
            }
        };
        processError(this);
        return fieldErrors;
    }
    static assert(value) {
        if (!(value instanceof ZodError)) {
            throw new Error(`Not a ZodError: ${value}`);
        }
    }
    toString() {
        return this.message;
    }
    get message() {
        return JSON.stringify(this.issues, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["util"].jsonStringifyReplacer, 2);
    }
    get isEmpty() {
        return this.issues.length === 0;
    }
    flatten(mapper = (issue)=>issue.message) {
        const fieldErrors = {};
        const formErrors = [];
        for (const sub of this.issues){
            if (sub.path.length > 0) {
                const firstEl = sub.path[0];
                fieldErrors[firstEl] = fieldErrors[firstEl] || [];
                fieldErrors[firstEl].push(mapper(sub));
            } else {
                formErrors.push(mapper(sub));
            }
        }
        return {
            formErrors,
            fieldErrors
        };
    }
    get formErrors() {
        return this.flatten();
    }
}
ZodError.create = (issues)=>{
    const error = new ZodError(issues);
    return error;
};
}),
"[project]/node_modules/zod/v3/errors.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultErrorMap",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$locales$2f$en$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "getErrorMap",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getErrorMap"],
    "setErrorMap",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setErrorMap"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v3/errors.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$locales$2f$en$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/v3/locales/en.js [app-rsc] (ecmascript)");
}),
"[project]/node_modules/zod/v3/errors.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getErrorMap",
    ()=>getErrorMap,
    "setErrorMap",
    ()=>setErrorMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$locales$2f$en$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/v3/locales/en.js [app-rsc] (ecmascript)");
;
let overrideErrorMap = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$locales$2f$en$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"];
;
function setErrorMap(map) {
    overrideErrorMap = map;
}
function getErrorMap() {
    return overrideErrorMap;
}
}),
"[project]/node_modules/zod/v3/external.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BRAND",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BRAND"],
    "DIRTY",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DIRTY"],
    "EMPTY_PATH",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EMPTY_PATH"],
    "INVALID",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"],
    "NEVER",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEVER"],
    "OK",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OK"],
    "ParseStatus",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ParseStatus"],
    "Schema",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Schema"],
    "ZodAny",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodAny"],
    "ZodArray",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodArray"],
    "ZodBigInt",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodBigInt"],
    "ZodBoolean",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodBoolean"],
    "ZodBranded",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodBranded"],
    "ZodCatch",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodCatch"],
    "ZodDate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodDate"],
    "ZodDefault",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodDefault"],
    "ZodDiscriminatedUnion",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodDiscriminatedUnion"],
    "ZodEffects",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodEffects"],
    "ZodEnum",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodEnum"],
    "ZodError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodError"],
    "ZodFirstPartyTypeKind",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"],
    "ZodFunction",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFunction"],
    "ZodIntersection",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIntersection"],
    "ZodIssueCode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"],
    "ZodLazy",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodLazy"],
    "ZodLiteral",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodLiteral"],
    "ZodMap",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodMap"],
    "ZodNaN",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodNaN"],
    "ZodNativeEnum",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodNativeEnum"],
    "ZodNever",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodNever"],
    "ZodNull",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodNull"],
    "ZodNullable",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodNullable"],
    "ZodNumber",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodNumber"],
    "ZodObject",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodObject"],
    "ZodOptional",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodOptional"],
    "ZodParsedType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"],
    "ZodPipeline",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodPipeline"],
    "ZodPromise",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodPromise"],
    "ZodReadonly",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodReadonly"],
    "ZodRecord",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodRecord"],
    "ZodSchema",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodSchema"],
    "ZodSet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodSet"],
    "ZodString",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodString"],
    "ZodSymbol",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodSymbol"],
    "ZodTransformer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodTransformer"],
    "ZodTuple",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodTuple"],
    "ZodType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodType"],
    "ZodUndefined",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodUndefined"],
    "ZodUnion",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodUnion"],
    "ZodUnknown",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodUnknown"],
    "ZodVoid",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodVoid"],
    "addIssueToContext",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"],
    "any",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["any"],
    "array",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["array"],
    "bigint",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bigint"],
    "boolean",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["boolean"],
    "coerce",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["coerce"],
    "custom",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["custom"],
    "date",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["date"],
    "datetimeRegex",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["datetimeRegex"],
    "defaultErrorMap",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defaultErrorMap"],
    "discriminatedUnion",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["discriminatedUnion"],
    "effect",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["effect"],
    "enum",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["enum"],
    "function",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["function"],
    "getErrorMap",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getErrorMap"],
    "getParsedType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getParsedType"],
    "instanceof",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["instanceof"],
    "intersection",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["intersection"],
    "isAborted",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAborted"],
    "isAsync",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAsync"],
    "isDirty",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isDirty"],
    "isValid",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValid"],
    "late",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["late"],
    "lazy",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["lazy"],
    "literal",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["literal"],
    "makeIssue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["makeIssue"],
    "map",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["map"],
    "nan",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["nan"],
    "nativeEnum",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["nativeEnum"],
    "never",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["never"],
    "null",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["null"],
    "nullable",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["nullable"],
    "number",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["number"],
    "object",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["object"],
    "objectUtil",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["objectUtil"],
    "oboolean",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["oboolean"],
    "onumber",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["onumber"],
    "optional",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["optional"],
    "ostring",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ostring"],
    "pipeline",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pipeline"],
    "preprocess",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["preprocess"],
    "promise",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["promise"],
    "quotelessJson",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quotelessJson"],
    "record",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["record"],
    "set",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["set"],
    "setErrorMap",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setErrorMap"],
    "strictObject",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["strictObject"],
    "string",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"],
    "symbol",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["symbol"],
    "transformer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["transformer"],
    "tuple",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["tuple"],
    "undefined",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["undefined"],
    "union",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["union"],
    "unknown",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unknown"],
    "util",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["util"],
    "void",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["void"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v3/external.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/v3/errors.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/v3/helpers/parseUtil.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$typeAliases$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/v3/helpers/typeAliases.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/v3/helpers/util.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/v3/types.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/v3/ZodError.js [app-rsc] (ecmascript)");
}),
"[project]/node_modules/zod/v3/external.js [app-rsc] (ecmascript) <export * as z .array>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "z",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/v3/external.js [app-rsc] (ecmascript)");
}),
"[project]/node_modules/zod/v3/external.js [app-rsc] (ecmascript) <export * as z .coerce>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "z",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/v3/external.js [app-rsc] (ecmascript)");
}),
"[project]/node_modules/zod/v3/external.js [app-rsc] (ecmascript) <export * as z .literal>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "z",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/v3/external.js [app-rsc] (ecmascript)");
}),
"[project]/node_modules/zod/v3/external.js [app-rsc] (ecmascript) <export * as z .object>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "z",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/v3/external.js [app-rsc] (ecmascript)");
}),
"[project]/node_modules/zod/v3/external.js [app-rsc] (ecmascript) <export * as z .string>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "z",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/v3/external.js [app-rsc] (ecmascript)");
}),
"[project]/node_modules/zod/v3/external.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
;
;
;
;
;
}),
"[project]/node_modules/zod/v3/helpers/errorUtil.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "errorUtil",
    ()=>errorUtil
]);
var errorUtil;
(function(errorUtil) {
    errorUtil.errToObj = (message)=>typeof message === "string" ? {
            message
        } : message || {};
    // biome-ignore lint:
    errorUtil.toString = (message)=>typeof message === "string" ? message : message?.message;
})(errorUtil || (errorUtil = {}));
}),
"[project]/node_modules/zod/v3/helpers/parseUtil.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DIRTY",
    ()=>DIRTY,
    "EMPTY_PATH",
    ()=>EMPTY_PATH,
    "INVALID",
    ()=>INVALID,
    "OK",
    ()=>OK,
    "ParseStatus",
    ()=>ParseStatus,
    "addIssueToContext",
    ()=>addIssueToContext,
    "isAborted",
    ()=>isAborted,
    "isAsync",
    ()=>isAsync,
    "isDirty",
    ()=>isDirty,
    "isValid",
    ()=>isValid,
    "makeIssue",
    ()=>makeIssue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v3/errors.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$locales$2f$en$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/v3/locales/en.js [app-rsc] (ecmascript)");
;
;
const makeIssue = (params)=>{
    const { data, path, errorMaps, issueData } = params;
    const fullPath = [
        ...path,
        ...issueData.path || []
    ];
    const fullIssue = {
        ...issueData,
        path: fullPath
    };
    if (issueData.message !== undefined) {
        return {
            ...issueData,
            path: fullPath,
            message: issueData.message
        };
    }
    let errorMessage = "";
    const maps = errorMaps.filter((m)=>!!m).slice().reverse();
    for (const map of maps){
        errorMessage = map(fullIssue, {
            data,
            defaultError: errorMessage
        }).message;
    }
    return {
        ...issueData,
        path: fullPath,
        message: errorMessage
    };
};
const EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
    const overrideMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getErrorMap"])();
    const issue = makeIssue({
        issueData: issueData,
        data: ctx.data,
        path: ctx.path,
        errorMaps: [
            ctx.common.contextualErrorMap,
            ctx.schemaErrorMap,
            overrideMap,
            overrideMap === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$locales$2f$en$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"] ? undefined : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$locales$2f$en$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
        ].filter((x)=>!!x)
    });
    ctx.common.issues.push(issue);
}
class ParseStatus {
    constructor(){
        this.value = "valid";
    }
    dirty() {
        if (this.value === "valid") this.value = "dirty";
    }
    abort() {
        if (this.value !== "aborted") this.value = "aborted";
    }
    static mergeArray(status, results) {
        const arrayValue = [];
        for (const s of results){
            if (s.status === "aborted") return INVALID;
            if (s.status === "dirty") status.dirty();
            arrayValue.push(s.value);
        }
        return {
            status: status.value,
            value: arrayValue
        };
    }
    static async mergeObjectAsync(status, pairs) {
        const syncPairs = [];
        for (const pair of pairs){
            const key = await pair.key;
            const value = await pair.value;
            syncPairs.push({
                key,
                value
            });
        }
        return ParseStatus.mergeObjectSync(status, syncPairs);
    }
    static mergeObjectSync(status, pairs) {
        const finalObject = {};
        for (const pair of pairs){
            const { key, value } = pair;
            if (key.status === "aborted") return INVALID;
            if (value.status === "aborted") return INVALID;
            if (key.status === "dirty") status.dirty();
            if (value.status === "dirty") status.dirty();
            if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
                finalObject[key.value] = value.value;
            }
        }
        return {
            status: status.value,
            value: finalObject
        };
    }
}
const INVALID = Object.freeze({
    status: "aborted"
});
const DIRTY = (value)=>({
        status: "dirty",
        value
    });
const OK = (value)=>({
        status: "valid",
        value
    });
const isAborted = (x)=>x.status === "aborted";
const isDirty = (x)=>x.status === "dirty";
const isValid = (x)=>x.status === "valid";
const isAsync = (x)=>typeof Promise !== "undefined" && x instanceof Promise;
}),
"[project]/node_modules/zod/v3/helpers/typeAliases.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/zod/v3/helpers/util.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ZodParsedType",
    ()=>ZodParsedType,
    "getParsedType",
    ()=>getParsedType,
    "objectUtil",
    ()=>objectUtil,
    "util",
    ()=>util
]);
var util;
(function(util) {
    util.assertEqual = (_)=>{};
    function assertIs(_arg) {}
    util.assertIs = assertIs;
    function assertNever(_x) {
        throw new Error();
    }
    util.assertNever = assertNever;
    util.arrayToEnum = (items)=>{
        const obj = {};
        for (const item of items){
            obj[item] = item;
        }
        return obj;
    };
    util.getValidEnumValues = (obj)=>{
        const validKeys = util.objectKeys(obj).filter((k)=>typeof obj[obj[k]] !== "number");
        const filtered = {};
        for (const k of validKeys){
            filtered[k] = obj[k];
        }
        return util.objectValues(filtered);
    };
    util.objectValues = (obj)=>{
        return util.objectKeys(obj).map(function(e) {
            return obj[e];
        });
    };
    util.objectKeys = typeof Object.keys === "function" // eslint-disable-line ban/ban
     ? (obj)=>Object.keys(obj) // eslint-disable-line ban/ban
     : (object)=>{
        const keys = [];
        for(const key in object){
            if (Object.prototype.hasOwnProperty.call(object, key)) {
                keys.push(key);
            }
        }
        return keys;
    };
    util.find = (arr, checker)=>{
        for (const item of arr){
            if (checker(item)) return item;
        }
        return undefined;
    };
    util.isInteger = typeof Number.isInteger === "function" ? (val)=>Number.isInteger(val) // eslint-disable-line ban/ban
     : (val)=>typeof val === "number" && Number.isFinite(val) && Math.floor(val) === val;
    function joinValues(array, separator = " | ") {
        return array.map((val)=>typeof val === "string" ? `'${val}'` : val).join(separator);
    }
    util.joinValues = joinValues;
    util.jsonStringifyReplacer = (_, value)=>{
        if (typeof value === "bigint") {
            return value.toString();
        }
        return value;
    };
})(util || (util = {}));
var objectUtil;
(function(objectUtil) {
    objectUtil.mergeShapes = (first, second)=>{
        return {
            ...first,
            ...second
        };
    };
})(objectUtil || (objectUtil = {}));
const ZodParsedType = util.arrayToEnum([
    "string",
    "nan",
    "number",
    "integer",
    "float",
    "boolean",
    "date",
    "bigint",
    "symbol",
    "function",
    "undefined",
    "null",
    "array",
    "object",
    "unknown",
    "promise",
    "void",
    "never",
    "map",
    "set"
]);
const getParsedType = (data)=>{
    const t = typeof data;
    switch(t){
        case "undefined":
            return ZodParsedType.undefined;
        case "string":
            return ZodParsedType.string;
        case "number":
            return Number.isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
        case "boolean":
            return ZodParsedType.boolean;
        case "function":
            return ZodParsedType.function;
        case "bigint":
            return ZodParsedType.bigint;
        case "symbol":
            return ZodParsedType.symbol;
        case "object":
            if (Array.isArray(data)) {
                return ZodParsedType.array;
            }
            if (data === null) {
                return ZodParsedType.null;
            }
            if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
                return ZodParsedType.promise;
            }
            if (typeof Map !== "undefined" && data instanceof Map) {
                return ZodParsedType.map;
            }
            if (typeof Set !== "undefined" && data instanceof Set) {
                return ZodParsedType.set;
            }
            if (typeof Date !== "undefined" && data instanceof Date) {
                return ZodParsedType.date;
            }
            return ZodParsedType.object;
        default:
            return ZodParsedType.unknown;
    }
};
}),
"[project]/node_modules/zod/v3/locales/en.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/v3/ZodError.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/v3/helpers/util.js [app-rsc] (ecmascript)");
;
;
const errorMap = (issue, _ctx)=>{
    let message;
    switch(issue.code){
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_type:
            if (issue.received === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].undefined) {
                message = "Required";
            } else {
                message = `Expected ${issue.expected}, received ${issue.received}`;
            }
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_literal:
            message = `Invalid literal value, expected ${JSON.stringify(issue.expected, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["util"].jsonStringifyReplacer)}`;
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].unrecognized_keys:
            message = `Unrecognized key(s) in object: ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["util"].joinValues(issue.keys, ", ")}`;
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_union:
            message = `Invalid input`;
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_union_discriminator:
            message = `Invalid discriminator value. Expected ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["util"].joinValues(issue.options)}`;
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_enum_value:
            message = `Invalid enum value. Expected ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["util"].joinValues(issue.options)}, received '${issue.received}'`;
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_arguments:
            message = `Invalid function arguments`;
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_return_type:
            message = `Invalid function return type`;
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_date:
            message = `Invalid date`;
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_string:
            if (typeof issue.validation === "object") {
                if ("includes" in issue.validation) {
                    message = `Invalid input: must include "${issue.validation.includes}"`;
                    if (typeof issue.validation.position === "number") {
                        message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
                    }
                } else if ("startsWith" in issue.validation) {
                    message = `Invalid input: must start with "${issue.validation.startsWith}"`;
                } else if ("endsWith" in issue.validation) {
                    message = `Invalid input: must end with "${issue.validation.endsWith}"`;
                } else {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["util"].assertNever(issue.validation);
                }
            } else if (issue.validation !== "regex") {
                message = `Invalid ${issue.validation}`;
            } else {
                message = "Invalid";
            }
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].too_small:
            if (issue.type === "array") message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
            else if (issue.type === "string") message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
            else if (issue.type === "number") message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
            else if (issue.type === "bigint") message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
            else if (issue.type === "date") message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
            else message = "Invalid input";
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].too_big:
            if (issue.type === "array") message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
            else if (issue.type === "string") message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
            else if (issue.type === "number") message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
            else if (issue.type === "bigint") message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
            else if (issue.type === "date") message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
            else message = "Invalid input";
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].custom:
            message = `Invalid input`;
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_intersection_types:
            message = `Intersection results could not be merged`;
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].not_multiple_of:
            message = `Number must be a multiple of ${issue.multipleOf}`;
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].not_finite:
            message = "Number must be finite";
            break;
        default:
            message = _ctx.defaultError;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["util"].assertNever(issue);
    }
    return {
        message
    };
};
const __TURBOPACK__default__export__ = errorMap;
}),
"[project]/node_modules/zod/v3/locales/en.js [app-rsc] (ecmascript) <export default as defaultErrorMap>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultErrorMap",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$locales$2f$en$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$locales$2f$en$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/v3/locales/en.js [app-rsc] (ecmascript)");
}),
"[project]/node_modules/zod/v3/types.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BRAND",
    ()=>BRAND,
    "NEVER",
    ()=>NEVER,
    "Schema",
    ()=>ZodType,
    "ZodAny",
    ()=>ZodAny,
    "ZodArray",
    ()=>ZodArray,
    "ZodBigInt",
    ()=>ZodBigInt,
    "ZodBoolean",
    ()=>ZodBoolean,
    "ZodBranded",
    ()=>ZodBranded,
    "ZodCatch",
    ()=>ZodCatch,
    "ZodDate",
    ()=>ZodDate,
    "ZodDefault",
    ()=>ZodDefault,
    "ZodDiscriminatedUnion",
    ()=>ZodDiscriminatedUnion,
    "ZodEffects",
    ()=>ZodEffects,
    "ZodEnum",
    ()=>ZodEnum,
    "ZodFirstPartyTypeKind",
    ()=>ZodFirstPartyTypeKind,
    "ZodFunction",
    ()=>ZodFunction,
    "ZodIntersection",
    ()=>ZodIntersection,
    "ZodLazy",
    ()=>ZodLazy,
    "ZodLiteral",
    ()=>ZodLiteral,
    "ZodMap",
    ()=>ZodMap,
    "ZodNaN",
    ()=>ZodNaN,
    "ZodNativeEnum",
    ()=>ZodNativeEnum,
    "ZodNever",
    ()=>ZodNever,
    "ZodNull",
    ()=>ZodNull,
    "ZodNullable",
    ()=>ZodNullable,
    "ZodNumber",
    ()=>ZodNumber,
    "ZodObject",
    ()=>ZodObject,
    "ZodOptional",
    ()=>ZodOptional,
    "ZodPipeline",
    ()=>ZodPipeline,
    "ZodPromise",
    ()=>ZodPromise,
    "ZodReadonly",
    ()=>ZodReadonly,
    "ZodRecord",
    ()=>ZodRecord,
    "ZodSchema",
    ()=>ZodType,
    "ZodSet",
    ()=>ZodSet,
    "ZodString",
    ()=>ZodString,
    "ZodSymbol",
    ()=>ZodSymbol,
    "ZodTransformer",
    ()=>ZodEffects,
    "ZodTuple",
    ()=>ZodTuple,
    "ZodType",
    ()=>ZodType,
    "ZodUndefined",
    ()=>ZodUndefined,
    "ZodUnion",
    ()=>ZodUnion,
    "ZodUnknown",
    ()=>ZodUnknown,
    "ZodVoid",
    ()=>ZodVoid,
    "any",
    ()=>anyType,
    "array",
    ()=>arrayType,
    "bigint",
    ()=>bigIntType,
    "boolean",
    ()=>booleanType,
    "coerce",
    ()=>coerce,
    "custom",
    ()=>custom,
    "date",
    ()=>dateType,
    "datetimeRegex",
    ()=>datetimeRegex,
    "discriminatedUnion",
    ()=>discriminatedUnionType,
    "effect",
    ()=>effectsType,
    "enum",
    ()=>enumType,
    "function",
    ()=>functionType,
    "instanceof",
    ()=>instanceOfType,
    "intersection",
    ()=>intersectionType,
    "late",
    ()=>late,
    "lazy",
    ()=>lazyType,
    "literal",
    ()=>literalType,
    "map",
    ()=>mapType,
    "nan",
    ()=>nanType,
    "nativeEnum",
    ()=>nativeEnumType,
    "never",
    ()=>neverType,
    "null",
    ()=>nullType,
    "nullable",
    ()=>nullableType,
    "number",
    ()=>numberType,
    "object",
    ()=>objectType,
    "oboolean",
    ()=>oboolean,
    "onumber",
    ()=>onumber,
    "optional",
    ()=>optionalType,
    "ostring",
    ()=>ostring,
    "pipeline",
    ()=>pipelineType,
    "preprocess",
    ()=>preprocessType,
    "promise",
    ()=>promiseType,
    "record",
    ()=>recordType,
    "set",
    ()=>setType,
    "strictObject",
    ()=>strictObjectType,
    "string",
    ()=>stringType,
    "symbol",
    ()=>symbolType,
    "transformer",
    ()=>effectsType,
    "tuple",
    ()=>tupleType,
    "undefined",
    ()=>undefinedType,
    "union",
    ()=>unionType,
    "unknown",
    ()=>unknownType,
    "void",
    ()=>voidType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/v3/ZodError.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$locales$2f$en$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__defaultErrorMap$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v3/locales/en.js [app-rsc] (ecmascript) <export default as defaultErrorMap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v3/errors.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/v3/helpers/errorUtil.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/v3/helpers/parseUtil.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/v3/helpers/util.js [app-rsc] (ecmascript)");
;
;
;
;
;
class ParseInputLazyPath {
    constructor(parent, value, path, key){
        this._cachedPath = [];
        this.parent = parent;
        this.data = value;
        this._path = path;
        this._key = key;
    }
    get path() {
        if (!this._cachedPath.length) {
            if (Array.isArray(this._key)) {
                this._cachedPath.push(...this._path, ...this._key);
            } else {
                this._cachedPath.push(...this._path, this._key);
            }
        }
        return this._cachedPath;
    }
}
const handleResult = (ctx, result)=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValid"])(result)) {
        return {
            success: true,
            data: result.value
        };
    } else {
        if (!ctx.common.issues.length) {
            throw new Error("Validation failed but no issues detected.");
        }
        return {
            success: false,
            get error () {
                if (this._error) return this._error;
                const error = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodError"](ctx.common.issues);
                this._error = error;
                return this._error;
            }
        };
    }
};
function processCreateParams(params) {
    if (!params) return {};
    const { errorMap, invalid_type_error, required_error, description } = params;
    if (errorMap && (invalid_type_error || required_error)) {
        throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
    }
    if (errorMap) return {
        errorMap: errorMap,
        description
    };
    const customMap = (iss, ctx)=>{
        const { message } = params;
        if (iss.code === "invalid_enum_value") {
            return {
                message: message ?? ctx.defaultError
            };
        }
        if (typeof ctx.data === "undefined") {
            return {
                message: message ?? required_error ?? ctx.defaultError
            };
        }
        if (iss.code !== "invalid_type") return {
            message: ctx.defaultError
        };
        return {
            message: message ?? invalid_type_error ?? ctx.defaultError
        };
    };
    return {
        errorMap: customMap,
        description
    };
}
class ZodType {
    get description() {
        return this._def.description;
    }
    _getType(input) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getParsedType"])(input.data);
    }
    _getOrReturnCtx(input, ctx) {
        return ctx || {
            common: input.parent.common,
            data: input.data,
            parsedType: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getParsedType"])(input.data),
            schemaErrorMap: this._def.errorMap,
            path: input.path,
            parent: input.parent
        };
    }
    _processInputParams(input) {
        return {
            status: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ParseStatus"](),
            ctx: {
                common: input.parent.common,
                data: input.data,
                parsedType: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getParsedType"])(input.data),
                schemaErrorMap: this._def.errorMap,
                path: input.path,
                parent: input.parent
            }
        };
    }
    _parseSync(input) {
        const result = this._parse(input);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAsync"])(result)) {
            throw new Error("Synchronous parse encountered promise.");
        }
        return result;
    }
    _parseAsync(input) {
        const result = this._parse(input);
        return Promise.resolve(result);
    }
    parse(data, params) {
        const result = this.safeParse(data, params);
        if (result.success) return result.data;
        throw result.error;
    }
    safeParse(data, params) {
        const ctx = {
            common: {
                issues: [],
                async: params?.async ?? false,
                contextualErrorMap: params?.errorMap
            },
            path: params?.path || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data,
            parsedType: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getParsedType"])(data)
        };
        const result = this._parseSync({
            data,
            path: ctx.path,
            parent: ctx
        });
        return handleResult(ctx, result);
    }
    "~validate"(data) {
        const ctx = {
            common: {
                issues: [],
                async: !!this["~standard"].async
            },
            path: [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data,
            parsedType: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getParsedType"])(data)
        };
        if (!this["~standard"].async) {
            try {
                const result = this._parseSync({
                    data,
                    path: [],
                    parent: ctx
                });
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValid"])(result) ? {
                    value: result.value
                } : {
                    issues: ctx.common.issues
                };
            } catch (err) {
                if (err?.message?.toLowerCase()?.includes("encountered")) {
                    this["~standard"].async = true;
                }
                ctx.common = {
                    issues: [],
                    async: true
                };
            }
        }
        return this._parseAsync({
            data,
            path: [],
            parent: ctx
        }).then((result)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValid"])(result) ? {
                value: result.value
            } : {
                issues: ctx.common.issues
            });
    }
    async parseAsync(data, params) {
        const result = await this.safeParseAsync(data, params);
        if (result.success) return result.data;
        throw result.error;
    }
    async safeParseAsync(data, params) {
        const ctx = {
            common: {
                issues: [],
                contextualErrorMap: params?.errorMap,
                async: true
            },
            path: params?.path || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data,
            parsedType: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getParsedType"])(data)
        };
        const maybeAsyncResult = this._parse({
            data,
            path: ctx.path,
            parent: ctx
        });
        const result = await ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAsync"])(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
        return handleResult(ctx, result);
    }
    refine(check, message) {
        const getIssueProperties = (val)=>{
            if (typeof message === "string" || typeof message === "undefined") {
                return {
                    message
                };
            } else if (typeof message === "function") {
                return message(val);
            } else {
                return message;
            }
        };
        return this._refinement((val, ctx)=>{
            const result = check(val);
            const setError = ()=>ctx.addIssue({
                    code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].custom,
                    ...getIssueProperties(val)
                });
            if (typeof Promise !== "undefined" && result instanceof Promise) {
                return result.then((data)=>{
                    if (!data) {
                        setError();
                        return false;
                    } else {
                        return true;
                    }
                });
            }
            if (!result) {
                setError();
                return false;
            } else {
                return true;
            }
        });
    }
    refinement(check, refinementData) {
        return this._refinement((val, ctx)=>{
            if (!check(val)) {
                ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
                return false;
            } else {
                return true;
            }
        });
    }
    _refinement(refinement) {
        return new ZodEffects({
            schema: this,
            typeName: ZodFirstPartyTypeKind.ZodEffects,
            effect: {
                type: "refinement",
                refinement
            }
        });
    }
    superRefine(refinement) {
        return this._refinement(refinement);
    }
    constructor(def){
        /** Alias of safeParseAsync */ this.spa = this.safeParseAsync;
        this._def = def;
        this.parse = this.parse.bind(this);
        this.safeParse = this.safeParse.bind(this);
        this.parseAsync = this.parseAsync.bind(this);
        this.safeParseAsync = this.safeParseAsync.bind(this);
        this.spa = this.spa.bind(this);
        this.refine = this.refine.bind(this);
        this.refinement = this.refinement.bind(this);
        this.superRefine = this.superRefine.bind(this);
        this.optional = this.optional.bind(this);
        this.nullable = this.nullable.bind(this);
        this.nullish = this.nullish.bind(this);
        this.array = this.array.bind(this);
        this.promise = this.promise.bind(this);
        this.or = this.or.bind(this);
        this.and = this.and.bind(this);
        this.transform = this.transform.bind(this);
        this.brand = this.brand.bind(this);
        this.default = this.default.bind(this);
        this.catch = this.catch.bind(this);
        this.describe = this.describe.bind(this);
        this.pipe = this.pipe.bind(this);
        this.readonly = this.readonly.bind(this);
        this.isNullable = this.isNullable.bind(this);
        this.isOptional = this.isOptional.bind(this);
        this["~standard"] = {
            version: 1,
            vendor: "zod",
            validate: (data)=>this["~validate"](data)
        };
    }
    optional() {
        return ZodOptional.create(this, this._def);
    }
    nullable() {
        return ZodNullable.create(this, this._def);
    }
    nullish() {
        return this.nullable().optional();
    }
    array() {
        return ZodArray.create(this);
    }
    promise() {
        return ZodPromise.create(this, this._def);
    }
    or(option) {
        return ZodUnion.create([
            this,
            option
        ], this._def);
    }
    and(incoming) {
        return ZodIntersection.create(this, incoming, this._def);
    }
    transform(transform) {
        return new ZodEffects({
            ...processCreateParams(this._def),
            schema: this,
            typeName: ZodFirstPartyTypeKind.ZodEffects,
            effect: {
                type: "transform",
                transform
            }
        });
    }
    default(def) {
        const defaultValueFunc = typeof def === "function" ? def : ()=>def;
        return new ZodDefault({
            ...processCreateParams(this._def),
            innerType: this,
            defaultValue: defaultValueFunc,
            typeName: ZodFirstPartyTypeKind.ZodDefault
        });
    }
    brand() {
        return new ZodBranded({
            typeName: ZodFirstPartyTypeKind.ZodBranded,
            type: this,
            ...processCreateParams(this._def)
        });
    }
    catch(def) {
        const catchValueFunc = typeof def === "function" ? def : ()=>def;
        return new ZodCatch({
            ...processCreateParams(this._def),
            innerType: this,
            catchValue: catchValueFunc,
            typeName: ZodFirstPartyTypeKind.ZodCatch
        });
    }
    describe(description) {
        const This = this.constructor;
        return new This({
            ...this._def,
            description
        });
    }
    pipe(target) {
        return ZodPipeline.create(this, target);
    }
    readonly() {
        return ZodReadonly.create(this);
    }
    isOptional() {
        return this.safeParse(undefined).success;
    }
    isNullable() {
        return this.safeParse(null).success;
    }
}
const cuidRegex = /^c[^\s-]{8,}$/i;
const cuid2Regex = /^[0-9a-z]+$/;
const ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
// const uuidRegex =
//   /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i;
const uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
const nanoidRegex = /^[a-z0-9_-]{21}$/i;
const jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
const durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
// from https://stackoverflow.com/a/46181/1550155
// old version: too slow, didn't support unicode
// const emailRegex = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
//old email regex
// const emailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@((?!-)([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{1,})[^-<>()[\].,;:\s@"]$/i;
// eslint-disable-next-line
// const emailRegex =
//   /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/;
// const emailRegex =
//   /^[a-zA-Z0-9\.\!\#\$\%\&\'\*\+\/\=\?\^\_\`\{\|\}\~\-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
// const emailRegex =
//   /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;
const emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
// const emailRegex =
//   /^[a-z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9\-]+)*$/i;
// from https://thekevinscott.com/emojis-in-javascript/#writing-a-regular-expression
const _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
let emojiRegex;
// faster, simpler, safer
const ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
const ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
// const ipv6Regex =
// /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
const ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
const ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
// https://stackoverflow.com/questions/7860392/determine-if-string-is-in-base64-using-javascript
const base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
// https://base64.guru/standards/base64url
const base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
// simple
// const dateRegexSource = `\\d{4}-\\d{2}-\\d{2}`;
// no leap year validation
// const dateRegexSource = `\\d{4}-((0[13578]|10|12)-31|(0[13-9]|1[0-2])-30|(0[1-9]|1[0-2])-(0[1-9]|1\\d|2\\d))`;
// with leap year validation
const dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
const dateRegex = new RegExp(`^${dateRegexSource}$`);
function timeRegexSource(args) {
    let secondsRegexSource = `[0-5]\\d`;
    if (args.precision) {
        secondsRegexSource = `${secondsRegexSource}\\.\\d{${args.precision}}`;
    } else if (args.precision == null) {
        secondsRegexSource = `${secondsRegexSource}(\\.\\d+)?`;
    }
    const secondsQuantifier = args.precision ? "+" : "?"; // require seconds if precision is nonzero
    return `([01]\\d|2[0-3]):[0-5]\\d(:${secondsRegexSource})${secondsQuantifier}`;
}
function timeRegex(args) {
    return new RegExp(`^${timeRegexSource(args)}$`);
}
function datetimeRegex(args) {
    let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
    const opts = [];
    opts.push(args.local ? `Z?` : `Z`);
    if (args.offset) opts.push(`([+-]\\d{2}:?\\d{2})`);
    regex = `${regex}(${opts.join("|")})`;
    return new RegExp(`^${regex}$`);
}
function isValidIP(ip, version) {
    if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
        return true;
    }
    if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
        return true;
    }
    return false;
}
function isValidJWT(jwt, alg) {
    if (!jwtRegex.test(jwt)) return false;
    try {
        const [header] = jwt.split(".");
        if (!header) return false;
        // Convert base64url to base64
        const base64 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "=");
        const decoded = JSON.parse(atob(base64));
        if (typeof decoded !== "object" || decoded === null) return false;
        if ("typ" in decoded && decoded?.typ !== "JWT") return false;
        if (!decoded.alg) return false;
        if (alg && decoded.alg !== alg) return false;
        return true;
    } catch  {
        return false;
    }
}
function isValidCidr(ip, version) {
    if ((version === "v4" || !version) && ipv4CidrRegex.test(ip)) {
        return true;
    }
    if ((version === "v6" || !version) && ipv6CidrRegex.test(ip)) {
        return true;
    }
    return false;
}
class ZodString extends ZodType {
    _parse(input) {
        if (this._def.coerce) {
            input.data = String(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].string) {
            const ctx = this._getOrReturnCtx(input);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_type,
                expected: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].string,
                received: ctx.parsedType
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
        }
        const status = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ParseStatus"]();
        let ctx = undefined;
        for (const check of this._def.checks){
            if (check.kind === "min") {
                if (input.data.length < check.value) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].too_small,
                        minimum: check.value,
                        type: "string",
                        inclusive: true,
                        exact: false,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "max") {
                if (input.data.length > check.value) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].too_big,
                        maximum: check.value,
                        type: "string",
                        inclusive: true,
                        exact: false,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "length") {
                const tooBig = input.data.length > check.value;
                const tooSmall = input.data.length < check.value;
                if (tooBig || tooSmall) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    if (tooBig) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                            code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].too_big,
                            maximum: check.value,
                            type: "string",
                            inclusive: true,
                            exact: true,
                            message: check.message
                        });
                    } else if (tooSmall) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                            code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].too_small,
                            minimum: check.value,
                            type: "string",
                            inclusive: true,
                            exact: true,
                            message: check.message
                        });
                    }
                    status.dirty();
                }
            } else if (check.kind === "email") {
                if (!emailRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        validation: "email",
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "emoji") {
                if (!emojiRegex) {
                    emojiRegex = new RegExp(_emojiRegex, "u");
                }
                if (!emojiRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        validation: "emoji",
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "uuid") {
                if (!uuidRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        validation: "uuid",
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "nanoid") {
                if (!nanoidRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        validation: "nanoid",
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "cuid") {
                if (!cuidRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        validation: "cuid",
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "cuid2") {
                if (!cuid2Regex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        validation: "cuid2",
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "ulid") {
                if (!ulidRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        validation: "ulid",
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "url") {
                try {
                    new URL(input.data);
                } catch  {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        validation: "url",
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "regex") {
                check.regex.lastIndex = 0;
                const testResult = check.regex.test(input.data);
                if (!testResult) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        validation: "regex",
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "trim") {
                input.data = input.data.trim();
            } else if (check.kind === "includes") {
                if (!input.data.includes(check.value, check.position)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_string,
                        validation: {
                            includes: check.value,
                            position: check.position
                        },
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "toLowerCase") {
                input.data = input.data.toLowerCase();
            } else if (check.kind === "toUpperCase") {
                input.data = input.data.toUpperCase();
            } else if (check.kind === "startsWith") {
                if (!input.data.startsWith(check.value)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_string,
                        validation: {
                            startsWith: check.value
                        },
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "endsWith") {
                if (!input.data.endsWith(check.value)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_string,
                        validation: {
                            endsWith: check.value
                        },
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "datetime") {
                const regex = datetimeRegex(check);
                if (!regex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_string,
                        validation: "datetime",
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "date") {
                const regex = dateRegex;
                if (!regex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_string,
                        validation: "date",
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "time") {
                const regex = timeRegex(check);
                if (!regex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_string,
                        validation: "time",
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "duration") {
                if (!durationRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        validation: "duration",
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "ip") {
                if (!isValidIP(input.data, check.version)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        validation: "ip",
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "jwt") {
                if (!isValidJWT(input.data, check.alg)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        validation: "jwt",
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "cidr") {
                if (!isValidCidr(input.data, check.version)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        validation: "cidr",
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "base64") {
                if (!base64Regex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        validation: "base64",
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "base64url") {
                if (!base64urlRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        validation: "base64url",
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["util"].assertNever(check);
            }
        }
        return {
            status: status.value,
            value: input.data
        };
    }
    _regex(regex, validation, message) {
        return this.refinement((data)=>regex.test(data), {
            validation,
            code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_string,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(message)
        });
    }
    _addCheck(check) {
        return new ZodString({
            ...this._def,
            checks: [
                ...this._def.checks,
                check
            ]
        });
    }
    email(message) {
        return this._addCheck({
            kind: "email",
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(message)
        });
    }
    url(message) {
        return this._addCheck({
            kind: "url",
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(message)
        });
    }
    emoji(message) {
        return this._addCheck({
            kind: "emoji",
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(message)
        });
    }
    uuid(message) {
        return this._addCheck({
            kind: "uuid",
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(message)
        });
    }
    nanoid(message) {
        return this._addCheck({
            kind: "nanoid",
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(message)
        });
    }
    cuid(message) {
        return this._addCheck({
            kind: "cuid",
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(message)
        });
    }
    cuid2(message) {
        return this._addCheck({
            kind: "cuid2",
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(message)
        });
    }
    ulid(message) {
        return this._addCheck({
            kind: "ulid",
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(message)
        });
    }
    base64(message) {
        return this._addCheck({
            kind: "base64",
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(message)
        });
    }
    base64url(message) {
        // base64url encoding is a modification of base64 that can safely be used in URLs and filenames
        return this._addCheck({
            kind: "base64url",
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(message)
        });
    }
    jwt(options) {
        return this._addCheck({
            kind: "jwt",
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(options)
        });
    }
    ip(options) {
        return this._addCheck({
            kind: "ip",
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(options)
        });
    }
    cidr(options) {
        return this._addCheck({
            kind: "cidr",
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(options)
        });
    }
    datetime(options) {
        if (typeof options === "string") {
            return this._addCheck({
                kind: "datetime",
                precision: null,
                offset: false,
                local: false,
                message: options
            });
        }
        return this._addCheck({
            kind: "datetime",
            precision: typeof options?.precision === "undefined" ? null : options?.precision,
            offset: options?.offset ?? false,
            local: options?.local ?? false,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(options?.message)
        });
    }
    date(message) {
        return this._addCheck({
            kind: "date",
            message
        });
    }
    time(options) {
        if (typeof options === "string") {
            return this._addCheck({
                kind: "time",
                precision: null,
                message: options
            });
        }
        return this._addCheck({
            kind: "time",
            precision: typeof options?.precision === "undefined" ? null : options?.precision,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(options?.message)
        });
    }
    duration(message) {
        return this._addCheck({
            kind: "duration",
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(message)
        });
    }
    regex(regex, message) {
        return this._addCheck({
            kind: "regex",
            regex: regex,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(message)
        });
    }
    includes(value, options) {
        return this._addCheck({
            kind: "includes",
            value: value,
            position: options?.position,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(options?.message)
        });
    }
    startsWith(value, message) {
        return this._addCheck({
            kind: "startsWith",
            value: value,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(message)
        });
    }
    endsWith(value, message) {
        return this._addCheck({
            kind: "endsWith",
            value: value,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(message)
        });
    }
    min(minLength, message) {
        return this._addCheck({
            kind: "min",
            value: minLength,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(message)
        });
    }
    max(maxLength, message) {
        return this._addCheck({
            kind: "max",
            value: maxLength,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(message)
        });
    }
    length(len, message) {
        return this._addCheck({
            kind: "length",
            value: len,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(message)
        });
    }
    /**
     * Equivalent to `.min(1)`
     */ nonempty(message) {
        return this.min(1, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(message));
    }
    trim() {
        return new ZodString({
            ...this._def,
            checks: [
                ...this._def.checks,
                {
                    kind: "trim"
                }
            ]
        });
    }
    toLowerCase() {
        return new ZodString({
            ...this._def,
            checks: [
                ...this._def.checks,
                {
                    kind: "toLowerCase"
                }
            ]
        });
    }
    toUpperCase() {
        return new ZodString({
            ...this._def,
            checks: [
                ...this._def.checks,
                {
                    kind: "toUpperCase"
                }
            ]
        });
    }
    get isDatetime() {
        return !!this._def.checks.find((ch)=>ch.kind === "datetime");
    }
    get isDate() {
        return !!this._def.checks.find((ch)=>ch.kind === "date");
    }
    get isTime() {
        return !!this._def.checks.find((ch)=>ch.kind === "time");
    }
    get isDuration() {
        return !!this._def.checks.find((ch)=>ch.kind === "duration");
    }
    get isEmail() {
        return !!this._def.checks.find((ch)=>ch.kind === "email");
    }
    get isURL() {
        return !!this._def.checks.find((ch)=>ch.kind === "url");
    }
    get isEmoji() {
        return !!this._def.checks.find((ch)=>ch.kind === "emoji");
    }
    get isUUID() {
        return !!this._def.checks.find((ch)=>ch.kind === "uuid");
    }
    get isNANOID() {
        return !!this._def.checks.find((ch)=>ch.kind === "nanoid");
    }
    get isCUID() {
        return !!this._def.checks.find((ch)=>ch.kind === "cuid");
    }
    get isCUID2() {
        return !!this._def.checks.find((ch)=>ch.kind === "cuid2");
    }
    get isULID() {
        return !!this._def.checks.find((ch)=>ch.kind === "ulid");
    }
    get isIP() {
        return !!this._def.checks.find((ch)=>ch.kind === "ip");
    }
    get isCIDR() {
        return !!this._def.checks.find((ch)=>ch.kind === "cidr");
    }
    get isBase64() {
        return !!this._def.checks.find((ch)=>ch.kind === "base64");
    }
    get isBase64url() {
        // base64url encoding is a modification of base64 that can safely be used in URLs and filenames
        return !!this._def.checks.find((ch)=>ch.kind === "base64url");
    }
    get minLength() {
        let min = null;
        for (const ch of this._def.checks){
            if (ch.kind === "min") {
                if (min === null || ch.value > min) min = ch.value;
            }
        }
        return min;
    }
    get maxLength() {
        let max = null;
        for (const ch of this._def.checks){
            if (ch.kind === "max") {
                if (max === null || ch.value < max) max = ch.value;
            }
        }
        return max;
    }
}
ZodString.create = (params)=>{
    return new ZodString({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodString,
        coerce: params?.coerce ?? false,
        ...processCreateParams(params)
    });
};
// https://stackoverflow.com/questions/3966484/why-does-modulus-operator-return-fractional-number-in-javascript/31711034#31711034
function floatSafeRemainder(val, step) {
    const valDecCount = (val.toString().split(".")[1] || "").length;
    const stepDecCount = (step.toString().split(".")[1] || "").length;
    const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
    const valInt = Number.parseInt(val.toFixed(decCount).replace(".", ""));
    const stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
    return valInt % stepInt / 10 ** decCount;
}
class ZodNumber extends ZodType {
    constructor(){
        super(...arguments);
        this.min = this.gte;
        this.max = this.lte;
        this.step = this.multipleOf;
    }
    _parse(input) {
        if (this._def.coerce) {
            input.data = Number(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].number) {
            const ctx = this._getOrReturnCtx(input);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_type,
                expected: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].number,
                received: ctx.parsedType
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
        }
        let ctx = undefined;
        const status = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ParseStatus"]();
        for (const check of this._def.checks){
            if (check.kind === "int") {
                if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["util"].isInteger(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_type,
                        expected: "integer",
                        received: "float",
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "min") {
                const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
                if (tooSmall) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].too_small,
                        minimum: check.value,
                        type: "number",
                        inclusive: check.inclusive,
                        exact: false,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "max") {
                const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
                if (tooBig) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].too_big,
                        maximum: check.value,
                        type: "number",
                        inclusive: check.inclusive,
                        exact: false,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "multipleOf") {
                if (floatSafeRemainder(input.data, check.value) !== 0) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].not_multiple_of,
                        multipleOf: check.value,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "finite") {
                if (!Number.isFinite(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].not_finite,
                        message: check.message
                    });
                    status.dirty();
                }
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["util"].assertNever(check);
            }
        }
        return {
            status: status.value,
            value: input.data
        };
    }
    gte(value, message) {
        return this.setLimit("min", value, true, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].toString(message));
    }
    gt(value, message) {
        return this.setLimit("min", value, false, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].toString(message));
    }
    lte(value, message) {
        return this.setLimit("max", value, true, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].toString(message));
    }
    lt(value, message) {
        return this.setLimit("max", value, false, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].toString(message));
    }
    setLimit(kind, value, inclusive, message) {
        return new ZodNumber({
            ...this._def,
            checks: [
                ...this._def.checks,
                {
                    kind,
                    value,
                    inclusive,
                    message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].toString(message)
                }
            ]
        });
    }
    _addCheck(check) {
        return new ZodNumber({
            ...this._def,
            checks: [
                ...this._def.checks,
                check
            ]
        });
    }
    int(message) {
        return this._addCheck({
            kind: "int",
            message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].toString(message)
        });
    }
    positive(message) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: false,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].toString(message)
        });
    }
    negative(message) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: false,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].toString(message)
        });
    }
    nonpositive(message) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: true,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].toString(message)
        });
    }
    nonnegative(message) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: true,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].toString(message)
        });
    }
    multipleOf(value, message) {
        return this._addCheck({
            kind: "multipleOf",
            value: value,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].toString(message)
        });
    }
    finite(message) {
        return this._addCheck({
            kind: "finite",
            message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].toString(message)
        });
    }
    safe(message) {
        return this._addCheck({
            kind: "min",
            inclusive: true,
            value: Number.MIN_SAFE_INTEGER,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].toString(message)
        })._addCheck({
            kind: "max",
            inclusive: true,
            value: Number.MAX_SAFE_INTEGER,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].toString(message)
        });
    }
    get minValue() {
        let min = null;
        for (const ch of this._def.checks){
            if (ch.kind === "min") {
                if (min === null || ch.value > min) min = ch.value;
            }
        }
        return min;
    }
    get maxValue() {
        let max = null;
        for (const ch of this._def.checks){
            if (ch.kind === "max") {
                if (max === null || ch.value < max) max = ch.value;
            }
        }
        return max;
    }
    get isInt() {
        return !!this._def.checks.find((ch)=>ch.kind === "int" || ch.kind === "multipleOf" && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["util"].isInteger(ch.value));
    }
    get isFinite() {
        let max = null;
        let min = null;
        for (const ch of this._def.checks){
            if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
                return true;
            } else if (ch.kind === "min") {
                if (min === null || ch.value > min) min = ch.value;
            } else if (ch.kind === "max") {
                if (max === null || ch.value < max) max = ch.value;
            }
        }
        return Number.isFinite(min) && Number.isFinite(max);
    }
}
ZodNumber.create = (params)=>{
    return new ZodNumber({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodNumber,
        coerce: params?.coerce || false,
        ...processCreateParams(params)
    });
};
class ZodBigInt extends ZodType {
    constructor(){
        super(...arguments);
        this.min = this.gte;
        this.max = this.lte;
    }
    _parse(input) {
        if (this._def.coerce) {
            try {
                input.data = BigInt(input.data);
            } catch  {
                return this._getInvalidInput(input);
            }
        }
        const parsedType = this._getType(input);
        if (parsedType !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].bigint) {
            return this._getInvalidInput(input);
        }
        let ctx = undefined;
        const status = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ParseStatus"]();
        for (const check of this._def.checks){
            if (check.kind === "min") {
                const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
                if (tooSmall) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].too_small,
                        type: "bigint",
                        minimum: check.value,
                        inclusive: check.inclusive,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "max") {
                const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
                if (tooBig) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].too_big,
                        type: "bigint",
                        maximum: check.value,
                        inclusive: check.inclusive,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "multipleOf") {
                if (input.data % check.value !== BigInt(0)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].not_multiple_of,
                        multipleOf: check.value,
                        message: check.message
                    });
                    status.dirty();
                }
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["util"].assertNever(check);
            }
        }
        return {
            status: status.value,
            value: input.data
        };
    }
    _getInvalidInput(input) {
        const ctx = this._getOrReturnCtx(input);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
            code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_type,
            expected: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].bigint,
            received: ctx.parsedType
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
    }
    gte(value, message) {
        return this.setLimit("min", value, true, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].toString(message));
    }
    gt(value, message) {
        return this.setLimit("min", value, false, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].toString(message));
    }
    lte(value, message) {
        return this.setLimit("max", value, true, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].toString(message));
    }
    lt(value, message) {
        return this.setLimit("max", value, false, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].toString(message));
    }
    setLimit(kind, value, inclusive, message) {
        return new ZodBigInt({
            ...this._def,
            checks: [
                ...this._def.checks,
                {
                    kind,
                    value,
                    inclusive,
                    message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].toString(message)
                }
            ]
        });
    }
    _addCheck(check) {
        return new ZodBigInt({
            ...this._def,
            checks: [
                ...this._def.checks,
                check
            ]
        });
    }
    positive(message) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: false,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].toString(message)
        });
    }
    negative(message) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: false,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].toString(message)
        });
    }
    nonpositive(message) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: true,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].toString(message)
        });
    }
    nonnegative(message) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: true,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].toString(message)
        });
    }
    multipleOf(value, message) {
        return this._addCheck({
            kind: "multipleOf",
            value,
            message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].toString(message)
        });
    }
    get minValue() {
        let min = null;
        for (const ch of this._def.checks){
            if (ch.kind === "min") {
                if (min === null || ch.value > min) min = ch.value;
            }
        }
        return min;
    }
    get maxValue() {
        let max = null;
        for (const ch of this._def.checks){
            if (ch.kind === "max") {
                if (max === null || ch.value < max) max = ch.value;
            }
        }
        return max;
    }
}
ZodBigInt.create = (params)=>{
    return new ZodBigInt({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodBigInt,
        coerce: params?.coerce ?? false,
        ...processCreateParams(params)
    });
};
class ZodBoolean extends ZodType {
    _parse(input) {
        if (this._def.coerce) {
            input.data = Boolean(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].boolean) {
            const ctx = this._getOrReturnCtx(input);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_type,
                expected: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].boolean,
                received: ctx.parsedType
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OK"])(input.data);
    }
}
ZodBoolean.create = (params)=>{
    return new ZodBoolean({
        typeName: ZodFirstPartyTypeKind.ZodBoolean,
        coerce: params?.coerce || false,
        ...processCreateParams(params)
    });
};
class ZodDate extends ZodType {
    _parse(input) {
        if (this._def.coerce) {
            input.data = new Date(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].date) {
            const ctx = this._getOrReturnCtx(input);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_type,
                expected: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].date,
                received: ctx.parsedType
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
        }
        if (Number.isNaN(input.data.getTime())) {
            const ctx = this._getOrReturnCtx(input);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_date
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
        }
        const status = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ParseStatus"]();
        let ctx = undefined;
        for (const check of this._def.checks){
            if (check.kind === "min") {
                if (input.data.getTime() < check.value) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].too_small,
                        message: check.message,
                        inclusive: true,
                        exact: false,
                        minimum: check.value,
                        type: "date"
                    });
                    status.dirty();
                }
            } else if (check.kind === "max") {
                if (input.data.getTime() > check.value) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].too_big,
                        message: check.message,
                        inclusive: true,
                        exact: false,
                        maximum: check.value,
                        type: "date"
                    });
                    status.dirty();
                }
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["util"].assertNever(check);
            }
        }
        return {
            status: status.value,
            value: new Date(input.data.getTime())
        };
    }
    _addCheck(check) {
        return new ZodDate({
            ...this._def,
            checks: [
                ...this._def.checks,
                check
            ]
        });
    }
    min(minDate, message) {
        return this._addCheck({
            kind: "min",
            value: minDate.getTime(),
            message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].toString(message)
        });
    }
    max(maxDate, message) {
        return this._addCheck({
            kind: "max",
            value: maxDate.getTime(),
            message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].toString(message)
        });
    }
    get minDate() {
        let min = null;
        for (const ch of this._def.checks){
            if (ch.kind === "min") {
                if (min === null || ch.value > min) min = ch.value;
            }
        }
        return min != null ? new Date(min) : null;
    }
    get maxDate() {
        let max = null;
        for (const ch of this._def.checks){
            if (ch.kind === "max") {
                if (max === null || ch.value < max) max = ch.value;
            }
        }
        return max != null ? new Date(max) : null;
    }
}
ZodDate.create = (params)=>{
    return new ZodDate({
        checks: [],
        coerce: params?.coerce || false,
        typeName: ZodFirstPartyTypeKind.ZodDate,
        ...processCreateParams(params)
    });
};
class ZodSymbol extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].symbol) {
            const ctx = this._getOrReturnCtx(input);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_type,
                expected: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].symbol,
                received: ctx.parsedType
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OK"])(input.data);
    }
}
ZodSymbol.create = (params)=>{
    return new ZodSymbol({
        typeName: ZodFirstPartyTypeKind.ZodSymbol,
        ...processCreateParams(params)
    });
};
class ZodUndefined extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].undefined) {
            const ctx = this._getOrReturnCtx(input);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_type,
                expected: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].undefined,
                received: ctx.parsedType
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OK"])(input.data);
    }
}
ZodUndefined.create = (params)=>{
    return new ZodUndefined({
        typeName: ZodFirstPartyTypeKind.ZodUndefined,
        ...processCreateParams(params)
    });
};
class ZodNull extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].null) {
            const ctx = this._getOrReturnCtx(input);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_type,
                expected: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].null,
                received: ctx.parsedType
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OK"])(input.data);
    }
}
ZodNull.create = (params)=>{
    return new ZodNull({
        typeName: ZodFirstPartyTypeKind.ZodNull,
        ...processCreateParams(params)
    });
};
class ZodAny extends ZodType {
    constructor(){
        super(...arguments);
        // to prevent instances of other classes from extending ZodAny. this causes issues with catchall in ZodObject.
        this._any = true;
    }
    _parse(input) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OK"])(input.data);
    }
}
ZodAny.create = (params)=>{
    return new ZodAny({
        typeName: ZodFirstPartyTypeKind.ZodAny,
        ...processCreateParams(params)
    });
};
class ZodUnknown extends ZodType {
    constructor(){
        super(...arguments);
        // required
        this._unknown = true;
    }
    _parse(input) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OK"])(input.data);
    }
}
ZodUnknown.create = (params)=>{
    return new ZodUnknown({
        typeName: ZodFirstPartyTypeKind.ZodUnknown,
        ...processCreateParams(params)
    });
};
class ZodNever extends ZodType {
    _parse(input) {
        const ctx = this._getOrReturnCtx(input);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
            code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_type,
            expected: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].never,
            received: ctx.parsedType
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
    }
}
ZodNever.create = (params)=>{
    return new ZodNever({
        typeName: ZodFirstPartyTypeKind.ZodNever,
        ...processCreateParams(params)
    });
};
class ZodVoid extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].undefined) {
            const ctx = this._getOrReturnCtx(input);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_type,
                expected: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].void,
                received: ctx.parsedType
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OK"])(input.data);
    }
}
ZodVoid.create = (params)=>{
    return new ZodVoid({
        typeName: ZodFirstPartyTypeKind.ZodVoid,
        ...processCreateParams(params)
    });
};
class ZodArray extends ZodType {
    _parse(input) {
        const { ctx, status } = this._processInputParams(input);
        const def = this._def;
        if (ctx.parsedType !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].array) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_type,
                expected: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].array,
                received: ctx.parsedType
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
        }
        if (def.exactLength !== null) {
            const tooBig = ctx.data.length > def.exactLength.value;
            const tooSmall = ctx.data.length < def.exactLength.value;
            if (tooBig || tooSmall) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                    code: tooBig ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].too_big : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].too_small,
                    minimum: tooSmall ? def.exactLength.value : undefined,
                    maximum: tooBig ? def.exactLength.value : undefined,
                    type: "array",
                    inclusive: true,
                    exact: true,
                    message: def.exactLength.message
                });
                status.dirty();
            }
        }
        if (def.minLength !== null) {
            if (ctx.data.length < def.minLength.value) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                    code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].too_small,
                    minimum: def.minLength.value,
                    type: "array",
                    inclusive: true,
                    exact: false,
                    message: def.minLength.message
                });
                status.dirty();
            }
        }
        if (def.maxLength !== null) {
            if (ctx.data.length > def.maxLength.value) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                    code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].too_big,
                    maximum: def.maxLength.value,
                    type: "array",
                    inclusive: true,
                    exact: false,
                    message: def.maxLength.message
                });
                status.dirty();
            }
        }
        if (ctx.common.async) {
            return Promise.all([
                ...ctx.data
            ].map((item, i)=>{
                return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
            })).then((result)=>{
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ParseStatus"].mergeArray(status, result);
            });
        }
        const result = [
            ...ctx.data
        ].map((item, i)=>{
            return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ParseStatus"].mergeArray(status, result);
    }
    get element() {
        return this._def.type;
    }
    min(minLength, message) {
        return new ZodArray({
            ...this._def,
            minLength: {
                value: minLength,
                message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].toString(message)
            }
        });
    }
    max(maxLength, message) {
        return new ZodArray({
            ...this._def,
            maxLength: {
                value: maxLength,
                message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].toString(message)
            }
        });
    }
    length(len, message) {
        return new ZodArray({
            ...this._def,
            exactLength: {
                value: len,
                message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].toString(message)
            }
        });
    }
    nonempty(message) {
        return this.min(1, message);
    }
}
ZodArray.create = (schema, params)=>{
    return new ZodArray({
        type: schema,
        minLength: null,
        maxLength: null,
        exactLength: null,
        typeName: ZodFirstPartyTypeKind.ZodArray,
        ...processCreateParams(params)
    });
};
function deepPartialify(schema) {
    if (schema instanceof ZodObject) {
        const newShape = {};
        for(const key in schema.shape){
            const fieldSchema = schema.shape[key];
            newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
        }
        return new ZodObject({
            ...schema._def,
            shape: ()=>newShape
        });
    } else if (schema instanceof ZodArray) {
        return new ZodArray({
            ...schema._def,
            type: deepPartialify(schema.element)
        });
    } else if (schema instanceof ZodOptional) {
        return ZodOptional.create(deepPartialify(schema.unwrap()));
    } else if (schema instanceof ZodNullable) {
        return ZodNullable.create(deepPartialify(schema.unwrap()));
    } else if (schema instanceof ZodTuple) {
        return ZodTuple.create(schema.items.map((item)=>deepPartialify(item)));
    } else {
        return schema;
    }
}
class ZodObject extends ZodType {
    constructor(){
        super(...arguments);
        this._cached = null;
        /**
         * @deprecated In most cases, this is no longer needed - unknown properties are now silently stripped.
         * If you want to pass through unknown properties, use `.passthrough()` instead.
         */ this.nonstrict = this.passthrough;
        // extend<
        //   Augmentation extends ZodRawShape,
        //   NewOutput extends util.flatten<{
        //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
        //       ? Augmentation[k]["_output"]
        //       : k extends keyof Output
        //       ? Output[k]
        //       : never;
        //   }>,
        //   NewInput extends util.flatten<{
        //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
        //       ? Augmentation[k]["_input"]
        //       : k extends keyof Input
        //       ? Input[k]
        //       : never;
        //   }>
        // >(
        //   augmentation: Augmentation
        // ): ZodObject<
        //   extendShape<T, Augmentation>,
        //   UnknownKeys,
        //   Catchall,
        //   NewOutput,
        //   NewInput
        // > {
        //   return new ZodObject({
        //     ...this._def,
        //     shape: () => ({
        //       ...this._def.shape(),
        //       ...augmentation,
        //     }),
        //   }) as any;
        // }
        /**
         * @deprecated Use `.extend` instead
         *  */ this.augment = this.extend;
    }
    _getCached() {
        if (this._cached !== null) return this._cached;
        const shape = this._def.shape();
        const keys = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["util"].objectKeys(shape);
        this._cached = {
            shape,
            keys
        };
        return this._cached;
    }
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].object) {
            const ctx = this._getOrReturnCtx(input);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_type,
                expected: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].object,
                received: ctx.parsedType
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
        }
        const { status, ctx } = this._processInputParams(input);
        const { shape, keys: shapeKeys } = this._getCached();
        const extraKeys = [];
        if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
            for(const key in ctx.data){
                if (!shapeKeys.includes(key)) {
                    extraKeys.push(key);
                }
            }
        }
        const pairs = [];
        for (const key of shapeKeys){
            const keyValidator = shape[key];
            const value = ctx.data[key];
            pairs.push({
                key: {
                    status: "valid",
                    value: key
                },
                value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
                alwaysSet: key in ctx.data
            });
        }
        if (this._def.catchall instanceof ZodNever) {
            const unknownKeys = this._def.unknownKeys;
            if (unknownKeys === "passthrough") {
                for (const key of extraKeys){
                    pairs.push({
                        key: {
                            status: "valid",
                            value: key
                        },
                        value: {
                            status: "valid",
                            value: ctx.data[key]
                        }
                    });
                }
            } else if (unknownKeys === "strict") {
                if (extraKeys.length > 0) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                        code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].unrecognized_keys,
                        keys: extraKeys
                    });
                    status.dirty();
                }
            } else if (unknownKeys === "strip") {} else {
                throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
            }
        } else {
            // run catchall validation
            const catchall = this._def.catchall;
            for (const key of extraKeys){
                const value = ctx.data[key];
                pairs.push({
                    key: {
                        status: "valid",
                        value: key
                    },
                    value: catchall._parse(new ParseInputLazyPath(ctx, value, ctx.path, key) //, ctx.child(key), value, getParsedType(value)
                    ),
                    alwaysSet: key in ctx.data
                });
            }
        }
        if (ctx.common.async) {
            return Promise.resolve().then(async ()=>{
                const syncPairs = [];
                for (const pair of pairs){
                    const key = await pair.key;
                    const value = await pair.value;
                    syncPairs.push({
                        key,
                        value,
                        alwaysSet: pair.alwaysSet
                    });
                }
                return syncPairs;
            }).then((syncPairs)=>{
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ParseStatus"].mergeObjectSync(status, syncPairs);
            });
        } else {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ParseStatus"].mergeObjectSync(status, pairs);
        }
    }
    get shape() {
        return this._def.shape();
    }
    strict(message) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].errToObj;
        return new ZodObject({
            ...this._def,
            unknownKeys: "strict",
            ...message !== undefined ? {
                errorMap: (issue, ctx)=>{
                    const defaultError = this._def.errorMap?.(issue, ctx).message ?? ctx.defaultError;
                    if (issue.code === "unrecognized_keys") return {
                        message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].errToObj(message).message ?? defaultError
                    };
                    return {
                        message: defaultError
                    };
                }
            } : {}
        });
    }
    strip() {
        return new ZodObject({
            ...this._def,
            unknownKeys: "strip"
        });
    }
    passthrough() {
        return new ZodObject({
            ...this._def,
            unknownKeys: "passthrough"
        });
    }
    // const AugmentFactory =
    //   <Def extends ZodObjectDef>(def: Def) =>
    //   <Augmentation extends ZodRawShape>(
    //     augmentation: Augmentation
    //   ): ZodObject<
    //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
    //     Def["unknownKeys"],
    //     Def["catchall"]
    //   > => {
    //     return new ZodObject({
    //       ...def,
    //       shape: () => ({
    //         ...def.shape(),
    //         ...augmentation,
    //       }),
    //     }) as any;
    //   };
    extend(augmentation) {
        return new ZodObject({
            ...this._def,
            shape: ()=>({
                    ...this._def.shape(),
                    ...augmentation
                })
        });
    }
    /**
     * Prior to zod@1.0.12 there was a bug in the
     * inferred type of merged objects. Please
     * upgrade if you are experiencing issues.
     */ merge(merging) {
        const merged = new ZodObject({
            unknownKeys: merging._def.unknownKeys,
            catchall: merging._def.catchall,
            shape: ()=>({
                    ...this._def.shape(),
                    ...merging._def.shape()
                }),
            typeName: ZodFirstPartyTypeKind.ZodObject
        });
        return merged;
    }
    // merge<
    //   Incoming extends AnyZodObject,
    //   Augmentation extends Incoming["shape"],
    //   NewOutput extends {
    //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
    //       ? Augmentation[k]["_output"]
    //       : k extends keyof Output
    //       ? Output[k]
    //       : never;
    //   },
    //   NewInput extends {
    //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
    //       ? Augmentation[k]["_input"]
    //       : k extends keyof Input
    //       ? Input[k]
    //       : never;
    //   }
    // >(
    //   merging: Incoming
    // ): ZodObject<
    //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
    //   Incoming["_def"]["unknownKeys"],
    //   Incoming["_def"]["catchall"],
    //   NewOutput,
    //   NewInput
    // > {
    //   const merged: any = new ZodObject({
    //     unknownKeys: merging._def.unknownKeys,
    //     catchall: merging._def.catchall,
    //     shape: () =>
    //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
    //     typeName: ZodFirstPartyTypeKind.ZodObject,
    //   }) as any;
    //   return merged;
    // }
    setKey(key, schema) {
        return this.augment({
            [key]: schema
        });
    }
    // merge<Incoming extends AnyZodObject>(
    //   merging: Incoming
    // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
    // ZodObject<
    //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
    //   Incoming["_def"]["unknownKeys"],
    //   Incoming["_def"]["catchall"]
    // > {
    //   // const mergedShape = objectUtil.mergeShapes(
    //   //   this._def.shape(),
    //   //   merging._def.shape()
    //   // );
    //   const merged: any = new ZodObject({
    //     unknownKeys: merging._def.unknownKeys,
    //     catchall: merging._def.catchall,
    //     shape: () =>
    //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
    //     typeName: ZodFirstPartyTypeKind.ZodObject,
    //   }) as any;
    //   return merged;
    // }
    catchall(index) {
        return new ZodObject({
            ...this._def,
            catchall: index
        });
    }
    pick(mask) {
        const shape = {};
        for (const key of __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["util"].objectKeys(mask)){
            if (mask[key] && this.shape[key]) {
                shape[key] = this.shape[key];
            }
        }
        return new ZodObject({
            ...this._def,
            shape: ()=>shape
        });
    }
    omit(mask) {
        const shape = {};
        for (const key of __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["util"].objectKeys(this.shape)){
            if (!mask[key]) {
                shape[key] = this.shape[key];
            }
        }
        return new ZodObject({
            ...this._def,
            shape: ()=>shape
        });
    }
    /**
     * @deprecated
     */ deepPartial() {
        return deepPartialify(this);
    }
    partial(mask) {
        const newShape = {};
        for (const key of __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["util"].objectKeys(this.shape)){
            const fieldSchema = this.shape[key];
            if (mask && !mask[key]) {
                newShape[key] = fieldSchema;
            } else {
                newShape[key] = fieldSchema.optional();
            }
        }
        return new ZodObject({
            ...this._def,
            shape: ()=>newShape
        });
    }
    required(mask) {
        const newShape = {};
        for (const key of __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["util"].objectKeys(this.shape)){
            if (mask && !mask[key]) {
                newShape[key] = this.shape[key];
            } else {
                const fieldSchema = this.shape[key];
                let newField = fieldSchema;
                while(newField instanceof ZodOptional){
                    newField = newField._def.innerType;
                }
                newShape[key] = newField;
            }
        }
        return new ZodObject({
            ...this._def,
            shape: ()=>newShape
        });
    }
    keyof() {
        return createZodEnum(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["util"].objectKeys(this.shape));
    }
}
ZodObject.create = (shape, params)=>{
    return new ZodObject({
        shape: ()=>shape,
        unknownKeys: "strip",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params)
    });
};
ZodObject.strictCreate = (shape, params)=>{
    return new ZodObject({
        shape: ()=>shape,
        unknownKeys: "strict",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params)
    });
};
ZodObject.lazycreate = (shape, params)=>{
    return new ZodObject({
        shape,
        unknownKeys: "strip",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params)
    });
};
class ZodUnion extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        const options = this._def.options;
        function handleResults(results) {
            // return first issue-free validation if it exists
            for (const result of results){
                if (result.result.status === "valid") {
                    return result.result;
                }
            }
            for (const result of results){
                if (result.result.status === "dirty") {
                    // add issues from dirty option
                    ctx.common.issues.push(...result.ctx.common.issues);
                    return result.result;
                }
            }
            // return invalid
            const unionErrors = results.map((result)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodError"](result.ctx.common.issues));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_union,
                unionErrors
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
        }
        if (ctx.common.async) {
            return Promise.all(options.map(async (option)=>{
                const childCtx = {
                    ...ctx,
                    common: {
                        ...ctx.common,
                        issues: []
                    },
                    parent: null
                };
                return {
                    result: await option._parseAsync({
                        data: ctx.data,
                        path: ctx.path,
                        parent: childCtx
                    }),
                    ctx: childCtx
                };
            })).then(handleResults);
        } else {
            let dirty = undefined;
            const issues = [];
            for (const option of options){
                const childCtx = {
                    ...ctx,
                    common: {
                        ...ctx.common,
                        issues: []
                    },
                    parent: null
                };
                const result = option._parseSync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: childCtx
                });
                if (result.status === "valid") {
                    return result;
                } else if (result.status === "dirty" && !dirty) {
                    dirty = {
                        result,
                        ctx: childCtx
                    };
                }
                if (childCtx.common.issues.length) {
                    issues.push(childCtx.common.issues);
                }
            }
            if (dirty) {
                ctx.common.issues.push(...dirty.ctx.common.issues);
                return dirty.result;
            }
            const unionErrors = issues.map((issues)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodError"](issues));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_union,
                unionErrors
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
        }
    }
    get options() {
        return this._def.options;
    }
}
ZodUnion.create = (types, params)=>{
    return new ZodUnion({
        options: types,
        typeName: ZodFirstPartyTypeKind.ZodUnion,
        ...processCreateParams(params)
    });
};
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
//////////                                 //////////
//////////      ZodDiscriminatedUnion      //////////
//////////                                 //////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
const getDiscriminator = (type)=>{
    if (type instanceof ZodLazy) {
        return getDiscriminator(type.schema);
    } else if (type instanceof ZodEffects) {
        return getDiscriminator(type.innerType());
    } else if (type instanceof ZodLiteral) {
        return [
            type.value
        ];
    } else if (type instanceof ZodEnum) {
        return type.options;
    } else if (type instanceof ZodNativeEnum) {
        // eslint-disable-next-line ban/ban
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["util"].objectValues(type.enum);
    } else if (type instanceof ZodDefault) {
        return getDiscriminator(type._def.innerType);
    } else if (type instanceof ZodUndefined) {
        return [
            undefined
        ];
    } else if (type instanceof ZodNull) {
        return [
            null
        ];
    } else if (type instanceof ZodOptional) {
        return [
            undefined,
            ...getDiscriminator(type.unwrap())
        ];
    } else if (type instanceof ZodNullable) {
        return [
            null,
            ...getDiscriminator(type.unwrap())
        ];
    } else if (type instanceof ZodBranded) {
        return getDiscriminator(type.unwrap());
    } else if (type instanceof ZodReadonly) {
        return getDiscriminator(type.unwrap());
    } else if (type instanceof ZodCatch) {
        return getDiscriminator(type._def.innerType);
    } else {
        return [];
    }
};
class ZodDiscriminatedUnion extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].object) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_type,
                expected: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].object,
                received: ctx.parsedType
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
        }
        const discriminator = this.discriminator;
        const discriminatorValue = ctx.data[discriminator];
        const option = this.optionsMap.get(discriminatorValue);
        if (!option) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_union_discriminator,
                options: Array.from(this.optionsMap.keys()),
                path: [
                    discriminator
                ]
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
        }
        if (ctx.common.async) {
            return option._parseAsync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx
            });
        } else {
            return option._parseSync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx
            });
        }
    }
    get discriminator() {
        return this._def.discriminator;
    }
    get options() {
        return this._def.options;
    }
    get optionsMap() {
        return this._def.optionsMap;
    }
    /**
     * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
     * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
     * have a different value for each object in the union.
     * @param discriminator the name of the discriminator property
     * @param types an array of object schemas
     * @param params
     */ static create(discriminator, options, params) {
        // Get all the valid discriminator values
        const optionsMap = new Map();
        // try {
        for (const type of options){
            const discriminatorValues = getDiscriminator(type.shape[discriminator]);
            if (!discriminatorValues.length) {
                throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
            }
            for (const value of discriminatorValues){
                if (optionsMap.has(value)) {
                    throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
                }
                optionsMap.set(value, type);
            }
        }
        return new ZodDiscriminatedUnion({
            typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
            discriminator,
            options,
            optionsMap,
            ...processCreateParams(params)
        });
    }
}
function mergeValues(a, b) {
    const aType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getParsedType"])(a);
    const bType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getParsedType"])(b);
    if (a === b) {
        return {
            valid: true,
            data: a
        };
    } else if (aType === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].object && bType === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].object) {
        const bKeys = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["util"].objectKeys(b);
        const sharedKeys = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["util"].objectKeys(a).filter((key)=>bKeys.indexOf(key) !== -1);
        const newObj = {
            ...a,
            ...b
        };
        for (const key of sharedKeys){
            const sharedValue = mergeValues(a[key], b[key]);
            if (!sharedValue.valid) {
                return {
                    valid: false
                };
            }
            newObj[key] = sharedValue.data;
        }
        return {
            valid: true,
            data: newObj
        };
    } else if (aType === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].array && bType === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].array) {
        if (a.length !== b.length) {
            return {
                valid: false
            };
        }
        const newArray = [];
        for(let index = 0; index < a.length; index++){
            const itemA = a[index];
            const itemB = b[index];
            const sharedValue = mergeValues(itemA, itemB);
            if (!sharedValue.valid) {
                return {
                    valid: false
                };
            }
            newArray.push(sharedValue.data);
        }
        return {
            valid: true,
            data: newArray
        };
    } else if (aType === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].date && bType === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].date && +a === +b) {
        return {
            valid: true,
            data: a
        };
    } else {
        return {
            valid: false
        };
    }
}
class ZodIntersection extends ZodType {
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        const handleParsed = (parsedLeft, parsedRight)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAborted"])(parsedLeft) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAborted"])(parsedRight)) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
            }
            const merged = mergeValues(parsedLeft.value, parsedRight.value);
            if (!merged.valid) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                    code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_intersection_types
                });
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isDirty"])(parsedLeft) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isDirty"])(parsedRight)) {
                status.dirty();
            }
            return {
                status: status.value,
                value: merged.data
            };
        };
        if (ctx.common.async) {
            return Promise.all([
                this._def.left._parseAsync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx
                }),
                this._def.right._parseAsync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx
                })
            ]).then(([left, right])=>handleParsed(left, right));
        } else {
            return handleParsed(this._def.left._parseSync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx
            }), this._def.right._parseSync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx
            }));
        }
    }
}
ZodIntersection.create = (left, right, params)=>{
    return new ZodIntersection({
        left: left,
        right: right,
        typeName: ZodFirstPartyTypeKind.ZodIntersection,
        ...processCreateParams(params)
    });
};
class ZodTuple extends ZodType {
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].array) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_type,
                expected: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].array,
                received: ctx.parsedType
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
        }
        if (ctx.data.length < this._def.items.length) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].too_small,
                minimum: this._def.items.length,
                inclusive: true,
                exact: false,
                type: "array"
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
        }
        const rest = this._def.rest;
        if (!rest && ctx.data.length > this._def.items.length) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].too_big,
                maximum: this._def.items.length,
                inclusive: true,
                exact: false,
                type: "array"
            });
            status.dirty();
        }
        const items = [
            ...ctx.data
        ].map((item, itemIndex)=>{
            const schema = this._def.items[itemIndex] || this._def.rest;
            if (!schema) return null;
            return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
        }).filter((x)=>!!x); // filter nulls
        if (ctx.common.async) {
            return Promise.all(items).then((results)=>{
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ParseStatus"].mergeArray(status, results);
            });
        } else {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ParseStatus"].mergeArray(status, items);
        }
    }
    get items() {
        return this._def.items;
    }
    rest(rest) {
        return new ZodTuple({
            ...this._def,
            rest
        });
    }
}
ZodTuple.create = (schemas, params)=>{
    if (!Array.isArray(schemas)) {
        throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
    }
    return new ZodTuple({
        items: schemas,
        typeName: ZodFirstPartyTypeKind.ZodTuple,
        rest: null,
        ...processCreateParams(params)
    });
};
class ZodRecord extends ZodType {
    get keySchema() {
        return this._def.keyType;
    }
    get valueSchema() {
        return this._def.valueType;
    }
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].object) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_type,
                expected: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].object,
                received: ctx.parsedType
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
        }
        const pairs = [];
        const keyType = this._def.keyType;
        const valueType = this._def.valueType;
        for(const key in ctx.data){
            pairs.push({
                key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
                value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
                alwaysSet: key in ctx.data
            });
        }
        if (ctx.common.async) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ParseStatus"].mergeObjectAsync(status, pairs);
        } else {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ParseStatus"].mergeObjectSync(status, pairs);
        }
    }
    get element() {
        return this._def.valueType;
    }
    static create(first, second, third) {
        if (second instanceof ZodType) {
            return new ZodRecord({
                keyType: first,
                valueType: second,
                typeName: ZodFirstPartyTypeKind.ZodRecord,
                ...processCreateParams(third)
            });
        }
        return new ZodRecord({
            keyType: ZodString.create(),
            valueType: first,
            typeName: ZodFirstPartyTypeKind.ZodRecord,
            ...processCreateParams(second)
        });
    }
}
class ZodMap extends ZodType {
    get keySchema() {
        return this._def.keyType;
    }
    get valueSchema() {
        return this._def.valueType;
    }
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].map) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_type,
                expected: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].map,
                received: ctx.parsedType
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
        }
        const keyType = this._def.keyType;
        const valueType = this._def.valueType;
        const pairs = [
            ...ctx.data.entries()
        ].map(([key, value], index)=>{
            return {
                key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [
                    index,
                    "key"
                ])),
                value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [
                    index,
                    "value"
                ]))
            };
        });
        if (ctx.common.async) {
            const finalMap = new Map();
            return Promise.resolve().then(async ()=>{
                for (const pair of pairs){
                    const key = await pair.key;
                    const value = await pair.value;
                    if (key.status === "aborted" || value.status === "aborted") {
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
                    }
                    if (key.status === "dirty" || value.status === "dirty") {
                        status.dirty();
                    }
                    finalMap.set(key.value, value.value);
                }
                return {
                    status: status.value,
                    value: finalMap
                };
            });
        } else {
            const finalMap = new Map();
            for (const pair of pairs){
                const key = pair.key;
                const value = pair.value;
                if (key.status === "aborted" || value.status === "aborted") {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
                }
                if (key.status === "dirty" || value.status === "dirty") {
                    status.dirty();
                }
                finalMap.set(key.value, value.value);
            }
            return {
                status: status.value,
                value: finalMap
            };
        }
    }
}
ZodMap.create = (keyType, valueType, params)=>{
    return new ZodMap({
        valueType,
        keyType,
        typeName: ZodFirstPartyTypeKind.ZodMap,
        ...processCreateParams(params)
    });
};
class ZodSet extends ZodType {
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].set) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_type,
                expected: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].set,
                received: ctx.parsedType
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
        }
        const def = this._def;
        if (def.minSize !== null) {
            if (ctx.data.size < def.minSize.value) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                    code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].too_small,
                    minimum: def.minSize.value,
                    type: "set",
                    inclusive: true,
                    exact: false,
                    message: def.minSize.message
                });
                status.dirty();
            }
        }
        if (def.maxSize !== null) {
            if (ctx.data.size > def.maxSize.value) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                    code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].too_big,
                    maximum: def.maxSize.value,
                    type: "set",
                    inclusive: true,
                    exact: false,
                    message: def.maxSize.message
                });
                status.dirty();
            }
        }
        const valueType = this._def.valueType;
        function finalizeSet(elements) {
            const parsedSet = new Set();
            for (const element of elements){
                if (element.status === "aborted") return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
                if (element.status === "dirty") status.dirty();
                parsedSet.add(element.value);
            }
            return {
                status: status.value,
                value: parsedSet
            };
        }
        const elements = [
            ...ctx.data.values()
        ].map((item, i)=>valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
        if (ctx.common.async) {
            return Promise.all(elements).then((elements)=>finalizeSet(elements));
        } else {
            return finalizeSet(elements);
        }
    }
    min(minSize, message) {
        return new ZodSet({
            ...this._def,
            minSize: {
                value: minSize,
                message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].toString(message)
            }
        });
    }
    max(maxSize, message) {
        return new ZodSet({
            ...this._def,
            maxSize: {
                value: maxSize,
                message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$errorUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errorUtil"].toString(message)
            }
        });
    }
    size(size, message) {
        return this.min(size, message).max(size, message);
    }
    nonempty(message) {
        return this.min(1, message);
    }
}
ZodSet.create = (valueType, params)=>{
    return new ZodSet({
        valueType,
        minSize: null,
        maxSize: null,
        typeName: ZodFirstPartyTypeKind.ZodSet,
        ...processCreateParams(params)
    });
};
class ZodFunction extends ZodType {
    constructor(){
        super(...arguments);
        this.validate = this.implement;
    }
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].function) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_type,
                expected: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].function,
                received: ctx.parsedType
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
        }
        function makeArgsIssue(args, error) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["makeIssue"])({
                data: args,
                path: ctx.path,
                errorMaps: [
                    ctx.common.contextualErrorMap,
                    ctx.schemaErrorMap,
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getErrorMap"])(),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$locales$2f$en$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__defaultErrorMap$3e$__["defaultErrorMap"]
                ].filter((x)=>!!x),
                issueData: {
                    code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_arguments,
                    argumentsError: error
                }
            });
        }
        function makeReturnsIssue(returns, error) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["makeIssue"])({
                data: returns,
                path: ctx.path,
                errorMaps: [
                    ctx.common.contextualErrorMap,
                    ctx.schemaErrorMap,
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getErrorMap"])(),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$locales$2f$en$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__defaultErrorMap$3e$__["defaultErrorMap"]
                ].filter((x)=>!!x),
                issueData: {
                    code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_return_type,
                    returnTypeError: error
                }
            });
        }
        const params = {
            errorMap: ctx.common.contextualErrorMap
        };
        const fn = ctx.data;
        if (this._def.returns instanceof ZodPromise) {
            // Would love a way to avoid disabling this rule, but we need
            // an alias (using an arrow function was what caused 2651).
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            const me = this;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OK"])(async function(...args) {
                const error = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodError"]([]);
                const parsedArgs = await me._def.args.parseAsync(args, params).catch((e)=>{
                    error.addIssue(makeArgsIssue(args, e));
                    throw error;
                });
                const result = await Reflect.apply(fn, this, parsedArgs);
                const parsedReturns = await me._def.returns._def.type.parseAsync(result, params).catch((e)=>{
                    error.addIssue(makeReturnsIssue(result, e));
                    throw error;
                });
                return parsedReturns;
            });
        } else {
            // Would love a way to avoid disabling this rule, but we need
            // an alias (using an arrow function was what caused 2651).
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            const me = this;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OK"])(function(...args) {
                const parsedArgs = me._def.args.safeParse(args, params);
                if (!parsedArgs.success) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodError"]([
                        makeArgsIssue(args, parsedArgs.error)
                    ]);
                }
                const result = Reflect.apply(fn, this, parsedArgs.data);
                const parsedReturns = me._def.returns.safeParse(result, params);
                if (!parsedReturns.success) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodError"]([
                        makeReturnsIssue(result, parsedReturns.error)
                    ]);
                }
                return parsedReturns.data;
            });
        }
    }
    parameters() {
        return this._def.args;
    }
    returnType() {
        return this._def.returns;
    }
    args(...items) {
        return new ZodFunction({
            ...this._def,
            args: ZodTuple.create(items).rest(ZodUnknown.create())
        });
    }
    returns(returnType) {
        return new ZodFunction({
            ...this._def,
            returns: returnType
        });
    }
    implement(func) {
        const validatedFunc = this.parse(func);
        return validatedFunc;
    }
    strictImplement(func) {
        const validatedFunc = this.parse(func);
        return validatedFunc;
    }
    static create(args, returns, params) {
        return new ZodFunction({
            args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
            returns: returns || ZodUnknown.create(),
            typeName: ZodFirstPartyTypeKind.ZodFunction,
            ...processCreateParams(params)
        });
    }
}
class ZodLazy extends ZodType {
    get schema() {
        return this._def.getter();
    }
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        const lazySchema = this._def.getter();
        return lazySchema._parse({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
        });
    }
}
ZodLazy.create = (getter, params)=>{
    return new ZodLazy({
        getter: getter,
        typeName: ZodFirstPartyTypeKind.ZodLazy,
        ...processCreateParams(params)
    });
};
class ZodLiteral extends ZodType {
    _parse(input) {
        if (input.data !== this._def.value) {
            const ctx = this._getOrReturnCtx(input);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                received: ctx.data,
                code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_literal,
                expected: this._def.value
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
        }
        return {
            status: "valid",
            value: input.data
        };
    }
    get value() {
        return this._def.value;
    }
}
ZodLiteral.create = (value, params)=>{
    return new ZodLiteral({
        value: value,
        typeName: ZodFirstPartyTypeKind.ZodLiteral,
        ...processCreateParams(params)
    });
};
function createZodEnum(values, params) {
    return new ZodEnum({
        values,
        typeName: ZodFirstPartyTypeKind.ZodEnum,
        ...processCreateParams(params)
    });
}
class ZodEnum extends ZodType {
    _parse(input) {
        if (typeof input.data !== "string") {
            const ctx = this._getOrReturnCtx(input);
            const expectedValues = this._def.values;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                expected: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["util"].joinValues(expectedValues),
                received: ctx.parsedType,
                code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_type
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
        }
        if (!this._cache) {
            this._cache = new Set(this._def.values);
        }
        if (!this._cache.has(input.data)) {
            const ctx = this._getOrReturnCtx(input);
            const expectedValues = this._def.values;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                received: ctx.data,
                code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_enum_value,
                options: expectedValues
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OK"])(input.data);
    }
    get options() {
        return this._def.values;
    }
    get enum() {
        const enumValues = {};
        for (const val of this._def.values){
            enumValues[val] = val;
        }
        return enumValues;
    }
    get Values() {
        const enumValues = {};
        for (const val of this._def.values){
            enumValues[val] = val;
        }
        return enumValues;
    }
    get Enum() {
        const enumValues = {};
        for (const val of this._def.values){
            enumValues[val] = val;
        }
        return enumValues;
    }
    extract(values, newDef = this._def) {
        return ZodEnum.create(values, {
            ...this._def,
            ...newDef
        });
    }
    exclude(values, newDef = this._def) {
        return ZodEnum.create(this.options.filter((opt)=>!values.includes(opt)), {
            ...this._def,
            ...newDef
        });
    }
}
ZodEnum.create = createZodEnum;
class ZodNativeEnum extends ZodType {
    _parse(input) {
        const nativeEnumValues = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["util"].getValidEnumValues(this._def.values);
        const ctx = this._getOrReturnCtx(input);
        if (ctx.parsedType !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].string && ctx.parsedType !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].number) {
            const expectedValues = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["util"].objectValues(nativeEnumValues);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                expected: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["util"].joinValues(expectedValues),
                received: ctx.parsedType,
                code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_type
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
        }
        if (!this._cache) {
            this._cache = new Set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["util"].getValidEnumValues(this._def.values));
        }
        if (!this._cache.has(input.data)) {
            const expectedValues = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["util"].objectValues(nativeEnumValues);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                received: ctx.data,
                code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_enum_value,
                options: expectedValues
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OK"])(input.data);
    }
    get enum() {
        return this._def.values;
    }
}
ZodNativeEnum.create = (values, params)=>{
    return new ZodNativeEnum({
        values: values,
        typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
        ...processCreateParams(params)
    });
};
class ZodPromise extends ZodType {
    unwrap() {
        return this._def.type;
    }
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].promise && ctx.common.async === false) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_type,
                expected: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].promise,
                received: ctx.parsedType
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
        }
        const promisified = ctx.parsedType === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].promise ? ctx.data : Promise.resolve(ctx.data);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OK"])(promisified.then((data)=>{
            return this._def.type.parseAsync(data, {
                path: ctx.path,
                errorMap: ctx.common.contextualErrorMap
            });
        }));
    }
}
ZodPromise.create = (schema, params)=>{
    return new ZodPromise({
        type: schema,
        typeName: ZodFirstPartyTypeKind.ZodPromise,
        ...processCreateParams(params)
    });
};
class ZodEffects extends ZodType {
    innerType() {
        return this._def.schema;
    }
    sourceType() {
        return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
    }
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        const effect = this._def.effect || null;
        const checkCtx = {
            addIssue: (arg)=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, arg);
                if (arg.fatal) {
                    status.abort();
                } else {
                    status.dirty();
                }
            },
            get path () {
                return ctx.path;
            }
        };
        checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
        if (effect.type === "preprocess") {
            const processed = effect.transform(ctx.data, checkCtx);
            if (ctx.common.async) {
                return Promise.resolve(processed).then(async (processed)=>{
                    if (status.value === "aborted") return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
                    const result = await this._def.schema._parseAsync({
                        data: processed,
                        path: ctx.path,
                        parent: ctx
                    });
                    if (result.status === "aborted") return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
                    if (result.status === "dirty") return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DIRTY"])(result.value);
                    if (status.value === "dirty") return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DIRTY"])(result.value);
                    return result;
                });
            } else {
                if (status.value === "aborted") return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
                const result = this._def.schema._parseSync({
                    data: processed,
                    path: ctx.path,
                    parent: ctx
                });
                if (result.status === "aborted") return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
                if (result.status === "dirty") return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DIRTY"])(result.value);
                if (status.value === "dirty") return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DIRTY"])(result.value);
                return result;
            }
        }
        if (effect.type === "refinement") {
            const executeRefinement = (acc)=>{
                const result = effect.refinement(acc, checkCtx);
                if (ctx.common.async) {
                    return Promise.resolve(result);
                }
                if (result instanceof Promise) {
                    throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
                }
                return acc;
            };
            if (ctx.common.async === false) {
                const inner = this._def.schema._parseSync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx
                });
                if (inner.status === "aborted") return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
                if (inner.status === "dirty") status.dirty();
                // return value is ignored
                executeRefinement(inner.value);
                return {
                    status: status.value,
                    value: inner.value
                };
            } else {
                return this._def.schema._parseAsync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx
                }).then((inner)=>{
                    if (inner.status === "aborted") return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
                    if (inner.status === "dirty") status.dirty();
                    return executeRefinement(inner.value).then(()=>{
                        return {
                            status: status.value,
                            value: inner.value
                        };
                    });
                });
            }
        }
        if (effect.type === "transform") {
            if (ctx.common.async === false) {
                const base = this._def.schema._parseSync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx
                });
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValid"])(base)) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
                const result = effect.transform(base.value, checkCtx);
                if (result instanceof Promise) {
                    throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
                }
                return {
                    status: status.value,
                    value: result
                };
            } else {
                return this._def.schema._parseAsync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx
                }).then((base)=>{
                    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValid"])(base)) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
                    return Promise.resolve(effect.transform(base.value, checkCtx)).then((result)=>({
                            status: status.value,
                            value: result
                        }));
                });
            }
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["util"].assertNever(effect);
    }
}
ZodEffects.create = (schema, effect, params)=>{
    return new ZodEffects({
        schema,
        typeName: ZodFirstPartyTypeKind.ZodEffects,
        effect,
        ...processCreateParams(params)
    });
};
ZodEffects.createWithPreprocess = (preprocess, schema, params)=>{
    return new ZodEffects({
        schema,
        effect: {
            type: "preprocess",
            transform: preprocess
        },
        typeName: ZodFirstPartyTypeKind.ZodEffects,
        ...processCreateParams(params)
    });
};
;
class ZodOptional extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].undefined) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OK"])(undefined);
        }
        return this._def.innerType._parse(input);
    }
    unwrap() {
        return this._def.innerType;
    }
}
ZodOptional.create = (type, params)=>{
    return new ZodOptional({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodOptional,
        ...processCreateParams(params)
    });
};
class ZodNullable extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].null) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OK"])(null);
        }
        return this._def.innerType._parse(input);
    }
    unwrap() {
        return this._def.innerType;
    }
}
ZodNullable.create = (type, params)=>{
    return new ZodNullable({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodNullable,
        ...processCreateParams(params)
    });
};
class ZodDefault extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        let data = ctx.data;
        if (ctx.parsedType === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].undefined) {
            data = this._def.defaultValue();
        }
        return this._def.innerType._parse({
            data,
            path: ctx.path,
            parent: ctx
        });
    }
    removeDefault() {
        return this._def.innerType;
    }
}
ZodDefault.create = (type, params)=>{
    return new ZodDefault({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodDefault,
        defaultValue: typeof params.default === "function" ? params.default : ()=>params.default,
        ...processCreateParams(params)
    });
};
class ZodCatch extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        // newCtx is used to not collect issues from inner types in ctx
        const newCtx = {
            ...ctx,
            common: {
                ...ctx.common,
                issues: []
            }
        };
        const result = this._def.innerType._parse({
            data: newCtx.data,
            path: newCtx.path,
            parent: {
                ...newCtx
            }
        });
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAsync"])(result)) {
            return result.then((result)=>{
                return {
                    status: "valid",
                    value: result.status === "valid" ? result.value : this._def.catchValue({
                        get error () {
                            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodError"](newCtx.common.issues);
                        },
                        input: newCtx.data
                    })
                };
            });
        } else {
            return {
                status: "valid",
                value: result.status === "valid" ? result.value : this._def.catchValue({
                    get error () {
                        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodError"](newCtx.common.issues);
                    },
                    input: newCtx.data
                })
            };
        }
    }
    removeCatch() {
        return this._def.innerType;
    }
}
ZodCatch.create = (type, params)=>{
    return new ZodCatch({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodCatch,
        catchValue: typeof params.catch === "function" ? params.catch : ()=>params.catch,
        ...processCreateParams(params)
    });
};
class ZodNaN extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].nan) {
            const ctx = this._getOrReturnCtx(input);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addIssueToContext"])(ctx, {
                code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodIssueCode"].invalid_type,
                expected: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].nan,
                received: ctx.parsedType
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
        }
        return {
            status: "valid",
            value: input.data
        };
    }
}
ZodNaN.create = (params)=>{
    return new ZodNaN({
        typeName: ZodFirstPartyTypeKind.ZodNaN,
        ...processCreateParams(params)
    });
};
const BRAND = Symbol("zod_brand");
class ZodBranded extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        const data = ctx.data;
        return this._def.type._parse({
            data,
            path: ctx.path,
            parent: ctx
        });
    }
    unwrap() {
        return this._def.type;
    }
}
class ZodPipeline extends ZodType {
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.common.async) {
            const handleAsync = async ()=>{
                const inResult = await this._def.in._parseAsync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx
                });
                if (inResult.status === "aborted") return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
                if (inResult.status === "dirty") {
                    status.dirty();
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DIRTY"])(inResult.value);
                } else {
                    return this._def.out._parseAsync({
                        data: inResult.value,
                        path: ctx.path,
                        parent: ctx
                    });
                }
            };
            return handleAsync();
        } else {
            const inResult = this._def.in._parseSync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx
            });
            if (inResult.status === "aborted") return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
            if (inResult.status === "dirty") {
                status.dirty();
                return {
                    status: "dirty",
                    value: inResult.value
                };
            } else {
                return this._def.out._parseSync({
                    data: inResult.value,
                    path: ctx.path,
                    parent: ctx
                });
            }
        }
    }
    static create(a, b) {
        return new ZodPipeline({
            in: a,
            out: b,
            typeName: ZodFirstPartyTypeKind.ZodPipeline
        });
    }
}
class ZodReadonly extends ZodType {
    _parse(input) {
        const result = this._def.innerType._parse(input);
        const freeze = (data)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValid"])(data)) {
                data.value = Object.freeze(data.value);
            }
            return data;
        };
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAsync"])(result) ? result.then((data)=>freeze(data)) : freeze(result);
    }
    unwrap() {
        return this._def.innerType;
    }
}
ZodReadonly.create = (type, params)=>{
    return new ZodReadonly({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodReadonly,
        ...processCreateParams(params)
    });
};
////////////////////////////////////////
////////////////////////////////////////
//////////                    //////////
//////////      z.custom      //////////
//////////                    //////////
////////////////////////////////////////
////////////////////////////////////////
function cleanParams(params, data) {
    const p = typeof params === "function" ? params(data) : typeof params === "string" ? {
        message: params
    } : params;
    const p2 = typeof p === "string" ? {
        message: p
    } : p;
    return p2;
}
function custom(check, _params = {}, /**
 * @deprecated
 *
 * Pass `fatal` into the params object instead:
 *
 * ```ts
 * z.string().custom((val) => val.length > 5, { fatal: false })
 * ```
 *
 */ fatal) {
    if (check) return ZodAny.create().superRefine((data, ctx)=>{
        const r = check(data);
        if (r instanceof Promise) {
            return r.then((r)=>{
                if (!r) {
                    const params = cleanParams(_params, data);
                    const _fatal = params.fatal ?? fatal ?? true;
                    ctx.addIssue({
                        code: "custom",
                        ...params,
                        fatal: _fatal
                    });
                }
            });
        }
        if (!r) {
            const params = cleanParams(_params, data);
            const _fatal = params.fatal ?? fatal ?? true;
            ctx.addIssue({
                code: "custom",
                ...params,
                fatal: _fatal
            });
        }
        return;
    });
    return ZodAny.create();
}
;
const late = {
    object: ZodObject.lazycreate
};
var ZodFirstPartyTypeKind;
(function(ZodFirstPartyTypeKind) {
    ZodFirstPartyTypeKind["ZodString"] = "ZodString";
    ZodFirstPartyTypeKind["ZodNumber"] = "ZodNumber";
    ZodFirstPartyTypeKind["ZodNaN"] = "ZodNaN";
    ZodFirstPartyTypeKind["ZodBigInt"] = "ZodBigInt";
    ZodFirstPartyTypeKind["ZodBoolean"] = "ZodBoolean";
    ZodFirstPartyTypeKind["ZodDate"] = "ZodDate";
    ZodFirstPartyTypeKind["ZodSymbol"] = "ZodSymbol";
    ZodFirstPartyTypeKind["ZodUndefined"] = "ZodUndefined";
    ZodFirstPartyTypeKind["ZodNull"] = "ZodNull";
    ZodFirstPartyTypeKind["ZodAny"] = "ZodAny";
    ZodFirstPartyTypeKind["ZodUnknown"] = "ZodUnknown";
    ZodFirstPartyTypeKind["ZodNever"] = "ZodNever";
    ZodFirstPartyTypeKind["ZodVoid"] = "ZodVoid";
    ZodFirstPartyTypeKind["ZodArray"] = "ZodArray";
    ZodFirstPartyTypeKind["ZodObject"] = "ZodObject";
    ZodFirstPartyTypeKind["ZodUnion"] = "ZodUnion";
    ZodFirstPartyTypeKind["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
    ZodFirstPartyTypeKind["ZodIntersection"] = "ZodIntersection";
    ZodFirstPartyTypeKind["ZodTuple"] = "ZodTuple";
    ZodFirstPartyTypeKind["ZodRecord"] = "ZodRecord";
    ZodFirstPartyTypeKind["ZodMap"] = "ZodMap";
    ZodFirstPartyTypeKind["ZodSet"] = "ZodSet";
    ZodFirstPartyTypeKind["ZodFunction"] = "ZodFunction";
    ZodFirstPartyTypeKind["ZodLazy"] = "ZodLazy";
    ZodFirstPartyTypeKind["ZodLiteral"] = "ZodLiteral";
    ZodFirstPartyTypeKind["ZodEnum"] = "ZodEnum";
    ZodFirstPartyTypeKind["ZodEffects"] = "ZodEffects";
    ZodFirstPartyTypeKind["ZodNativeEnum"] = "ZodNativeEnum";
    ZodFirstPartyTypeKind["ZodOptional"] = "ZodOptional";
    ZodFirstPartyTypeKind["ZodNullable"] = "ZodNullable";
    ZodFirstPartyTypeKind["ZodDefault"] = "ZodDefault";
    ZodFirstPartyTypeKind["ZodCatch"] = "ZodCatch";
    ZodFirstPartyTypeKind["ZodPromise"] = "ZodPromise";
    ZodFirstPartyTypeKind["ZodBranded"] = "ZodBranded";
    ZodFirstPartyTypeKind["ZodPipeline"] = "ZodPipeline";
    ZodFirstPartyTypeKind["ZodReadonly"] = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
// requires TS 4.4+
class Class {
    constructor(..._){}
}
const instanceOfType = (// const instanceOfType = <T extends new (...args: any[]) => any>(
cls, params = {
    message: `Input not instance of ${cls.name}`
})=>custom((data)=>data instanceof cls, params);
const stringType = ZodString.create;
const numberType = ZodNumber.create;
const nanType = ZodNaN.create;
const bigIntType = ZodBigInt.create;
const booleanType = ZodBoolean.create;
const dateType = ZodDate.create;
const symbolType = ZodSymbol.create;
const undefinedType = ZodUndefined.create;
const nullType = ZodNull.create;
const anyType = ZodAny.create;
const unknownType = ZodUnknown.create;
const neverType = ZodNever.create;
const voidType = ZodVoid.create;
const arrayType = ZodArray.create;
const objectType = ZodObject.create;
const strictObjectType = ZodObject.strictCreate;
const unionType = ZodUnion.create;
const discriminatedUnionType = ZodDiscriminatedUnion.create;
const intersectionType = ZodIntersection.create;
const tupleType = ZodTuple.create;
const recordType = ZodRecord.create;
const mapType = ZodMap.create;
const setType = ZodSet.create;
const functionType = ZodFunction.create;
const lazyType = ZodLazy.create;
const literalType = ZodLiteral.create;
const enumType = ZodEnum.create;
const nativeEnumType = ZodNativeEnum.create;
const promiseType = ZodPromise.create;
const effectsType = ZodEffects.create;
const optionalType = ZodOptional.create;
const nullableType = ZodNullable.create;
const preprocessType = ZodEffects.createWithPreprocess;
const pipelineType = ZodPipeline.create;
const ostring = ()=>stringType().optional();
const onumber = ()=>numberType().optional();
const oboolean = ()=>booleanType().optional();
const coerce = {
    string: (arg)=>ZodString.create({
            ...arg,
            coerce: true
        }),
    number: (arg)=>ZodNumber.create({
            ...arg,
            coerce: true
        }),
    boolean: (arg)=>ZodBoolean.create({
            ...arg,
            coerce: true
        }),
    bigint: (arg)=>ZodBigInt.create({
            ...arg,
            coerce: true
        }),
    date: (arg)=>ZodDate.create({
            ...arg,
            coerce: true
        })
};
;
const NEVER = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$helpers$2f$parseUtil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INVALID"];
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1pv2ji_pd-64y._.js.map