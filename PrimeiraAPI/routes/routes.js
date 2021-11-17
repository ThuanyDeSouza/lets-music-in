import express from "express"
import { createProduto,
    getproduto,
    updateProduto,
    deleteProduto
} 

from "../controllers/produtos.js"

const router = express.Router()

router.post("/produto", createProduto)
router.get("/produto", getproduto)
router.put("/produto/:id", updateProduto)
router.delete("/produto/:id", deleteProduto)

export default router
