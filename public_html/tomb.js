$(function () {

    var kutyak = [

        {
            neve: "Morzsa",
            fajta: "németjuhász",
            kor: 5
            
        },

        {
            neve: "Nara",
            fajta: "angol bulldog",
            kor: 1
            
        },
        {
             neve: "Buksi",
            fajta: "agár",
            kor: 3
           
        },
        {
            neve: "Kutya",
            fajta: "Keverék",
            kor: 2
            
        }



    ];

    console.log(kutyak);
    
    $("article").append("<table>");
    $("article table").append("<tr><th>Név:</th><th>Fajta:</th><th>Kor</th></tr>");
    var i = 1;
    for (var kutyaindex in kutyak) {
        $("article table").append("<tr>");
        console.log(kutyak[kutyaindex]);
        for (var item in kutyak[kutyaindex]) {
            $("article table tr").eq(i).append("<td>"+kutyak[kutyaindex][item]+"</td>");
            
            
        }
        i++;
        
    }

/*    <table>
       <tr>
            <th>
                Név:
            </th>
            <th>
                Kor:
            </th>
            <th>Fajta</th>
        </tr>//
       <tr>
            <td>
    
            </td>
            <td>
    
            </td>
            <td>
    
            </td>
        </tr>//
        <tr>
            <td>
    
            </td>
            <td>
    
            </td>
            <td>
    
            </td>
        </tr>
       <tr>
            <td>
    
            </td>
            <td>
    
            </td>
            <td>
    
            </td>
        </tr>
    </table>*/

});


$(document).ready(function(){
  $("th:first-child").on("click", function(){

   
 


  });
});

