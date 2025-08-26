import categories from "@/app/data/categories.json";
import type { Category, Model, ModelsByCategoryProps } from "@/app/types";
import { getAllModels } from "./model";

export function getAllCategories(): Category[] {
  const categoriesList = categories;
  return categoriesList;
}
export function getModelsByCategory(slug: string): ModelsByCategoryProps {
  const category: Category | undefined = getAllCategories().find(
    (cat: Category) => cat.slug === slug
  );

  if (!category) {
    return {
      categoryName: slug,
      Models: [],
    };
  }
  const filteredModels: Model[] = getAllModels().filter(
    (model: Model) => model.category === category.slug
  );

  return {
    categoryName: category.displayName,
    Models: filteredModels,
  };
}
