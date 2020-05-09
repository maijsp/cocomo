//Calculate Application Composition
function calculateApplication() {
    var application = document.getElementById('application')
    console.log(application.getElementsByTagName('input').opc.value)
    console.log(application.getElementsByTagName('input').reuse.value)
    console.log(application.getElementsByTagName('select').prod.value)

    var object_point_count = application.getElementsByTagName('input').opc.value
    var percent_reuse = application.getElementsByTagName('input').reuse.value
    var prod = application.getElementsByTagName('select').prod.value

    var NOP = (object_point_count-(100-percent_reuse))/100
    var effort = (NOP/prod).toFixed(2)
    console.log("Effort : " + effort)

    $('#result-application').html('');
    $('#result-application').append('<div class="shadow-drop-center card border-success mb-3 style="max-width: 18rem;">'+
    '<div class="card-header">Result'+
    '<div class="card-body text-success">'+
        '<h5 class="card-title">Effort : ' + effort +
    '   </h5></div></div></div>')
}

//scaling factor
function calculateB() {
    var firstfact = document.getElementById('PREC')
    var secondfact = document.getElementById('DFEX') 
    var thirdfact = document.getElementById('ARCH')
    var forthfact = document.getElementById('TEAM')
    var fifthfact = document.getElementById('PRMY')
    var one = firstfact.options[firstfact.selectedIndex].value
    var second = secondfact.options[secondfact.selectedIndex].value
    var three = thirdfact.options[thirdfact.selectedIndex].value
    var forth = forthfact.options[forthfact.selectedIndex].value
    var fifth = fifthfact.options[fifthfact.selectedIndex].value
    var sum = 0
    sum = parseFloat(one) + parseFloat(second) + parseFloat(three) + parseFloat(forth) + parseFloat(fifth)
    console.log(sum)
    var B = 1.01+(0.01 *(sum));
    console.log(B)
    return B;
        
}


function calculateEarlyDesign() {
    var A = 2.5
    var B = calculateB()
    var RCPX = parseFloat(document.getElementById('RCPX').value)
    var RUSE = parseFloat(document.getElementById('RUSE').value)
    var PDIF = parseFloat(document.getElementById('PDIF').value)
    var PERS = parseFloat(document.getElementById('PERS').value)
    var PREX = parseFloat(document.getElementById('PREX').value)
    var FCIL = parseFloat(document.getElementById('FCIL').value)
    var SCED = parseFloat(document.getElementById('SCED').value)
    var kloc = parseFloat(document.getElementById('early-design').getElementsByTagName('input').item(0).value)

    var EM = RCPX * RUSE * PDIF * PERS * PREX * FCIL * SCED
    // console.log('EM : ' + EM + ' KLOC : ' + kloc)
    var PM = (A * (kloc ** B) * EM).toFixed(2)
    console.log('Effort : ' + PM)

    $('#result-early').html('');
    $('#result-early').append('<div class="shadow-drop-center card border-success mb-3 style="max-width: 18rem;">'+
    '<div class="card-header">Result'+
    '<div class="card-body text-success">'+
        '<h5 class="card-title">Effort : ' + PM +
    '   </h5></div></div></div>')
}

