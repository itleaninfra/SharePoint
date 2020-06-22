 var userid= _spPageContextInfo.userId;
  if(userid != null)
  {
	  var requestUri = _spPageContextInfo.webAbsoluteUrl + "/_api/web/getuserbyid(" + userid + ")";
	  var requestHeaders = { "accept" : "application/json;odata=verbose" };
	  $.ajax({
	    url : requestUri,
	    contentType : "application/json;odata=verbose",
	    headers : requestHeaders,
	    success : onSuccess,
	    error : onError
	  });
	}

  function onSuccess(data, request){
  		if(data.d.Title == "Conta de Sistema"){
  			$("#admHeader").css("display","block");
		    $("#admHeader").css("min-height","70px");
		    //$("#header").css("top","170px");
		    //$("#header").css("padding-top","0px");

  		}else{
  			getUserGroups(data.d.Groups.__deferred.uri);
  		}
  }

  function onError(error) {
    alert("error");
  }
  
  
  function getUserGroups(uri)
  {
	  var requestUri = uri;
	  var requestHeaders = { "accept" : "application/json;odata=verbose" };
	  $.ajax({
	    url : requestUri,
	    contentType : "application/json;odata=verbose",
	    headers : requestHeaders,
	    success : function(data,req){ 
			
			$(data.d.results).each(function(){
		    	if(this.Title == "Administradores do Site")
		    	{
		    		$("#admHeader").css("display","block");
		    		$("#admHeader").css("min-height","70px");
		    		//$("#header").css("top","170px");
		    		//$("#header").css("padding-top","0px");
		    		//$("#header").css("height","70px");
		    		
		    	}
		    
		    });	    

		 },
	    error : function(error){
	    console.log(error)
	    }
	  });
	}
	


// INICIO REDES SOCIAIS       
       $(document).ready(function(){
			$.ajax({                
                   url: "/_api/web/lists/getbytitle('RedesSociais')/items",
				   method: "GET",
                   headers: { "Accept": "application/json; odata=verbose" },
                   success: function (data) {
                   		var htmlinfoRedesSociais = ""; 
                   		if (data.d.results.length > 0 ) {                             
                            $(data.d.results).each(function(){
							htmlinfoRedesSociais += '<a href="'+this.Link+'" alt="'+ this.Nome +'" title="'+ this.Nome +'" ><img src="'+this.Title+'" class="icon-img" /></a>';
							});
							$("#InformacoesRedesSociais").html(htmlinfoRedesSociais);							
                        }     
                  },
                  error: function (data) {
                     // alert("Error: "+ data);
                     //console.log(data);
                 }
          }); 
       });
       //FIM REDES SOCIAIS
       
       
       
       
       
// INICIO URL copyright
       $(document).ready(function(){
			$.ajax({                
                   url: "/_api/web/lists/getbytitle('GeneralParameters')/items?$filter=Title eq 'Copyright'",
				   method: "GET",
                   headers: { "Accept": "application/json; odata=verbose" },
                   success: function (data) {
                   		var htmlinfoItenscopyright = ""; 
                   		if (data.d.results.length > 0 ) {                             
                            $(data.d.results).each(function(){
                           	 htmlinfoItenscopyright += '<p class="text-center copyright">'+this.Value+'</p>';
							});
							$("#Informacoescopyright").html(htmlinfoItenscopyright );							
                        }     
                  },
                  error: function (data) {
                     // alert("Error: "+ data);
                     //console.log(data);
                 }
          }); 
       });
       //INICIO URL copyright


// INICIO URL urlsite
       $(document).ready(function(){
			$.ajax({                
                   url: "/_api/web/lists/getbytitle('GeneralParameters')/items?$filter=Title eq 'urlsite'",
				   method: "GET",
                   headers: { "Accept": "application/json; odata=verbose" },
                   success: function (data) {
                   		var htmlinfoItensUrlsite = ""; 
                   		if (data.d.results.length > 0 ) {                             
                            $(data.d.results).each(function(){
                         htmlinfoItensUrlsite += '<a href="#"  class="logo"><img src="/Style Library/images/logo-unimed-pitangueiras.png" alt="Unimed Fesp" title="Unimed Fesp" /><span>'+this.Value+'</span></a>';							});
							$("#InformacoesUrlsite").html(htmlinfoItensUrlsite );							
                        }     
                  },
                  error: function (data) {
                     // alert("Error: "+ data);
                     //console.log(data);
                 }
          }); 
       });
       //INICIO URL urlsite

       
// INICIO BAIXE NOSSO APP       
       $(document).ready(function(){
			$.ajax({                
                   url: "/_api/web/lists/getbytitle('BaixeNossoAPP')/items",
				   method: "GET",
                   headers: { "Accept": "application/json; odata=verbose" },
                   success: function (data) {
                   		var htmlinfoBaixeNossoAPP = ""; 
                   		if (data.d.results.length > 0 ) {                             
                            $(data.d.results).each(function(){
							htmlinfoBaixeNossoAPP += '<li><a href="'+this.Link+'" alt="'+ this.Title +'" title="'+ this.Title +'"><i class="'+this.Classe+'" aria-hidden="true"></i>'+this.Title+'</a></li>';							
							});
							$("#InformacoesBaixeNossoAPP").html(htmlinfoBaixeNossoAPP);							
                        }     
                  },
                  error: function (data) {
                     // alert("Error: "+ data);
                     //console.log(data);
                 }
          }); 
          
          $.ajax({                
                   url: "/_api/web/lists/getbytitle('GeneralParameters')/items?$filter=Title eq 'WhatsApp'",
				   method: "GET",
                   headers: { "Accept": "application/json; odata=verbose" },
                   success: function (data) {
                   		var WhatsApp = ""; 
                   		if (data.d.results.length > 0 ) {                             
                            $(data.d.results).each(function(){
							WhatsApp = this.Value;							
							});
							$("#WhatsAppSpan").html(WhatsApp);							
                        }     
                  },
                  error: function (data) {
                     // alert("Error: "+ data);
                     //console.log(data);
                 }
          }); 


//Inicio Menu auxiliar

 $.ajax({                
                   url: "/_api/web/lists/getbytitle('GeneralParameters')/items?$filter=Title eq 'ExibirMenuAuxiliar'",
				   method: "GET",
                   headers: { "Accept": "application/json; odata=verbose" },
                   success: function (data) {
                   		var MostrarMenu = ""; 
                   		if (data.d.results.length > 0 ) {                             
                            $(data.d.results).each(function(){
							MostrarMenu = this.Value;
							
						 if(MostrarMenu !=null && MostrarMenu.toUpperCase() =="SIM")
						 {
						// $("#MenuAuxiliar").show();
						//document.getElementById('MenuAuxiliar').style.display = 'block';
						     $.ajax({                
                   url: "/_api/web/lists/getbytitle('MenuAuxiliar')/items?$top=10&$orderby=Ordem asc'",
				   method: "GET",
                   headers: { "Accept": "application/json; odata=verbose" },
                   success: function (data) {
                   		var Htmlmenuaux = "";
                   		var HtmlMenuAuxiliar = ""; 
                   		if (data.d.results.length > 0 ) {                             
                            $(data.d.results).each(function(){
                           			

                            if(this.Link !=null){                        
					
							HtmlMenuAuxiliar +=  "<li><a class='maux' href='"+this.Link+"'>"+this.Title+"</a></li>";	
							                     

							}
							else if(this.Link == null && this.Ordem == "1"){
							
							Htmlmenuaux += "<div class='maux super'>"+this.Title+"</div>"

							}
							else
							{
							HtmlMenuAuxiliar +=  "<li><a class='maux'>"+this.Title+"</a></li>";
							}						
							});
							$("#MenuAuxiliarHeader").html(HtmlMenuAuxiliar);
							$("#Supermax").html(Htmlmenuaux);							
                        }     
                  },
                  error: function (data) {
                     // alert("Error: "+ data);
                     //console.log(data);
                 }
          }); 

						 }
						 else{
						 document.getElementById('MenuAuxiliar').style.display = 'none';
						// $("#MenuAuxiliar").hide();
							}							
							});
													
                        }     
                  },
                  error: function (data) {
                     // alert("Error: "+ data);
                     //console.log(data);
                 }
          }); 


//Final menu iniciar
          
  		  $.ajax({                
                   url: "/_api/web/lists/getbytitle('SiteMap')/items?$orderby=Ordem",
				   method: "GET",
                   headers: { "Accept": "application/json; odata=verbose" },
                   success: function (data) {
                   		var FirstTime = true;
                   		var MenuOrder = "";
                   		var Level = "";
                   		var LastLevel = 0;
                   		var CompLevel = 0;
						var HTML = "";
						var LastItem = "";
						var CurrentLevel = 0;
                   		if (data.d.results.length > 0 ) {                             
                            $(data.d.results).each(function(){
                            	
                            	 CurrentLevel = parseInt(this.Level,10);
                            	CompLevel = LastLevel;
                            	while(CurrentLevel > CompLevel && CurrentLevel > 1){
                            		if(LastLevel > 1)
                            		{
                            			HTML = HTML.substring(0, HTML.length-5)
                            		}	                            		
                            		HTML += "<ul>";
                            		CompLevel++;                            		
                            	}
                            
                            	while(CurrentLevel < CompLevel ){                            		                            		
                            		HTML += "</ul>";
                            		if(CompLevel > 1 && CurrentLevel != 1)
                            		{
                            			HTML += "</li>";
                            		}
                            		CompLevel--;
                            	}
								
								if(CurrentLevel == 1)
                            	{
                            		if(FirstTime)
                            		{
                            			HTML += "<div class='clearfix'></div><div class='column'><h3>"+this.Title+"</h3><hr />";
                            		}
                            		else
                            		{
                            			HTML += "</div><div class='divider'></div><div class='column'><h3>"+this.Title+"</h3><hr />";
                            		}
                            		
                            		FirstTime = false;

                            	}
                            	else
                            	{
									HTML += "<li><a href='"+this.Link+"'>"+this.Title+"</a></li>";
								}
								LastLevel = CurrentLevel;
								LastItem = this;
													
							});
							
							if(CurrentLevel == 2 && HTML.substring(HTML.length-5, HTML.length) != "</li>")
							{
							HTML += "</li>";	
							}
							
							while(CurrentLevel > 1){
                            		HTML += "</ul>";
                            		CurrentLevel--;
                            	}
                            	HTML += "</div>";                            	
							$("#menu-footer").html(HTML);							
                        }     
                  },
                  error: function (data) {
                     // alert("Error: "+ data);
                     //console.log(data);
                 }
          }); 
          
       });      
       
       //FIM BAIXE NOSSO APP
         // Início da função Menu Dinâmico   
$(document).ready(function(){          
	$.ajax({                
		url: "/_api/web/lists/getbytitle('Menu')/items",
		   method: "GET",
		   headers: { "Accept": "application/json; odata=verbose" },
		   success: function (data) {
				var FirstTime = true;
				var FirstTimelvl = true;
				var MenuOrder = "";
				var Level = "";
				var LastLevel = 0;
				var CompLevel = 0;
				var HTML = "";
				var LastItem = "";
				var CurrentLevel = 0;
				var htmls = [];
				var htmlsMobile = [];
				var htmls2 = "";
				var total = "";
               
            
		   
   
            var filtroLv1 = data.d.results.filter(function(item) {
               return item["Level"] == "1" ;
            });
            
              var Nivel1 = filtroLv1.sort(function (a, b) {
            return a.Ordem-b.Ordem
        })
   
    //Percorrer todos os itens por level
    $(Nivel1).each(function(){
       var itemlv1 = this;
       htmls.push("");
	   htmlsMobile.push("");
       htmls[htmls.length - 1] += "<li data-hover='mega'><a href='"+itemlv1.Link+"'>"+itemlv1.Title+"</a>";
	   htmlsMobile[htmlsMobile.length - 1] += '<li><a href="'+ itemlv1.Link +'">'+ itemlv1.Title +'</a>';

       var filtroLv2 = data.d.results.filter(function(item) {
           return item["Level"] == "2" && item["Ordem"].split('.')[0] == itemlv1["Ordem"].split('.')[0];
		
	   
       });
        var Nivel2 = filtroLv2.sort(function (a, b) {
            return a.Ordem-b.Ordem
        });
        
     
       FirstTime = true;
       // htmls2 += htmcompleInicio;
        var existeLv2 = false;
        $(Nivel2).each(function(){
           var itemlv2 = this;
           if(itemlv2["Ordem"].split('.')[0] == itemlv1["Ordem"].split('.')[0]){

               if(this.Level == 2)
               {
                  existeLv2 = true;
                   if(FirstTime)
                   {
                       htmls[htmls.length - 1] +="<div class='mega m-content-right'><div class='container'><div class='inner'><ul class='level-2 picture-based three-columns'><li><a href='"+itemlv2.Link+"'>"+itemlv2.Title+"</a>";
					   htmlsMobile[htmlsMobile.length - 1] += '<ul><li><a href="'+ itemlv2.Link +'">'+ itemlv2.Title +'</a>';
                   }
                   else
                   {
                       htmls[htmls.length - 1] +="<li><a href='"+itemlv2.Link+"'>"+itemlv2.Title+"</a>";
					   htmlsMobile[htmlsMobile.length - 1] += '<li><a href="'+ itemlv2.Link +'">'+ itemlv2.Title +'</a>';
                   }
                   
                   FirstTime = false;
               }

          }

      // });

       //total = htmls2 + htmls + htmcompleFinal;
       var filtroLv3 = data.d.results.filter(function(item) {
        return item["Level"] == "3" && item["Ordem"].split('.')[0] == itemlv1["Ordem"].split('.')[0];
     });
    

 var Nivel3 = filtroLv3.sort(function (a, b) {
            return a.Ordem.split('.')[2]-b.Ordem.split('.')[2]
        });


     FirstTimelvl = true;
     var existeLv3 = false;
     $(Nivel3).each(function(){
        var itemlv3 = this;
        if(itemlv3["Ordem"].split('.')[0] == itemlv1["Ordem"].split('.')[0] &&  itemlv3["Ordem"].split('.')[1] == itemlv2["Ordem"].split('.')[1]){
            
            
            if(this.Level == 3)
            {
            existeLv3 = true;
                if(FirstTimelvl)
                {
                    htmls[htmls.length - 1] +="<ul><li><a href='"+itemlv3.Link+"'>"+itemlv3.Title+"</a></li>";
					htmlsMobile[htmlsMobile.length - 1] += '<ul><li><a href="'+ itemlv3.Link +'">'+ itemlv3.Title +'</a></li>';
                }
                else
                {
                    htmls[htmls.length - 1] +="<li><a href='"+itemlv3.Link+"'>"+itemlv3.Title+"</a></li>";
					htmlsMobile[htmlsMobile.length - 1] += '<li><a href="'+ itemlv3.Link +'">'+ itemlv3.Title +'</a></li>';
                }
                
                FirstTimelvl = false;
            } 
                   

        }     
                          
     });
	    
     if(existeLv3){
    	htmls[htmls.length - 1] += "</ul>"; 
		htmlsMobile[htmlsMobile.length - 1] += "</ul>";
	}
    
        
    
 });
      
	if(existeLv2){  
		htmls[htmls.length - 1] += "</li></ul></div></div></div>"; 
		htmlsMobile[htmlsMobile.length - 1] += "</li></ul>";
	}

});
 


	 htmls[htmls.length - 1] += "</li>";
	htmlsMobile[htmlsMobile.length - 1] += "</li>";

	$("#menuDinamic").html(htmls);
	$("#menu-mobile").find("ul").html(htmlsMobile);
				
			  
				
			 
   

	$('.main-navigation .megamenu').megaMenu({
		offsetLeft: 50,
		interval: 50,
		sensitivity: 4,
		timeout: 200
	});
	
	$('nav.menu-mobile').mmenu();
	$('nav.menu-mobile-interno').mmenu();
	
	},
	error: function (data) {
	}
	});
});
								 

// Fim da função Menu Dinâmico
          

       