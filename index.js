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
      var updateStudent=function(id,m,ph,en,fr,sc){
        this.list=map(this.list,function(e,i){
          if(e.id===id)
          {e.mathNote=m
           e.physicsNotes=ph
           e.scienceNote=sc
           e.englishNote=en
           e.frenchNote=fr
          e.Average=(m+ph+en+fr+sc)/5}
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


      //////////////////////////////////////////
      $(".div4").hide()
      // $('.adddiv').hide()
      $(".modifdiv").hide()
       $('.deldiv').hide()
      $('.student').hide()
      $('.search').hide()
      ///////////////////////////////////////////////////
   


      $('.student').hide()
      $('.search').hide()
      teacher=Teacher("user","123")
    
      $('.btn1').on('click',function(){
          if(($('#user').val()==teacher.nameTeacher)&&($('#password').val()==teacher.password)){
            $('.signup').hide()
            $('.student').show()
            $('.search').show()
            $('.div4').show()
              }
          }
      )
       
      function display(item){
        $('#array').append(`<tr class="tr1"><td>${item.id}</td>-
        <td>${item.firstName}</td>
        <td>${item.lastName}</td>
        <td>${item.Average}</td>
        </tr>
      `)
    
      }
      
      function displays(s){
        $('#array').empty()
       $('#array').append(` <tr class="tr1">
        <th>N°ID</th>
        <th>FirstName</th>
        <th>LastName</th>
        <th>Average</th>
        </tr>`)
        each(s,function(e,i){
          display(e)
        })
        
      }


      $('#add').click(function(){
        
        var fn=$('#fname').val()
        var ln=$('#lname').val()
        var m=$('#mathNote').val()
        var ph=$('#physicsNotes').val()
        var en=$('#englishNote').val()
        var fr=$('#frenchNote').val()
        var sc=$('#scienceNote').val()
       

        if(fn===""|| ln===""  || m==="" || ph==="" || en==="" || fr==="" || sc==="" )
        {alert("please fill in the form")}
        else  {
        var p=student(fn,ln,Number.parseInt(m),Number.parseInt(ph),Number.parseInt(en),Number.parseInt(fr),Number.parseInt(sc))
        teacher.add(p)
        displays(teacher.list)
        }
      
      })

      $('#up').click(function(){
        $(".modifdiv").show()
        $('.adddiv').hide()
        $('.deldiv').hide()
      })
      $('#del').click(function(){
        $(".modifdiv").hide()
        $('.adddiv').hide()
        $('.deldiv').show()
      })
      $('#del2').click(function(){
        var id=$('#id1').val()
        teacher.removeStudent(Number.parseInt(id))
        displays(teacher.list)
       $('.deldiv').hide()
        $('.adddiv').show()
        
      })

      $('#up2').click(function(){

        var id=Number.parseInt($('#id2').val())
        var m=Number.parseInt($('#mathNote2').val())
        var ph=Number.parseInt($('#physicsNotes2').val())
        var en=Number.parseInt($('#englishNote2').val())
        var fr=Number.parseInt($('#frenchNote2').val())
        var sc=Number.parseInt($('#scienceNote2').val())
       teacher.updateStudent(id,m,ph,en,fr,sc)
        displays(teacher.list)
        $(".modifdiv").hide()
        $('.adddiv').show()
      })

      $('#search').click(function(){
        var id=Number.parseInt($('#id3').val())
        var search=teacher.searchStudent(id)
        display2(search)
        
      })
      

      $('#sort').click(function(){
        teacher.sortByAverage()
        displays(teacher.list)
      })
      function display2(item){
        $('#array').empty()
        $('#array').append(` <tr class="tr1">
         <th>N°ID</th>
         <th>FirstName</th>
         <th>LastName</th>
         <th>Math</th>
         <th>Physics</th>
         <th>English</th>
         <th>French</th>
         <th>Science</th>
         <th>Average</th>
         </tr>`)
        $('#array').append(`<tr class="tr1">
        <td>${item[0].id}</td>
        <td>${item[0].firstName}</td>
        <td>${item[0].lastName}</td>
        <td>${item[0].mathNote}</td>
        <th>${item[0].physicsNotes}</th>
        <td>${item[0].englishNote}</td>
        <td>${item[0].frenchNote}</td>
        <td>${item[0].scienceNote}</td>
        <td>${item[0].Average}</td>
        </tr>
      `)
      }
function levl(x){
  var x=""
  if(x<10){
    x="Insuffisant"
  }
  else if (9<x<13){
    x="Passable"
  }
  else if(13<x<16){
    x = "Bien"
  }
  else{
    x ="Excellent";
    }
    return x
}
