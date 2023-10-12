function each(array, func) { 
    for (var i = 0; i < array.length; i++) { 
          func(array[i], i); 
    } 
  }
  
  function map(array, f) { 
    var acc = []; 
    each(array, function(element, i) { 
          acc.push(f(element, i)); 
    }); 
    return acc; 
  }
  
  function filter(array, predicate) {
  var acc = [];
  each(array, function (element, index) {
   if (predicate(element, index)) {
     acc.push(element);
   }
  });
  return acc;
  }
  
  function generateID() {
    var count = 0;
    return function () {
      return count++;
    };
  }

  var id = generateID();
  function student(fname,lname,mathNote,physicsNotes,scienceNote,englishNote,frenchNote){
    return{
     id:id(),
     firstName:fname,
     lastName:lname,
     mathNote:mathNote,
     physicsNotes:physicsNotes,
     scienceNote:scienceNote,
     englishNote: englishNote,
     frenchNote:frenchNote,
     Average :(mathNote+physicsNotes+scienceNote+englishNote+frenchNote)/5

  }}
  function Teacher(name,password){
    return { 
    nameTeacher:name, 
    password:password,
    list:[],
    add:add,
    removeStudent:removeStudent,
    updateStudent:updateStudent,
    searchStudent:searchStudent,
    sortByAverage:sortByAverage,
    
    }
    }
  
    
    var add=function(s){
      this.list.push(s)
    }
      var removeStudent=function(id){
       this.list =  filter(this.list,function(e,i){
          return e.id!==id
        })
      }
      var updateStudent=function(id,values){
        this.list=map(this.list,function(e,i){
          if(e.id===id)
          {e=values}
          return e
        })
    
      }
      var searchStudent=function(id){
        return filter(this.list,function(e,i){
          return e.id===id

        })

      }

      var sortByAverage=function(){
        this.list.sort(function(a,b){
          return a.Average-b.Average
        })
      }



     
