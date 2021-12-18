import { Router } from "express";
import { createCharacterController } from "../useCases/CreateCharacterUseCase";
import { getAllCharactersController } from "../useCases/GetAllChraractersUseCase";
import { deleteCharacterController } from "../useCases/DeleteCharacterUseCase";
import { updateCharacterController } from "../useCases/UpdateCharacterUseCase";

const charactersRoutes = Router();

charactersRoutes.post("/", (req, res) => {
  return createCharacterController.handle(req, res)
});

charactersRoutes.get("/", (req, res) => {
  return getAllCharactersController.handle(req, res);
});

charactersRoutes.delete("/", (req, res) => {
  return deleteCharacterController.handle(req,res);
})

charactersRoutes.put("/", (req, res) => {
  return updateCharacterController.handle(req, res);
})

export { charactersRoutes };