export const manifest = {
  screens: {
    scr_euws8r: { name: "Home", route: "/" },
    scr_v93c1b: { name: "Forex", route: "/forex", position: { "x": 160, "y": 1820 } },
    scr_cwsg1u: { name: "Remittance", route: "/remittance", position: { "x": 1560, "y": 1820 } },
    scr_lmlf1s: { name: "Branches", route: "/branches", position: { "x": 2960, "y": 5780 } },
    scr_f2gcdl: { name: "Corporate", route: "/corporate", position: { "x": 160, "y": 3800 } },
    scr_jgabeq: { name: "FAQ", route: "/faq", position: { "x": 160, "y": 5780 } },
    scr_svq105: { name: "Blog", route: "/blog", position: { "x": 1560, "y": 5780 } }
  },
  sections: {
    sec_nqzh7h: { name: "Forex & Remittance Services", x: 0, y: 1600, width: 2920, height: 1180 },
    sec_ggp9k5: { name: "Corporate Solutions", x: 0, y: 3580, width: 1520, height: 1180 },
    sec_u5nrc5: { name: "Support & Information", x: 0, y: 5560, width: 4320, height: 1180 }
  },
  layers: [
  { kind: "screen", id: "scr_euws8r" },
  { kind: "section", id: "sec_nqzh7h", children: [
    { kind: "screen", id: "scr_v93c1b" },
    { kind: "screen", id: "scr_cwsg1u" }]
  },
  { kind: "section", id: "sec_ggp9k5", children: [
    { kind: "screen", id: "scr_f2gcdl" }]
  },
  { kind: "section", id: "sec_u5nrc5", children: [
    { kind: "screen", id: "scr_jgabeq" },
    { kind: "screen", id: "scr_svq105" },
    { kind: "screen", id: "scr_lmlf1s" }]
  }]

};