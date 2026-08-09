"use strict";
/* Learner-facing course deck design system — big type, one idea per slide, visual first */

const pptxgen = require("pptxgenjs");
const sharp = require("sharp");
const React = require("react");
const RDS = require("react-dom/server");

// ---------------------------------------------------------------- palette
const C = {
  green: "0E7C5A", greenDark: "0A5D43", greenDeep: "0B231C",
  gold: "F2A93B", goldDeep: "9A6B12", goldTint: "FDF3E7",
  vocab: "E8963A", vocabTint: "FDF3E7", vocabInk: "7A4A0E",
  gram: "3F5BD9", gramTint: "EDF0FD", gramInk: "22307A",
  listen: "1FA3A3", listenTint: "E8F6F6", listenInk: "0E5757",
  speak: "E4572E", speakTint: "FDEDE8", speakInk: "7E2A14",
  read: "0E7C5A", readTint: "E7F3EF", readInk: "0A4634",
  write: "7A4FBF", writeTint: "F2ECFA", writeInk: "432A6B",
  ok: "2E9E5B", okTint: "E6F5EC",
  bad: "D64545", badTint: "FBEAEA",
  ink: "12211B", body: "3A473F", muted: "6B7C71",
  line: "E3E9E5", surf: "F6F9F7", surf2: "EDF3EF", white: "FFFFFF",
  l1: "5BBF7B", l2: "1FA37A", l3: "0E7C5A", l4: "0A5140",
};

const F = { h: "Calibri", b: "Calibri" };

const G = { W: 13.333, H: 7.5, ml: 0.6, cw: 12.133, top: 1.95, bot: 6.5, foot: 6.72 };

// ---------------------------------------------------------------- metrics
const CW = 0.478, SAFE = 1.06;
function estH(texts, wIn, fs, lsm, gapPt, indent) {
  const cw = CW * fs * SAFE, per = (fs * 1.2 * lsm) / 72;
  const usable = Math.max(0.4, wIn - (indent || 0)) * 72;
  let t = 0;
  texts.forEach((x) => {
    const segs = String(x == null ? "" : x).split("\n");
    let n = 0;
    segs.forEach((s) => { n += s.length ? Math.ceil((s.length * cw) / usable) : 1; });
    t += Math.max(1, n) * per + gapPt / 72;
  });
  return t;
}
function fit(texts, wIn, hIn, o) {
  const min = o.min === undefined ? 12 : o.min;
  for (let fs = o.max; fs >= min; fs -= 0.5)
    if (estH(texts, wIn, fs, o.lsm || 1.0, o.gap || 0, o.indent || 0) <= hIn) return fs;
  return min;
}

// ---------------------------------------------------------------- icons
const IC = {};
async function prepIcons(names) {
  let fa; try { fa = require("react-icons/fa"); } catch (e) { return IC; }
  for (const n of names) {
    if (IC[n]) continue;
    const Comp = fa[n];
    if (!Comp) { console.warn("  ! icon missing:", n); continue; }
    for (const [suf, hex] of [["", "#FFFFFF"], ["__d", "#12211B"]]) {
      const svg = RDS.renderToStaticMarkup(React.createElement(Comp, { color: hex, size: 320 }));
      const buf = await sharp(Buffer.from(svg), { density: 400 })
        .resize(320, 320, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .png().toBuffer();
      IC[n + suf] = "image/png;base64," + buf.toString("base64");
    }
  }
  return IC;
}

// ---------------------------------------------------------------- deck
function makeDeck(meta) {
  const pres = new pptxgen();
  pres.defineLayout({ name: "W", width: 13.333, height: 7.5 });
  pres.layout = "W";
  pres.title = meta.title; pres.subject = meta.subject;
  pres.author = meta.author; pres.company = meta.company;
  const S = pres.ShapeType;
  const ctx = { pres, S, n: 0, meta };

  ctx.slide = function (o = {}) {
    const s = pres.addSlide();
    ctx.n++; s._n = ctx.n; s._dark = !!o.dark;
    s.background = { color: o.bg || C.white };
    return s;
  };
  ctx.txt = function (s, t, o) {
    s.addText(t, Object.assign({ fontFace: F.b, margin: 0, isTextBox: true }, o));
  };
  ctx.fitTxt = function (s, t, o) {
    const fs = fit([t], o.w, o.h, { max: o.fontSize, min: o.min || Math.max(11, o.fontSize - 10), lsm: o.lineSpacingMultiple || 1.0 });
    ctx.txt(s, t, Object.assign({}, o, { fontSize: fs }));
  };
  ctx.card = function (s, o) {
    const sh = { x: o.x, y: o.y, w: o.w, h: o.h, rectRadius: o.r === undefined ? 0.14 : o.r,
      fill: { color: o.fill || C.surf }, line: o.noLine ? { type: "none" } : { color: o.line || C.line, width: o.lw || 1 } };
    if (o.shadow) sh.shadow = { type: "outer", angle: 90, offset: 2, blur: 8, color: "94A69C", opacity: 0.3 };
    s.addShape(S.roundRect, sh);
  };
  ctx.icon = function (s, o) {
    const d = o.d || 0.5;
    s.addShape(S.ellipse, { x: o.x, y: o.y, w: d, h: d, fill: { color: o.fill || C.green }, line: { type: "none" } });
    const dark = o.dark || (o.fill || "") === C.gold || (o.fill || "") === C.vocab;
    const uri = (dark ? IC[o.icon + "__d"] : IC[o.icon]) || IC[o.icon];
    if (uri) { const id = d * (o.scale || 0.5); s.addImage({ data: uri, x: o.x + (d - id) / 2, y: o.y + (d - id) / 2, w: id, h: id }); }
  };
  ctx.badge = function (s, o) {
    const d = o.d || 0.6;
    s.addShape(S.ellipse, { x: o.x, y: o.y, w: d, h: d, fill: { color: o.fill || C.green }, line: { type: "none" } });
    ctx.txt(s, String(o.text), { x: o.x, y: o.y, w: d, h: d, align: "center", valign: "middle",
      fontSize: o.fontSize || 20, bold: true, color: o.color || C.white });
  };
  ctx.bullets = function (s, items, o) {
    const base = o.fontSize || 22, gap = o.gap === undefined ? 10 : o.gap, lsm = o.lsm || 1.0;
    const texts = items.map((i) => (typeof i === "object" ? i.t : i));
    const f = fit(texts, o.w, o.h, { max: base, min: o.min || 14, lsm, gap, indent: 0.3 });
    const sc = f / base;
    s.addText(items.map((it, i) => {
      const ob = typeof it === "object";
      return { text: ob ? it.t : it, options: {
        bullet: ob && it.noBullet ? false : { code: "2022", indent: 18 },
        breakLine: i !== items.length - 1, paraSpaceAfter: gap * sc,
        bold: ob && it.b, color: (ob && it.color) || o.color || C.body,
        fontSize: Math.round(((ob && it.size ? it.size : base) * sc) * 10) / 10 } };
    }), { x: o.x, y: o.y, w: o.w, h: o.h, fontFace: F.b, margin: 0, valign: o.valign || "top", lineSpacingMultiple: lsm });
  };
  ctx.rich = function (s, parts, o) {
    const base = o.base || 20, lsm = o.lsm || 1.02;
    const small = Math.min.apply(null, parts.map((p) => p.size || base));
    const floor = (o.minPart || 12) * base / small;
    const f = fit(parts.map((p) => p.t), o.w, o.h, { max: base, min: Math.max(o.min || 12, floor), lsm, gap: o.gap === undefined ? 4 : o.gap });
    const sc = f / base;
    s.addText(parts.map((p, i) => ({ text: p.t, options: {
      fontSize: Math.round((p.size || base) * sc * 10) / 10, bold: !!p.b, italic: !!p.i,
      color: p.color || C.ink, breakLine: i !== parts.length - 1,
      paraSpaceBefore: i === 0 ? 0 : (p.space === undefined ? 4 : p.space) * sc } })),
      { x: o.x, y: o.y, w: o.w, h: o.h, fontFace: F.b, margin: 0, valign: o.valign || "top", lineSpacingMultiple: lsm });
  };
  ctx.table = function (s, o) {
    const acc = o.color || C.green;
    const rows = o.rows.map((r, ri) => ri === 0
      ? r.map((c) => ({ text: String(c), options: { bold: true, color: o.headColor || C.white, fill: { color: acc }, fontSize: o.headSize || 16, valign: "middle" } }))
      : r.map((c, ci) => ({ text: String(c), options: { color: ci === 0 ? C.ink : C.body, bold: ci === 0 && o.boldFirst !== false,
          fill: { color: ri % 2 ? C.white : C.surf }, fontSize: o.fontSize || 16, valign: "middle", align: o.align || "left" } })));
    s.addTable(rows, { x: o.x, y: o.y, w: o.w, colW: o.colW, rowH: o.rowH || 0.5,
      border: { type: "solid", color: C.line, pt: 1 }, fontFace: F.b, margin: [5, 10, 5, 10], autoPage: false });
  };
  ctx.footer = function (s) {
    ctx.txt(s, ctx.meta.foot, { x: G.ml, y: G.foot, w: 9.6, h: 0.32, fontSize: 10,
      color: s._dark ? "7C9488" : C.muted, charSpacing: 0.5 });
    ctx.txt(s, String(s._n), { x: 11.6, y: G.foot, w: 1.13, h: 0.32, fontSize: 11, bold: true,
      align: "right", color: s._dark ? C.gold : C.muted });
  };

  // ------------------------------------------------ section header slide
  // o = {sec:{label,color,icon}, title, sub}
  ctx.head = function (s, o) {
    const sec = o.sec || {};
    const col = sec.color || C.green;
    if (sec.label) {
      const pw = Math.max(1.9, 0.62 + sec.label.length * 0.105);
      ctx.card(s, { x: G.ml, y: 0.48, w: pw, h: 0.46, fill: col, noLine: true, r: 0.23 });
      if (sec.icon) ctx.icon(s, { x: G.ml + 0.11, y: 0.59, d: 0.24, icon: sec.icon, fill: col, scale: 1 });
      ctx.txt(s, sec.label.toUpperCase(), { x: G.ml + (sec.icon ? 0.42 : 0.2), y: 0.48, w: pw - (sec.icon ? 0.54 : 0.4), h: 0.46,
        fontSize: 12, bold: true, charSpacing: 1.2, color: C.white, valign: "middle" });
    }
    ctx.fitTxt(s, o.title, { x: G.ml, y: 0.98, w: o.titleW || 12.0, h: 0.68,
      fontSize: o.titleSize || 38, min: 26, bold: true, color: s._dark ? C.white : C.ink });
    if (o.sub) ctx.fitTxt(s, o.sub, { x: G.ml, y: 1.68, w: 12.0, h: 0.32, fontSize: 16.5, min: 12.5,
      color: s._dark ? "9DB3A6" : C.muted });
    return o.sub ? 2.06 : 1.86;
  };

  // build a standard slide: header + footer + notes
  ctx.mk = function (o) {
    const s = ctx.slide({ dark: o.dark, bg: o.bg });
    const y = ctx.head(s, o);
    ctx.footer(s);
    if (o.notes) s.addNotes(o.notes);
    return { s, y };
  };

  return ctx;
}

module.exports = { C, F, G, prepIcons, makeDeck, fit };
