(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/Portfolio.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Portfolio
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-down.js [app-client] (ecmascript) <export default as ArrowDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bot.js [app-client] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code-xml.js [app-client] (ecmascript) <export default as Code2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-client] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProjectPreview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProjectPreview.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/site-data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Header() {
    _s();
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed inset-x-0 top-0 z-50 border-b border-white/[.055] bg-ink/70 backdrop-blur-xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "section-wrap flex h-[72px] items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#top",
                        className: "flex items-center gap-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "grid h-8 w-8 place-items-center rounded-lg border border-cyan-200/25 bg-cyan-200/[.08] font-mono text-xs font-bold text-cyan-100",
                                children: "HK"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Portfolio.tsx",
                                lineNumber: 12,
                                columnNumber: 58
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-semibold tracking-wide",
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteMetadata"].name,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-cyan-200",
                                        children: "."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Portfolio.tsx",
                                        lineNumber: 12,
                                        columnNumber: 287
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Portfolio.tsx",
                                lineNumber: 12,
                                columnNumber: 214
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Portfolio.tsx",
                        lineNumber: 12,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "hidden items-center gap-8 md:flex",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "text-xs text-slate-400 transition hover:text-white",
                                href: "#work",
                                children: "Work"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Portfolio.tsx",
                                lineNumber: 13,
                                columnNumber: 56
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "text-xs text-slate-400 transition hover:text-white",
                                href: "#skills",
                                children: "Skills"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Portfolio.tsx",
                                lineNumber: 13,
                                columnNumber: 143
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "text-xs text-slate-400 transition hover:text-white",
                                href: "#about",
                                children: "About"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Portfolio.tsx",
                                lineNumber: 13,
                                columnNumber: 234
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "text-xs text-slate-400 transition hover:text-white",
                                href: "#contact",
                                children: "Contact"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Portfolio.tsx",
                                lineNumber: 13,
                                columnNumber: 323
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteMetadata"].email}`,
                                className: "rounded-lg border border-white/10 px-4 py-2 text-xs text-slate-200 transition hover:border-cyan-200/40 hover:text-cyan-100",
                                children: [
                                    "Let's talk ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                        size: 13,
                                        className: "ml-1 inline"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Portfolio.tsx",
                                        lineNumber: 13,
                                        columnNumber: 608
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Portfolio.tsx",
                                lineNumber: 13,
                                columnNumber: 416
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Portfolio.tsx",
                        lineNumber: 13,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        "aria-label": "Toggle navigation",
                        onClick: ()=>setMenuOpen(!menuOpen),
                        className: "rounded-lg border border-white/10 p-2 text-slate-200 md:hidden",
                        children: menuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            size: 17
                        }, void 0, false, {
                            fileName: "[project]/src/components/Portfolio.tsx",
                            lineNumber: 14,
                            columnNumber: 170
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                            size: 17
                        }, void 0, false, {
                            fileName: "[project]/src/components/Portfolio.tsx",
                            lineNumber: 14,
                            columnNumber: 187
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Portfolio.tsx",
                        lineNumber: 14,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Portfolio.tsx",
                lineNumber: 11,
                columnNumber: 113
            }, this),
            menuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "section-wrap flex flex-col gap-4 pb-5 md:hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        onClick: ()=>setMenuOpen(false),
                        className: "text-sm text-slate-300",
                        href: "#work",
                        children: "Work"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Portfolio.tsx",
                        lineNumber: 15,
                        columnNumber: 87
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        onClick: ()=>setMenuOpen(false),
                        className: "text-sm text-slate-300",
                        href: "#skills",
                        children: "Skills"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Portfolio.tsx",
                        lineNumber: 15,
                        columnNumber: 181
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        onClick: ()=>setMenuOpen(false),
                        className: "text-sm text-slate-300",
                        href: "#about",
                        children: "About"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Portfolio.tsx",
                        lineNumber: 15,
                        columnNumber: 279
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        onClick: ()=>setMenuOpen(false),
                        className: "text-sm text-slate-300",
                        href: "#contact",
                        children: "Contact"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Portfolio.tsx",
                        lineNumber: 15,
                        columnNumber: 375
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Portfolio.tsx",
                lineNumber: 15,
                columnNumber: 22
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Portfolio.tsx",
        lineNumber: 11,
        columnNumber: 10
    }, this);
}
_s(Header, "K77eQVFAaxZgbvGoNWFAiCE7OTY=");
_c = Header;
function Hero({ projects }) {
    _s1();
    const [roleIndex, setRoleIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            const timer = setInterval({
                "Hero.useEffect.timer": ()=>setRoleIndex({
                        "Hero.useEffect.timer": (index)=>(index + 1) % __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotatingSpecialties"].length
                    }["Hero.useEffect.timer"])
            }["Hero.useEffect.timer"], 2500);
            return ({
                "Hero.useEffect": ()=>clearInterval(timer)
            })["Hero.useEffect"];
        }
    }["Hero.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "top",
        className: "relative flex min-h-[760px] items-center overflow-hidden pb-16 pt-28 md:min-h-[850px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid-noise absolute inset-0"
            }, void 0, false, {
                fileName: "[project]/src/components/Portfolio.tsx",
                lineNumber: 22,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute -right-36 top-28 h-[480px] w-[480px] rounded-full bg-cyan-400/[.075] blur-[130px]"
            }, void 0, false, {
                fileName: "[project]/src/components/Portfolio.tsx",
                lineNumber: 22,
                columnNumber: 51
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute left-[18%] top-[42%] h-64 w-64 rounded-full bg-indigo-500/[.07] blur-[100px]"
            }, void 0, false, {
                fileName: "[project]/src/components/Portfolio.tsx",
                lineNumber: 22,
                columnNumber: 180
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "section-wrap relative z-10 grid items-center gap-14 lg:grid-cols-[1.08fr_.92fr]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-7 inline-flex items-center gap-2.5 rounded-full border border-emerald-300/15 bg-emerald-300/[.06] px-3.5 py-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "relative flex h-2 w-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-50"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Portfolio.tsx",
                                                lineNumber: 24,
                                                columnNumber: 182
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "relative inline-flex h-2 w-2 rounded-full bg-emerald-300"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Portfolio.tsx",
                                                lineNumber: 24,
                                                columnNumber: 288
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Portfolio.tsx",
                                        lineNumber: 24,
                                        columnNumber: 142
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-[10px] uppercase tracking-[.16em] text-emerald-100",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteMetadata"].availability
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Portfolio.tsx",
                                        lineNumber: 24,
                                        columnNumber: 371
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Portfolio.tsx",
                                lineNumber: 24,
                                columnNumber: 12
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-5 font-mono text-[11px] uppercase tracking-[.25em] text-cyan-200/80",
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteMetadata"].role,
                                    " · ",
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteMetadata"].location
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Portfolio.tsx",
                                lineNumber: 25,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "max-w-[680px] text-[clamp(3.2rem,8vw,6.3rem)] font-semibold leading-[.98] tracking-[-.065em]",
                                children: [
                                    "Building things",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/components/Portfolio.tsx",
                                        lineNumber: 25,
                                        columnNumber: 268
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gradient",
                                        children: "that think"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Portfolio.tsx",
                                        lineNumber: 25,
                                        columnNumber: 273
                                    }, this),
                                    " ahead."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Portfolio.tsx",
                                lineNumber: 25,
                                columnNumber: 144
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-7 max-w-[540px] text-base leading-8 text-slate-400 md:text-lg",
                                children: [
                                    "I'm ",
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteMetadata"].name.split(" ")[0],
                                    " — a full-stack engineer shaping ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-slate-100 transition-all",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotatingSpecialties"][roleIndex]
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Portfolio.tsx",
                                        lineNumber: 26,
                                        columnNumber: 164
                                    }, this),
                                    " into calm, capable experiences. I bring ambitious ideas from first sketch to shipped product."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Portfolio.tsx",
                                lineNumber: 26,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-9 flex flex-wrap items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#work",
                                        className: "group inline-flex items-center gap-2 rounded-xl bg-cyan-200 px-5 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_0_28px_rgba(105,227,245,.16)] transition hover:-translate-y-0.5 hover:bg-cyan-100",
                                        children: [
                                            "Explore selected work ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                size: 16,
                                                className: "transition group-hover:translate-x-1"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Portfolio.tsx",
                                                lineNumber: 27,
                                                columnNumber: 316
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Portfolio.tsx",
                                        lineNumber: 27,
                                        columnNumber: 65
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteMetadata"].email}`,
                                        className: "rounded-xl border border-white/10 px-5 py-3.5 text-sm text-slate-300 transition hover:border-white/20 hover:bg-white/[.04]",
                                        children: [
                                            "Get in touch ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                size: 14,
                                                className: "ml-1 inline"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Portfolio.tsx",
                                                lineNumber: 27,
                                                columnNumber: 581
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Portfolio.tsx",
                                        lineNumber: 27,
                                        columnNumber: 392
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Portfolio.tsx",
                                lineNumber: 27,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-12 flex items-center gap-5 text-xs text-slate-500",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono",
                                        children: "01 / 03"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Portfolio.tsx",
                                        lineNumber: 28,
                                        columnNumber: 79
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-px w-16 bg-slate-700"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Portfolio.tsx",
                                        lineNumber: 28,
                                        columnNumber: 121
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Product-minded engineering"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Portfolio.tsx",
                                        lineNumber: 28,
                                        columnNumber: 162
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Portfolio.tsx",
                                lineNumber: 28,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Portfolio.tsx",
                        lineNumber: 24,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative mx-auto w-full max-w-[480px] animate-float",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -inset-6 rounded-[36px] bg-gradient-to-br from-cyan-300/[.08] to-indigo-500/[.06] blur-2xl"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Portfolio.tsx",
                                lineNumber: 30,
                                columnNumber: 76
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "glass relative rounded-[28px] p-5 md:p-7",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-mono text-[9px] uppercase tracking-[.2em] text-slate-500",
                                                        children: "Currently building"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Portfolio.tsx",
                                                        lineNumber: 30,
                                                        columnNumber: 308
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-1.5 text-sm font-medium text-slate-100",
                                                        children: "Human-first AI systems"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Portfolio.tsx",
                                                        lineNumber: 30,
                                                        columnNumber: 407
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Portfolio.tsx",
                                                lineNumber: 30,
                                                columnNumber: 303
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rounded-lg border border-cyan-200/15 bg-cyan-200/[.07] p-2 text-cyan-100",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Portfolio.tsx",
                                                    lineNumber: 30,
                                                    columnNumber: 587
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Portfolio.tsx",
                                                lineNumber: 30,
                                                columnNumber: 496
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Portfolio.tsx",
                                        lineNumber: 30,
                                        columnNumber: 252
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "my-6 h-px bg-white/[.07]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Portfolio.tsx",
                                        lineNumber: 30,
                                        columnNumber: 616
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: projects.slice(0, 2).map((project, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between rounded-xl border border-white/[.06] bg-slate-950/35 p-3.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `grid h-9 w-9 place-items-center rounded-lg font-mono text-[10px] ${index === 0 ? "bg-cyan-200/[.08] text-cyan-100" : "bg-violet-300/[.08] text-violet-200"}`,
                                                                children: String(index + 1).padStart(2, "0")
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Portfolio.tsx",
                                                                lineNumber: 30,
                                                                columnNumber: 900
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs font-medium",
                                                                        children: project.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Portfolio.tsx",
                                                                        lineNumber: 30,
                                                                        columnNumber: 1124
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "mt-1 text-[10px] text-slate-500",
                                                                        children: project.category
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Portfolio.tsx",
                                                                        lineNumber: 30,
                                                                        columnNumber: 1178
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/Portfolio.tsx",
                                                                lineNumber: 30,
                                                                columnNumber: 1119
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Portfolio.tsx",
                                                        lineNumber: 30,
                                                        columnNumber: 859
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "h-1.5 w-1.5 rounded-full bg-emerald-300"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Portfolio.tsx",
                                                        lineNumber: 30,
                                                        columnNumber: 1259
                                                    }, this)
                                                ]
                                            }, project.id, true, {
                                                fileName: "[project]/src/components/Portfolio.tsx",
                                                lineNumber: 30,
                                                columnNumber: 732
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Portfolio.tsx",
                                        lineNumber: 30,
                                        columnNumber: 659
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-6 flex items-center justify-between border-t border-white/[.07] pt-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono text-[9px] uppercase tracking-[.15em] text-slate-500",
                                                children: "Crafting with intent"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Portfolio.tsx",
                                                lineNumber: 30,
                                                columnNumber: 1421
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-slate-400",
                                                children: [
                                                    "2022 — ",
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteMetadata"].copyrightYear
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Portfolio.tsx",
                                                lineNumber: 30,
                                                columnNumber: 1529
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Portfolio.tsx",
                                        lineNumber: 30,
                                        columnNumber: 1332
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Portfolio.tsx",
                                lineNumber: 30,
                                columnNumber: 194
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -bottom-5 -left-6 hidden items-center gap-2 rounded-xl border border-white/10 bg-slate-900/90 px-4 py-3 shadow-xl sm:flex",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "h-2 w-2 rounded-full bg-cyan-200"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Portfolio.tsx",
                                        lineNumber: 30,
                                        columnNumber: 1776
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-[10px] text-slate-300",
                                        children: "IDEA → IMPACT"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Portfolio.tsx",
                                        lineNumber: 30,
                                        columnNumber: 1828
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Portfolio.tsx",
                                lineNumber: 30,
                                columnNumber: 1628
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Portfolio.tsx",
                        lineNumber: 30,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Portfolio.tsx",
                lineNumber: 23,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "#work",
                "aria-label": "Scroll to selected work",
                className: "absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-slate-500 transition hover:text-cyan-100 md:block",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__["ArrowDown"], {
                    size: 17,
                    className: "animate-bounce"
                }, void 0, false, {
                    fileName: "[project]/src/components/Portfolio.tsx",
                    lineNumber: 31,
                    columnNumber: 182
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Portfolio.tsx",
                lineNumber: 31,
                columnNumber: 11
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Portfolio.tsx",
        lineNumber: 21,
        columnNumber: 10
    }, this);
}
_s1(Hero, "8lkQ2OFu2Dnf2ASbUqE3qzfc2ws=");
_c1 = Hero;
function Work({ projects }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "work",
        className: "section-wrap py-24 md:py-32",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-12 flex flex-wrap items-end justify-between gap-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-3 font-mono text-[10px] uppercase tracking-[.24em] text-cyan-200/75",
                                children: "Selected work · 01—02"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Portfolio.tsx",
                                lineNumber: 36,
                                columnNumber: 144
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl font-semibold tracking-[-.04em] md:text-4xl",
                                children: "Ideas, made tangible."
                            }, void 0, false, {
                                fileName: "[project]/src/components/Portfolio.tsx",
                                lineNumber: 36,
                                columnNumber: 255
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Portfolio.tsx",
                        lineNumber: 36,
                        columnNumber: 139
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "max-w-sm text-sm leading-6 text-slate-500",
                        children: "A small collection of systems I've designed and built to make complicated work feel a little more human."
                    }, void 0, false, {
                        fileName: "[project]/src/components/Portfolio.tsx",
                        lineNumber: 36,
                        columnNumber: 356
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Portfolio.tsx",
                lineNumber: 36,
                columnNumber: 69
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-7",
                children: projects.map((project, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: "glass group overflow-hidden rounded-[26px] transition duration-500 hover:border-white/20 hover:shadow-glow",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid lg:grid-cols-[.92fr_1.08fr]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `flex flex-col justify-between p-6 md:p-9 ${index % 2 ? "lg:order-2" : ""}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-5 flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-mono text-[9px] uppercase tracking-[.22em] text-cyan-200/75",
                                                            children: project.category
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Portfolio.tsx",
                                                            lineNumber: 37,
                                                            columnNumber: 415
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-mono text-[10px] text-slate-600",
                                                            children: [
                                                                "0",
                                                                index + 1,
                                                                " / 0",
                                                                projects.length
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/Portfolio.tsx",
                                                            lineNumber: 37,
                                                            columnNumber: 523
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Portfolio.tsx",
                                                    lineNumber: 37,
                                                    columnNumber: 359
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-3xl font-semibold tracking-[-.05em] md:text-4xl",
                                                    children: [
                                                        project.title,
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-cyan-200",
                                                            children: "."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Portfolio.tsx",
                                                            lineNumber: 37,
                                                            columnNumber: 708
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Portfolio.tsx",
                                                    lineNumber: 37,
                                                    columnNumber: 624
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-3 text-sm text-slate-300",
                                                    children: project.subtitle
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Portfolio.tsx",
                                                    lineNumber: 37,
                                                    columnNumber: 753
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-5 max-w-xl text-sm leading-7 text-slate-400",
                                                    children: project.description
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Portfolio.tsx",
                                                    lineNumber: 37,
                                                    columnNumber: 818
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mb-3 font-mono text-[9px] uppercase tracking-[.18em] text-slate-500",
                                                            children: "What it does"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Portfolio.tsx",
                                                            lineNumber: 38,
                                                            columnNumber: 31
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid gap-2 sm:grid-cols-2",
                                                            children: project.features.map((feature)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-start gap-2 text-xs leading-5 text-slate-300",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan-200"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/Portfolio.tsx",
                                                                            lineNumber: 38,
                                                                            columnNumber: 295
                                                                        }, this),
                                                                        feature
                                                                    ]
                                                                }, feature, true, {
                                                                    fileName: "[project]/src/components/Portfolio.tsx",
                                                                    lineNumber: 38,
                                                                    columnNumber: 208
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Portfolio.tsx",
                                                            lineNumber: 38,
                                                            columnNumber: 130
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Portfolio.tsx",
                                                    lineNumber: 38,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mb-3 font-mono text-[9px] uppercase tracking-[.18em] text-slate-500",
                                                            children: "Built with"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Portfolio.tsx",
                                                            lineNumber: 38,
                                                            columnNumber: 414
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-wrap gap-2",
                                                            children: project.techStack.map((tech)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "rounded-md border border-white/[.08] bg-white/[.025] px-2.5 py-1.5 font-mono text-[9px] text-slate-400",
                                                                    children: tech
                                                                }, tech, false, {
                                                                    fileName: "[project]/src/components/Portfolio.tsx",
                                                                    lineNumber: 38,
                                                                    columnNumber: 582
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Portfolio.tsx",
                                                            lineNumber: 38,
                                                            columnNumber: 511
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Portfolio.tsx",
                                                    lineNumber: 38,
                                                    columnNumber: 392
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-6 rounded-xl border border-white/[.06] bg-white/[.025] p-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mb-2 font-mono text-[9px] uppercase tracking-[.18em] text-slate-500",
                                                            children: "Architecture notes"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Portfolio.tsx",
                                                            lineNumber: 38,
                                                            columnNumber: 820
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs leading-6 text-slate-400",
                                                            children: project.architecture
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Portfolio.tsx",
                                                            lineNumber: 38,
                                                            columnNumber: 925
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Portfolio.tsx",
                                                    lineNumber: 38,
                                                    columnNumber: 741
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Portfolio.tsx",
                                            lineNumber: 37,
                                            columnNumber: 354
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-7 flex flex-wrap gap-3",
                                            children: [
                                                project.liveDemoUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: project.liveDemoUrl,
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    className: "inline-flex items-center gap-2 rounded-lg border border-cyan-200/25 bg-cyan-200/[.07] px-4 py-2.5 text-xs font-medium text-cyan-100 transition hover:bg-cyan-200/[.14]",
                                                    children: [
                                                        "Live preview ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                            size: 14
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Portfolio.tsx",
                                                            lineNumber: 39,
                                                            columnNumber: 330
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Portfolio.tsx",
                                                    lineNumber: 39,
                                                    columnNumber: 75
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "inline-flex items-center gap-2 rounded-lg border border-cyan-200/15 px-4 py-2.5 text-xs text-cyan-100/60",
                                                    children: "Preview link pending"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Portfolio.tsx",
                                                    lineNumber: 39,
                                                    columnNumber: 362
                                                }, this),
                                                project.githubUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: project.githubUrl,
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    className: "inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2.5 text-xs text-slate-300 transition hover:bg-white/[.05]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                                            size: 14
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Portfolio.tsx",
                                                            lineNumber: 39,
                                                            columnNumber: 739
                                                        }, this),
                                                        " Source"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Portfolio.tsx",
                                                    lineNumber: 39,
                                                    columnNumber: 534
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "inline-flex items-center gap-2 rounded-lg border border-white/[.07] px-4 py-2.5 text-xs text-slate-500",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                                            size: 14
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Portfolio.tsx",
                                                            lineNumber: 39,
                                                            columnNumber: 893
                                                        }, this),
                                                        " Private / unpublished"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Portfolio.tsx",
                                                    lineNumber: 39,
                                                    columnNumber: 772
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Portfolio.tsx",
                                            lineNumber: 39,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Portfolio.tsx",
                                    lineNumber: 37,
                                    columnNumber: 261
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `relative flex min-h-[340px] items-center overflow-hidden bg-slate-950/35 p-5 md:min-h-[430px] md:p-8 ${index % 2 ? "lg:order-1" : ""}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,rgba(105,227,245,.07),transparent_68%)]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Portfolio.tsx",
                                            lineNumber: 40,
                                            columnNumber: 166
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative w-full",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProjectPreview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProjectPreview"], {
                                                project: project
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Portfolio.tsx",
                                                lineNumber: 40,
                                                columnNumber: 313
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Portfolio.tsx",
                                            lineNumber: 40,
                                            columnNumber: 280
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute bottom-5 right-6 font-mono text-[9px] uppercase tracking-[.18em] text-slate-600",
                                            children: project.status
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Portfolio.tsx",
                                            lineNumber: 40,
                                            columnNumber: 354
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Portfolio.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Portfolio.tsx",
                            lineNumber: 37,
                            columnNumber: 211
                        }, this)
                    }, project.id, false, {
                        fileName: "[project]/src/components/Portfolio.tsx",
                        lineNumber: 37,
                        columnNumber: 66
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/Portfolio.tsx",
                lineNumber: 37,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Portfolio.tsx",
        lineNumber: 36,
        columnNumber: 10
    }, this);
}
_c2 = Work;
function Skills() {
    const icons = [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__["Code2"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers3$3e$__["Layers3"]
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "skills",
        className: "relative overflow-hidden border-y border-white/[.055] bg-white/[.012] py-24 md:py-28",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute -left-40 top-10 h-72 w-72 rounded-full bg-cyan-300/[.045] blur-[100px]"
            }, void 0, false, {
                fileName: "[project]/src/components/Portfolio.tsx",
                lineNumber: 46,
                columnNumber: 128
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "section-wrap relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-11 flex flex-wrap items-end justify-between gap-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-3 font-mono text-[10px] uppercase tracking-[.24em] text-cyan-200/75",
                                        children: "Skills & capabilities"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Portfolio.tsx",
                                        lineNumber: 46,
                                        columnNumber: 360
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-3xl font-semibold tracking-[-.04em] md:text-4xl",
                                        children: "The toolkit behind the work."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Portfolio.tsx",
                                        lineNumber: 46,
                                        columnNumber: 471
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Portfolio.tsx",
                                lineNumber: 46,
                                columnNumber: 355
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "max-w-sm text-sm leading-6 text-slate-500",
                                children: "A blend of engineering, applied AI, and product craft to take ideas from sketch to something people can use."
                            }, void 0, false, {
                                fileName: "[project]/src/components/Portfolio.tsx",
                                lineNumber: 46,
                                columnNumber: 579
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Portfolio.tsx",
                        lineNumber: 46,
                        columnNumber: 285
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-4 md:grid-cols-3",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skillGroups"].map((group, index)=>{
                            const Icon = icons[index] ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"];
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: "glass group relative overflow-hidden rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-200/20 hover:shadow-glow md:p-7",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -right-7 -top-7 h-24 w-24 rounded-full bg-cyan-200/[.035] blur-2xl transition group-hover:bg-cyan-200/[.09]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Portfolio.tsx",
                                        lineNumber: 46,
                                        columnNumber: 1065
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "grid h-11 w-11 place-items-center rounded-xl border border-cyan-200/15 bg-cyan-200/[.07] text-cyan-100",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                            size: 18
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Portfolio.tsx",
                                                            lineNumber: 46,
                                                            columnNumber: 1397
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Portfolio.tsx",
                                                        lineNumber: 46,
                                                        columnNumber: 1276
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono text-[10px] tracking-[.15em] text-slate-600",
                                                        children: group.number
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Portfolio.tsx",
                                                        lineNumber: 46,
                                                        columnNumber: 1421
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Portfolio.tsx",
                                                lineNumber: 46,
                                                columnNumber: 1226
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "mt-6 text-lg font-semibold tracking-tight",
                                                children: group.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Portfolio.tsx",
                                                lineNumber: 46,
                                                columnNumber: 1520
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 min-h-12 text-xs leading-6 text-slate-400",
                                                children: group.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Portfolio.tsx",
                                                lineNumber: 46,
                                                columnNumber: 1596
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-5 flex flex-wrap gap-2",
                                                children: group.skills.map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "rounded-lg border border-white/[.08] bg-white/[.025] px-2.5 py-1.5 text-[10px] text-slate-300",
                                                        children: skill
                                                    }, skill, false, {
                                                        fileName: "[project]/src/components/Portfolio.tsx",
                                                        lineNumber: 46,
                                                        columnNumber: 1753
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Portfolio.tsx",
                                                lineNumber: 46,
                                                columnNumber: 1681
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Portfolio.tsx",
                                        lineNumber: 46,
                                        columnNumber: 1200
                                    }, this)
                                ]
                            }, group.number, true, {
                                fileName: "[project]/src/components/Portfolio.tsx",
                                lineNumber: 46,
                                columnNumber: 877
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/Portfolio.tsx",
                        lineNumber: 46,
                        columnNumber: 754
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Portfolio.tsx",
                lineNumber: 46,
                columnNumber: 246
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Portfolio.tsx",
        lineNumber: 46,
        columnNumber: 10
    }, this);
}
_c3 = Skills;
function About() {
    const ambitionIcons = [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"]
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "about",
        className: "relative overflow-hidden border-y border-white/[.055] bg-white/[.012] py-24 md:py-28",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-indigo-400/[.05] blur-[110px]"
            }, void 0, false, {
                fileName: "[project]/src/components/Portfolio.tsx",
                lineNumber: 51,
                columnNumber: 127
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "section-wrap relative grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-4 font-mono text-[10px] uppercase tracking-[.24em] text-cyan-200/75",
                                children: "A little about me"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Portfolio.tsx",
                                lineNumber: 51,
                                columnNumber: 338
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl font-semibold leading-tight tracking-[-.05em] md:text-5xl",
                                children: [
                                    "I'm ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gradient",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteMetadata"].name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Portfolio.tsx",
                                        lineNumber: 51,
                                        columnNumber: 537
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-cyan-200",
                                        children: "."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Portfolio.tsx",
                                        lineNumber: 51,
                                        columnNumber: 595
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Portfolio.tsx",
                                lineNumber: 51,
                                columnNumber: 445
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 inline-flex items-center gap-2 rounded-full border border-cyan-200/15 bg-cyan-200/[.055] px-3.5 py-2 text-xs text-cyan-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Portfolio.tsx",
                                        lineNumber: 51,
                                        columnNumber: 785
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "Based in ",
                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteMetadata"].location
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Portfolio.tsx",
                                        lineNumber: 51,
                                        columnNumber: 804
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Portfolio.tsx",
                                lineNumber: 51,
                                columnNumber: 640
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-7 max-w-md text-sm leading-7 text-slate-400",
                                children: "I'm a product engineer drawn to the frontier of AI. I want to build tools that feel imaginative, useful, and deeply human."
                            }, void 0, false, {
                                fileName: "[project]/src/components/Portfolio.tsx",
                                lineNumber: 51,
                                columnNumber: 855
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Portfolio.tsx",
                        lineNumber: 51,
                        columnNumber: 333
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-5 flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "h-px w-8 bg-cyan-200/40"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Portfolio.tsx",
                                        lineNumber: 51,
                                        columnNumber: 1105
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-mono text-[10px] uppercase tracking-[.2em] text-slate-400",
                                        children: "What I'm aiming for"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Portfolio.tsx",
                                        lineNumber: 51,
                                        columnNumber: 1148
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Portfolio.tsx",
                                lineNumber: 51,
                                columnNumber: 1059
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-3",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ambitions"].map((ambition, index)=>{
                                    const Icon = ambitionIcons[index] ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"];
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                        className: "glass group flex gap-4 rounded-2xl p-4 transition hover:border-cyan-200/20 hover:bg-white/[.035] md:p-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-cyan-200/15 bg-cyan-200/[.06] text-cyan-100 transition group-hover:bg-cyan-200/[.12]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                    size: 17
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Portfolio.tsx",
                                                    lineNumber: 51,
                                                    columnNumber: 1697
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Portfolio.tsx",
                                                lineNumber: 51,
                                                columnNumber: 1526
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-sm font-semibold text-slate-100",
                                                        children: ambition.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Portfolio.tsx",
                                                        lineNumber: 51,
                                                        columnNumber: 1726
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-1.5 text-xs leading-5 text-slate-400",
                                                        children: ambition.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Portfolio.tsx",
                                                        lineNumber: 51,
                                                        columnNumber: 1800
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Portfolio.tsx",
                                                lineNumber: 51,
                                                columnNumber: 1721
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-auto hidden self-start font-mono text-[9px] tracking-widest text-slate-600 sm:block",
                                                children: [
                                                    "0",
                                                    index + 1
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Portfolio.tsx",
                                                lineNumber: 51,
                                                columnNumber: 1887
                                            }, this)
                                        ]
                                    }, ambition.title, true, {
                                        fileName: "[project]/src/components/Portfolio.tsx",
                                        lineNumber: 51,
                                        columnNumber: 1380
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/Portfolio.tsx",
                                lineNumber: 51,
                                columnNumber: 1260
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Portfolio.tsx",
                        lineNumber: 51,
                        columnNumber: 1054
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Portfolio.tsx",
                lineNumber: 51,
                columnNumber: 246
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Portfolio.tsx",
        lineNumber: 51,
        columnNumber: 10
    }, this);
}
_c4 = About;
function Contact() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contact",
        className: "section-wrap py-24 md:py-32",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative overflow-hidden rounded-[28px] border border-cyan-200/15 bg-gradient-to-br from-cyan-200/[.08] via-slate-900/80 to-indigo-400/[.06] p-7 md:p-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute -right-14 -top-24 h-72 w-72 rounded-full bg-cyan-200/[.08] blur-[90px]"
                }, void 0, false, {
                    fileName: "[project]/src/components/Portfolio.tsx",
                    lineNumber: 54,
                    columnNumber: 261
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-4 font-mono text-[10px] uppercase tracking-[.24em] text-cyan-100/70",
                            children: "Have a good problem?"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Portfolio.tsx",
                            lineNumber: 54,
                            columnNumber: 385
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "max-w-2xl text-3xl font-semibold leading-tight tracking-[-.045em] md:text-5xl",
                            children: [
                                "Let's make something",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                    className: "hidden md:block"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Portfolio.tsx",
                                    lineNumber: 54,
                                    columnNumber: 614
                                }, this),
                                " worth using."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Portfolio.tsx",
                            lineNumber: 54,
                            columnNumber: 495
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-4 max-w-lg text-sm leading-7 text-slate-400",
                            children: "If you're building a thoughtful product or exploring what AI can do for your team, I'd like to hear about it."
                        }, void 0, false, {
                            fileName: "[project]/src/components/Portfolio.tsx",
                            lineNumber: 54,
                            columnNumber: 665
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteMetadata"].email}`,
                            className: "mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-100",
                            children: [
                                "Start a conversation ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                    size: 15
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Portfolio.tsx",
                                    lineNumber: 54,
                                    columnNumber: 1081
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Portfolio.tsx",
                            lineNumber: 54,
                            columnNumber: 850
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-4 font-mono text-[10px] text-slate-400",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteMetadata"].email
                        }, void 0, false, {
                            fileName: "[project]/src/components/Portfolio.tsx",
                            lineNumber: 54,
                            columnNumber: 1110
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Portfolio.tsx",
                    lineNumber: 54,
                    columnNumber: 359
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Portfolio.tsx",
            lineNumber: 54,
            columnNumber: 91
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Portfolio.tsx",
        lineNumber: 54,
        columnNumber: 29
    }, this);
}
_c5 = Contact;
function Portfolio({ projects }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Header, {}, void 0, false, {
                fileName: "[project]/src/components/Portfolio.tsx",
                lineNumber: 57,
                columnNumber: 16
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Hero, {
                projects: projects
            }, void 0, false, {
                fileName: "[project]/src/components/Portfolio.tsx",
                lineNumber: 57,
                columnNumber: 25
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Work, {
                projects: projects
            }, void 0, false, {
                fileName: "[project]/src/components/Portfolio.tsx",
                lineNumber: 57,
                columnNumber: 52
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Skills, {}, void 0, false, {
                fileName: "[project]/src/components/Portfolio.tsx",
                lineNumber: 57,
                columnNumber: 79
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(About, {}, void 0, false, {
                fileName: "[project]/src/components/Portfolio.tsx",
                lineNumber: 57,
                columnNumber: 88
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Contact, {}, void 0, false, {
                fileName: "[project]/src/components/Portfolio.tsx",
                lineNumber: 57,
                columnNumber: 96
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "section-wrap flex flex-wrap items-center justify-between gap-3 border-t border-white/[.06] py-7 text-[10px] text-slate-600",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "© ",
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteMetadata"].copyrightYear,
                            " ",
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteMetadata"].name,
                            ". Made with intention."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Portfolio.tsx",
                        lineNumber: 57,
                        columnNumber: 249
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "transition hover:text-slate-300",
                                href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteMetadata"].email}`,
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteMetadata"].email
                            }, void 0, false, {
                                fileName: "[project]/src/components/Portfolio.tsx",
                                lineNumber: 57,
                                columnNumber: 375
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "transition hover:text-slate-300",
                                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteMetadata"].socialLinks.github,
                                target: "_blank",
                                rel: "noreferrer",
                                children: "GitHub"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Portfolio.tsx",
                                lineNumber: 57,
                                columnNumber: 484
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Portfolio.tsx",
                        lineNumber: 57,
                        columnNumber: 334
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Portfolio.tsx",
                lineNumber: 57,
                columnNumber: 106
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Portfolio.tsx",
        lineNumber: 57,
        columnNumber: 10
    }, this);
}
_c6 = Portfolio;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Header");
__turbopack_context__.k.register(_c1, "Hero");
__turbopack_context__.k.register(_c2, "Work");
__turbopack_context__.k.register(_c3, "Skills");
__turbopack_context__.k.register(_c4, "About");
__turbopack_context__.k.register(_c5, "Contact");
__turbopack_context__.k.register(_c6, "Portfolio");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ProjectPreview.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectPreview",
    ()=>ProjectPreview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSearch$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-search.js [app-client] (ecmascript) <export default as FileSearch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-alert.js [app-client] (ecmascript) <export default as ShieldAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/terminal.js [app-client] (ecmascript) <export default as Terminal>");
;
;
function ProjectPreview({ project }) {
    if (project.slug === "contractlens") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "glass relative overflow-hidden rounded-2xl p-5 md:p-7",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6 flex items-center justify-between border-b border-white/10 pb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 text-xs text-slate-300",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSearch$3e$__["FileSearch"], {
                                    size: 15,
                                    className: "text-violet-300"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectPreview.tsx",
                                    lineNumber: 7,
                                    columnNumber: 157
                                }, this),
                                " Contract review"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProjectPreview.tsx",
                            lineNumber: 7,
                            columnNumber: 93
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "rounded-full border border-violet-300/20 bg-violet-300/10 px-2.5 py-1 font-mono text-[9px] text-violet-200",
                            children: "ANALYSIS COMPLETE"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectPreview.tsx",
                            lineNumber: 7,
                            columnNumber: 231
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProjectPreview.tsx",
                    lineNumber: 7,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-xl border border-white/[.07] bg-slate-950/50 p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-3 flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono text-[10px] text-slate-500",
                                            children: "MASTER SERVICES AGREEMENT"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProjectPreview.tsx",
                                            lineNumber: 9,
                                            columnNumber: 139
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] text-slate-500",
                                            children: "Page 08 / 24"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProjectPreview.tsx",
                                            lineNumber: 9,
                                            columnNumber: 226
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProjectPreview.tsx",
                                    lineNumber: 9,
                                    columnNumber: 83
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-2 w-[90%] rounded bg-slate-700/60"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProjectPreview.tsx",
                                            lineNumber: 9,
                                            columnNumber: 325
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-2 w-full rounded bg-slate-700/60"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProjectPreview.tsx",
                                            lineNumber: 9,
                                            columnNumber: 379
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative h-2 w-[82%] rounded bg-rose-300/25",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute -right-5 -top-1.5 h-5 w-1 rounded-full bg-rose-300"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProjectPreview.tsx",
                                                lineNumber: 9,
                                                columnNumber: 493
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProjectPreview.tsx",
                                            lineNumber: 9,
                                            columnNumber: 432
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-2 w-[68%] rounded bg-slate-700/60"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProjectPreview.tsx",
                                            lineNumber: 9,
                                            columnNumber: 578
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProjectPreview.tsx",
                                    lineNumber: 9,
                                    columnNumber: 296
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProjectPreview.tsx",
                            lineNumber: 9,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3 rounded-xl border border-rose-300/15 bg-rose-300/[.055] p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-0.5 rounded-lg bg-rose-300/10 p-2 text-rose-200",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"], {
                                        size: 15
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectPreview.tsx",
                                        lineNumber: 10,
                                        columnNumber: 165
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectPreview.tsx",
                                    lineNumber: 10,
                                    columnNumber: 97
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "min-w-0 flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-semibold text-rose-100",
                                                    children: "Unlimited indemnity"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ProjectPreview.tsx",
                                                    lineNumber: 10,
                                                    columnNumber: 268
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "rounded bg-rose-300/10 px-1.5 py-0.5 font-mono text-[8px] text-rose-200",
                                                    children: "HIGH RISK"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ProjectPreview.tsx",
                                                    lineNumber: 10,
                                                    columnNumber: 348
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ProjectPreview.tsx",
                                            lineNumber: 10,
                                            columnNumber: 227
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1.5 text-[11px] leading-relaxed text-slate-400",
                                            children: "Broad liability exposure identified in Section 8.2. No financial cap found."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProjectPreview.tsx",
                                            lineNumber: 10,
                                            columnNumber: 460
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProjectPreview.tsx",
                                    lineNumber: 10,
                                    columnNumber: 195
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                    size: 14,
                                    className: "text-slate-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectPreview.tsx",
                                    lineNumber: 10,
                                    columnNumber: 610
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProjectPreview.tsx",
                            lineNumber: 10,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 px-1 text-[10px] text-slate-500",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                    size: 12,
                                    className: "text-emerald-300"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectPreview.tsx",
                                    lineNumber: 11,
                                    columnNumber: 82
                                }, this),
                                " Findings linked to original contract language"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProjectPreview.tsx",
                            lineNumber: 11,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProjectPreview.tsx",
                    lineNumber: 8,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectPreview.tsx",
            lineNumber: 6,
            columnNumber: 12
        }, this);
    }
    if (project.slug !== "jarvis") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "glass relative overflow-hidden rounded-2xl p-5 md:p-7",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-7 flex items-center justify-between border-b border-white/10 pb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 text-xs text-slate-300",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "h-2 w-2 rounded-full bg-cyan-200"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectPreview.tsx",
                                    lineNumber: 17,
                                    columnNumber: 157
                                }, this),
                                project.title,
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-slate-600",
                                    children: "/"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectPreview.tsx",
                                    lineNumber: 17,
                                    columnNumber: 225
                                }, this),
                                " overview"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProjectPreview.tsx",
                            lineNumber: 17,
                            columnNumber: 93
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-mono text-[9px] uppercase tracking-wider text-cyan-100/70",
                            children: project.status
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectPreview.tsx",
                            lineNumber: 17,
                            columnNumber: 281
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProjectPreview.tsx",
                    lineNumber: 17,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-mono text-[9px] uppercase tracking-[.2em] text-slate-500",
                    children: project.category
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectPreview.tsx",
                    lineNumber: 18,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                    className: "mt-3 text-2xl font-semibold tracking-tight text-slate-100",
                    children: project.title
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectPreview.tsx",
                    lineNumber: 18,
                    columnNumber: 106
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-2 max-w-md text-xs leading-6 text-slate-400",
                    children: project.subtitle
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectPreview.tsx",
                    lineNumber: 18,
                    columnNumber: 200
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-7 grid grid-cols-2 gap-3",
                    children: project.techStack.slice(0, 4).map((tech)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-xl border border-white/[.07] bg-slate-950/50 p-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-mono text-[10px] text-slate-400",
                                    children: tech
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectPreview.tsx",
                                    lineNumber: 19,
                                    columnNumber: 182
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 h-1 w-full rounded bg-white/[.06]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-1 w-2/3 rounded bg-cyan-200/50"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectPreview.tsx",
                                        lineNumber: 19,
                                        columnNumber: 306
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectPreview.tsx",
                                    lineNumber: 19,
                                    columnNumber: 250
                                }, this)
                            ]
                        }, tech, true, {
                            fileName: "[project]/src/components/ProjectPreview.tsx",
                            lineNumber: 19,
                            columnNumber: 97
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectPreview.tsx",
                    lineNumber: 19,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 rounded-xl border border-white/[.06] bg-white/[.025] p-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[10px] leading-5 text-slate-400",
                        children: project.description
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProjectPreview.tsx",
                        lineNumber: 20,
                        columnNumber: 86
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectPreview.tsx",
                    lineNumber: 20,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectPreview.tsx",
            lineNumber: 16,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "glass relative overflow-hidden rounded-2xl p-5 md:p-7",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 flex items-center justify-between border-b border-white/10 pb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 text-xs text-slate-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__["Terminal"], {
                                size: 15,
                                className: "text-cyan-200"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectPreview.tsx",
                                lineNumber: 24,
                                columnNumber: 155
                            }, this),
                            " jarvis-shell ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-slate-600",
                                children: "/"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectPreview.tsx",
                                lineNumber: 24,
                                columnNumber: 216
                            }, this),
                            " workspace"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProjectPreview.tsx",
                        lineNumber: 24,
                        columnNumber: 91
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "h-2 w-2 rounded-full bg-rose-300/70"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectPreview.tsx",
                                lineNumber: 24,
                                columnNumber: 303
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "h-2 w-2 rounded-full bg-amber-200/70"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectPreview.tsx",
                                lineNumber: 24,
                                columnNumber: 355
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "h-2 w-2 rounded-full bg-emerald-300/70"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectPreview.tsx",
                                lineNumber: 24,
                                columnNumber: 408
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProjectPreview.tsx",
                        lineNumber: 24,
                        columnNumber: 273
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProjectPreview.tsx",
                lineNumber: 24,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "terminal-scroll min-h-[240px] space-y-4 overflow-hidden font-mono text-[11px] leading-relaxed md:min-h-[268px] md:text-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-500",
                        children: "// Tuesday, 09:41 AM · system ready"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProjectPreview.tsx",
                        lineNumber: 25,
                        columnNumber: 144
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-cyan-200",
                                children: "hassan@jarvis"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectPreview.tsx",
                                lineNumber: 25,
                                columnNumber: 216
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-slate-500",
                                children: " ~ "
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectPreview.tsx",
                                lineNumber: 25,
                                columnNumber: 268
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-white",
                                children: "›"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectPreview.tsx",
                                lineNumber: 25,
                                columnNumber: 311
                            }, this),
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-slate-200",
                                children: "Summarize my open tasks and draft a focus plan"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectPreview.tsx",
                                lineNumber: 25,
                                columnNumber: 349
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProjectPreview.tsx",
                        lineNumber: 25,
                        columnNumber: 213
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ml-3 border-l border-cyan-300/25 pl-4 text-slate-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-2 text-cyan-100",
                                children: "I found 6 open tasks across 3 projects."
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectPreview.tsx",
                                lineNumber: 25,
                                columnNumber: 509
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Here's a focused plan for your morning:"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectPreview.tsx",
                                lineNumber: 25,
                                columnNumber: 586
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "mt-2 space-y-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mr-2 text-cyan-200",
                                                children: "01"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProjectPreview.tsx",
                                                lineNumber: 25,
                                                columnNumber: 674
                                            }, this),
                                            "Finalize the Atlas onboarding flow ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-600",
                                                children: "· 45 min"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProjectPreview.tsx",
                                                lineNumber: 25,
                                                columnNumber: 755
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ProjectPreview.tsx",
                                        lineNumber: 25,
                                        columnNumber: 670
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mr-2 text-cyan-200",
                                                children: "02"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProjectPreview.tsx",
                                                lineNumber: 25,
                                                columnNumber: 812
                                            }, this),
                                            "Review notes from the design sync ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-600",
                                                children: "· 20 min"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProjectPreview.tsx",
                                                lineNumber: 25,
                                                columnNumber: 892
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ProjectPreview.tsx",
                                        lineNumber: 25,
                                        columnNumber: 808
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mr-2 text-cyan-200",
                                                children: "03"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProjectPreview.tsx",
                                                lineNumber: 25,
                                                columnNumber: 949
                                            }, this),
                                            "Send project update to the team ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-600",
                                                children: "· 15 min"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProjectPreview.tsx",
                                                lineNumber: 25,
                                                columnNumber: 1027
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ProjectPreview.tsx",
                                        lineNumber: 25,
                                        columnNumber: 945
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProjectPreview.tsx",
                                lineNumber: 25,
                                columnNumber: 637
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 text-slate-500",
                                children: "I can block these on your calendar when you're ready."
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectPreview.tsx",
                                lineNumber: 25,
                                columnNumber: 1085
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProjectPreview.tsx",
                        lineNumber: 25,
                        columnNumber: 439
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-cyan-200",
                                children: "hassan@jarvis"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectPreview.tsx",
                                lineNumber: 25,
                                columnNumber: 1191
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-slate-500",
                                children: " ~ "
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectPreview.tsx",
                                lineNumber: 25,
                                columnNumber: 1243
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "animate-pulse-soft text-cyan-200",
                                children: "▍"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectPreview.tsx",
                                lineNumber: 25,
                                columnNumber: 1286
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProjectPreview.tsx",
                        lineNumber: 25,
                        columnNumber: 1188
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProjectPreview.tsx",
                lineNumber: 25,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ProjectPreview.tsx",
        lineNumber: 23,
        columnNumber: 10
    }, this);
}
_c = ProjectPreview;
var _c;
__turbopack_context__.k.register(_c, "ProjectPreview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/site-data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ambitions",
    ()=>ambitions,
    "rotatingSpecialties",
    ()=>rotatingSpecialties,
    "siteMetadata",
    ()=>siteMetadata,
    "skillGroups",
    ()=>skillGroups
]);
const siteMetadata = {
    name: "Hassan Khan",
    role: "Independent product engineer",
    location: "Pakistan",
    email: "khanofficial0752@gmail.com",
    availability: "Available for select projects",
    copyrightYear: 2026,
    socialLinks: {
        github: "https://github.com/hassankhan752",
        linkedin: "https://linkedin.com/hassankhan752"
    }
};
const ambitions = [
    {
        title: "Build capable AI agents",
        description: "Create agents that can reason, use tools, and take useful action for people."
    },
    {
        title: "Invent new AI products",
        description: "Turn fresh ideas into practical products that make everyday work better."
    },
    {
        title: "Explore what comes next",
        description: "Find thoughtful ways for people and intelligent systems to work together."
    }
];
const skillGroups = [
    {
        number: "01",
        title: "Product engineering",
        description: "From a clear product idea to a dependable, shipped experience.",
        skills: [
            "Full-stack systems",
            "Product thinking",
            "Developer tooling"
        ]
    },
    {
        number: "02",
        title: "AI & automation",
        description: "Useful intelligence that fits naturally into real workflows.",
        skills: [
            "AI products",
            "Workflow automation",
            "Tool orchestration"
        ]
    },
    {
        number: "03",
        title: "Interface craft",
        description: "Thoughtful interactions, clear layouts, and responsive details.",
        skills: [
            "Interaction design",
            "Responsive UI",
            "Visual systems"
        ]
    }
];
const rotatingSpecialties = [
    "AI products",
    "useful automation",
    "thoughtful interfaces"
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_160_39yu-3i5u._.js.map