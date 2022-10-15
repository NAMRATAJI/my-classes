function switchs (param) {
    let month
    switch(param) {
        case 1:
        month ='jan'
        break;
        case 2:
            month ='feb'
            break;
        case 3:
            month ='mar'
            break;
        case 4:
            month ='april'
            break;
        case 5:
            month ='may'
            break;
        case 6:
            month = 'june'
            break;
        case 7:
            month = 'july'
            break;
        case 8:
            month = 'aug'
            break;
        case 9:
            month = 'sep'
            break;
        case 10:
            month = 'oct'
            break;
        case 11:
            month = 'nov'
            break;
        case 12:
            month = 'dec'
            break;
        default:
            month = 'invalid'                                        
    }
    console.log(month)
}
switchs(13)