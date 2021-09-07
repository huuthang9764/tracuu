
        document.getElementById("btn").addEventListener("click",doStuff);
        document.getElementById("printPT").addEventListener("click",printPT);
        document.getElementById("phieuthuR").addEventListener("click",phieuthuR);
        
        function doStuff()
        { 
          var kt = document.getElementById("mpt").value;
          if(kt != "")
          {
              var data={};
              data.mpt = document.getElementById("mpt").value;
              google.script.run.withSuccessHandler(updateViewPT).getCode(data.mpt);
              document.getElementById("mpt").value= "";
              document.getElementById('TB_PT').innerHTML = '<div><img src="https://firebasestorage.googleapis.com/v0/b/blnt-45dd0.appspot.com/o/image%2Floading3.gif?alt=media&token=7157fefb-1a88-4d86-bfc3-e6534a4755c0" width="100px" height="100px">'
              +'ĐANG XỬ LÝ DỮ LIỆU...</div>';
          }
          else
          {
              //document.getElementById('Print').innerHTML ='';
              document.getElementById('TB_PT').innerHTML ='<div><img src="https://thumbs.gfycat.com/UniqueSizzlingFinwhale-small.gif" width="50px" height="50px"> VUI LÒNG CUNG CẤP MÃ SỐ SINH VIÊN</div>';
          }
        };
          function updateViewPT(dbPT)
          {document.getElementById('TB_PT').innerHTML = dbPT;};
          
         function phieuthuR()
          { 
              var newWindow = window.open(); 
              newWindow.document.write(document.getElementById("TB_PT").innerHTML+document.getElementById("rip").innerHTML); 
              // newWindow.print(); 
          };
