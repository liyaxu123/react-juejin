export const doCustomTimes = (times, callback) => {
    let i = -1
    while (++i < times) {
        callback(i)
    }
}

// 获取光标位置
export const getCursortPosition = e => {
    var eleP = e.target.parentNode; //获取父级元素
    var pos = 0;
    if (e.target.nodeName == "DIV") {
        pos = getDivPosition(e.target);
    } else {
        pos = getPosition(e.target);
    }

    var spanEle = (eleP.childNodes)[7];
    spanEle.innerText = pos;
}

// 可编辑div获取光标位置
export const getDivPosition = element => {
    var caretOffset = 0;
    var doc = element.ownerDocument || element.document;
    var win = doc.defaultView || doc.parentWindow;
    var sel;
    if (typeof win.getSelection != "undefined") {//谷歌、火狐
        sel = win.getSelection();
        if (sel.rangeCount > 0) {//选中的区域
            var range = win.getSelection().getRangeAt(0);
            var preCaretRange = range.cloneRange();//克隆一个选中区域
            preCaretRange.selectNodeContents(element);//设置选中区域的节点内容为当前节点
            preCaretRange.setEnd(range.endContainer, range.endOffset);  //重置选中区域的结束位置
            caretOffset = preCaretRange.toString().length;
        }
    } else if ((sel = doc.selection) && sel.type != "Control") {//IE
        var textRange = sel.createRange();
        var preCaretTextRange = doc.body.createTextRange();
        preCaretTextRange.moveToElementText(element);
        preCaretTextRange.setEndPoint("EndToEnd", textRange);
        caretOffset = preCaretTextRange.text.length;
    }
    return caretOffset;
}

// 输入框获取光标位置
export const getPosition = element => {
    let cursorPos = 0;
    if (document.selection) {//IE
        var selectRange = document.selection.createRange();
        selectRange.moveStart('character', -element.value.length);
        cursorPos = selectRange.text.length;
    } else if (element.selectionStart || element.selectionStart == '0') {
        cursorPos = element.selectionStart;
    }
    return cursorPos;
}