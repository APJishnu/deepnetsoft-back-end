import userRouter from "./user-routes.js"


const configRoutes = (app)=>{

    app.use('/api/user',userRouter)
}

export default configRoutes