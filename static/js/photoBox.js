function PhotoBox(arr, id) {
    var style = document.getElementsByTagName('style')[0].innerHTML;
    var containerStyle = '#' + id + '{width:1050px;background: #fff;box-sizing: border-box;padding: 20px;overflow: hidden;}' + '#' + id + ' ' + 'div' + '{float: left;}'
    this.style += containerStyle;
    if (style.indexOf(this.style) < 0) {
        document.getElementsByTagName('style')[0].innerHTML += this.style;
    }
    this.oContainer = document.getElementById(id);    
    if (arr.length === 3) {
        this.appendImg(arr, 'is-have-three')
    }
    else if (arr.length === 4) {
        this.appendImg(arr, 'is-have-four')
    }
    else if (arr.length === 5) {
        this.appendImg(arr, 'is-have-five')
    }
    else if (arr.length === 6) {
        var lArr = arr.splice(0, 3);
        var rArr = arr

        this.appendImg(lArr, 'is-have-six')
        this.appendImg(rArr, 'is-have-six')
    }
    else if (arr.length === 7) {
        this.appendImg(arr, 'is-have-seven')
    }
    else if (arr.length === 8) {
        this.appendImg(arr, 'is-have-eight')
    }
    else if (arr.length === 9) {
        this.appendImg(arr, 'is-have-night')
    }
    else if (arr.length === 10) {
        var tArr = arr.splice(0, 5);
        var bArr = arr;
        var blArr = bArr.splice(0, 2);
        var brArr = bArr;
        this.appendImg(tArr, 'is-have-ten');
        var bl = document.createElement('div');
        for (var i = 0; i < blArr.length; i++) {
            var oItem = document.createElement('div');
            oItem.style.background = 'url(' + blArr[i] + ')' + 'no-repeat';
            oItem.style.backgroundSize = '100% 100%';
            oItem.style.msoBackgroundSource = '100% 100%';
            oItem.style.webkitBackgroundSize = '100% 100%';
            oItem.style.oBackgroundSize = '100% 100%';
            oItem.className = 'is-have-tens'
            bl.appendChild(oItem)
        }
        bl.style.float = 'left';
        this.oContainer.appendChild(bl);
        this.appendImg(brArr, 'is-have-ten');
    }
}

photoBox.prototype.appendImg = function (arr, className) {
    for (var i = 0; i < arr.length; i++) {
        var oItem = document.createElement('div');
        oItem.style.background = 'url(' + arr[i] + ')' + 'no-repeat';
        oItem.style.backgroundSize = '100% 100%';
        oItem.style.msoBackgroundSource = '100% 100%';
        oItem.style.webkitBackgroundSize = '100% 100%';
        oItem.style.oBackgroundSize = '100% 100%';
        oItem.className = className;
        // oItem.classList.add(className);ie9
        this.oContainer.appendChild(oItem);
    }
}
photoBox.prototype.parentBox = function (arr, className) {
    var oParent = document.createElement('div');
    for (var i = 0; i < arr.length; i++) {
        var oChild = document.createElement('div');
    }
}
photoBox.prototype.style = '.is-have-three:nth-child(1){width:660px;height:450px}.is-have-three:nth-child(2){width:330px;height:215px;margin-left:20px;margin-bottom:20px}.is-have-three:nth-child(3){width:330px;height:215px;margin-left:20px}.is-have-four:nth-child(1){width:1010px;height:570px;margin-bottom:20px}.is-have-four:nth-child(2){width:323px;height:200px}.is-have-four:nth-child(3){width:323px;height:200px;margin-left:20px}.is-have-four:nth-child(4){width:323px;height:200px;margin-left:20px}.is-have-five:nth-child(1),.is-have-six:nth-child(1){width:660px;height:450px}.is-have-five:nth-child(2),.is-have-six:nth-child(2){width:330px;height:215px;margin-left:20px;margin-bottom:20px}.is-have-five:nth-child(3),.is-have-six:nth-child(3){width:330px;height:215px;margin-left:20px;margin-bottom:20px}.is-have-five:nth-child(4){width:495px;height:324px}.is-have-five:nth-child(5){width:495px;height:324px;margin-left:20px}.is-have-six:nth-child(4){width:660px;height:450px;margin-left:20px;float:right !important}.is-have-six:nth-child(5){width:330px;height:215px;margin-bottom:20px;float:right !important}.is-have-six:nth-child(6){width:330px;height:215px;float:right !important}.is-have-seven:nth-child(1){width:660px;height:450px;margin-bottom:20px}.is-have-seven:nth-child(2){width:330px;height:215px;margin-left:20px;margin-bottom:20px}.is-have-seven:nth-child(3){width:330px;height:215px;margin-left:20px}.is-have-seven:nth-child(4){width:495px;height:295px;margin-bottom:20px}.is-have-seven{width:495px;height:295px}.is-have-seven:nth-child(5){margin-bottom:20px;margin-left:20px}.is-have-seven:nth-child(7){margin-left:20px}.is-have-eight:nth-child(1){width:485px;height:215px}.is-have-eight:nth-child(2){width:242px;height:97px;margin-left:20px;margin-bottom:21px}.is-have-eight:nth-child(3){width:242px;height:97px;margin-left:20px;margin-bottom:21px}.is-have-eight:nth-child(4){width:242px;height:97px;margin-left:20px}.is-have-eight:nth-child(5){width:242px;height:97px;margin-left:20px}.is-have-eight:nth-child(6){width:323px;height:192px;margin-top:20px}.is-have-eight:nth-child(7){width:323px;height:192px;margin-top:20px;margin-left:20px}.is-have-eight:nth-child(8){width:323px;height:192px;margin-top:20px;margin-left:20px}.is-have-night:nth-child(1){width:660px;height:450px;margin-right:20px;margin-bottom:20px}.is-have-night:nth-child(2){width:330px;height:215px;margin-bottom:20px}.is-have-night:nth-child(3){width:330px;height:215px}.is-have-night:nth-child(4){width:660px;height:450px;margin-left:20px;float:right !important}.is-have-night:nth-child(5){float:right !important;width:330px;height:215px;margin-bottom:20px}.is-have-night:nth-child(6){float:right !important;width:330px;height:215px}.is-have-night:nth-child(7){width:660px;height:450px;margin-top:20px}.is-have-night:nth-child(8){margin-top:20px;margin-left:20px;width:330px;height:215px}.is-have-night:nth-child(9){margin-top:20px;margin-left:20px;width:330px;height:215px}.is-have-ten:nth-child(1){width:485px;height:215px;margin-right:20px}.is-have-ten:nth-child(2){width:242px;height:97px;margin-bottom:21px}.is-have-ten:nth-child(3){width:242px;height:97px;margin-bottom:21px;margin-left:20px}.is-have-ten:nth-child(4){width:242px;height:97px}.is-have-ten:nth-child(5){width:242px;height:97px;margin-left:20px}.is-have-tens{float:none !important;width:242px;height:97px;margin-top:20px}.is-have-ten:nth-child(7){width:485px;height:215px;margin-left:20px;margin-top:20px;margin-right:20px}.is-have-ten:nth-child(8){width:242px;height:97px;margin-top:20px}.is-have-ten:nth-child(9){width:242px;height:97px;margin-top:20px}'
