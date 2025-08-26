import models from "@/app/data/models.json";
import type { Model } from "@/app/types";
import { notFound } from "next/navigation";

export function getAllModels(): Model[] {
  const Listedmodels = models;
  return Listedmodels;
}

export function getModelById(id: number): Model | never {
  const Listedmodels = getAllModels();
  const model = Listedmodels.find((model: Model) => model.id === id);

  if (!model) {
    return notFound();
  }

  return model;
}
export function getfiltered(params: string): Model[] {
  const Listmodels: Model[] = getAllModels();
  
  const search: string = (params ?? "").trim().toLowerCase();
  if (!search){ console.log(`no params get ${params}`) }

  return search
    ? Listmodels.filter(
        (obj: Model) =>
          obj.name.toLowerCase().includes(search) ||
          obj.description.toLowerCase().includes(search)
      )
    : Listmodels; 
}
