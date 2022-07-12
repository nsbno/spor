export const lineIconVariants = {
  defaults: {
    alignSelf: "center",
  },
  "local-train": { backgroundColor: "#65B152", color: "white" },
  "region-train": { backgroundColor: "#C34C4C" },
  "region-express-train": { backgroundColor: "#10A8B2" },
  "long-distance-train": { backgroundColor: "ocean" },
  "airport-express-train": { backgroundColor: "chocolate" },
  "vy-bus": { backgroundColor: "primaryGreen" },
  "local-bus": { backgroundColor: "darkGrey" },
  ferry: { backgroundColor: "#965F96" },
  subway: { backgroundColor: "pumpkin" },
  tram: { backgroundColor: "tram" },
  "alt-transport": { backgroundColor: "banana" },
  walk: { backgroundColor: "white" },
};

export const lineIconTypeVariants = {
  defaults: {},
  "sm-travel": { padding: 0.5, borderRadius: "xs" },
  "sm-info": { padding: 1, borderRadius: "9px" },
  "md-travel": { padding: 0.5, borderRadius: "9px" },
  "md-info": { padding: 1, borderRadius: "9px" },
  "lg-travel": { padding: 0.5, borderRadius: "9px" },
  "lg-info": { padding: 1, borderRadius: "sm" },
};
