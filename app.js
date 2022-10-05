const moongose = require('mongoose')

const url= 'mongodb://127.0.0.1:27017/mongo_curso'

moongose.connect(url,{

})

.then(()=> console.log('Estas conectado a la database'))
.catch((e)=> console.log(`No estas conectado a la db, erro: ${e} `))


const personaSchema = moongose.Schema({
    name: String,
    age: Number,
    email: String,
    date:  Date

},{versionKey: false})

const PersonaModel= moongose.model('personas', personaSchema)

//mostrar

const mostrar = async ()=>{
    const personas = await PersonaModel.find();
    console.log(personas)
}

//crear

const crear = async()=>{
    const persona =  new PersonaModel({
        name: 'maria',
        age: 24,
        email: 'maria4@gmail.com',
        date: new Date()
    })
    const result= await persona.save();
    console.log(result)
}

//update

const actualizar = async(id)=>{
const persona= await PersonaModel.updateOne({_id:id},
    {
        $set:{
            name: 'jose modificado',
            age: 24,
            email: "josemodificado@yahoo.com",
            date: new Date()
        }
    })
}

//DELETE
const eliminar = async(id)=>{
    const persona= await PersonaModel.deleteOne({_id:id})
    }

//llamadas de funciones
//mostrar()
//crear()
//actualizar("633a5387652d988f182ccd1b")
eliminar("633a53f0448691bdd4621270")