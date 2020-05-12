var input_kloc = document.getElementById('kloc')
console.log(input_kloc)
input_kloc.addEventListener('change', () => {
    var total_req = calculateReq()
    var total_des = calculateDesign()
    var total_cod = calculateCoding()

    var total = document.getElementById('total')
    total.innerHTML = total_req + total_des + total_cod
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
    var DI = 10
    var TotalDireq = (DI-ACAP) * (DI-PCAP) * (DI-AEXP) * (DI-PEXP) * (DI-LTEX) * (DI-PCON) * (DI-TOOL) * (DI-SITE) * (DI-SCED) * (DI-TIME) * (DI-STOR) * (DI-PVOL)
                    * (DI-RELY) * (DI-DATA) * (DI-RUSE) * (DI-DOCU) * (DI-CPLX) * (DI-PREC) * (DI-TEAM) * (DI-RESL) * (DI-PMAT)
    var A = 2.5
    var B = 1
    var Sum1 = A * (KLOC)**B * TotalDireq
    console.log(Sum1)
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
    var DI = 20
    var TotalDireq = (DI-ACAP2) * (DI-PCAP2) * (DI-AEXP2) * (DI-PEXP2) * (DI-LTEX2) * (DI-PCON2) * (DI-TOOL2) * (DI-SITE2) * (DI-SCED2) * (DI-TIME2) * (DI-STOR2) * (DI-PVOL2)
    * (DI-RELY2) * (DI-DATA2) * (DI-RUSE2) * (DI-DOCU2) * (DI-CPLX2) * (DI-PREC2) * (DI-TEAM2) * (DI-RESL2) * (DI-PMAT2)
    var A2 = 2.5
    var B2 = 1
    var Sum2 = A2 * (KLOC)**B2 * TotalDireq
    console.log(Sum2)
    document.getElementById('des-result').value = Sum2.toFixed(2)
    return Sum2
}

function calculateCoding()  {
    var A = 2.5
    var DI = 30
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

    var QAF = (DI - ACAP) * (DI - PCAP) * (DI - AEXP) * (DI - PEXP) * (DI - LTEX) * (DI - PCON) *
            (DI - TOOL) * (DI - SITE) * (DI - SCED) * (DI - TIME) * (DI - STOR) * (DI - PVOL) *
            (DI - RELY) * (DI - DATA) * (DI - RUSE) * (DI - DOCU) * (DI - CPLX) * (DI - PREC) *
            (DI - TEAM) * (DI - RESL) * (DI - PMAT)

    console.log(QAF)
    var DIcode = parseFloat((A * ((kloc) ** 1) * QAF).toFixed(2))
    document.querySelector('input[name="cod-result"]').value = DIcode
    return DIcode
}
