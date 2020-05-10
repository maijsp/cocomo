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

function calculateBPost()
{
    
        var firstfact1 = document.getElementById('PREC')
        var secondfact1 = document.getElementById('DFEX') 
        var thirdfact1 = document.getElementById('ARCH')
        var forthfact1 = document.getElementById('TEAM')
        var fifthfact1 = document.getElementById('PRMY')
        var one1 = firstfact1.options[firstfact1.selectedIndex].value
        var second1 = secondfact1.options[secondfact1.selectedIndex].value
        var three1 = thirdfact1.options[thirdfact1.selectedIndex].value
        var forth1 = forthfact1.options[forthfact1.selectedIndex].value
        var fifth1 = fifthfact1.options[fifthfact1.selectedIndex].value
        var sum1 = 0
        sum1 = parseFloat(one1) + parseFloat(second1) + parseFloat(three1) + parseFloat(forth1) + parseFloat(fifth1)
        console.log(sum1)
        var B1 = 1.01+(0.01 *(sum1));
        console.log(B1)
        return B1;
}

function calculatePost()
{
    var A1 = 2.5
    var B1 = calculateBPost()
    var RELY = parsefloat(document.getElementById('RELY').value)
    var DATA = parsefloat(document.getElementById('DATA').value)
    var CPLX = parsefloat(document.getElementById('CPLX').value)
    var RUSE1 = parsefloat(document.getElementById('RUSE1').value)
    var DOCU = parsefloat(document.getElementById('DOCU').value)
    var TIME = parsefloat(document.getElementById('TIME').value)
    var STOR = parsefloat(document.getElementById('STOR').value)
    var PVOL = parsefloat(document.getElementById('PVOL').value)
    var ACAP = parsefloat(document.getElementById('ACAP').value)
    var PACP = parsefloat(document.getElementById('PCAP').value)
    var PCON = parsefloat(document.getElementById('PCON').value)
    var AEXP = parsefloat(document.getElementById('AEXP').value)
    var PEXP = parsefloat(document.getElementById('PEXP').value)
    var LTEX = parsefloat(document.getElementById('LTEX').value)
    var TOOL = parsefloat(document.getElementById('TOOL').value)
    var SITE = parsefloat(document.getElementById('SITE').value)
    var SCED = parsefloat(document.getElementById('SCED').value)

    var EM1 = RELY * DATA * CPLX * RUSE1 * DOCU * TIME * STOR * PVOL * ACAP * PACP * PCON * AEXP 
             * PEXP * LTEX * TOOL * SITE * SCED
    //console.log(EM1)
        
}

