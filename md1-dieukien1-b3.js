let a = prompt('Type a number', 0);
switch ((a > 0) ? 1 : (a < 0) ? -1 : 0) {
    case 1:
        alert('1')
        break;
    case 0:
        alert('0')
        break;
    case -1:
        alert('-1')
}