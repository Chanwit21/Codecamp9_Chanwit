const {execute} = require('../db/execute')

exports.getAllTransaction = async (req,res,next)=>{
    try{
        const result = await execute('SELECT * FROM `transactions`')
        const cetagories = await execute('SELECT * FROM `cetagories`')
        const transactions = result.map((item=>{
            const cetagory = cetagories.find(item1=>item1.id === item.id)
            return {
                "id": item.id,
            "payee": item.payee,
            "amount": item.amount,
            "date": item.date,
            "comment": item.comment,
                cetagory:cetagory
            }
        }))
        res.status(200).json({transactions:transactions})
    }catch (err){
        next(err)
    }
}

exports.getTransactionById = async (req,res,next)=>{
    try{
    const targetId = req.params.id
    const result = await execute('SELECT * FROM `transactions` WHERE id = ?',[targetId])
    if(result.length !== 0){
        const cetagory = await execute('SELECT * FROM `cetagories` WHERE id =?',[result[0].cetagory_id])
        res.status(200).json({transaction:{
            "id": result[0].id,
            "payee": result[0].payee,
            "amount": result[0].amount,
            "date": result[0].date,
            "comment": result[0].comment,
            cetagory:cetagory[0]
        }})
    } else {
        res.status(400).json({message:'Cannot get transaction with this id'})
    }

    }catch (err){
        next(err)
    }
}

exports.createTransaction = async (req,res,next)=>{
    try{
        const {payee,amount,date,comment,cetagory_id} = req.body
        if(payee === undefined || amount === undefined|| date === undefined|| cetagory_id === undefined){
            res.status(400).json({message:'payee amount date cetagory_id is require'})
        } else if(typeof payee !== 'string'){
            res.status(400).json({message:'payee must be a string'})
        } else if (typeof amount !== 'number'){
            res.status(400).json({message:'amount must be a number'})
        } else if (isNaN(new Date(date).getTime())){
            res.status(400).json({message:'data is invalid'})
        } else {
            const result = await execute('INSERT INTO `transactions`(payee,amount,date,comment,cetagory_id) VALUES (?,?,?,?,?)',[payee,amount,date,comment,cetagory_id])
            const cetagory = await execute('SELECT * FROM `cetagories` WHERE id =?',[cetagory_id])
            res.status(200).json({
                transaction:{
                    id:result.insertId,
                    payee,
                    amount,
                    date,
                    comment,
                    cetagory:cetagory[0],
                }})
        }
    }catch (err){
        next(err)
    }
}

exports.updateTransaction =async (req,res,next)=>{
    try{
        const {payee,amount,date,comment,cetagory_id} = req.body
        const targetId = req.params.id
        if(payee === undefined || amount === undefined|| date === undefined|| cetagory_id === undefined){
            res.status(400).json({message:'payee amount date cetagory_id is require'})
        } else if(typeof payee !== 'string'){
            res.status(400).json({message:'payee must be a string'})
        } else if (typeof amount !== 'number'){
            res.status(400).json({message:'amount must be a number'})
        } else if (isNaN(new Date(date).getTime())){
            res.status(400).json({message:'data is invalid'})
        } else {
            const result = await execute('UPDATE `transactions` SET payee = ?,amount=?,date = ?,comment=?,cetagory_id=? WHERE id=?',[payee,amount,date,comment,cetagory_id,targetId])
            if(result.affectedRows === 0){
                res.status(400).json({message:'cannot update transaction with this id'})
            } else [
                res.status(200).json()
            ]
        }
    }catch (err){
        next(err)
    }
}

exports.deleteTransactions = async (req,res,next)=>{
    try{
        const targetId = req.params.id
        const result = await execute('DELETE FROM `transactions` WHERE id=?',[targetId])
        if(result.affectedRows === 0){
            res.status(400).json({message:'cannot delete transaction with this id'})
        } else [
            res.status(204).json()
        ]
    }catch (err){
        next(err)
    }
}