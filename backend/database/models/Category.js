const {DataTypes}=require("sequelize")

module.exports=(Sequelize)=>{
    Sequelize.define('category',{
        id:{
            type:DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
            primaryKey:true,
            allownull:false,
            },
        name:{
             type:DataTypes.STRING,
             allownull:false
            },
        image:{
            type:DataTypes.TEXT,
            allownull:false
            }
    })
}