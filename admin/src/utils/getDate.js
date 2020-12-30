/**
 * @file 得到当前时间 （yyyy-mm-dd hh:mm:ss）
 * @author malingna
 */
export default function () {

    let _year = new Date().getFullYear()
    let _month = new Date().getMonth() + 1
    let _day = new Date().getDate()
    let _hour = new Date().getHours()
    let _minute = new Date().getMinutes()
    let _seconds = new Date().getSeconds()

    if (_month < 10) {
        _month = '0' + _month
    }

    if (_day < 10) {
        _day = '0' + _day
    }

    if (_hour < 10) {
        _hour = '0' + _hour
    }

    if (_minute < 10) {
        _minute = '0' + _minute
    }

    if (_seconds < 10) {
        _seconds = '0' + _seconds
    }

    return '' + _year + '-' + _month + '-' + _day + ' ' + _hour + ':'+ _minute + ':' + _seconds
}