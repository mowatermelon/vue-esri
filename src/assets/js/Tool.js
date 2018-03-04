/**
 * Created by cs on 2017/4/9.
 */
import Wilddog from 'wilddog'

 // 初始化
 var config = {
   authDomain: "lorry.wilddog.com",
   syncURL: "https://lorry.wilddogio.com"
 };
 Wilddog.initializeApp(config);
 var myRef = Wilddog.sync().ref();

// var refHelper = {
//   ref: myRef
// }
// export default refHelper;

export default{
  install(Vue,options)
  {
    Vue.prototype.ref = function () {
       return myRef;
    }
  }
}
