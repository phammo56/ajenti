function ui_center(el) {
    sw = document.width;
    sh = document.height;
    e = document.getElementById(el);
    e.style.left = (sw / 2 - e.clientWidth / 2) + 'px';
    e.style.top = (sh / 2 - e.clientHeight / 2) + 'px';
}

function ui_showhide(id) {
    x = document.getElementById(id);
    if (x.style.display != 'none')
        x.style.display = 'none';
    else
        x.style.display = '';
}

function ui_show(id) {
    x = document.getElementById(id);
    x.style.display = '';
}

function ui_hide(id) {
    x = document.getElementById(id);
    x.style.display = 'none';
}

function ui_treeicon(id) {
    x = document.getElementById(id);
    if (x.src.indexOf('/dl/core/ui/tree-minus.png') < 0)
        x.src = '/dl/core/ui/tree-minus.png';
    else
        x.src = '/dl/core/ui/tree-plus.png';
}

function ui_tabswitch(pid, id) {
    p = document.getElementById(pid);
    h = document.getElementById('tabheader-' + pid + '-' + id);
    b = document.getElementById('tabbody-' + pid + '-' + id);
    for (i=0;i<p.children.length;i++)
        p.children[i].children[0].setAttribute('class', 'ui-el-tab-header');
    h.setAttribute('class', 'ui-el-tab-header-active');

    p = p.parentNode.parentNode.children[1].children[0]
    for (i=0;i<p.children.length;i++)
        p.children[i].style.display = 'none';
    b.style.display = '';
}