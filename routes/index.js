import userRouter from "./user.js";
import studentRouter from "./student.js";
import teacherRouter from "./teacher.js";
const routes=(app)=>{
    // nó sẽ ăn thằng đầu tiên trước nếu không phân file ra
    // app.use('/', (req, res) => {
    //     res.render('news',
    //     {
    //       isShow:true,
    //       helpers: {
    //           message() { return 'Lap trinh de!'; },
    //           noti() { return 'Error!'; }
    //         }
    //     })
    //   })
    app.use('/user',userRouter)
    app.use('/student',studentRouter)

    app.use('/teacher',teacherRouter)
    
}

export default routes