import { openDb } from './configDB.js';


export async function criar_tabela(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS Newsletter2 ( id INTEGER PRIMARY KEY, nome TEXT, email TEXT )')
    })
}

export async function mostrar_contatos(req, res){
    
    openDb().then(db=>{db.all('SELECT * FROM Newsletter2').then(contatos=>  res.json(contatos.body))});
    res.json({
        "nome": req.nome,
        "email": req.email,
    })
}


export async function inserir_contato(req, res){
    let contato = req.body;
    openDb()
        .then(db=>{
        db.run('INSERT INTO Newsletter2 (nome, email) VALUES (?, ?)',
        [contato.nome, contato.email])
    })
    res.json({
        "statusCode": 200
    })
}

