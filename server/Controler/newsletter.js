import { openDb } from './../configDB.js';

export async function criar_tabela(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS Newsletter ( id INTEGER PRIMARY KEY, nome TEXT, email TEXT, telefone TEXT)')
    })
}

export async function mostrar_contatos(req, res){
    openDb().then(db=>{
        db.all('SELECT * FROM Newsletter')
        .then(contatos=>  res.json(contatos))
    });
}

export async function selecionar_contato(req, res){
    let id = req.body.id;
    openDb().then(db=>{
        db.get('SELECT * FROM Newsletter WHERE id=?', [id])
        .then(contato=> res.json(contato));
    });
}

export async function inserir_contato(req, res){
    let contato = req.body;
    openDb().then(db=>{
        db.run('INSERT INTO Newsletter (nome, email, telefone) VALUES (?, ?, ?)', [contato.nome, contato.email, contato.telefone])
    })
    res.json({
        "statusCode": 200
    })
}

export async function atualizar_contato(req, res){
    let contato = req.body;
    openDb().then(db=>{
        db.run('UPDATE Newsletter SET nome=?, email=?, telefone=? WHERE id=?', [contato.nome, contato.email, contato.telefone]);
    });
    res.json({
        "statusCode": 200
    })
}

export async function deletar_contato(req, res){
    let id = req.body.id;
    openDb().then(db=>{
        db.get('DELETE FROM Newsletter WHERE id=?', [id])
        .then(res=>res)
    });
    res.json({
        "statusCode": 200
    })
}