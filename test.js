const { json } = require('express');
const mongoose = require('mongoose')

const Post = require("./models/Post")

mongoose.connect('mongodb://127.0.0.1/nodeblog_test_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})

//Mongo db crud işlemleri
// // ilk örnek oluşturma
// Post.create({
//     title: "İkinci Post Başlığım",
//     content: "İkinci Post içeriği, test "
// }, (error, post) => {
//     console.log(error, post);
// })
////////////////şartlı veri getirme////////////////////////////////////
// Post.find({
//  title: "İkinci Post Başlığım"
// },(error,post)=> {
//   console.log(error, post);
// })
////////////////Tüm verileri getirme////////////////////////////////////
// Post.find({ },(error,post)=> {
//      console.log(error, post);
//    })
//    ////////////////id ye gre veri getirme////////////////////////////////////
// Post.findById("602e7607afe7000408e83c9e",(error,post)=> {
//     console.log(error, post);
// })

//    ////////////////veri güncelleme////////////////////////////////////
// Post.findByIdAndUpdate("602e7607afe7000408e83c9e", {
//        title :"güncellenen veri var.."
//    },(error,post)=> {
//     console.log(error, post);
// })
   ////////////////veri silme////////////////////////////////////
   Post.findByIdAndDelete("602e7607afe7000408e83c9e",(error,post)=> {
     console.log(error, post);
})