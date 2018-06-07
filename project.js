function save() {
                    var record = { ProductName: document.getElementById("field1").value,
                    Description: document.getElementById("field2").value,
                    Model: document.getElementById("field3").value,
                    Year: document.getElementById("field1").value }
                    
                    var totalRecord= [];
                    if(localStorage.totalRecord!=undefined)
                       var totalRecord=JSON.parse(localStorage.totalRecord)
                    totalRecord.push(record);
                    localStorage.totalRecord=JSON.stringify(totalRecord);
                    window.location='redirect.html';
                 }
function onProductDetailsLoad(){	
                    var totalRecord = JSON.parse(localStorage.totalRecord);
                    var temp = "";
                    var heading = "<div id='grid_heading'>"+
                                "<div class='grid_item'>ProductName</div>"+
                                "<div class='grid_item'>Description</div>"+
                                "<div class='grid_item'>Model</div>"+
                                "<div class='grid_item'>Year</div>"+
                                "<div class='grid_last_column'>Delete Product</div>"+
                            "</div>";
                    temp = heading;
                    for(var i=0; i < totalRecord.length; i++){		
                        var newRecord = "<div>"+
                                            "<div class='grid_item'>"+totalRecord[i].ProductName+"</div>"+
                                            "<div class='grid_item'>"+totalRecord[i].Description+"</div>"+
                                            "<div class='grid_item'>"+totalRecord[i].Model+"</div>"+
                                            "<div class='grid_item'>"+totalRecord[i].Year+"</div>"+
                                            "<div class='grid_last_column'><input type='button' value='Delete' class='btnDeleteCls' id = '"+i+"' onclick='selectRecord(this.id)'></div>"+
                                        "</div>";
                        temp = temp + newRecord;		
                    }
                    document.getElementById("grid").innerHTML = temp;	
                }                                                
                function add(){
                    window.location = 'project.html';
                }               
                function selectRecord(id){
                    var selectedIndex = parseInt(id);
                    var totalRecord = JSON.parse(localStorage.totalRecord);
                    totalRecord.splice(selectedIndex, 1);
                    localStorage.totalRecord = JSON.stringify(totalRecord);
                    onProductDetailsLoad();
                }