import { Router } from "express";
import { atualizar_contato, criar_tabela, deletar_contato, inserir_contato, mostrar_contatos, selecionar_contato } from './Controler/newsletter';

const router = Router();

router.get('/', (req, res)=>{
    res.json({
        "statusCode": 200,
        "msg": "Api Rodando"
    })
})

router.get('/contatos', selecionar_contato);
router.get('/contato', inserir_contato);
router.post('/contato', mostrar_contatos);
router.put('/contato', atualizar_contato);
router.delete('/contato', deletar_contato);

export default router;