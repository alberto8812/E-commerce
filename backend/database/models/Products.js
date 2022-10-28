const {DataTypes}=require ('sequelize')

module.exports=(sequelize)=>{

sequelize.define('products',{
    id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        primaryKey:true,
        allownull:false
    },
    mame:{
        type:DataTypes.STRING,
        allownull:false,
    },
    price:{
        type:DataTypes.FLOAT,
        allownull:false,
    },
    stock:{
        type:DataTypes.INTEGER,
        allownull:false
    },
    detail:{
        type:DataTypes.TEXT,
        allownull:false
    },
    detail:{
        type:DataTypes.TEXT,
        allownull:false
    },
    image:{
        type:DataTypes.TEXT,
        allownull:false
    },
    delete:{
        type:DataTypes.BOOLEAN,
        default:false
    }

})
}