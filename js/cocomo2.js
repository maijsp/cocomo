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

/**
 * @returns B 
 * This function is calculate B - Scaling factor for Early-Design
 */
function calculateBearly() {
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
    var B = 1.01+(0.01 *(sum));
    console.log(B)
    return B;
}

/**
 * @returns B 
 * This function is calculate B - Scaling factor for Early-Design
 */
function calculateSizeEarly() {
    var sizeref = document.getElementsByName('early-size')
    console.log(sizeref)
    
    // Calculate AAF
    var DM = sizeref[5].value
    var CM = sizeref[8].value
    var IM = sizeref[11].value
    var AAF = (0.4*DM)+(0.3*CM)+(0.3*IM) // formula
    console.log("AAF " +AAF)

    // Calculate AAM
    var AA = sizeref[7].value
    var SU = sizeref[10].value
    var UNFM = sizeref[2].value
    var AAM;
    if(AAF > 0.05) {
        AAM = (AA + (AAF*(1+(0.02 * SU * UNFM))))/100 // formula
    }
    else {
        AAM = (AA + AAF + (SU * UNFM))/100 // formula
    }
    console.log("AAM "+ AAM)

    // Calculate Size
    var KNSLOC = sizeref[1].value
    var KASLOC = sizeref[4].value
    var AJ =  sizeref[9].value
    var Size = KNSLOC + (KASLOC*((100-AJ)/100)*AAM) // formula
    console.log("SIze " + Size)

    // Calculate SizePram
    var BRAK = sizeref[12].value
    var SizePram = Size*(1+(BRAK)/100) // formula
    console.log("Post - SizePram : " + SizePram)

    // return SizePram
    return SizePram
}

/**
 * This function is used to calculate Effort for Post-Architecture
 */
function calculateEarlyDesign() {
    var A = 2.5
    var B = calculateBearly()
    var Size = calculateSizeEarly()

    var sizeref = document.getElementsByName('early-size')
    var ASLOC = sizeref[0].value
    var ATPROD = sizeref[6].value
    var AT = sizeref[3].value
    var PMm = ((ASLOC*(AT/100))/ATPROD)

    var RCPX = parseFloat(document.getElementById('RCPX').value)
    var RUSE = parseFloat(document.getElementById('RUSE').value)
    var PDIF = parseFloat(document.getElementById('PDIF').value)
    var PERS = parseFloat(document.getElementById('PERS').value)
    var PREX = parseFloat(document.getElementById('PREX').value)
    var FCIL = parseFloat(document.getElementById('FCIL').value)
    var SCED = parseFloat(document.getElementById('SCED').value)

    var EM = RCPX * RUSE * PDIF * PERS * PREX * FCIL * SCED
    var PM = (A * (Size ** B) * EM) + PMm
    console.log('Effort : ' + PM)

    $('#result-early').html('');
    $('#result-early').append('<div class="shadow-drop-center card border-success mb-3 style="max-width: 18rem;">'+
    '<div class="card-header">Result'+
    '<div class="card-body text-success">'+
        '<h5 class="card-title">Effort : ' + PM +
    '   </h5></div></div></div>')
}


/**
 * @returns B 
 * This function is calculate B - Scaling factor for Post-Architecture
 */
function calculateBPost() {
    var firstfact = document.getElementById('PREC1')
    var secondfact = document.getElementById('DFEX1') 
    var thirdfact = document.getElementById('ARCH1')
    var forthfact = document.getElementById('TEAM1')
    var fifthfact = document.getElementById('PRMY1')
    var one = firstfact.options[firstfact.selectedIndex].value
    var second = secondfact.options[secondfact.selectedIndex].value
    var three = thirdfact.options[thirdfact.selectedIndex].value
    var forth = forthfact.options[forthfact.selectedIndex].value
    var fifth = fifthfact.options[fifthfact.selectedIndex].value
    var sum = 0
    sum = parseFloat(one) + parseFloat(second) + parseFloat(three) + parseFloat(forth) + parseFloat(fifth)
    console.log(sum)
    var B = 1.01+(0.01 *(sum))
    console.log(B)
    return B
}

/**
 * @return SizePram
 * This function is to calculate the Size for Post-Architecture
 */
function calculateSizePost() {
    var sizeref = document.getElementsByName('post-size')
    console.log(sizeref)
    
    // Calculate AAF
    var DM = sizeref[5].value
    var CM = sizeref[8].value
    var IM = sizeref[11].value
    var AAF = (0.4*DM)+(0.3*CM)+(0.3*IM) // formula
    console.log("AAF " +AAF)

    // Calculate AAM
    var AA = sizeref[7].value
    var SU = sizeref[10].value
    var UNFM = sizeref[2].value
    var AAM;
    if(AAF > 0.05) {
        AAM = (AA + (AAF*(1+(0.02 * SU * UNFM))))/100 // formula
    }
    else {
        AAM = (AA + AAF + (SU * UNFM))/100 // formula
    }
    console.log("AAM "+ AAM)

    // Calculate Size
    var KNSLOC = sizeref[1].value
    var KASLOC = sizeref[4].value
    var AJ =  sizeref[9].value
    var Size = KNSLOC + (KASLOC*((100-AJ)/100)*AAM) // formula
    console.log("SIze " + Size)

    // Calculate SizePram
    var BRAK = sizeref[12].value
    var SizePram = Size*(1+(BRAK)/100) // formula
    console.log("Post - SizePram : " + SizePram)

    // return SizePram
    return SizePram
}

/**
 * This function is used to calculate Effort for Post-Architecture
 */
function calculatePost() {
    
    var A = 2.5
    var B = calculateBPost()
    var size = calculateSizePost()

    var sizeref = document.getElementsByName('post-size')
    var ASLOC = sizeref[0].value
    var ATPROD = sizeref[6].value
    var AT = sizeref[3].value
    var PMm = ((ASLOC*(AT/100))/ATPROD)

    var RELY = parseFloat(document.getElementById('RELY').value)
    var DATA = parseFloat(document.getElementById('DATA').value)
    var CPLX = parseFloat(document.getElementById('CPLX').value)
    var RUSE1 = parseFloat(document.getElementById('RUSE1').value)
    var DOCU = parseFloat(document.getElementById('DOCU').value)
    var TIME = parseFloat(document.getElementById('TIME').value)
    var STOR = parseFloat(document.getElementById('STOR').value)
    var PVOL = parseFloat(document.getElementById('PVOL').value)
    var ACAP = parseFloat(document.getElementById('ACAP').value)
    var PCAP = parseFloat(document.getElementById('PCAP').value)
    var PCON = parseFloat(document.getElementById('PCON').value)
    var AXEP = parseFloat(document.getElementById('AXEP').value)
    var PEXP = parseFloat(document.getElementById('PEXP').value)
    var LTEX = parseFloat(document.getElementById('LTEX').value)
    var TOOL = parseFloat(document.getElementById('TOOL').value)
    var SITE = parseFloat(document.getElementById('SITE').value)
    var SCED = parseFloat(document.getElementById('SCED1').value)


    // Calculate 17 Effort Multiplieres
    var EM1 = RELY * DATA * CPLX * RUSE1 * DOCU * TIME * STOR * PVOL * ACAP * PCAP * PCON * AXEP 
             * PEXP * LTEX * TOOL * SITE * SCED
    
    var PM = (A * (size ** B) * EM1) + PMm
    console.log('Effort : ' + PM)
    
    $('#result-post').html('');
    $('#result-post').append('<div class="shadow-drop-center card border-success mb-3 style="max-width: 18rem;">'+
    '<div class="card-header">Result'+
    '<div class="card-body text-success">'+
        '<h5 class="card-title">Effort : ' + PM +
    '   </h5></div></div></div>')
}

