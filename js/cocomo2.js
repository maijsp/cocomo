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