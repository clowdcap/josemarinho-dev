/* Importando Banco de Dados */
const sqlite3 = require('sqlite3').verbose()

/* Comando incial de criar o arquivo.db - Nome.db */
const database_name = 'Newsletter.db'
let db = new sqlite3.Database(database_name)

/* Cria a tabela de dados */
db.serialize(function(){
    try {
        db.run('CREATE TABLE if not exists CONTATOS (nome TEXT, email TEXT, telefone TEXT)')
        console.log(`DB SQlite3::: Database conectado::: ${database_name}`)
    } catch (error) {
        console.log(error.message)
    }
})

/* Fecha conectivadade ao banco */
db.close()

/* Posso passar parametros nas queries
Diretamente na funcao como
db.run("UPDATE tbl SET nome = ? WHERE id = ?", "bar", 2)

Array
db.run("UPDATE tbl SET nome = ? WHERE id = ?", ["bar", 2')

Como um objeto
db.run("UPDATE tbl SET nome = $nome WHERE id = $id", {$id: 2, $nome: "bar"})

Alguns comandos 
serialize() <-- coloco os comandos dentro e ele excuta em sqeuencia
paralelize() <-- executa varias funcoes em paralelo

all() <-- retonra com um array de resutlados callback
get() <-- obtem o primeiro (ou nenhum) resultado
each() <-- Executa callback para cada resultado da query (select)

Comandos para se executar nas queryz
run( sql, [param], [callback] ) <-- 
    Executa sql, substui parametros e opcional chama callback final

exec( sql, [callback] ) <--
    Executa sql, retorna objeto db para encadeamento (chain)
    Nao retorna linhas do banco

prepare( sql, [param], [callback] ) <-- 
    Prepara sql, retorna objeto statement.
    Util para repeticao de comandos


*/




    /*
    let stmt = db.prepare("INSERT INTO CONTATOS (nome, email, telefone) VALUES (?, ?, ?)")
    for (let contato of contatos) {
        // console.log(JSON.stringify(contato))
        stmt.run(contato.nome, contato.email, contato.telefone)
    }
    stmt.finalize()
    db.each('SELECT rowid AS id, nome, email FROM CONTATOS', (err, row)=> {
        console.log(`ID ${row.id}, Nome: ${row.nome}, Email: ${row.email}`)
    })
    */

















/*

db.run('create table if not exists people (id integer primary key, name text, email text)', (error) => {
    if (error) {
      console.log(error);
      return;
    }
    db.run('insert into people (name) values (?)', ['Gabriel'], (error) => {
      if (error) {
        console.log(error);
        return;
      }
        
        db.all('select * from people', (error, rows) => {
            console.log(error, rows);
        db.close();
    })
    });
  });



*/