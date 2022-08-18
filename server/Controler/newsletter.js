import { openDb } from './configDB.js';


export async function criar_tabela(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS Newsletter ( id INTEGER PRIMARY KEY, nome TEXT, email TEXT, telefone TEXT)')
    })
}

export async function mostrar_contatos(req, res){
    openDb().then(db=>{db.all('SELECT * FROM Newsletter').then(contatos=>  res.json(contatos.body))});
    res.json({
        "nome": req.nome,
        "email": req.email,
    })
}


export async function inserir_contato(req, res){
    let contato = req.body;
    openDb()
        .then(db=>{
        db.run('INSERT INTO Newsletter (nome, email, telefone) VALUES (?, ?, ?)',
        [contato.nome, contato.email, contato.telefone])
    })
    res.json({
        "statusCode": 200
    })
}

