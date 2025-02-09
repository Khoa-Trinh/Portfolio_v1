declare type BetterCard = {
  title: string;
  description: string;
  type?: "long" | "short";
  icons: { url: string; position: [string, number, number] }[];
};
