import sequelize from "sequelize"
const db = new sequelize("crud", "root", "", 
{
    host: "localhost",
    dialect: "mysql"
})

export default db