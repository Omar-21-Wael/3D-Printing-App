import { DotLottie } from "@lottiefiles/dotlottie-react";
export type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;
export type Model = {
  id: number;
  name: string;
  description: string;
  likes: number;
  image: string;
  category: string;
  dateAdded: string;
};

export type Category = {
  displayName: string;
  slug: string;
};
export type ModelsByCategoryProps = {
  categoryName: string;
  Models: Model[];
};
export type ModelsPageProps = {
  searchParams: string
};
export type NavlinkProps = {
  children: string;
  href: string;
};
type DotLottieInstance = DotLottie | null;

export type LottieProps = {
  liked: boolean;
  setLiked: React.Dispatch<React.SetStateAction<boolean>>;
  dotLottie: DotLottieInstance;
};
export type LottieRef = {
  instance: DotLottie | null;
  setDotLottie: (val: DotLottie | null) => void;
};
