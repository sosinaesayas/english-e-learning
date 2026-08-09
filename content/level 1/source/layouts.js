"use strict";
/* Reusable learner-facing slide layouts */
const { C, F, G } = require("./theme");

module.exports = function (ctx) {
  const L = {};
  const S = ctx.S;

  // ---------------------------------------------------------- cover
  L.cover = function (o) {
    const s = ctx.slide({ dark: true, bg: C.greenDeep });
    ctx.card(s, { x: 0, y: 0, w: 5.1, h: 7.5, fill: C.green, noLine: true, r: 0 });
    ctx.txt(s, o.levelTag.toUpperCase(), { x: 0.75, y: 1.5, w: 3.8, h: 0.3, fontSize: 13, bold: true, charSpacing: 2.4, color: "BFE6D5" });
    ctx.txt(s, o.levelNo, { x: 0.75, y: 1.82, w: 3.8, h: 2.5, fontSize: 128, bold: true, color: C.white });
    ctx.txt(s, o.levelName, { x: 0.75, y: 4.15, w: 3.8, h: 0.9, fontSize: 26, bold: true, color: C.white, lineSpacingMultiple: 1.0 });
    ctx.txt(s, o.cefr, { x: 0.75, y: 5.15, w: 3.8, h: 0.34, fontSize: 15, color: "BFE6D5" });

    ctx.txt(s, o.moduleTag.toUpperCase(), { x: 5.85, y: 1.55, w: 6.9, h: 0.3, fontSize: 13, bold: true, charSpacing: 2.2, color: C.gold });
    ctx.fitTxt(s, o.title, { x: 5.85, y: 1.95, w: 6.9, h: 1.5, fontSize: 46, min: 30, bold: true, color: C.white, lineSpacingMultiple: 1.02 });
    ctx.fitTxt(s, o.sub, { x: 5.85, y: 3.55, w: 6.9, h: 0.8, fontSize: 17, min: 13, color: "B9CFC1", lineSpacingMultiple: 1.15 });
    const chips = o.chips || [];
    const cw = (6.9 - 0.24 * (chips.length - 1)) / chips.length;
    chips.forEach((c, i) => {
      const x = 5.85 + i * (cw + 0.24);
      ctx.card(s, { x, y: 4.6, w: cw, h: 0.92, fill: "1C4E39", line: "2A6249" });
      ctx.txt(s, c.k, { x: x + 0.18, y: 4.72, w: cw - 0.36, h: 0.36, fontSize: 21, bold: true, color: C.gold });
      ctx.txt(s, c.v, { x: x + 0.18, y: 5.1, w: cw - 0.36, h: 0.3, fontSize: 11, color: "9DB3A6" });
    });
    ctx.txt(s, o.footNote, { x: 5.85, y: 5.85, w: 6.9, h: 0.4, fontSize: 12, color: "7C9488" });
    ctx.footer(s);
    if (o.notes) s.addNotes(o.notes);
    return s;
  };

  // ---------------------------------------------------------- big numbered / checked list
  // items: [{t, d}]
  L.list = function (o) {
    if (o.items.length >= 6) o = Object.assign({}, o, { sub: undefined });
    const { s, y } = ctx.mk(o);
    const n = o.items.length;
    const gap = o.gap === undefined ? (n >= 6 ? 0.10 : 0.16) : o.gap;
    const h = (G.bot - y - gap * (n - 1)) / n;
    o.items.forEach((it, i) => {
      const ty = y + i * (h + gap);
      ctx.card(s, { x: G.ml, y: ty, w: G.cw, h, fill: o.tint || C.surf, line: o.line });
      if (o.check) ctx.icon(s, { x: G.ml + 0.26, y: ty + (h - 0.44) / 2, d: 0.44, icon: "FaCheck", fill: o.color || C.green, scale: 0.52 });
      else ctx.badge(s, { x: G.ml + 0.26, y: ty + (h - 0.5) / 2, d: 0.5, text: o.labels ? o.labels[i] : i + 1, fill: o.color || C.green, fontSize: o.labels ? 13 : 19, color: o.badgeInk || C.white });
      const parts = [{ t: it.t, size: o.size || 22, b: true, color: C.ink }];
      if (it.d) parts.push({ t: it.d, size: (o.size || 22) - 5, color: C.body, space: 3 });
      ctx.rich(s, parts, { x: G.ml + 1.0, y: ty + 0.08, w: G.cw - 1.3, h: h - 0.16, base: o.size || 22, min: 13, minPart: 12, valign: "middle" });
    });
    return s;
  };

  // ---------------------------------------------------------- card grid
  // items: [{icon,title,desc}]
  L.grid = function (o) {
    const { s, y } = ctx.mk(o);
    const cols = o.cols || 3, gap = 0.22;
    const rows = Math.ceil(o.items.length / cols);
    const cw = (G.cw - gap * (cols - 1)) / cols;
    const ch = (G.bot - y - gap * (rows - 1)) / rows;
    o.items.forEach((it, i) => {
      const r = Math.floor(i / cols), c = i % cols;
      const x = G.ml + c * (cw + gap), ty = y + r * (ch + gap);
      ctx.card(s, { x, y: ty, w: cw, h: ch, fill: o.tint || C.surf, line: o.line, shadow: o.shadow });
      let cy = ty + 0.24;
      if (it.icon && o.iconInline) {
        ctx.icon(s, { x: x + 0.24, y: cy + 0.02, d: 0.42, icon: it.icon, fill: it.color || o.color || C.green, scale: 0.5 });
        ctx.fitTxt(s, it.title, { x: x + 0.78, y: cy, w: cw - 1.02, h: 0.46, fontSize: o.titleSize || 20, min: 13,
          bold: true, color: C.ink, valign: "middle" });
        cy += 0.56;
        if (it.desc) ctx.fitTxt(s, it.desc, { x: x + 0.24, y: cy, w: cw - 0.48, h: ty + ch - cy - 0.18,
          fontSize: o.descSize || 16, min: 11.5, color: C.body, lineSpacingMultiple: 1.12 });
      } else {
        if (it.icon) { ctx.icon(s, { x: x + 0.24, y: cy, d: 0.5, icon: it.icon, fill: it.color || o.color || C.green, scale: 0.5 }); cy += 0.66; }
        const parts = [{ t: it.title, size: o.titleSize || 21, b: true, color: C.ink }];
        if (it.desc) parts.push({ t: it.desc, size: o.descSize || 15, color: C.body, space: 4 });
        ctx.rich(s, parts, { x: x + 0.24, y: cy, w: cw - 0.48, h: ty + ch - cy - 0.2, base: o.titleSize || 21, min: 12.5, minPart: 12 });
      }
    });
    return s;
  };

  // ---------------------------------------------------------- alphabet tiles
  L.letters = function (o) {
    const { s, y } = ctx.mk(o);
    const items = o.items; // [{cap, low, hi}]
    const cols = o.cols || 7, gap = 0.16;
    const rows = Math.ceil(items.length / cols);
    const cw = (G.cw - gap * (cols - 1)) / cols;
    const ch = Math.min(1.15, (G.bot - y - 0.5 - gap * (rows - 1)) / rows);
    items.forEach((it, i) => {
      const r = Math.floor(i / cols), c = i % cols;
      const x = G.ml + c * (cw + gap), ty = y + r * (ch + gap);
      const hi = it.hi;
      ctx.card(s, { x, y: ty, w: cw, h: ch, fill: hi ? (o.hiFill || C.gold) : C.surf, line: hi ? (o.hiFill || C.gold) : C.line });
      ctx.txt(s, it.cap + (it.low ? " " + it.low : ""), { x, y: ty, w: cw, h: ch * 0.62, align: "center", valign: "middle",
        fontSize: o.letterSize || 30, bold: true, color: hi ? C.greenDeep : C.ink });
      if (it.sub) ctx.txt(s, it.sub, { x, y: ty + ch * 0.58, w: cw, h: ch * 0.34, align: "center",
        fontSize: 11, color: hi ? C.greenDeep : C.muted });
    });
    if (o.note) {
      ctx.card(s, { x: G.ml, y: G.bot - 0.62, w: G.cw, h: 0.62, fill: o.noteFill || C.goldTint, line: "EFDCB2" });
      ctx.fitTxt(s, o.note, { x: G.ml + 0.24, y: G.bot - 0.62, w: G.cw - 0.48, h: 0.62, fontSize: 16, min: 12, color: C.ink, valign: "middle" });
    }
    return s;
  };

  // ---------------------------------------------------------- right / wrong compare
  L.compare = function (o) {
    const { s, y } = ctx.mk(o);
    const w = (G.cw - 0.3) / 2;
    const h = G.bot - y - (o.note ? 0.86 : 0);
    [[G.ml, o.left, C.ok, C.okTint, "FaCheck"], [G.ml + w + 0.3, o.right, C.bad, C.badTint, "FaTimes"]].forEach(([x, side, col, tint, ic]) => {
      ctx.card(s, { x, y, w, h, fill: tint, line: col, lw: 1.25 });
      ctx.icon(s, { x: x + 0.26, y: y + 0.24, d: 0.46, icon: ic, fill: col, scale: 0.5 });
      ctx.txt(s, side.h, { x: x + 0.86, y: y + 0.24, w: w - 1.1, h: 0.46, fontSize: 20, bold: true, color: col, valign: "middle" });
      ctx.bullets(s, side.items, { x: x + 0.3, y: y + 0.92, w: w - 0.6, h: h - 1.16, fontSize: o.size || 19, min: o.min || 13, gap: o.bulletGap === undefined ? 11 : o.bulletGap, color: C.ink });
    });
    if (o.note) {
      ctx.card(s, { x: G.ml, y: G.bot - 0.72, w: G.cw, h: 0.72, fill: C.goldTint, line: "EFDCB2" });
      ctx.fitTxt(s, o.note, { x: G.ml + 0.26, y: G.bot - 0.72, w: G.cw - 0.52, h: 0.72, fontSize: 16, min: 12, color: C.ink, valign: "middle" });
    }
    return s;
  };

  // ---------------------------------------------------------- vocabulary slide
  // {word, ipa, meaning, example, mistake, icon, tint, color}
  L.vocab = function (o) {
    const { s, y } = ctx.mk(o);
    const lw = 4.5;
    ctx.card(s, { x: G.ml, y, w: lw, h: G.bot - y, fill: o.tint || C.vocabTint, line: o.color || C.vocab });
    ctx.icon(s, { x: G.ml + (lw - 1.5) / 2, y: y + 0.42, d: 1.5, icon: o.icon, fill: o.color || C.vocab, scale: 0.5 });
    ctx.fitTxt(s, o.word, { x: G.ml + 0.2, y: y + 2.16, w: lw - 0.4, h: 0.82, fontSize: 54, min: 30, bold: true, align: "center", color: C.ink });
    ctx.txt(s, o.ipa, { x: G.ml + 0.2, y: y + 3.0, w: lw - 0.4, h: 0.4, fontSize: 22, align: "center", color: o.inkCol || C.vocabInk });
    ctx.txt(s, o.pos, { x: G.ml + 0.2, y: y + 3.42, w: lw - 0.4, h: 0.3, fontSize: 13, align: "center", italic: true, color: C.muted });

    const rx = G.ml + lw + 0.3, rw = G.cw - lw - 0.3;
    const rows = [
      { lab: "MEANING", val: o.meaning, ic: "FaLightbulb", col: o.color || C.vocab },
      { lab: "EXAMPLE SENTENCE", val: o.example, ic: "FaComment", col: C.green, big: true },
      { lab: "COMMON MISTAKE", val: o.mistake, ic: "FaExclamationTriangle", col: C.bad, tint: C.badTint },
    ];
    const gap = 0.2, avail = G.bot - y - gap * 2;
    const wts = [0.26, 0.30, 0.44];
    let ry = y;
    rows.forEach((r, i) => {
      const rh = avail * wts[i];
      ctx.card(s, { x: rx, y: ry, w: rw, h: rh, fill: r.tint || C.surf, line: C.line });
      ctx.icon(s, { x: rx + 0.22, y: ry + 0.16, d: 0.34, icon: r.ic, fill: r.col, scale: 0.5 });
      ctx.txt(s, r.lab, { x: rx + 0.66, y: ry + 0.16, w: rw - 0.92, h: 0.34, fontSize: 11.5, bold: true, charSpacing: 1.1, color: r.col, valign: "middle" });
      ctx.fitTxt(s, r.val, { x: rx + 0.24, y: ry + 0.56, w: rw - 0.48, h: rh - 0.72,
        fontSize: r.big ? 24 : 20, min: 12, bold: !!r.big, color: C.ink, lineSpacingMultiple: 1.06 });
      ry += rh + gap;
    });
    return s;
  };

  // ---------------------------------------------------------- dialogue
  // turns: [{who, text, side, note}]
  L.dialogue = function (o) {
    const { s, y } = ctx.mk(o);
    const n = o.turns.length;
    const noteH = o.note ? 0.74 : 0;
    const gap = 0.11;
    const h = (G.bot - y - noteH - (o.note ? 0.16 : 0) - gap * (n - 1)) / n;
    const pw = 1.55;
    o.turns.forEach((t, i) => {
      const right = t.side === "r";
      const ty = y + i * (h + gap);
      ctx.card(s, { x: G.ml, y: ty, w: G.cw, h, fill: right ? C.readTint : C.surf2, line: right ? "C4E0D5" : C.line });
      ctx.card(s, { x: G.ml + 0.16, y: ty + 0.1, w: pw, h: h - 0.2, fill: right ? C.read : C.muted, noLine: true, r: 0.1 });
      ctx.fitTxt(s, t.who, { x: G.ml + 0.2, y: ty + 0.1, w: pw - 0.08, h: h - 0.2, fontSize: 12, min: 8.5,
        bold: true, align: "center", valign: "middle", color: C.white });
      ctx.fitTxt(s, t.text, { x: G.ml + pw + 0.34, y: ty + 0.06, w: G.cw - pw - 0.6, h: h - 0.12,
        fontSize: o.size || 20, min: 12, bold: true, color: C.ink, valign: "middle", lineSpacingMultiple: 1.0 });
    });
    if (o.note) {
      ctx.card(s, { x: G.ml, y: G.bot - noteH, w: G.cw, h: noteH, fill: C.goldTint, line: "EFDCB2" });
      ctx.fitTxt(s, o.note, { x: G.ml + 0.26, y: G.bot - noteH, w: G.cw - 0.52, h: noteH, fontSize: 15, min: 10.5, color: C.ink, valign: "middle" });
    }
    return s;
  };

  // ---------------------------------------------------------- numbered questions
  // items: [string] ; optional o.instruction
  L.questions = function (o) {
    if (o.items.length >= 5) o = Object.assign({}, o, { sub: undefined });
    const { s, y } = ctx.mk(o);
    let cy = y;
    if (o.instruction) {
      ctx.card(s, { x: G.ml, y: cy, w: G.cw, h: 0.62, fill: o.instFill || C.gramTint, line: o.color || C.gram });
      ctx.icon(s, { x: G.ml + 0.22, y: cy + 0.12, d: 0.38, icon: o.instIcon || "FaPencilAlt", fill: o.color || C.gram, scale: 0.5 });
      ctx.fitTxt(s, o.instruction, { x: G.ml + 0.72, y: cy, w: G.cw - 0.98, h: 0.62, fontSize: 17, min: 12, bold: true, color: C.ink, valign: "middle" });
      cy += 0.78;
    }
    const n = o.items.length, gap = 0.13;
    const h = (G.bot - cy - gap * (n - 1)) / n;
    o.items.forEach((it, i) => {
      const ty = cy + i * (h + gap);
      const ob = typeof it === "object";
      ctx.card(s, { x: G.ml, y: ty, w: G.cw, h, fill: C.surf, line: C.line });
      ctx.badge(s, { x: G.ml + 0.22, y: ty + (h - 0.44) / 2, d: 0.44, text: (o.start || 1) + i, fill: o.color || C.gram, fontSize: 15 });
      const parts = [{ t: ob ? it.q : it, size: o.size || 20, b: true, color: C.ink }];
      if (ob && it.opts) parts.push({ t: it.opts, size: (o.size || 20) - 4, color: C.body, space: 3 });
      ctx.rich(s, parts, { x: G.ml + 0.88, y: ty + 0.06, w: G.cw - 1.16, h: h - 0.12, base: o.size || 20, min: 12.5, minPart: 11.5, valign: "middle" });
    });
    return s;
  };

  // ---------------------------------------------------------- answer key
  // items: [{q, a, why}]
  L.answers = function (o) {
    if (o.items.length >= 5 && !o.cols) o = Object.assign({}, o, { sub: undefined });
    const { s, y } = ctx.mk(o);
    const cols = o.cols || 1;
    const per = Math.ceil(o.items.length / cols);
    const gap = o.gap === undefined ? 0.13 : o.gap, colGap = 0.24;
    const cwid = (G.cw - colGap * (cols - 1)) / cols;
    const h = (G.bot - y - gap * (per - 1)) / per;
    o.items.forEach((it, i) => {
      const col = Math.floor(i / per), row = i % per;
      const cx = G.ml + col * (cwid + colGap);
      const ty = y + row * (h + gap);
      ctx.card(s, { x: cx, y: ty, w: cwid, h, fill: C.okTint, line: C.ok });
      ctx.badge(s, { x: cx + 0.2, y: ty + (h - 0.42) / 2, d: 0.42, text: (o.start || 1) + i, fill: C.ok, fontSize: 14 });
      const parts = [];
      if (it.q) parts.push({ t: it.q, size: 13, i: true, color: C.muted });
      parts.push({ t: it.a, size: o.size || 19, b: true, color: C.ink, space: 2 });
      parts.push({ t: "WHY: " + it.why, size: (o.size || 19) - 4, color: C.readInk, space: 3 });
      ctx.rich(s, parts, { x: cx + 0.84, y: ty + 0.06, w: cwid - 1.08, h: h - 0.12, base: o.size || 19, min: o.min || 12, minPart: o.minPart || 11, valign: "middle" });
    });
    return s;
  };

  // ---------------------------------------------------------- text panel + side list
  // o.panel = {label, text, color, tint}; o.side = {label, items, color}
  L.panelSide = function (o) {
    const { s, y } = ctx.mk(o);
    const pw = o.panelW || 7.4;
    const p = o.panel;
    ctx.card(s, { x: G.ml, y, w: pw, h: G.bot - y, fill: p.tint || C.white, line: p.color || C.read, lw: 1.25, shadow: true });
    ctx.txt(s, p.label.toUpperCase(), { x: G.ml + 0.3, y: y + 0.24, w: pw - 0.6, h: 0.3, fontSize: 12, bold: true, charSpacing: 1.2, color: p.color || C.read });
    ctx.fitTxt(s, p.text, { x: G.ml + 0.3, y: y + 0.66, w: pw - 0.6, h: G.bot - y - 0.92,
      fontSize: p.size || 21, min: 12, color: C.ink, lineSpacingMultiple: p.lsm || 1.25 });
    const sx = G.ml + pw + 0.3, sw = G.cw - pw - 0.3;
    const sd = o.side;
    ctx.card(s, { x: sx, y, w: sw, h: G.bot - y, fill: sd.tint || C.surf, line: C.line });
    ctx.txt(s, sd.label.toUpperCase(), { x: sx + 0.26, y: y + 0.24, w: sw - 0.52, h: 0.3, fontSize: 12, bold: true, charSpacing: 1.2, color: sd.color || C.green });
    ctx.bullets(s, sd.items, { x: sx + 0.3, y: y + 0.68, w: sw - 0.6, h: G.bot - y - 0.94, fontSize: sd.size || 17, min: 11.5, gap: 9 });
    return s;
  };

  // ---------------------------------------------------------- one big statement
  L.statement = function (o) {
    const s = ctx.slide({ dark: true, bg: o.bg || C.greenDeep });
    if (o.kicker) ctx.txt(s, o.kicker.toUpperCase(), { x: G.ml, y: 1.7, w: 12.0, h: 0.34, fontSize: 14, bold: true, charSpacing: 2.4, color: C.gold });
    ctx.fitTxt(s, o.text, { x: G.ml, y: 2.2, w: 12.0, h: 2.2, fontSize: o.size || 44, min: 26, bold: true, color: C.white, lineSpacingMultiple: 1.06 });
    if (o.sub) ctx.fitTxt(s, o.sub, { x: G.ml, y: 4.6, w: 11.0, h: 0.9, fontSize: 19, min: 13, color: "B9CFC1", lineSpacingMultiple: 1.2 });
    if (o.chips) {
      const cw = (12.0 - 0.24 * (o.chips.length - 1)) / o.chips.length;
      o.chips.forEach((c, i) => {
        const x = G.ml + i * (cw + 0.24);
        ctx.card(s, { x, y: 5.6, w: cw, h: 0.78, fill: "1C4E39", line: "2A6249" });
        ctx.fitTxt(s, c, { x: x + 0.2, y: 5.6, w: cw - 0.4, h: 0.78, fontSize: 15, min: 11, color: "D2E0D8", valign: "middle" });
      });
    }
    ctx.footer(s);
    if (o.notes) s.addNotes(o.notes);
    return s;
  };

  // ---------------------------------------------------------- table slide
  L.table = function (o) {
    const { s, y } = ctx.mk(o);
    ctx.table(s, Object.assign({ x: G.ml, y: y, w: G.cw }, o.table));
    if (o.note) {
      ctx.card(s, { x: G.ml, y: G.bot - 0.72, w: G.cw, h: 0.72, fill: C.goldTint, line: "EFDCB2" });
      ctx.fitTxt(s, o.note, { x: G.ml + 0.26, y: G.bot - 0.72, w: G.cw - 0.52, h: 0.72, fontSize: 16, min: 12, color: C.ink, valign: "middle" });
    }
    return s;
  };

  return L;
};
