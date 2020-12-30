/**
 * @file 按照发布时间生成8位数字(月日+时分)
 * @author malingna
 */
export default function () {

    let _month = new Date().getMonth() + 1
    let _day = new Date().getDate()
    let _hour = new Date().getHours()
    let _minute = new Date().getMinutes()

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

    return '' + _month + _day + _hour + _minute
}