var input_kloc = document.getElementById('kloc')
console.log(input_kloc)
input_kloc.addEventListener('change', () => {
    calculateCoding()
})



function calculateReq()
{
    var ACAP =  document.querySelector('input[name="req-acap"]:checked').value
    var PCAP =  document.querySelector('input[name="req-pcap"]:checked').value
    var AEXP = document.querySelector('input[name="req-aexp"]:checked').value
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
}