var calculate = document.querySelector('button[name="Calculate"]')
calculate.addEventListener('click', () => {
    var total_req = calculateReq()
    var total_des = calculateDesign()
    var total_cod = calculateCoding()

    // display total defects introduced 
    var total = document.getElementById('total')    
    total.innerText = parseFloat(total_req + total_des + total_cod)

    // calculate for  Defect Removal Model
    calculateDResDes(total_des)
    calculateDResCod(total_cod)
})

var DRreqCalculate = document.getElementsByName('Calculate')[1]
DRreqCalculate.addEventListener('click', () => {
    var total_req = calculateReq()
    var Cj = document.getElementById('req-cj').value
    calculateDResReq(total_req,Cj)
})

var DRreqCalculate = document.getElementsByName('Calculate')[2]
DRreqCalculate.addEventListener('click', () => {
    var total_req = calculateReq()
    var Cj = document.getElementById('des-cj').value
    calculateDResDes(total_req,Cj)
})


var DRreqCalculate = document.getElementsByName('Calculate')[3]
DRreqCalculate.addEventListener('click', () => {
    var total_req = calculateReq()
    var Cj = document.getElementById('cod-cj').value
    calculateDResCod(total_req,Cj)
})


function calculateReq(){
    var ACAP =  parseFloat(document.querySelector('input[name="req-acap"]:checked').value)
    var PCAP =  parseFloat(document.querySelector('input[name="req-pcap"]:checked').value)
    var AEXP =  parseFloat(document.querySelector('input[name="req-aexp"]:checked').value)
    var PEXP =  parseFloat(document.querySelector('input[name="req-pexp"]:checked').value)
    var LTEX =  parseFloat(document.querySelector('input[name="req-ltex"]:checked').value)
    var PCON =  parseFloat(document.querySelector('input[name="req-pcon"]:checked').value)
    var TOOL =  parseFloat(document.querySelector('input[name="req-tool"]:checked').value)
    var SITE =  parseFloat(document.querySelector('input[name="req-site"]:checked').value)
    var SCED =  parseFloat(document.querySelector('input[name="req-sced"]:checked').value)
    var TIME =  parseFloat(document.querySelector('input[name="req-time"]:checked').value)
    var STOR =  parseFloat(document.querySelector('input[name="req-stor"]:checked').value)
    var PVOL =  parseFloat(document.querySelector('input[name="req-pvol"]:checked').value)
    var RELY =  parseFloat(document.querySelector('input[name="req-rely"]:checked').value)
    var DATA =  parseFloat(document.querySelector('input[name="req-data"]:checked').value)
    var RUSE =  parseFloat(document.querySelector('input[name="req-ruse"]:checked').value)
    var DOCU =  parseFloat(document.querySelector('input[name="req-docu"]:checked').value)
    var CPLX =  parseFloat(document.querySelector('input[name="req-cplx"]:checked').value)
    var PREC =  parseFloat(document.querySelector('input[name="req-prec"]:checked').value)
    var TEAM =  parseFloat(document.querySelector('input[name="req-team"]:checked').value)
    var RESL =  parseFloat(document.querySelector('input[name="req-resl"]:checked').value)
    var PMAT =  parseFloat(document.querySelector('input[name="req-pmat"]:checked').value)
    var KLOC =  document.getElementById('kloc').value
  
    var TotalDireq = (ACAP) * (PCAP) * (AEXP) * (PEXP) * (LTEX) * (PCON) * (TOOL) * (SITE) * (SCED) * (TIME) * (STOR) * (PVOL)
                    * (RELY) * (DATA) * (RUSE) * (DOCU) * (CPLX) * (PREC) * (TEAM) * (RESL) * (PMAT)

    var A = document.getElementById('req-A').value
    var B = document.getElementById('req-B').value

    var Sum1 = A * (KLOC)**B * TotalDireq
    console.log('DI req : ' + Sum1)
    document.getElementById('req-result').value = Sum1.toFixed(2)
    return Sum1
}

function calculateDesign()
{
    var ACAP2 =  parseFloat(document.querySelector('input[name="des-acap"]:checked').value)
    var PCAP2 =  parseFloat(document.querySelector('input[name="des-pcap"]:checked').value)
    var AEXP2 =  parseFloat(document.querySelector('input[name="des-aexp"]:checked').value)
    var PEXP2 =  parseFloat(document.querySelector('input[name="des-pexp"]:checked').value)
    var LTEX2 =  parseFloat(document.querySelector('input[name="des-ltex"]:checked').value)
    var PCON2 =  parseFloat(document.querySelector('input[name="des-pcon"]:checked').value)
    var TOOL2 =  parseFloat(document.querySelector('input[name="des-tool"]:checked').value)
    var SITE2 =  parseFloat(document.querySelector('input[name="des-site"]:checked').value)
    var SCED2 =  parseFloat(document.querySelector('input[name="des-sced"]:checked').value)
    var TIME2 =  parseFloat(document.querySelector('input[name="des-time"]:checked').value)
    var STOR2 =  parseFloat(document.querySelector('input[name="des-stor"]:checked').value)
    var PVOL2 =  parseFloat(document.querySelector('input[name="des-pvol"]:checked').value)
    var RELY2 =  parseFloat(document.querySelector('input[name="des-rely"]:checked').value)
    var DATA2 =  parseFloat(document.querySelector('input[name="des-data"]:checked').value)
    var RUSE2 =  parseFloat(document.querySelector('input[name="des-ruse"]:checked').value)
    var DOCU2 =  parseFloat(document.querySelector('input[name="des-docu"]:checked').value)
    var CPLX2 =  parseFloat(document.querySelector('input[name="des-cplx"]:checked').value)
    var PREC2 =  parseFloat(document.querySelector('input[name="des-prec"]:checked').value)
    var TEAM2 =  parseFloat(document.querySelector('input[name="des-team"]:checked').value)
    var RESL2 =  parseFloat(document.querySelector('input[name="des-resl"]:checked').value)
    var PMAT2 =  parseFloat(document.querySelector('input[name="des-pmat"]:checked').value)
    var KLOC =  document.getElementById('kloc').value
 
    var TotalDireq = (ACAP2) * (PCAP2) * (AEXP2) * (PEXP2) * (LTEX2) * (PCON2) * (TOOL2) * (SITE2) * (SCED2) * (TIME2) * (STOR2) * (PVOL2)
    * (RELY2) * (DATA2) * (RUSE2) * (DOCU2) * (CPLX2) * (PREC2) * (TEAM2) * (RESL2) * (PMAT2)

    var A = document.getElementById('des-A').value
    var B = document.getElementById('des-B').value
    
    var Sum2 = A * (KLOC)**B * TotalDireq
    console.log('DI Design : ' + Sum2)
    document.getElementById('des-result').value = Sum2.toFixed(2)
    return Sum2
}

function calculateCoding()  {
    var A = 2.5
    var kloc = parseFloat(document.getElementById('kloc').value)

    var ACAP = parseFloat(document.querySelector('input[name="cod-acap"]:checked').value)
    var PCAP = parseFloat(document.querySelector('input[name="cod-pcap"]:checked').value)
    var AEXP = parseFloat(document.querySelector('input[name="cod-aexp"]:checked').value)
    var PEXP = parseFloat(document.querySelector('input[name="cod-pexp"]:checked').value)
    var LTEX = parseFloat(document.querySelector('input[name="cod-ltex"]:checked').value)
    var PCON = parseFloat(document.querySelector('input[name="cod-pcon"]:checked').value)
    var TOOL = parseFloat(document.querySelector('input[name="cod-tool"]:checked').value)
    var SITE = parseFloat(document.querySelector('input[name="cod-site"]:checked').value)
    var SCED = parseFloat(document.querySelector('input[name="cod-sced"]:checked').value)
    var TIME = parseFloat(document.querySelector('input[name="cod-time"]:checked').value)
    var STOR = parseFloat(document.querySelector('input[name="cod-stor"]:checked').value)
    var PVOL = parseFloat(document.querySelector('input[name="cod-pvol"]:checked').value)
    var RELY = parseFloat(document.querySelector('input[name="cod-rely"]:checked').value)
    var DATA = parseFloat(document.querySelector('input[name="cod-data"]:checked').value)
    var RUSE = parseFloat(document.querySelector('input[name="cod-ruse"]:checked').value)
    var DOCU = parseFloat(document.querySelector('input[name="cod-docu"]:checked').value)
    var CPLX = parseFloat(document.querySelector('input[name="cod-cplx"]:checked').value)
    var PREC = parseFloat(document.querySelector('input[name="cod-prec"]:checked').value)
    var TEAM = parseFloat(document.querySelector('input[name="cod-team"]:checked').value)
    var RESL = parseFloat(document.querySelector('input[name="cod-resl"]:checked').value)
    var PMAT = parseFloat(document.querySelector('input[name="cod-pmat"]:checked').value)

    var QAF = ( ACAP) * ( PCAP) * ( AEXP) * ( PEXP) * ( LTEX) * ( PCON) *
            ( TOOL) * ( SITE) * ( SCED) * ( TIME) * ( STOR) * ( PVOL) *
            ( RELY) * ( DATA) * ( RUSE) * ( DOCU) * ( CPLX) * ( PREC) *
            ( TEAM) * ( RESL) * ( PMAT)

    var A = document.getElementById('req-A').value
    var B = document.getElementById('req-B').value
    var DIcode = parseFloat((A * ((kloc) ** B) * QAF).toFixed(2))
    console.log('DI coding : ' + DIcode)
    document.querySelector('input[name="cod-result"]').value = DIcode.toFixed(2)
    return DIcode
}

function calculateDResReq(DIestimated, Cj) {
    var Cj = parseFloat(Cj)

    // Get level of each profile ( total 3 profiles)
    var AUTO = parseFloat(document.querySelector('input[name="req-auto-val"]:checked').value)
    var REVIEW = parseFloat(document.querySelector('input[name="req-revi-val"]:checked').value)
    var TOOL = parseFloat(document.querySelector('input[name="req-tool-val"]:checked').value)
    // console.log('Auto' + AUTO + 'Review' + REVIEW + 'Tool' + TOOL)

    // Calculate the DRes for artifact type requirement
    var multiplicative = (1 - AUTO) * (1 - REVIEW) * (1 - TOOL)
    var result = (Cj * DIestimated * multiplicative)

    console.log('DI requirement' + result)
    // print result to id => total-req
    document.getElementById('total-req').innerText = result.toFixed(2)
}

function calculateDResDes(DIestimated, Cj) {
    var Cj = parseFloat(Cj)
    
    // Get level of each profile ( total 3 profiles)
    var AUTO = parseFloat(document.querySelector('input[name="des-auto-val"]:checked').value)
    var REVIEW = parseFloat(document.querySelector('input[name="des-revi-val"]:checked').value)
    var TOOL = parseFloat(document.querySelector('input[name="des-tool-val"]:checked').value)
    // console.log('Auto' + AUTO + 'Review' + REVIEW + 'Tool' + TOOL)

    // Calculate the DRes for artifact type desgin
    var multiplicative = (1 - AUTO) * (1 - REVIEW) * (1 - TOOL)
    var result = (Cj * DIestimated * multiplicative)

    console.log(result)
    // print result to id => total-des
    document.getElementById('total-des').innerText = result.toFixed(2)
}

function calculateDResCod(DIestimated, Cj) {
    var Cj = parseFloat(Cj)
    // Get level of each profile ( total 3 profiles)
    var AUTO = parseFloat(document.querySelector('input[name="cod-auto-val"]:checked').value)
    var REVIEW = parseFloat(document.querySelector('input[name="cod-revi-val"]:checked').value)
    var TOOL = parseFloat(document.querySelector('input[name="cod-tool-val"]:checked').value)
    // console.log('Auto' + AUTO + 'Review' + REVIEW + 'Tool' + TOOL)

    // Calculate the DRes for artifact type coding
    var multiplicative = (1 - AUTO) * (1 - REVIEW) * (1 - TOOL)
    console.log(Cj)
    var result = (Cj * DIestimated * multiplicative)

    // print result to id => total-cod
    document.getElementById('total-cod').innerText = result.toFixed(2)
}